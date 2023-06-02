import React from 'react'
import './ThingsILikeToTalkAbout.css'

function Things() {
    return(
        <div className="Things">
            <h1 className="title">Cosas que me gustan</h1>
            <p className="subtitle">Para conocerme un poco mejor, acá algunas cosas que me han marcado a lo largo de mi vida :)</p>
            <div className="ILikeThis">
                <img src="/persona.avif" alt="Persona" className="imgThings"></img>
                <img src="/supermb.jpg" alt="Super Mario" className="imgThings"></img>
                <img src="/futbol.jpg" alt="Fulbo" className="imgThings"></img>
                <img src="/gorillaz.jpg" alt="Gorillaz" className="imgThings"></img>
                <img src="/starwars.jpg" alt="Star Wars" className="imgThings"></img>
                <img src="/inuyasha.png" alt="Inuyasha" className="imgThings"></img>
            </div>
        </div>
    )
}

export default Things