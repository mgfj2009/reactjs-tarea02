import React from "react";
import { Link } from "react-router-dom";


const Header = () =>{

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
				 
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="navbar-nav ml-md-auto">
                <li className="nav-item active">
                     <Link to="/">Home</Link>
                </li>
                <li className="nav-item" style={{"padding-left":"30px"}}>
                <Link to="/about">About</Link>
                </li>                
            </ul>
        </div>
    </nav>
        

    );


}

export default Header;