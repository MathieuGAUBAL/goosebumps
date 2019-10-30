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
        
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/')
        .then(response => response.data)
        .then(data => {
            console.log(data)
            this.setState({
               
                monster: data.monsters,
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
            <div className=" dsk-11 mob-10 tab-10 tab-offset-1 mob-offset-1  container-text-monster"><p>Which monstruosity could it be? {this.state.monster.name}</p></div>
            </div>
            </div>
            
            
            
            );
        }
    }
    
    export default Homepage ;