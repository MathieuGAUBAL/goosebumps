import React, {Component} from 'react';
import './watchmovie.css';

class WatchMovie extends Component{
    render(){
        return(
            <div className="error-play">
                <img className = "error" src="/errorPlay.jpg" alt="error-play"/>
            </div>
        )
    }
}

export default WatchMovie;