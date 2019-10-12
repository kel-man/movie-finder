import axios from 'axios';

export function updateSearchInput(title){
    console.log('inside updateSearchInput title', title);
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: title
    };
}

export function searchTitle(title){
    console.log('Search title action');
    const searchTerm = title;
    return {
        type: 'SEARCH_TITLE',
        payload: axios.get(`/movieInfo/${searchTerm}`)
    };
}

export function searchId(id){
    return {
        type: 'SEARCH_ID',
        payload: axios.get(`/movie/${id}`)
    };
}