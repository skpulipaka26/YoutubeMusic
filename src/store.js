import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import relatedYoutubeSearches from './reducers/youtube';
import autocomplete from './reducers/autocomplete';

export const initialState = {
    autocomplete: [],
    relatedYoutubeSearches: []
};
const enhancers = [];
const middleware = [thunk];


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export const store = createStore(
    combineReducers({ relatedYoutubeSearches, autocomplete }),
    initialState,
    composedEnhancers
);