import { SET_CURRENT_PLAYING } from '../actions/player';

const initialState = {
    currentPlaying: {
        metadata: null,
        extractorData: null
    },
    playlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYING:
            return {
                ...state,
                currentPlaying: action.payload
            }
        default:
            return state;
    }
}