import React, { Component } from 'react';
import './../mediaQueries.css';
import LinkButton from '../LinkButton';



function Movie({ movie }) {

    const filter = (str) => {
  
        return str.replace(/_/g, " "); 
      
    }

    movie.map(element => { console.log('titre : ' + filter(element.title)) })
    return (
        movie.map(element => (
            <div className="movieBox">
                <div className="movieImg"><img className="image-resize movieImage" src={element.posterUrl} alt="picture" /></div>

                <div className="infoBox">
                    <h1 className="movieTitle">{filter(element.title)}</h1>
                    <ul className="movieInfo">
                        <li className="movieDirector">Director : {filter(element.director)}</li>
                        <li className="movieYear">Years : {element.year}</li>
                        <li className="movieCountry">Country : {filter(element.country)}</li>
                        
                    </ul>
                    <div className="link">
                        <LinkButton className="button4" to='/WatchMovie'>Watch Movie</LinkButton>
                    </div>
                    
                   
                </div>
            </div>
        )
        )
    )

}

export default Movie;