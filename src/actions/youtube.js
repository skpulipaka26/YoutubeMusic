import axios from 'axios';
import { push } from 'connected-react-router'
import { BACKEND_BASE_URL } from '../util/constants';

export const SET_SEARCH_VIDEOS = 'SET_SEARCH_VIDEOS';
export const SET_RELATED_VIDEOS = 'FETCH_REALTED_VIDEOS';
export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
export const UPDATE_SELECTED_SONG = 'UPDATE_SELECTED_SONG';

const YT_SCRAPER_BASE_URL = BACKEND_BASE_URL;

export const fetchYoutubeMetadata = (searchString) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${YT_SCRAPER_BASE_URL}/search`, {
                params: {
                    q: searchString
                }
            });
            const searchItems = res.data.items;
            dispatch({
                type: SET_SEARCH_VIDEOS,
                payload: searchItems
            });
            dispatch(push(`/`));
        } catch (error) {
            console.log(error);
        }
    }
}

export const setSelectedSong = song => {
    return dispatch => {
        dispatch({
            type: SET_SELECTED_SONG,
            payload: song
        });
        return song;
    };
}

export const updateSelectedSong = song => {
    return dispatch => dispatch({
        type: UPDATE_SELECTED_SONG,
        payload: song
    });
}
