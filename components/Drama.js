import React from 'react';
import { Link } from "react-router-dom"
import './Movie.css';

function Drama(props) {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Link to={`/Drama/${props.id}`}>
                    <img src={props.image} alt={props.title} className='gridcard'  />
                </Link>
            </div>
        </div>
    );
}

export default Drama;