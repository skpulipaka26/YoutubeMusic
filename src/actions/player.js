import { Howl } from 'howler';
import { extractYoutubeVideo } from '../actions/youtube-extractor';

export const SET_CURRENT_PLAYING = 'SET_CURRENT_PLAYING';
export const UPDATE_CURRENT_PLAYING = 'UPDATE_CURRENT_PLAYING';
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
            const reqFormats = extractorData.formats.reverse();
            if (!reqFormats || !reqFormats.length) {
                return;
            }
            const howl = new Howl({
                src: reqFormats.map(format => format.url),
                format: reqFormats.map(format => format.mimeType.split(';')[0].split('/')[1]),
                html5: true
            });
            const reqObj = {
                videoId: metadata.videoId,
                metadata: {},
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
            if (updatedPlayer.videoId === song.videoId) {
                updatedPlayer.howl.playing() ? updatedPlayer.howl.pause() : updatedPlayer.howl.play();
                return updatedPlayer;
            }
            if (updatedPlayer.howl.playing()) {
                updatedPlayer.howl.stop();
            }
            return updatedPlayer;
        });
        updatedPlaylist.forEach(player => {
            // setup event listiners for the new items in the playlist
            if (player.howl.state() !== 'loaded') {
                updateCurrentPlaying('play', player.howl, dispatch, getState);
                updateCurrentPlaying('pause', player.howl, dispatch, getState);
                updateCurrentPlaying('stop', player.howl, dispatch, getState);
            }
        });

    }
}

function updateCurrentPlaying(event, player, dispatch, getState) {
    player.on(event, () => {
        switch (event) {
            case 'play': {
                const currPlaying = getState().player.currentPlaying;
                const timer = setIntervalAndExecute(() => {
                    const seek = player.seek();
                    if (seek) {
                        dispatch({
                            type: UPDATE_CURRENT_PLAYING,
                            payload: {
                                seek: player.seek(),
                                timer: timer
                            }
                        });
                    }
                }, 1000);
                // if the song was played before
                if (currPlaying.seek === 0) {
                    dispatch({
                        type: SET_CURRENT_PLAYING,
                        payload: {
                            playing: true,
                            timer: timer,
                            player: player,
                            seek: 0
                        }
                    });
                }
                break;
            }
            case 'pause': {
                const currPlaying = getState().player.currentPlaying;
                const timer = currPlaying.timer;
                clearTimeout(timer);
                dispatch({
                    type: UPDATE_CURRENT_PLAYING,
                    payload: {
                        playing: false
                    }
                });
                break;
            }
            case 'stop': {
                dispatch({
                    type: SET_CURRENT_PLAYING,
                    payload: {
                        playing: false,
                        timer: null,
                        player: null,
                        seek: 0
                    }
                });
                break;
            }
            default:
                return;
        }

    });
}

function setIntervalAndExecute(callback, t) {
    callback();
    return (setInterval(callback, t));
}