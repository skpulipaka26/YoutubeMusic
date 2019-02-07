export const SET_CURRENT_PLAYING = 'SET_CURRENT_PLAYING';

export const setCurretPlaying = curretPlaying => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_PLAYING,
            payload: curretPlaying
        });
    }
}