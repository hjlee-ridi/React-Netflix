import React from 'react';
import { Link } from "react-router-dom"
import './Movie.css';


function Movie(props) {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Link to={`/Netflix/${props.id}`}>
                    <img src={props.image} alt={props.title} className='poster'  />
                </Link>
            </div>
        </div>
    );
}

export default Movie;