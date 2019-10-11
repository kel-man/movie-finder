import axios from 'axios';

export function updateSearchInput(str){
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { str }
    };
}

export function searchTitle(str){
    return {
        type: 'SEARCH_TITLE',
        payload: axios.get(`/movies/${str}`)
    };
}

export function searchId(id){
    return {
        type: 'SEARCH_ID',
        payload: axios.get(`/movie/${id}`)
    };
}