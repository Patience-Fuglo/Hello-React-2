import React from 'react';
import {Link} from 'react-router-dom'
const Header = ({name, contactEmail})=>{
    return(
        <div>
            <div className="header_container">
               
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">AboutMe</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Header">Header</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;