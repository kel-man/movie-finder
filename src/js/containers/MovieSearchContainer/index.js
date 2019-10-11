import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        title: store.data.title,
        movies: store.data.movies
    }
}

export default connect(mapStoreToProps)(MovieSearchContainer);