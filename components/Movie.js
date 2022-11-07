import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


function Movie(props) {
    return(
        <div>
            <img src={props.image} alt="영화 포스터" />
            <h3>{props.title}</h3>
            <span>{props.overview}</span>
        </div>
    ); 
}

export default Movie;