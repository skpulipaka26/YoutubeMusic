import { SET_AUTOCOMPLETE } from '../actions/autocomplete';

const initialState = {
    autocomplete: []
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTOCOMPLETE:
            return action.payload;
        default:
            return state;
    }
}