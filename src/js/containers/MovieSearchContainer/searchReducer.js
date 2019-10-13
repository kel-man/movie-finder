const defaultState = {
    movies: [],
    movieInfo: [],
    pending: false
}

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'SEARCH_TITLE_PENDING' : {
            return {
                ...state,
                pending: true
            }
        }
        case 'SEARCH_TITLE_FULFILLED' : {
            return {
                ...state,
                searchInput: payload.data.Search.title,
                movies: payload.data.Search,
                pending: false
            }
        }
        case 'GET_DETAILS_PENDING' : {
            return {
                ...state,
                pending: true
            }
        }
        case 'GET_DETAILS_FULFILLED' : {
            return {
                ...state,
                movieInfo: payload.data,
                pending: false
            }
        } 
        default: return state;
    }
}