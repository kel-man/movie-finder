import React from 'react';
import { getDetails } from '../MovieSearchContainer/searchActions';

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
                <h1>Movie Detail Container</h1>
                
                <p>Viewing Movie {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default MovieDetailContainer;