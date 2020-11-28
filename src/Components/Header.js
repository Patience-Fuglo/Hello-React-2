import React from 'react';
import {
    Link
  } from "react-router-dom";

const Header = ({name, contactEmail})=>{
    return(
      
            <div className="header_container">
               
                <nav className="navbar navbar-light navbar-expand-lg ">
                 
                    <ul className="navbar-nav ">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link"to="/AboutMe">AboutMe</Link></li>
                        <li className="nav-item"><Link className="nav-link"to="/Contact">Contact</Link></li>
                        <li className="nav-item"><Link className="nav-link"to="/Projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        
    )
}

export default Header;