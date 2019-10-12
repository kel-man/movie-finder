const defaultState = {
    title: '',
    movies: [],
    movieInfo: {title: 'none'},
    searchInput: ''
}

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
    console.log(action);
    switch (type) {
        case 'UPDATE_SEARCH_INPUT' : {
            return {
                ...state,
                title: payload
            }
        }
        case 'SEARCH_TITLE_FULFILLED' : {
            console.log('search title reducer');
            return {
                ...state,
                searchInput: payload.data.Title,
                movies: payload.data
            }
        }
        case 'SEARCH_ID_FULFILLED' : {
            return {
                ...state,
                movieInfo: payload.data
            }
        } 
        default: return state;
    }
}