import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/'>Home</Link>
                        </li>
                        
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                        </li>
                        </ul>
                    </div>
                
            </nav>
            
        </React.Fragment>
    )
}

export default Header;

