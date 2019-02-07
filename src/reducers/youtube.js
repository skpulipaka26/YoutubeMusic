import { FETCH_VIDEOS, FETCH_REALTED_VIDES } from '../actions/youtube';

const initialState = {
    relatedSearches: [],
    searches: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_VIDEOS:
            return {
                ...state,
                searches: action.payload
            };
        case FETCH_REALTED_VIDES:
            return {
                ...state,
                relatedSearches: action.payload
            }
        default:
            return state;
    }

};
