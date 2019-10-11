import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store){
    return {
        movie: store.movie
    }
}

export default connect(mapStoreToProps)(MovieDetailContainer);