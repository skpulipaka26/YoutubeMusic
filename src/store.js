import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';

import youtube from './reducers/youtube';
import autocomplete from './reducers/autocomplete';
import extractor from './reducers/youtube-extractor';
import player from './reducers/player'

export const history = createBrowserHistory();
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

export const store = createStore(
    combineReducers({ youtube, autocomplete, extractor, player, router: connectRouter(history) }),
    composedEnhancers
);