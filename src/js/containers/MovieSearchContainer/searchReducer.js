const defaultState = {
    title: '',
    movies: [],
    movie: []
}

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_INPUT' : {
            return {
                ...state,
                title: payload
            }
        }
        case 'SEARCH_TITLE_FULFILLED' : {
            return {
                ...state,
                searchInput: payload.data.Search.Title,
                movies: payload.data.Search
            }
        }
        case 'SEARCH_ID_FULFILLED' : {
            return {
                ...state,
                movie: payload.data
            }
        } 
        default: return state;
    }
}