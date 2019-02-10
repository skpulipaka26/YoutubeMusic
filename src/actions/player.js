import { Howl } from 'howler';
import { extractYoutubeVideo } from '../actions/youtube-extractor';

export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';

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
        playlist.forEach(player => {
            if (player.videoId !== song.videoId) {
                player.howl.pause();
                return;
            }
            player.howl.play();
        });
    }
}