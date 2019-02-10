import { SET_SELECTED_SONG } from '../actions/youtube-extractor';

const initialState = {
    metadata: null,
    formats: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_SONG:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}