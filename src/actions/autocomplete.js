export const SET_AUTOCOMPLETE = 'SET_AUTOCOMPLETE';

const formatAutoCompleteResponse = (autoCompleteResponse) => {
    const results = autoCompleteResponse[1];
    return results.map(result => result[0]);
}

export const autoComplete = (searchString) => {
    return (dispatch) => {
        const makeCallback = script => response => {
            try {
                document.head.removeChild(script);
                const autoCompleteList = formatAutoCompleteResponse(response);
                dispatch({
                    type: SET_AUTOCOMPLETE,
                    payload: autoCompleteList
                });
            } catch (error) { }
        };

        let s = document.createElement('script');
        s.charset = 'utf-8';
        s.src = `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${searchString}&callback=suggestCallback`;
        window.suggestCallback = makeCallback(s);
        document.head.appendChild(s);
    }
}
