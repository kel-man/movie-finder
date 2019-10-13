import React from 'react';
import { getDetails } from '../MovieSearchContainer/searchActions';
import { Link } from 'react-router-dom';

const DisplayCard = (props) => {
    <div>
        <h3>{props.title}</h3>
        <p>Released: {props.year}</p>
    </div>
}

class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getDetails(this.props.match.params.id));
    }

    render() {
        const { movieInfo, movies } = this.props;
        const Movie = movies.find(x => x.imdbID === this.props.match.params.id)
        return (
            <div>
                <h1>Movie Detail Container</h1>
                
                <p>Viewing Movie {this.props.match.params.id}</p>
                <img src={Movie.Poster} />
                <Link to={`/`}>Back</Link>
            </div>
        )
    }
}

export default MovieDetailContainer;