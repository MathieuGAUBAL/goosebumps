import React, { Component } from 'react';
import './../mediaQueries.css';
import './homepage.css'
import axios from 'axios'
import Movie from '../movie/Movie';
import '../movie/movie.css';


const SampleMonster ={
    name : 'Maybe a vampire?',
    picture: "http://bexshea.com/wp-content/uploads/2016/06/giphy.gif",
}

const momie = {
    name : 'Binding Mummie',
    picture: 'https://nsa40.casimages.com/img/2019/10/23/191023045322835216.jpg'
}

const demon={

    name: 'Ravenous Demon',
    picture: 'https://nsa40.casimages.com/img/2019/10/23/191023045326699485.jpg',
}

const vampire={

    name: 'Vampire Hexmage',
    picture: 'https://nsa40.casimages.com/img/2019/10/23/191023045327992152.jpg',
}

class Homepage  extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef() 
        this.state = { 
            monster: SampleMonster,
            monsterData: [],
            moviesData: [],
            moviesToDisplay: [],
            
            
           
        }
        this.zombiesMovies = [];
        this.vampiresMovies = [];
        this.daemonsMovies = [];
        this.myDivToFocus = React.createRef()
    }

    componentDidMount() {
        this.getMonsters();
        this.getMovies();
    }

    

    handleChangePicture = event => {
        console.log('RESULTAT : ' + `'${event.target.value}'`)
        
        this.setState({
            monster: `'${event.target.value}'`
        });
        if (event.target.value === "1") {
            this.setState({ moviesToDisplay: this.zombiesMovies })
            this.setState({monster: momie})
        }
        if (event.target.value === "11") {
            this.setState({ moviesToDisplay: this.vampiresMovies })
            this.setState({monster: vampire})
            
        }
        if (event.target.value === "16") {
            this.setState({ moviesToDisplay: this.daemonsMovies })
            this.setState({monster: demon})
        }
        if (event.target.value === "100") {
            this.setState({ moviesToDisplay: "" })
            this.setState({monster: SampleMonster})
        }
    }


    getMonsters() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/monsters')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    monsterData: data.monsters
                });
            });
    }

    getMovies() {
        axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
            .then(response => response.data)
            .then(data => {
                this.setState({
                    moviesData: data.movies
                });
                this.zombiesMovies = [
                    this.state.moviesData[80],
                    this.state.moviesData[79],
                    this.state.moviesData[75],
                    this.state.moviesData[68],
                    this.state.moviesData[67],
                    this.state.moviesData[61],
                    this.state.moviesData[38]
                ];

                this.vampiresMovies = [
                    this.state.moviesData[70],
                    this.state.moviesData[26]
                ];

                this.vampiresMovies = [
                    this.state.moviesData[70],
                    this.state.moviesData[26]
                ];

                this.daemonsMovies = [
                    this.state.moviesData[76],
                    this.state.moviesData[74],
                    this.state.moviesData[70],
                    this.state.moviesData[0],
                    this.state.moviesData[43]

                ];

            });

    }
    
    
    render() { 


    
        return ( 
            <div className="bckHome  dsk-12 mob-12 tab-12">
            
            <h1 className="TitleHome">Your favorite Monster</h1>

            {/* container*/}
            <div className="row col-tab colh dsk-8 mob-8 tab-10 dsk-offset-2 tab-offset-1 mob-offset-2 container-monster">

                {/* container-image*/}

                
             
     
            <div className="dsk-12 mob-12 tab-12 container-image-monster">
                <img className="newImage monsterImage" src={this.state.monster.picture} alt=""/></div>
             
                {/* container-texte*/}
            <div className="col dsk-12 mob-10 tab-10 tab-offset-1 mob-offset-1  container-text-monster">
            <div className="text"><p className="smalltext">Which monstruosity are you?</p></div> 
            <div className="textstate"><p className="nameMonster">{this.state.monster.name}</p></div> 

            {/* choix du monstre */}
            <div className=" mtop custom-select dsk-12 jcontent tab-offset-5 mob-offset-5 mob-2 tab-2 ">


           
      
            <select className="classic" onChange={this.handleChangePicture} name="monsters" id="monster-choice">
               
                {this.state.monsterData.length === 0 ? '' :
                                    <>
                                        <option value='100'>Spawns of Evil</option>
                                        <option value="1"> {this.state.monsterData[1].name} </option>
                                        <option value="11"> {this.state.monsterData[11].name} </option>
                                        <option value="16"> {this.state.monsterData[16].name} </option>
                                    </>
                                }
            </select>
                
            </div>
           

            </div>
            </div>

            

        
            {
                    this.state.moviesToDisplay.length > 0 &&
                    <Movie movie={this.state.moviesToDisplay} />
                }
            </div>
            
            
            
            );
        }
    }
    
    export default Homepage ;