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
                howl: howl
            };
            dispatch({
                type: ADD_SONG_TO_PLAYLIST,
                payload: reqObj
            });
        };
        const playlist = getState().player.playlist;
        playlist.forEach(player => {
            if (player.howl.state() === 'loading') {
                const events = ['play', 'pause', 'stop', 'end', 'loaderror', 'playerror'];
                events.forEach(event => dispatch(setupPlayerEvents(event, player.howl)));
            }
        });
        const reqSongFromPlaylist = playlist.find(player => player.videoId === song.videoId);
        return reqSongFromPlaylist;
    }
}

function setupPlayerEvents(event, player) {
    return (dispatch, getState) => {
        player.on(event, () => {
            switch (event) {
                case 'play': {
                    const timer = setIntervalAndExecute(() => {
                        const seek = player.seek();
                        dispatch({
                            type: UPDATE_CURRENT_PLAYING,
                            payload: {
                                seek: seek,
                                timer: timer,
                                playing: true,
                                player: player
                            }
                        });
                    }, 1000);
                    break;
                }
                case 'pause': {
                    const currPlaying = getState().player.currentPlaying;
                    const timer = currPlaying.timer;
                    clearTimeout(timer);
                    dispatch({
                        type: UPDATE_CURRENT_PLAYING,
                        payload: {
                            playing: false,
                            player: player,
                            seek: player.seek(),
                            timer: timer
                        }
                    });
                    break;
                }
                case 'stop':
                case 'end':
                case 'loaderror':
                case 'playerror': {
                    resetPlayer(dispatch, getState);
                    break;
                }
                default:
                    return;
            }

        });
    }
}

function resetPlayer(dispatch, getState) {
    const currPlaying = getState().player.currentPlaying;
    const timer = currPlaying.timer;
    if (timer) {
        clearTimeout(timer);
    }
    dispatch({
        type: UPDATE_CURRENT_PLAYING,
        payload: {
            playing: false,
            timer: null,
            player: null,
            seek: 0
        }
    });
}

function setIntervalAndExecute(callback, t) {
    callback();
    return (setInterval(callback, t));
}