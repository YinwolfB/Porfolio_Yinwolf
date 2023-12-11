
import './Home.css';

import JS from "../../../public/logos/logo-javascript.png";
import HTML from "../../../public/logos/html_logo.png";
import CSS from "../../../public/logos/css-logo.png";
import REACT from "../../../public/logos/react-logo.png";
import NODEJS from "../../../public/logos/nodejs-logo.png";
import GITHUB from "../../../public/logos/github-logo.png";


export const HomePage = () => {
    return (
        <div className="home">
            <section className="home__container1">
                <h1 className="home__teatle--h1">Andres Felipe Diaz Gamba</h1>
                <h2 className="home__teatle--h2">
                    <span className="home__teatle--dev">Desarrollador Web</span>
                    <span className="home__teatle--FS">Full Stack</span>
                </h2>
            </section>

            <section className="home__container2">
                <p className="home__p">Dispuesto a ofrecer mis conocimientos y utilizar tecnologías para el desarrollo o solución de problemas digitales.</p>
            </section>

            <section className='home__carrusel'>
                {/* "Imágenes o iconos de tecnologías usadas para el trabajo" */}
                <ul>
                    <li><img src={JS} alt="Java Script" /></li>
                    <li><img src={HTML} alt="HTML" /></li>
                    <li><img src={CSS} alt="CSS" /></li>
                    <li><img src={REACT} alt="React" /></li>
                    <li><img src={NODEJS} alt="NodeJS" /></li>
                    <li><img src={GITHUB} alt="GitHub" /></li>
                </ul>
            </section>

            <section className="home__container3">
                <p className="home__p">Muy interesado en trabajar contigo, combinando nuestras ideas y conocimientos.</p>
            </section>
        </div>
    );
}; 