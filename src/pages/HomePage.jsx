
/* eslint-disable react/no-unescaped-entities */

import JS from "../../public/logos/logo-javascript.png";
import HTML from "../../public/logos/html_logo.png";
import CSS from "../../public/logos/css-logo.png";
import REACT from "../../public/logos/react-logo.png";
import NODEJS from "../../public/logos/nodejs-logo.png";
import GITHUB from "../../public/logos/github-logo.png";

export const HomePage = () => {
    return (
        <div>
            <section>
                <h1>Andres Felipe Diaz Gamba</h1>
                <h2>
                    <span>Desarrollador Web</span>
                    <span>Full Stack</span>
                </h2>
            </section>

            <section>
                <p>Dispuesto a ofrecer mis conocimientos y utilizar tecnologías para el desarrollo o solución de problemas digitales.</p>
            </section>

            <section>
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

            <section>
                <p>Muy interesado en trabajar contigo, combinando nuestras ideas y conocimientos.</p>
            </section>
        </div>
    );
};