import axios from 'axios';


export function searchTitle(title){
    // console.log('Search title action');
    // const searchTerm = title;
    return {
        type: 'SEARCH_TITLE',
        payload: axios.get(`/movieInfo/${title}`)
    };
}

export function getDetails(id){
    return {
        type: 'GET_DETAILS',
        payload: axios.get(`/movie/${id}`)
    };
}