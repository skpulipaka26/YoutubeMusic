import axios from 'axios';

import { Howl, Howler } from 'howler';

import { SET_REALTED_VIDES } from './youtube';
import { SET_CURRENT_PLAYING_EXTRACTOR, SET_CURRENT_PLAYER } from './player';

const YT_SCRAPER_BASE_URL = 'http://localhost:3300/api';

export const extractYoutubeVideo = (videoId) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${YT_SCRAPER_BASE_URL}/info/${videoId}`, {
                params: {
                    relatedList: true
                }
            });
            const relatedVideos = res.data.realtedVideos;
            const selectedSongMetadata = res.data.info;
            const { formats } = selectedSongMetadata;
            const extractorData = formats.reverse()[0];
            dispatch({
                type: SET_REALTED_VIDES,
                payload: relatedVideos
            });
            if (extractorData) {
                Howler.unload();
                const howl = new Howl({
                    src: [extractorData.url],
                    volume: 1,
                    html5: true
                });
                dispatch({
                    type: SET_CURRENT_PLAYING_EXTRACTOR,
                    payload: extractorData
                });
                howl.play();
                howl.on('play', () => {
                    dispatch({
                        type: SET_CURRENT_PLAYER,
                        payload: howl
                    })
                });
            }

        } catch (error) {
            return error;
        }
    }
}
