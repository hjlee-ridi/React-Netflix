import React from 'react';
import { Link } from "react-router-dom"
import './Movie.css';

function Fantasy(props) {
    return (
        <div>
            <div className='components_movieImg'>
                <Link to={`/Fantasy/${props.id}`}>
                    <img src={props.image} alt={props.title} className='gridcard' />
                </Link>
            </div>

        </div>
    );
}

export default Fantasy;