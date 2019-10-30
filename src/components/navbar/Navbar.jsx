import React from 'react';
import "./navbar.css";
import logo from './logo.jpg'

let Navbar = () =>
            <React.Fragment>
                <nav className="header">
                    <a href="index.html" className="brandlogo"><img src={logo} alt="logo" width="45px"/></a>
                    <a href="index.html" className="brand">GOOSEBUMPS</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="quizz.html">QUIZZ</a></li>
                    </ul>
                </nav>
            </React.Fragment>
    
export default Navbar;