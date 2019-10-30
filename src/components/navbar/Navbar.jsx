import React from 'react';
import "./navbar.css";

let Navbar = () =>
            <React.Fragment>
                <nav className="header">
                    <a href="index.html" className="brandlogo"></a>
                    <a className="brand">GOOSEBUMPS</a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">
                        <li><a href="#choose">HOME</a></li>
                        <li><a href="#surprise">Quizz</a></li>
                    </ul>
                </nav>
            </React.Fragment>
    
export default Navbar;