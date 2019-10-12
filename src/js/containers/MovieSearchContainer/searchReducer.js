const defaultState = {
    title: '',
    movies: [],
    movieInfo: [],
    pending: false
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
        case 'SEARCH_TITLE_PENDING' : {
            return {
                ...state,
                pending: true
            }
        }
        case 'SEARCH_TITLE_FULFILLED' : {
            return {
                ...state,
                searchInput: payload.data.Search.Title,
                movies: payload.data.Search,
                pending: false
            }
        }
        case 'GET_DETAILS_FULFILLED' : {
            return {
                ...state,
                movieInfo: payload.data
            }
        } 
        default: return state;
    }
}