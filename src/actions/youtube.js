import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_REALTED_VIDES = 'FETCH_REALTED_VIDEOS';

const YT_API_KEY = 'AIzaSyBKltGWDA-_g1UC5-Q_kBbT0A3gdcxrrGA';
const YT_SEARCH_BASE_URL = ' https://www.googleapis.com/youtube/v3/search';

const fetchRelatedVidoes = async (relativeToId) => {
    try {
        const res = await axios.get(`${YT_SEARCH_BASE_URL}`, {
            params: {
                maxResults: 25,
                part: 'snippet',
                type: 'video',
                relatedToVideoId: relativeToId,
                key: YT_API_KEY
            }
        });
        return res.data.items;

    } catch (error) {
        return [];
    }
}

export const fetchYoutubeMetadata = (searchString) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${YT_SEARCH_BASE_URL}`, {
                params: {
                    maxResults: 25,
                    part: 'snippet',
                    q: searchString,
                    key: YT_API_KEY
                }
            });
            const searchItems = res.data.items;
            dispatch({
                type: FETCH_VIDEOS,
                payload: searchItems
            });
            if (searchItems.length) {
                const firstSearchResultId = searchItems[0].id.videoId;
                const relatedVideos = await fetchRelatedVidoes(firstSearchResultId);
                dispatch({
                    type: FETCH_REALTED_VIDES,
                    payload: relatedVideos
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}
