import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        title: store.search.title,
        movies: store.search.movies,
        movieInfo: store.search.movieInfo
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);