import { FETCH_VIDEOS } from '../actions/videos';
import { initialState } from '../store';

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_VIDEOS:
            return action.payload;
        default:
            return state;
    }

};
