import React, { Component } from 'react';
import './pictoReseauxSociaux.css';
import '../mediaQueries.css';

class PictoReseauxSociaux extends Component {
    render() {
        return (
            <div className="container-picto row-mob">
                <ul>
                    <li>
                        <a className="btn" href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>

                    <li>
                        <a className="btn" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a className="btn" href="#">
                            <i className="fab fa-google"></i>
                        </a>
                    </li>
                    <li>
                        <a className="btn" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a className="btn" href="#">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>

                </ul>

            </div>
        )
    }
}

export default PictoReseauxSociaux;