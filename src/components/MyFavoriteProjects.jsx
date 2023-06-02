import React from 'react'
import './MyFavoriteProjects.css'

function Projects() {
    return(
        <div className="Projects">
            <h1 className="title">Algunos de mis proyectos!</h1>
            <h4>Proyecto de Sistema de Salud Administrativo.</h4>
            <div className="containerProjects">
                <p>Este proyecto fue hecho con el objetivo de crear un programa de gestión sobre <br />
                clínicas, centros de salud y hospitales. Teniendo control como administrador, médico y bodega<br />
                para gestionar traslados de médicos, expedientes de pacientes y control de medicamentos.<br />
                Al hacer click en la imagen pueden acceder a GitHub para su instalación.</p>
                <a href="https://github.com/LINDAINES213/API_REST_BD_P2">
                  <img src="bdd.png" alt="Base de datos" className="imgProjectRight"></img>
                </a>
            </div>
            <h4>Juego de memoria hecho en React.</h4>
            <div className="containerProjects">
                <a href="https://uvgenios.online/21008/Lab6Final/MemoryCardGame.html">
                  <img src="memory.png" alt="memoria react" className="imgProjectLeft"></img>
                </a>
                <p>Un juego de memoria de animales que hice en la universidad. Al hacer click en la <br />
                imagen podrán jugarlo, mientras aquí está el repositorio en GitHub: <br />
                <a href="https://github.com/MarioGuerra21008/Lab6WebReact">Ver repositorio.</a>
                </p>
            </div>
            <h4>Réplica de página web de Discord.</h4>
            <div className="containerProjects">
                <p>Uno de los proyectos que más me gustó hacer. Repliqué la página de
                    <a href="https://discord.com/"> Discord</a> <br />
                    componente por componente y este fue el resultado. Al hacerle click a la imagen <br />
                    podrán acceder a ver el resultado. Y aquí está el repositorio en GitHub: <br />
                    <a href="https://github.com/MarioGuerra21008/Proyecto1Web">Ver repositorio.</a>
                </p>
                <a href="https://uvgenios.online/21008/Proyecto1Web/dist/index.html">
                  <img src="discord.svg" alt="discord" className="imgProjectRight"></img>
                </a>
            </div>
            <h4>Aplicación de sistema de boletos para Liga Nacional de Fútbol de Guatemala.</h4>
            <div className="containerProjects">
                <a href="https://github.com/LINDAINES213/Proyecto_LN_Tickkets">
                  <img src="lntickets.jpeg" alt="tickets" className="imgProjectLeft"></img>
                </a>
                <p>En 2022 hicimos una aplicación de boletos para los encuentros de la Liga Nacional <br />
                de Futbol de Guatemala, para ver el resultado hagan click en la imagen y entrar a GitHub. <br />
                Esta aplicación fue hecha con Kotlin en Android Studio.</p>
            </div>
            <h4>Diario de investigación para proyecto personal Tick4U.</h4>
            <div className="containerProjects">
                <p>Por último, y hablando de boletería, también hice un proyecto de una aplicación de <br />
                boletería para muchos más eventos sociales. Si quieren ver mi investigación aquí tienen el link,<br />
                solo hagan click en el boleto.</p>
                <a href="https://www.canva.com/design/DAFjUEHob3Q/k7TXcI08HXIxDgPiA_iFJg/edit?utm_content=DAFjUEHob3Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <img src="tick4u.png" alt="tick4u" className="imgProjectRight"></img>
                </a>
            </div>
        </div>
    )
}

export default Projects