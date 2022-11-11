import React from 'react';
import './Movie.css';


function Movie(props) {
    return (
        <div>
            
        <div style={{marginBottom: '50px'}}>
            <img src={props.image} alt={props.title}
                style={{
                    width: '200px',
                    height: '300px',
                    position: 'relative'
                }} />
        </div>
        </div>
    );
}

export default Movie;