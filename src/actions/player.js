import { Howl } from 'howler';
import { extractYoutubeVideo } from '../actions/youtube-extractor';

export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const SET_PLAYLIST = 'SET_PLAYLIST';

export const handleSongPlay = (song) => {
    return async (dispatch, getState) => {
        let extractorData = getState().extractor;
        if (!extractorData.metadata || song.videoId !== extractorData.metadata.videoId) {
            extractorData = await dispatch(extractYoutubeVideo(song.videoId));
        }
        const metadata = extractorData.metadata;
        const currPlaylist = getState().player.playlist;
        const currSongIndex = currPlaylist.findIndex(v => v.videoId === metadata.videoId);
        if (currSongIndex === -1) {
            const reqFormat = extractorData.formats.reverse()[0];
            if (!reqFormat) {
                return;
            }
            const howl = new Howl({
                src: reqFormat.url,
                html5: true
            });
            const reqObj = {
                videoId: metadata.videoId,
                howl: howl
            };
            dispatch({
                type: ADD_SONG_TO_PLAYLIST,
                payload: reqObj
            });
        };
        const playlist = getState().player.playlist;
        const updatedPlaylist = playlist.map(player => {
            const updatedPlayer = player;
            // updatedPlayer.howl.pause();
            if (updatedPlayer.videoId !== song.videoId) {
                updatedPlayer.howl.pause();
                return updatedPlayer;
            }
            updatedPlayer.howl.playing() ? updatedPlayer.howl.pause() : updatedPlayer.howl.play();
            return updatedPlayer;
        });
        updatedPlaylist.forEach(player => {
            updatePlaylistOnEvent('play', player.howl, updatedPlaylist, dispatch);
            updatePlaylistOnEvent('pause', player.howl, playlist, dispatch);
        });

    }
}

function updatePlaylistOnEvent(event, player, playlist, dispatch) {
    player.on(event, () => dispatch({
        type: SET_PLAYLIST,
        payload: playlist
    }));
}