import React from 'react';
import { Link } from "react-router-dom"


function Action(props) {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Link to={`/Action/${props.id}`}>
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

export default Action;