import JS from "../../public/icons/bxl-javascript.svg";
import HTML from "../../public/icons/bxl-html5.svg";
import CSS from "../../public/icons/bxl-css3.svg";
import REACT from "../../public/icons/bxl-react.svg";
import NODEJS from "../../public/icons/bxl-nodejs.svg";
import GITHUB from "../../public/icons/bxl-github.svg";
import local from "../../public/icons/bx-hdd.svg";
import server from "../../public/icons/bx-server.svg";

export const Skills = () => {
    return (
        <div>
            <section>
                <h2>Programador:</h2>
                <p>
                    Como programador <span>Full Stack</span>, he adquirido destrezas en distintas tecnologías como:
                </p>
                <div>
                    <ul>
                    <li><img src={JS} alt="Java Script" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={NODEJS} alt="NodeJS" /></li>
                    
                    </ul>
                </div>
                <p>
                    También he trabajado con datos estaticos <img src={local} alt="Datos estaticos / Data static" /> o con peticiones a API <img src={server} alt="Peticiones API / API requests" />. Además, he utilizado herramientas de repositorio como GitHub <img src={GITHUB} alt="GitHub" /> para el control de versiones y colaboración.
                </p>
            </section>

            {/* Otras habilidades */}

            <section>
                <h2>Otras habilidades:</h2>
                <p>
                    He adquirido habilidades y experiencias en otros campos fuera de la programación <span>Full Stack</span>, tales como:
                </p>

                <ul>
                    <li>Músico:
                        <ul>
                            <li>He realizado trabajos como compositor, arreglista e intérprete.</li>
                        </ul>
                    </li>
                    <li>Educador:
                        <ul>
                            <li>Mis hermanos son educadores, lo que me ha inspirado paciencia y calma para enseñar mis conocimientos. Por lo tanto, he desarrollado actividades como profesor de música y en áreas de matemáticas y física.</li>
                        </ul>
                    </li>
                    <li>Mantenimiento y ensamblaje de computadoras y consolas de videojuegos:
                        <ul>
                            <li>Desde pequeño me ha fascinado los videojuegos, por lo que siempre me he interesado en estos componentes, todo el desarrollo artístico, de software y hardware que implica en su creación. Investigando en libros y videos, comprendí la lógica y el funcionamiento del ensamblaje y mantenimiento de computadoras, lo cual también me llevó a la oportunidad de hacer mantenimiento de consolas de videojuegos.</li>
                            <li>Últimamente, me he interesado por comprender y aprender sobre Linux y la utilidad que ofrece a sus usuarios.</li>
                        </ul>
                    </li>
                    <li>Creador de contenido audiovisual:
                        <ul>
                            <li>Como creador de contenido audiovisual, he utilizado distintas herramientas como:
                                <ul>
                                    <li>Sony Vegas</li>
                                    <li>Filmora</li>
                                    <li>Studio One</li>
                                </ul>
                            </li>
                        </ul>
                        <ul>
                            <li>A continuación, comparto un video donde puedes ver un trabajo realizado para estudios Excalibur, en el cual hice todo el video y su respectiva edición de audio y video. También puedes escuchar una composición de rock creada por mí.</li>
                            <li><iframe width="560" height="315" src="https://www.youtube.com/embed/FCB035FGxn8?si=Cu52lWgGupWpYGdx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
};


