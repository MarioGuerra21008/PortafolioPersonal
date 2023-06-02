import React from 'react'
import './Banner.css'

function Banner() {
    return(
        <div className="Banner">
            <h1 className="title">Mario Guerra's crib!</h1>
            <h4 className="subtitle">As seen on MTV! <br />(MarioTV) *ba dum tss*</h4>
            <img src="murdoc.gif" alt="welcome to my crib" className="giffygif" width="300px" height="200px"></img>
        </div>
    )
}

export default Banner