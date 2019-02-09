export const SET_CURRENT_PLAYING_EXTRACTOR = 'SET_CURRENT_PLAYING_EXTRACTOR';
export const SET_CURRENT_PLAYING_METADADA = 'SET_CURRENT_PLAYING_METADATA';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';

export const setCurrentPlayingMetadata = metadata => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_PLAYING_METADADA,
            payload: metadata
        });
    }
}

export const setCurrentHowlPlayer = howlObj => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_PLAYER,
            payload: howlObj
        });
    }
}
