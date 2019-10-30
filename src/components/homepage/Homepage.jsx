import React, { Component } from 'react';
import './../mediaQueries.css';
import './homepage.css'
import axios from 'axios'


const SampleMonster ={
    name : 'Maybe a vampire?',
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QBj4KvUTaaXcgiXSgSflr3gwlx6h8OCZwKR355wdRCrBNQl_qQ&s",
}

class Homepage  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            monster: SampleMonster
        }
    }
    
    getApi() {
        
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({
                
                monster: data,
            });
        });
    }
    
    render() { 
        return ( 
            <div className="bckHome dsk-offset-1 tab-offset-1 mob-offset-1 dsk-10 mob-10 tab-10">
            
            <h1 className="TitleHome">Your favorite Monster</h1>
            
            {/* image qui apparaît en fonction du choix du monstre */}
            
            <div className="col dsk-10 mob-8 tab-10 dsk-offset-1 tab-offset-1 mob-offset-1 container-monster">
            <div className="dsk-11 mob-10 tab-10 tab-offset-1 mob-offset-1  container-image-monster"><img className="image-resize monsterImage" src={this.state.monster.picture} alt=""/></div>
            <div className=" dsk-11 mob-10 tab-10 tab-offset-1 mob-offset-1  container-text-monster"><p>Which monstruosity could it be? <span className="nameMonster">{this.state.monster.name}</span></p></div>
            </div>
            
            <div className="bckchoice col dsk-offset-4 dsk-4 mob-4 tab-4 tab-offset-4 mob-offset-4  ">
            <div className="col">
            <div className="dsk-2 mob-2 tab-2 dsk-offset-5 tab-offset-5 mob-offset-5"> 
            <img className="image-resize" src="https://cdn0.iconfinder.com/data/icons/emojis-colored-outlined-pixel-perfect/64/emoji-50-512.png"></img>
            </div>
            <div className="dsk-12 dsk-offset-2">
            <p>Choose your monster</p>
            </div>
            

            <div className="dsk-12 dsk-offset-2">
            <select name="monsters" id="monster-choice">
            <option value="">--Spawns of evil--</option>
            <option value="Example">Example</option>
            
            </select>
            </div>
            </div>
            </div>
            <button className="" >Find your movie</button>
            
            
            
            
            </div>
            
            
            
            );
        }
    }
    
    export default Homepage ;