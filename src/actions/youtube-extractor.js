import axios from 'axios';
import { push } from 'connected-react-router'

import { SET_RELATED_VIDEOS, UPDATE_SELECTED_SONG } from './youtube';

export const SET_EXTRACTOR_METADATA = 'SET_EXTRACTOR_METADATA';
const YT_SCRAPER_BASE_URL = 'http://localhost:3300/api';

export const extractYoutubeVideo = (videoId) => {
    return async dispatch => {
        try {
            dispatch(push(`/songs/${videoId}`));
            const res = await axios.get(`${YT_SCRAPER_BASE_URL}/info/${videoId}`, {
                params: {
                    relatedList: true
                }
            });
            const relatedVideos = res.data.relatedVideos;
            const selctedSongInfo = res.data.info;
            const { formats, ...metadata } = selctedSongInfo;
            const reqObj = {
                metadata: metadata,
                formats: formats
            };
            dispatch({
                type: SET_EXTRACTOR_METADATA,
                payload: reqObj
            });
            dispatch({
                type: UPDATE_SELECTED_SONG,
                payload: {
                    metadata: metadata
                }
            });
            dispatch({
                type: SET_RELATED_VIDEOS,
                payload: relatedVideos
            });
            return reqObj;
        } catch (error) {
            dispatch(push(`/`));
        }
    }
}