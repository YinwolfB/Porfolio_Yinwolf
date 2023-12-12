
import './Home.css';
/* 
import JS from "../../../public/logos/logo-javascript.png";
import HTML from "../../../public/logos/html_logo.png";
import CSS from "../../../public/logos/css-logo.png";
import REACT from "../../../public/logos/react-logo.png";
import NODEJS from "../../../public/logos/nodejs-logo.png";
import GITHUB from "../../../public/logos/github-logo.png"; */
import { Footer } from '../../components/Footer/Footer';
import { NavBar } from '../../components/NavBar/NavBar';
import Slider from '../../components/slider/Slider';




export const HomePage = () => {



    return (
        <div className="home">
            <nav className='home__nav'>
                <NavBar />
            </nav>
            <div className="home__container0">
                <section className="home__container1">
                    <h1 className="home__teatle--h1">Andres Felipe Diaz Gamba</h1>
                    <h2 className="home__teatle--h2">
                        <span className="home__teatle--dev">Desarrollador Web</span>
                        <span className="home__teatle--FS">Full Stack</span>
                    </h2>
                    <p className="home__p1">Dispuesto a ofrecer mis conocimientos y utilizar tecnologías para el desarrollo o solución de problemas digitales.</p>
                </section>


                <section className='home__carrusel'>
                    {/* "Imágenes o iconos de tecnologías usadas para el trabajo" */}
{/*                     <ul className='home__carrusel--lists'>

                            <li className='home__list'><img className='home__list--js' src={JS} alt="Java Script" /></li>
                            <li className='home__list'><img className='home__list--html' src={HTML} alt="HTML" /></li>
                            <li className='home__list'><img className='home__list--css' src={CSS} alt="CSS" /></li>
                            <li className='home__list'><img className='home__list--react' src={REACT} alt="React" /></li>
                            <li className='home__list'><img className='home__list--node' src={NODEJS} alt="NodeJS" /></li>
                            <li className='home__list'><img className='home__list--github' src={GITHUB} alt="GitHub" /></li>

                    </ul> */}

                    <Slider/>
                </section>

                <section className="home__container2">
                    <p className="home__p2">Muy interesado en trabajar contigo, combinando nuestras ideas y conocimientos.</p>
                </section>
            </div>
            <footer className="home__footer">
                <Footer />
            </footer>
        </div>
    );
}; 