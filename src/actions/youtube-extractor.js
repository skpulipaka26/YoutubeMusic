import axios from 'axios';
import { push } from 'connected-react-router'

import { SET_RELATED_VIDEOS, SET_SELECTED_SONG } from './youtube';
import { BACKEND_BASE_URL } from '../util/constants';

export const SET_EXTRACTOR_METADATA = 'SET_EXTRACTOR_METADATA';
const YT_SCRAPER_BASE_URL = BACKEND_BASE_URL;

export const extractYoutubeVideo = (videoId) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${YT_SCRAPER_BASE_URL}/info/${videoId}`, {
                params: {
                    relatedList: true
                }
            });
            const relatedVideos = res.data.relatedVideos;
            const selectedSong = res.data.info;
            const { formats, ...metadata } = selectedSong;
            const reqObj = {
                metadata: metadata,
                formats: formats.filter(format => format.audioQuality && !format.mimeType.includes('video'))
            };
            dispatch({
                type: SET_EXTRACTOR_METADATA,
                payload: reqObj
            });
            dispatch({
                type: SET_SELECTED_SONG,
                payload: metadata
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