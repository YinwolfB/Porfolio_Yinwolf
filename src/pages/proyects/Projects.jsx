import { Footer } from "../../components/Footer/Footer";
import { NavBar } from "../../components/NavBar/NavBar";
import { Proyectos } from "../../components/Proyectos/Proyectos";
import { useState } from 'react';

import JS from "../../../public/icons/bxl-javascript.svg";
import HTML from "../../../public/icons/bxl-html5.svg";
import CSS from "../../../public/icons/bxl-css3.svg";
import REACT from "../../../public/icons/bxl-react.svg";
import NODEJS from "../../../public/icons/bxl-nodejs.svg";
import estatica from "../../../public/icons/bx-hdd.svg";
import server from "../../../public/icons/bx-server.svg";
import './Projects.css'

export const Projects = () => {

    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    const toggleInformacion = () => {
        setMostrarInformacion(!mostrarInformacion);
    };

    return (
        <div className="projects">
            <nav className="projects_nav">
                <NavBar />
            </nav>
            <section className="projects_container">
                <h2 className="projects_title">Proyectos</h2>
                <p className="projects_p">He realizado distintos proyectos de programación en los cuales quiero enfocarme para mostrar mis habilidades como programador.</p>
                <section className="projects_cardprojects">
                    <Proyectos />
                </section>

                <button className="projects_btn" onClick={toggleInformacion}>
                    {mostrarInformacion ? 'Ocultar Información' : 'Mostrar Información'}
                </button>

                {mostrarInformacion && (
                    <div>
                        <h2 className="projects__tec">Tecnologías o Herramientas Utilizadas </h2>
                        <section className="projects__spoiler">
                            <div>
                                <a id="javascript"></a>
                                <img className="projects_img" src={JS} alt="JavaScript" />
                                <h3>JavaScript:</h3>
                                <p>Lenguaje de programación ampliamente utilizado en el desarrollo web para agregar interactividad y dinamismo a las páginas.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={HTML} alt="HTML" />
                                <h3>HTML:</h3>
                                <p>Lenguaje de Marcado de Hipertexto que define la estructura y contenido de una página web mediante etiquetas que indican la función de los elementos, como títulos, párrafos, enlaces e imágenes.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={CSS} alt="CSS" />
                                <h3>CSS:</h3>
                                <p>Hojas de estilo en cascada que permiten dar estilo y diseño a las páginas web, controlando aspectos visuales como colores, fuentes y disposición de elementos.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={REACT} alt="React" />
                                <h3>React:</h3>
                                <p>Biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas, facilitando el desarrollo de aplicaciones de una sola página (SPA).</p>
                            </div>

                            <div>
                                <img className="projects_img" src={NODEJS} alt="NodeJS" />
                                <h3>NodeJS:</h3>
                                <p>Entorno de ejecución para JavaScript en el lado del servidor, permitiendo construir aplicaciones escalables y de alto rendimiento.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={estatica} alt="Solicitud de Información Local o estática" />
                                <h3>Solicitud de Información Local o estática:</h3>
                                <p>Acceso a recursos locales dentro del proyecto, como imágenes, archivos estáticos y otros.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={server} alt="Solicitud de Información por API o dinámicos" />
                                <h3>Solicitud de Información por API o dinámicos:</h3>
                                <p>Interacción con servicios externos a través de API (Interfaz de Programación de Aplicaciones) para obtener o enviar datos, integrando información dinámica en aplicaciones web.</p>
                            </div>

                            <div>
                                <img className="projects_img" src={estatica} alt="CRUD (Create, Read, Update, Delete)" />
                                <h3>CRUD (Create, Read, Update, Delete):</h3>
                                <p>Conjunto de operaciones básicas para la gestión de datos en aplicaciones, incluyendo la creación, lectura, actualización y eliminación de información, comúnmente asociado con bases de datos y servicios web.</p>
                            </div>
                        </section>
                    </div>
                )}


            </section>
            <footer>
                <Footer />
            </footer>

        </div>
    );
};
