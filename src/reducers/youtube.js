import { SET_VIDEOS, SET_REALTED_VIDES } from '../actions/youtube';

const initialState = {
    relatedSearches: [],
    searches: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_VIDEOS:
            return {
                ...state,
                searches: action.payload
            };
        case SET_REALTED_VIDES:
            return {
                ...state,
                relatedSearches: action.payload
            }
        default:
            return state;
    }

};
