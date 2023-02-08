import React from 'react';
import PropTypes from 'prop-types';
import './Detail.css';

function Detail({ id, title, backdrop_path, poster_path, overview, genres, vote_average, runtime, release_date }) {

    
    return (
        <div className='Detail'>
            <img src={backdrop_path} alt={title} className='background' />
            <div className='rectangle'></div>
            <img src={poster_path} alt={title} className='image' />
            <div className='Info'>

                <h3 className='title'>{title}</h3>
                <p className='overview'>{overview}</p>
                <ul className='genreList'>
                    {genres && genres.map((genre, index) => (
                        <li key={index} className='genre'>
                            {genre.name}
                        </li>
                    ))}
                </ul>
                <div className='MovieInfo'>
                    <div><h4>Date</h4><p className='date'>{release_date}</p></div>
                    <div><h4>runtime</h4> <p className='runtime'>{runtime}</p></div>
                    <div><h4>Scope</h4> <p className='star'>{vote_average}/10</p></div>
                </div>


            </div>
        </div>

    );
}

Detail.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    release_date: PropTypes.number.isRequired
};

export default Detail;