import React from 'react';
import { 
    updateSearchInput,
    searchTitle,
    searchId
} from './searchActions';

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
        return (
            <div>
                <h1>Movie Search Container</h1>
                <label htmlFor='title-input'>Search for a title:</label>
                <input type='text' className='title-input search' onChange={this.handleInputChange}/>
                <button className='title-search' onClick={() => this.handleButtonClick(this.state.input)}>Search!</button>
            </div>
        )
    }
}

export default MovieSearchContainer;