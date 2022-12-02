import React from 'react';
import { Link } from "react-router-dom"
import './Detail.css';


function Detail(props) {
    return (
        <div>
            <div className='components_Detail'>
                <Link to={`/Netflix/${props.id}`}>
                    <img src={props.image} alt={props.title} className='poster_Detail'  />
                </Link>
            </div>
        </div>
    );
}

export default Detail;