import axios from 'axios';

export const SET_SEARCH_VIDEOS = 'SET_SEARCH_VIDEOS';
export const SET_RELATED_VIDEOS = 'FETCH_REALTED_VIDEOS';

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
        } catch (error) {
            console.log(error);
        }
    }
}
