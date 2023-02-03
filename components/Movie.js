import React from 'react';
import { Link } from "react-router-dom"
import './Movie.css';


function Movie(props) {
    return (
        <div className="Movie">
                <Link to={`/Netflix/${props.id}`} className='gridcardLink'>
                    <img src={props.image} alt={props.title} className='gridcard'  />
                </Link>
        </div>
    );
}

export default Movie;