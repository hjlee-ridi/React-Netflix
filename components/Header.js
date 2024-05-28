import React from "react";
import { Link } from 'react-router-dom';
import logo from '../Img/netflix.png';
import search from '../Img/search.png';
import "./Header.css";


function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="netflix" className="logo"/>
            </Link>
            {/* <Link to="/Login">
                <button className="Login">로그인</button>
            </Link> */}
            <Link to="/Search">
                <img src={search} alt="Search" className="search" />
            </Link>
        </div>
    )
}

export default Header;