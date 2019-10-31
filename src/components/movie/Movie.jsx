import React, { Component } from 'react';
import './../mediaQueries.css';
import axios from 'axios'


const Movie = {

}


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: sampleMovie
        };
    }

    getMovies() {
        
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({
                
                movieData: data.movies,
            });
        });
    }

    render(){
        return(
            <div className="movieBox">
                <div className="movieImg"><img className="image-resize movieImage" src={this.state.movie.picture} alt="picture"/></div>
                <h1 className="movieTitle">{this.state.movie.title}</h1>
                <div className="infoBox">
                    <ul className="movieInfo">
                        <li className="movieDirector">{this.state.movie.director}</li>
                        <li className="movieYear">{this.state.movie.year}</li>
                        <li className="movieCountry">{this.state.movie.country}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Movie;