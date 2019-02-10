import { SET_CURRENT_PLAYER, ADD_SONG_TO_PLAYLIST } from "../actions/player";

const initialState = {
    howlPlayer: null,
    playlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYER:
            return {
                ...state,
                howlPlayer: action.paylod
            };
        case ADD_SONG_TO_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, action.paylod]
            }
        default:
            return state;
    }
}