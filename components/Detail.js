import React from 'react';
import './Detail.css';

function Detail(props) {
    return (
        <div className='Detail'>
            <img src={props.backdrop_path} alt={props.title} className='background' />
            <div className='rectangle'></div>
            <img src={props.poster_path} alt={props.title} className='image' />
            <div className='Info'>
                <h3 className='title'>{props.title}</h3>
                <p className='overview'>{props.overview}</p>
                <p className='genres'>{props.genres}</p>
                <div className='MovieInfo'>
                    <div><h4>Date</h4><p className='date'>{props.release_date}</p></div>
                    <div><h4>runtime</h4> <p className='runtime'>{props.runtime}</p></div>
                    <div><h4>Scope</h4> <p className='star'>{props.vote_average}/10</p></div>
                </div>
            </div>
        </div>

    );
}

export default Detail;