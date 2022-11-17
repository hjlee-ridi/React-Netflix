import React from 'react';
import { Link } from "react-router-dom"


function Fantasy(props) {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Link to={`/Fantasy/${props.id}`}>
                    <img src={props.image} alt={props.title}
                        style={{
                            width: '200px',
                            height: '300px',
                            position: 'relative'
                        }} />
                </Link>
            </div>

        </div>
    );
}

export default Fantasy;