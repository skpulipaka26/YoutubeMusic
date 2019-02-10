import { push } from 'connected-react-router'

import axios from 'axios';

import { SET_RELATED_VIDEOS } from './youtube';

export const SET_SELECTED_SONG = 'SET_SELECTED_SONG';
const YT_SCRAPER_BASE_URL = 'http://localhost:3300/api';

export const extractYoutubeVideo = (videoId) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${YT_SCRAPER_BASE_URL}/info/${videoId}`, {
                params: {
                    relatedList: true
                }
            });
            const relatedVideos = res.data.relatedVideos;
            const selctedSongInfo = res.data.info;
            const { formats, ...metadata } = selctedSongInfo;
            dispatch({
                type: SET_SELECTED_SONG,
                payload: {
                    metadata: metadata,
                    formats: formats
                }
            });
            dispatch({
                type: SET_RELATED_VIDEOS,
                payload: relatedVideos
            });
            dispatch(push(`/songs/${metadata.videoId}`));
        } catch (error) {
            return error;
        }
    }
}