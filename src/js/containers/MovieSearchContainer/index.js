import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        title: store.search.title,
        movies: store.search.movies,
        movieInfo: store.search.movieInfo
    }
}

export default connect(mapStoreToProps)(MovieSearchContainer);