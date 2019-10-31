import React, {Component} from 'react';
import '../mediaQueries.css';
import './footer.css';
import PictoReseauxSociaux from './PictoReseauxSociaux';
import logo from "./logo.png";
class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                    <div className="list-footer col-tab">
                        <ul className="ul-list-footer col-mob">
                            <li>
                                <p>About us</p>
                            </li>
                            <li>
                                <p>Contact us</p>
                            </li>
                            <li>
                                <p>Cookies policy</p>
                            </li>
                        </ul>
                    </div>

                    <div className="logo-div"> 
                        <img className="logo-footer" src={logo} alt=""/>
                    </div>

                    <PictoReseauxSociaux />
            </div>
        )
    }
}

export default Footer;