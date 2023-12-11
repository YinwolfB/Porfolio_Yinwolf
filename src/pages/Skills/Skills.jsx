import JS from "../../../public/icons/bxl-javascript.svg";
import HTML from "../../../public/icons/bxl-html5.svg";
import CSS from "../../../public/icons/bxl-css3.svg";
import REACT from "../../../public/icons/bxl-react.svg";
import NODEJS from "../../../public/icons/bxl-nodejs.svg";
import GITHUB from "../../../public/icons/bxl-github.svg";
import local from "../../../public/icons/bx-hdd.svg";
import server from "../../../public/icons/bx-server.svg";
import './Skills.css'
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";

export const Skills = () => {
    return (
        <div className="skills">
            <nav className="skills__nav">
                <NavBar />
            </nav>
            <div className="skills__container0">
                <section className="skills__container1">
                    <h2 className="skills__container--h2">Programador:</h2>
                    <p className="skills__container--p">
                        Como programador Full Stack, he adquirido destrezas en distintas tecnologías como:
                    </p>
                    <div>
                        <ul className="skills__listIcons">
                            <li className="skills__listIcon" data-tooltip="JavaScript">
                                <img className="skills__listIcon--js" src={JS} alt="JavaScript" />
                            </li>
                            <li className="skills__listIcon" data-tooltip="HTML">
                                <img className="skills__listIcon--html" src={HTML} alt="HTML" />
                            </li>
                            <li className="skills__listIcon" data-tooltip="CSS">
                                <img className="skills__listIcon--css" src={CSS} alt="CSS" />
                            </li>
                            <li className="skills__listIcon" data-tooltip="React">
                                <img className="skills__listIcon--react" src={REACT} alt="React" />
                            </li>
                            <li className="skills__listIcon" data-tooltip="NodeJS">
                                <img className="skills__listIcon--node" src={NODEJS} alt="NodeJS" />
                            </li>
                        </ul>
                    </div>
                    <p className="skills__icon">
                        También he trabajado con datos estáticos
                        <span>
                            <img className="skills__icon--local" src={local} alt="Datos estáticos / Data static" />
                        </span>
                        o con peticiones a API
                        <span>
                            <img className="skills__icon--api" src={server} alt="Peticiones API / API requests" />
                        </span>.
                        Además, he utilizado herramientas de repositorio como GitHub
                        <span>
                            <img className="skills__icon--github" src={GITHUB} alt="GitHub" />
                        </span>
                        para el control de versiones y colaboración.
                    </p>
                </section>

                {/* Otras habilidades */}

                <section className="skills__container2">
                    <h2 className="skills__container--h2">Otras habilidades:</h2>
                    <p className="skills__container--p">
                        He adquirido habilidades y experiencias en otros campos fuera de la programación <span>Full Stack</span>, tales como:
                    </p>
                    <ul className="skills__othersContainer">
                        <li className="skills__other--music">
                            <strong>Músico:</strong>
                            <ul>
                                <li className="skills__other--music">He realizado trabajos como compositor, arreglista e intérprete.</li>
                            </ul>
                        </li>
                        <li className="skills__other--edu">
                            <strong>Educador:</strong>
                            <ul>
                                <li>Mis hermanos son educadores, lo que me ha inspirado paciencia y calma para enseñar mis conocimientos. Por lo tanto, he desarrollado actividades como profesor de música y en áreas de matemáticas y física.</li>
                            </ul>
                        </li>
                        <li className="skills__other--pc">
                            <strong>Mantenimiento y ensamblaje de computadoras y consolas de videojuegos:</strong>
                            <ul>
                                <li>Desde pequeño me ha fascinado los videojuegos, por lo que siempre me he interesado en estos componentes, todo el desarrollo artístico, de software y hardware que implica en su creación. Investigando en libros y videos, comprendí la lógica y el funcionamiento del ensamblaje y mantenimiento de computadoras, lo cual también me llevó a la oportunidad de hacer mantenimiento de consolas de videojuegos.</li>
                                <li>Últimamente, me he interesado por comprender y aprender sobre Linux y la utilidad que ofrece a sus usuarios.</li>
                            </ul>
                        </li>
                        <li className="skills__other--audiov">
                            <strong>Creador de contenido audiovisual:</strong>
                            <ul className="skills__audiov">
                                <li>Como creador de contenido audiovisual, he utilizado distintas herramientas como:
                                    <ul className="skills__other--items">
                                        <li className="skills__item">
                                            <a href="https://www.sonycreativesoftware.com/vegaspro" target="_blank" rel="noopener noreferrer">Sony Vegas</a>
                                        </li>
                                        <li className="skills__item">
                                            <a href="https://filmora.wondershare.com/"target="_blank" rel="noopener noreferrer">Filmora</a>
                                        </li>
                                        <li className="skills__item">
                                            <a href="https://www.presonus.com/products/Studio-One"target="_blank" rel="noopener noreferrer">Studio One</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="skills__youtube">
                        <li>A continuación, comparto un video donde puedes ver un trabajo realizado para estudios Excalibur, en el cual hice todo el video y su respectiva edición de audio y video. También puedes escuchar una composición de rock creada por mí.</li>
                        <li>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/FCB035FGxn8?si=Cu52lWgGupWpYGdx"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </li>
                    </ul>
                </section>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};


