import React from 'react';
import {Link} from "react-router-dom";


function Movie(props) {
    return(
        <div>
            <img src={props.image} alt={props.id} />
            <h3>{props.title}</h3>
            <span>{props.overview}</span>
        </div>
    ); 
}

export default Movie;