import React from 'react';
import { Link } from 'react-router-dom';
import { 
    searchTitle
} from './searchActions';

class DisplayCard extends React.Component {
    render(){
        const { title, year, imdbID, poster } = this.props;
        return(
            <div className='result-card'>
                <h3 className='card-title'>Title: { title }</h3>
                <p className='released'>Released: {year}</p>
                <img src={poster}/>
                <Link to={`/movie/${imdbID}`} id='link'>About...</Link>
            </div>
        )
    }
}

class MovieSearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
    }

    handleInputChange(e){
        this.setState({
            input: e.target.value
        })
        console.log(this.state.input);
    }

    handleButtonClick(str){
        const { dispatch } = this.props;
        dispatch(searchTitle(str));
    }

    render() {
        const { movies } = this.props;
        var display;
        if(movies.length >= 1){
            display = movies.slice(0, 5).map((movie, index) => (
                <DisplayCard key={index} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster} />
            ))
        } else {display = <h2>No Movies Loaded</h2>}
        return (
            <div>
                <h1>Movie Search Container</h1>
                <label htmlFor='title-input'>Search for a title:</label>
                <input type='text' className='title-input search' onChange={this.handleInputChange}/>
                <button className='title-search' onClick={() => this.handleButtonClick(this.state.input)}>Search!</button>
                {display}
            </div>
        )
    }
}

export default MovieSearchContainer;

