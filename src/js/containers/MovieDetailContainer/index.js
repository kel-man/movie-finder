import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        title: store.Search.title,
        movies: store.Search.movies,
        movieInfo: store.Search.movieInfo
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);