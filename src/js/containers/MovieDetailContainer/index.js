import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        title: store.data.title,
        movies: store.data.movies,
        movieInfo: store.data.movieInfo
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);