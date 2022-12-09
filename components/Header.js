import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Img/netflix.png';
import search from '../Img/search.png';
import "./Header.css";


function Header() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="netflix" />
            </Link>
            <Link to="/">
                <img src={search} alt="netflix" />
            </Link>
        </div>
    )
}

export default Header;