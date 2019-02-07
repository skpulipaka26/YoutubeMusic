import { FETCH_AUTOCOMPLETE } from "../actions/autocomplete";

import { initialState } from "../store";


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTOCOMPLETE:
            return action.payload;
        default:
            return state;
    }
}