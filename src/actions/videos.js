import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

const YT_API_KEY = 'AIzaSyBKltGWDA-_g1UC5-Q_kBbT0A3gdcxrrGA';
const BASE_URL = ' https://www.googleapis.com/youtube/v3';

export const fetchVideos = (searchString) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${BASE_URL}/search`, {
                params: {
                    'maxResults': '25',
                    'part': 'snippet',
                    'q': searchString,
                    key: YT_API_KEY
                }
            });
            dispatch({
                type: FETCH_VIDEOS,
                payload: res.data.items
            });
        } catch (error) {
            console.log(error);
        }
    }
}

