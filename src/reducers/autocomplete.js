import { FETCH_AUTOCOMPLETE } from '../actions/autocomplete';

const initialState = {
    autocomplete: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTOCOMPLETE:
            return action.payload;
        default:
            return state;
    }
}