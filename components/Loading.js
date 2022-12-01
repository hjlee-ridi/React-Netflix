import React from 'react'
import logo from '../Img/loading.png';
import './Loading.css'

function Loading() {
    return (
        <div className='Loading'>
            <img className='Loading_img' src={logo} alt="Loading" />
        </div>
    )
}

export default Loading;
