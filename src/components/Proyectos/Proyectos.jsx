/* eslint-disable no-unused-vars */
import JS from "../../../public/icons/bxl-javascript.svg";
import HTML from "../../../public/icons/bxl-html5.svg";
import CSS from "../../../public/icons/bxl-css3.svg";
import REACT from "../../../public/icons/bxl-react.svg";
import NODEJS from "../../../public/icons/bxl-nodejs.svg";
import estatica from "../../../public/icons/bx-hdd.svg";
import server from "../../../public/icons/bx-server.svg";

import gifGalleta from "../../../public/img/imgProyectos/galleta.png";
import gifWeather from "../../../public/img/imgProyectos/weather.png";
import gifUniverso from "../../../public/img/imgProyectos/Rick_Morty.png";
import gifCRUD from "../../../public/img/imgProyectos/crud.png";
import gifPokedex from "../../../public/img/imgProyectos/pokedex.png";
import './Proyectos.css'

export const Proyectos = () => {
    return (
        <div className="proyectos">
            <ul className="proyectos__container">
                <h2 className="proyecto__title">Galleta</h2>
                <li className="proyecto">
                    <ul className="proyecto__container">
                        <li className="proyecto__containerlist"><a href="https://galleta-fortuna-yin.netlify.app" target="_blank" rel="noopener noreferrer"><img className="proyecto__containerlist--img" src={gifGalleta} alt="gif Galleta" /></a></li>
                    </ul>
                </li>
                <li className="proyecto__containerlist--img">Este proyecto es una aplicación web que consiste en la solicitud de información estática del servidor local para generar frases al azar y un fondo que cambia de forma aleatoria.</li>
                <div className="proyecto__container--icons">
                    <li className="proyecto__icons"><img className="proyecto__icons--js" src={JS} alt="JavaScript" /></li>
                    <li className="proyecto__icons"><img className="proyecto__icons--html" src={HTML} alt="HTML" /></li>
                    <li className="proyecto__icons"><img className="proyecto__icons--css" src={CSS} alt="CSS" /></li>
                    <li className="proyecto__icons"><img className="proyecto__icons--react" src={REACT} alt="React" /></li>
                    <li className="proyecto__icons"><img className="proyecto__icons--estatica" src={estatica} alt="Solicitud de Información Local o estática" /></li>
                </div>
            </ul>

            <ul className="proyectos__container">
                <h2 className="proyecto__title">Weather</h2>
                <li className="proyecto">
                    <ul className="proyecto__containerlist">
                        <li className="proyecto__containerlist"><a href="https://weather-andresd.netlify.app" target="_blank" rel="noopener noreferrer"><img className="proyecto__containerlist--img" src={gifWeather} alt="gif Weather" /></a></li>
                    </ul>
                </li>
                <li className="proyecto__containerlist--img">Este proyecto es una aplicación web que realiza una solicitud o llamado a una API que proporciona información del clima en tiempo real a partir de la ubicación del usuario. También tiene un botón donde se puede cambiar el valor de la temperatura de grados Celsius a Fahrenheit.</li>
                <div className="proyecto__container--icons">
                    <li><img src={JS} alt="JavaScript" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={server} alt="Solicitud de Información por API o dinámicos" /></li>
                </div>
            </ul>

            <ul className="proyectos__container">
                <h2 className="proyecto__title">Universo de Rick and Morty</h2>
                <li className="proyecto">
                    <ul className="proyecto__containerlist">
                        <li className="proyecto__containerlist"><a href="https://univers-of-rick-and-morty-yinw.netlify.app" target="_blank" rel="noopener noreferrer"><img className="proyecto__containerlist--img" src={gifUniverso} alt="gif universo de Rick and Morty" /></a></li>
                    </ul>
                </li>
                <li className="proyecto__containerlist--img">Este proyecto es una aplicación web sobre la famosa serie animada Rick And Morty, que permite explorar su vasto multiverso, ver sus distintos personajes y sus condiciones de vivos o muertos. Inicia con la solicitud de un valor aleatorio entre 1 y 126, pero también permite al usuario ingresar un valor y así hacer la solicitud a la API. También cuenta con una pantalla de carga y un control de errores.</li>
                <div className="proyecto__container--icons">
                    <li><img src={JS} alt="JavaScript" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={estatica} alt="Solicitud de Información Local o estática" /></li>
                    <li><img src={server} alt="Solicitud de Información por API o dinámicos" /></li>
                </div>
            </ul>

            <ul className="proyectos__container">
                <h2 className="proyecto__title">CRUD de usuarios</h2>
                <li className="proyecto">
                    <ul className="proyecto__containerlist">
                        <li className="proyecto__containerlist"><a href="https://user-crud-yin.netlify.app" target="_blank" rel="noopener noreferrer"><img className="proyecto__containerlist--img" src={gifCRUD} alt="gif CRUD de usuarios" /></a></li>
                    </ul>
                </li>
                <li className="proyecto__containerlist--img">Este proyecto es una aplicación web que se enfoca únicamente en el uso y manejo del CRUD de usuarios de forma local.</li>
                <div className="proyecto__container--icons">
                    <li><img src={JS} alt="JavaScript" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={estatica} alt="Solicitud de Información Local o estática" /></li>
                </div>
            </ul>

            <ul className="proyectos__container">
                <h2 className="proyecto__title">PokéDex</h2>
                <li className="proyecto">
                    <ul className="proyecto__containerlist">
                        <li className="proyecto__containerlist"><a href="https://pokedex-by-yinwolf.netlify.app" target="_blank" rel="noopener noreferrer"><img className="proyecto__containerlist--img" src={gifPokedex} alt="gif PokéDex" /></a></li>
                    </ul>
                </li>
                <li className="proyecto__containerlist--img">Este proyecto es una aplicación web basada en el famoso anime japonés Pokémon. La idea es la creación de una Pokédex con enrutamiento, pero con una ruta protegida desde el inicio, donde el usuario debe proporcionar un nombre para acceder a las demás páginas. Esta Pokédex contiene una solicitud a una API que proporciona información detallada sobre los Pokémon y la presenta al usuario, también tiene filtro de pokemons por tipo un formulario para que el usuario pueda buscar por nombre su pokemon favorito.</li>
                <div className="proyecto__container--icons">
                    <li><img src={JS} alt="JavaScript" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={estatica} alt="Solicitud de Información Local o estática" /></li>
                    <li><img src={server} alt="Solicitud de Información por API o dinámicos" /></li>
                </div>
            </ul>
        </div>
    );
};
