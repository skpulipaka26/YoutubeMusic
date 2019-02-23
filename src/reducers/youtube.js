import { SET_SEARCH_VIDEOS, SET_RELATED_VIDEOS, SET_SELECTED_SONG, UPDATE_SELECTED_SONG } from '../actions/youtube';


const initialState = {
    relatedSearches: [],
    searches: [],
    selectedSong: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VIDEOS:
            return {
                ...state,
                searches: action.payload
            };
        case SET_RELATED_VIDEOS:
            return {
                ...state,
                relatedSearches: action.payload
            };
        case SET_SELECTED_SONG:
            return {
                ...state,
                selectedSong: action.payload
            }
        case UPDATE_SELECTED_SONG:
            return {
                ...state,
                selectedSong: {
                    ...state.selectedSong,
                    ...action.payload
                }
            };
        default:
            return state;
    }

};
