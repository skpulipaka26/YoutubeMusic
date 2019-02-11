import axios from 'axios';
import { push } from 'connected-react-router'

export const SET_SEARCH_VIDEOS = 'SET_SEARCH_VIDEOS';
export const SET_RELATED_VIDEOS = 'FETCH_REALTED_VIDEOS';
export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
export const UPDATE_SELECTED_SONG = 'UPDATE_SELECTED_SONG';

const YT_SCRAPER_BASE_URL = 'http://localhost:3300/api'

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
    return dispatch => dispatch({
        type: SET_SELECTED_SONG,
        payload: song
    });
}

export const updateSelectedSong = song => {
    return dispatch => dispatch({
        type: UPDATE_SELECTED_SONG,
        payload: song
    });
}
