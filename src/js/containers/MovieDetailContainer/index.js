import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        title: store.title,
        movies: store.movies,
        movieInfo: store.movieInfo
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);