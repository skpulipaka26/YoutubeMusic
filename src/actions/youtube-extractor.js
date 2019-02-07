import axios from 'axios';

const YT_EXTRACTOR_BASE_URL = 'https://youtube-dl-26.herokuapp.com/api/info';

export const extractYoutubeVideo = (videoId) => {
    return async () => {
        try {
            const res = await axios.get(`${YT_EXTRACTOR_BASE_URL}`, {
                params: {
                    url: `https://www.youtube.com/watch?v=${videoId}`
                }
            });
            return res.data;
        } catch (error) {
            return error;
        }
    }
}
