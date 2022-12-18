import React from 'react';
import { Link } from "react-router-dom"

function Detail(props) {
    return (
        <div>
            <div>
            <img src={props.image} alt={props.title} />
            <div className='MovieInfo'>
        <h3 className='title'>{props.original_title}</h3>
        <p className='Info'>{props.release_date} ▪ {props.runtime} ▪ ⭐{props.vote_average}</p>
        <p className='overview'>{props.overview}</p>  
        <h4>비슷한 콘텐츠</h4>
        <Link to={`/Netflix/${props.id}`}>
                    <img src={props.img} alt={props.title} />
                </Link>
     </div>
            </div>
        </div>
    );
}

export default Detail;