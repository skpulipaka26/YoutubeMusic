import { SET_CURRENT_PLAYING_EXTRACTOR, SET_CURRENT_PLAYING_METADADA, SET_CURRENT_PLAYER } from '../actions/player';

const initialState = {
    currentPlaying: {
        metadata: null,
        extractorData: null,
        howlPlayer: null
    },
    playlist: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLAYING_EXTRACTOR:
            return {
                ...state,
                currentPlaying: {
                    ...state.currentPlaying,
                    extractorData: action.payload
                }
            };
        case SET_CURRENT_PLAYING_METADADA:
            return {
                ...state,
                currentPlaying: {
                    ...state.currentPlaying,
                    metadata: action.payload
                }
            };
        case SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlaying: {
                    ...state.currentPlaying,
                    howlPlayer: action.payload
                }
            }
        default:
            return state;
    }
}