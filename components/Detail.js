import React from 'react';
import './Detail.css';

function Detail(props) {
    return (
        <div className='Detail'>
            <img src={props.backdrop_path} alt={props.title} className='background' />
            <div className='rectangle'></div>
            <img src={props.poster_path} alt={props.title} className='image' />
            <div className='MovieInfo'>
                <h3 className='title'>{props.title}</h3>
                <p className='Info'>{props.release_date} ▪ {props.runtime} ▪ ⭐{props.vote_average}</p>
                <p className='overview'>{props.overview}</p>
                <h4>추천영화</h4>
            </div>
        </div>

    );
}

export default Detail;