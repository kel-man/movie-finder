import React from 'react';
import { searchTitle, searchId } from '../MovieSearchContainer/searchActions'

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        dispatch(searchId(this.props.match.params.id));
    }

    render() {
        const { movie } = this.props;
        return (
            <div>
                <h1>Movie Detail Container</h1>
                <p>{ movie.title }</p>
                <p>{ movie.runtime }</p>
                <p>Viewing Movie {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default MovieDetailContainer;