import React from 'react'
import { DotWave } from '@uiball/loaders'
import './Loading.css'

function Loading() {
    return (
        <div className='Loading'>
            <DotWave
                size={150}
                speed={1}
                color="white"
            />
        </div>
    )
}

export default Loading;
