import React from "react";
import { Link} from 'react-router-dom';
import logo from './Img/netflix.png';
import "./Header.css";


function Header() {    
    return(
        <Link to="/">
        <img src={logo} alt="netflix logo" />
        </Link>

    )
}

export default Header;