import React from 'react'
import "./HomeHospital.scss"
export default function HomeHospital() {
    return (
        <div className='col-12 Section1Hospital'>

            <div className='Text'>
                <h1>
                    Welcome to <br />
                    <span className='BESAFE'>Be Safe Hospital!</span> <br />
                    Your Personal <br /> Healthcare Hub</h1>
                <button className='btn' id='button '> Start Now</button>
            </div>
            <div className='BackGroundImg'></div>
        </div>
    )
}
