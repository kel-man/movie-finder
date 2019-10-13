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
                <p className='title'>Viewing Movie {movieInfo.Title}</p>
                <p className='year'>Released: {movieInfo.Year}</p>
                <p className='genre'>About: {movieInfo.Genre}</p>
                <p className='rated'>Rated {movieInfo.Rated}</p>
                <p className='runtime'>Runtime: {movieInfo.Runtime}</p>
                <p className='actors'>Cast: {movieInfo.Actors}</p>
                <p className='plot'>Synopsis: {movieInfo.Plot}</p>
                <Link to={`/`} className='back-button'>Back</Link>
            </div>
        )
    }
}

export default MovieDetailContainer;