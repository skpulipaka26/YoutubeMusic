import { SET_EXTRACTOR_METADATA } from '../actions/youtube-extractor';

const initialState = {
    metadata: null,
    formats: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_EXTRACTOR_METADATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}