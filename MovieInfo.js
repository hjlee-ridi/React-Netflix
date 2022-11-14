import React from 'react';
import "./MovieInfo.css";

function MovieInfo(props) {

    let {movie} = props;

  return (
    <div className='component'>
        <h3 className='title'>{movie.original_title}</h3>
        <p className='Info'>{movie.release_date}▪{movie.runtime}▪⭐{movie.vote_average}</p>
        <p className='overview'>{movie.overview}</p>  
     </div>

  )
}

export default MovieInfo;
