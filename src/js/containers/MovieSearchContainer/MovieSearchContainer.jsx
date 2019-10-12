import React from 'react';
import { 
    searchTitle
} from './searchActions';

class DisplayCard extends React.Component {
    render(){
        const { title, year, picture } = this.props;
        return(
            <div>
                <h3>{ title }</h3>
                <p>Released: {year}</p>
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
        // const { dispatch } = this.props;
        // const { value } = e.target;
        // console.log(value);
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
            display = movies.slice(0, 5).map((picture, index) => (
                <DisplayCard key={index} title={picture.title} year={picture.year} picture={picture}/>
            ))
        } else {display = <p>No Movies Loaded</p>}
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