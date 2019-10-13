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
        const { movieInfo } = this.props;
        return (
            <div>
                <h1>Movie Details</h1>
                <img src={movieInfo.Poster} />
                
                <p>Viewing Movie {movieInfo.Title}</p>
                <p>Released: {movieInfo.Year}</p>
                <p>About: {movieInfo.Genre}</p>
                <p>Rated {movieInfo.Rated}</p>
                <p>Runtime: {movieInfo.Runtime}</p>
                <p>Cast: {movieInfo.Actors}</p>
                <Link to={`/`}>Back</Link>
            </div>
        )
    }
}

export default MovieDetailContainer;