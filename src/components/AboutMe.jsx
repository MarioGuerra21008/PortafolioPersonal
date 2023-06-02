import React from 'react'
import './AboutMe.css'

function AboutMe() {
    return(
        <div className="AboutMe">
            <h1 className="title">Sobre mí!</h1>
            <div className="containerAboutMe">
                <p>Me presento. Mi nombre es Mario Guerra. Aquí al lado les dejo una foto mía de cuando <br />
                todavía era una persona tranquila. La universidad lo cambia a uno bastante, como pueden imaginar.</p>
                <img src="/mario.jpeg" alt="mi carita jiji" className="imgAboutMeRight"></img>
            </div>
            <div className="containerAboutMe">
                <img src="/liceo-guatemala.png" alt="mi cole" className="imgAboutMeLeft"></img>
                <p>Yo me gradué del colegio Liceo Guatemala en el año 2020, a la edad de 17 años. <br />
                nací el 4 de mayo de 2003, por lo que a día de hoy yo tengo 20 años de edad.</p>
            </div>
            <div className="containerAboutMe">
                <p>Desde el año 2021, estoy estudiando en la Universidad del Valle de Guatemala, <br />
                mi carrera es la de Ingeniería en Ciencias de la Computación y Tecnologías de la Información. <br />
                Actualmente me encuentro cursando el tercer año de la carrera :D</p>
                <img src="/Uvg_logo.jpg" alt="mi uni" className="imgAboutMeRight"></img>
            </div>
        </div>
    )
}

export default AboutMe