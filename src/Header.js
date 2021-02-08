import React from 'react';
import {Link} from 'react-router-dom';
const Header =()=>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link class="nav-link text-white" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled text-white" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                
            </nav>
            
        </React.Fragment>
    )
}

export default Header;

