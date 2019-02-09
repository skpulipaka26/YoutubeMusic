import axios from 'axios';

export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_REALTED_VIDES = 'FETCH_REALTED_VIDEOS';

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
                type: SET_VIDEOS,
                payload: searchItems
            });
        } catch (error) {
            console.log(error);
        }
    }
}
