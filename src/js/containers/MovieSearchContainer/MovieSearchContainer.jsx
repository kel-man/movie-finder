import React from 'react';
import { 
    updateSearchInput,
    searchTitle
} from './searchActions';

class MovieSearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
    }

    handleInputChange(e){
        const { dispatch } = this.props;
        const { value } = e.target;
        dispatch(updateSearchInput(value))
    }

    handleButtonClick(){
        const { title, dispatch } = this.props;
        dispatch(searchTitle(title));
    }

    render() {
        return (
            <div>
                <h1>Movie Search Container</h1>
                <label htmlFor='title-input'>Search for a title:</label>
                <textarea className='title-input' onChange={this.handleInputChange}/>
                <button className='title-search' onClick={this.handleButtonClick}>Search!</button>
            </div>
        )
    }
}

export default MovieSearchContainer;