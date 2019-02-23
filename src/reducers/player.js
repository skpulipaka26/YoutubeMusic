import { ADD_SONG_TO_PLAYLIST, SET_PLAYLIST, SET_CURRENT_PLAYING, UPDATE_CURRENT_PLAYING } from '../actions/player';

const initialState = {
    currentPlaying: {
        videoId: null,
        seek: 0,
        player: null,
        timer: null,
        playing: false
    },
    playlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYLIST:
            return {
                ...state,
                playlist: action.payload
            };
        case ADD_SONG_TO_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, action.payload]
            }
        case SET_CURRENT_PLAYING:
            return {
                ...state,
                currentPlaying: action.payload
            }
        case UPDATE_CURRENT_PLAYING: {
            return {
                ...state,
                currentPlaying: {
                    ...state.currentPlaying,
                    ...action.payload
                }
            }
        }
        default:
            return state;
    }
}