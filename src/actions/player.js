import { Howl } from 'howler';
import { extractYoutubeVideo } from '../actions/youtube-extractor';

export const SET_CURRENT_PLAYING = 'SET_CURRENT_PLAYING';
export const UPDATE_CURRENT_PLAYING = 'UPDATE_CURRENT_PLAYING';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';
export const SET_PLAYLIST = 'SET_PLAYLIST';

export const addSongToPlaylist = (song) => {
    return async (dispatch, getState) => {
        let extractorData = getState().extractor;
        if (!extractorData.metadata || song.videoId !== extractorData.metadata.videoId) {
            extractorData = await dispatch(extractYoutubeVideo(song.videoId));
        }
        const metadata = extractorData.metadata;
        const currPlaylist = getState().player.playlist;
        const currSongIndex = currPlaylist.findIndex(v => v.videoId === metadata.videoId);
        // if this is a new song
        if (currSongIndex === -1) {
            const reqFormats = extractorData.formats.reverse();
            if (!reqFormats || !reqFormats.length) {
                return;
            }
            const reqObj = {
                ...metadata,
                formats: reqFormats
            };
            dispatch({
                type: ADD_SONG_TO_PLAYLIST,
                payload: reqObj
            });
            return extractorData;
        };
        return extractorData;
    }
}

export const setupCurrentPlayingPlayer = (extractorData) => {
    return dispatch => {
        const { formats, metadata } = extractorData;
        const reqFormats = formats.reverse();
        const howl = new Howl({
            src: reqFormats.map(format => format.url),
            format: formats.map(format => format.mimeType.split(';')[0].split('/')[1]),
            html5: true
        });
        const events = ['play', 'pause', 'stop', 'end', 'loaderror', 'playerror'];
        events.forEach(event => dispatch(setupPlayerEvents(event, metadata.videoId, howl)));
        return howl;
    }
}

export function setupPlayerEvents(event, videoId, player) {
    return (dispatch, getState) => {
        player.on(event, () => {
            switch (event) {
                case 'play': {
                    const timer = setIntervalAndExecute(() => {
                        const seek = player.seek();
                        dispatch({
                            type: SET_CURRENT_PLAYING,
                            payload: {
                                videoId: videoId,
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
        type: SET_CURRENT_PLAYING,
        payload: {
            videoId: null,
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