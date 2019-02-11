import { ADD_SONG_TO_PLAYLIST, SET_PLAYLIST } from '../actions/player';

const initialState = {
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
        default:
            return state;
    }
}