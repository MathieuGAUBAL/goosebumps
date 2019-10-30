import React, {Component, Fragment} from 'react';


class Formulaire extends Component{

    render(){

        return(
    
  
                    this.props.value.map((element, index) => (
                        <option key={index} value={element.picture}>{element.name}</option>
                    ))

            
        )
    }
}

export default Formulaire;