import { Link } from 'react-router-dom';
import JS from "../../../public/icons/bxl-javascript.svg";
import HTML from "../../../public/icons/bxl-html5.svg";
import CSS from "../../../public/icons/bxl-css3.svg";
import REACT from "../../../public/icons/bxl-react.svg";
import NODEJS from "../../../public/icons/bxl-nodejs.svg";
import GITHUB from "../../../public/icons/bxl-github.svg";
import Blast from "../../../public/logos/Mimi-blaster.png";
import whatsapp from "../../../public/icons/bxl-whatsapp.svg";
import email from "../../../public/icons/bxs-envelope.svg";
import linkedin from '../../../public/icons/bxl-linkedin.svg'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footer__container1'>
                <img className='footer__slogan' src={Blast} alt="slogan" />
                <ul className='footer__listIcons'>
                    <li className='footer__listIcon'><img className='footer__listIcon--js' src={JS} alt="Java Script" /></li>
                    <li className='footer__listIcon'><img className='footer__listIcon--html' src={HTML} alt="HTML" /></li>
                    <li className='footer__listIcon'><img className='footer__listIcon--css' src={CSS} alt="CSS" /></li>
                    <li className='footer__listIcon'><img className='footer__listIcon--react' src={REACT} alt="React" /></li>
                    <li className='footer__listIcon'><img className='footer__listIcon--nodejs' src={NODEJS} alt="NodeJS" /></li>
                    <li className='footer__listIcon'><img className='footer__listIcon--github' src={GITHUB} alt="GitHub" /></li>
                </ul>
            </section>

            <div className='footer__container2'>
            <Link to="/contact-me">
                    <button className='footer__btn--contact'>Contact Me</button>
                </Link>
            </div>

            <section className='footer__container3'>
                <h3 className='footer__h3'>contactame</h3>
                <ul className='footer__listContacts'>
                    <li className='footer__listContact'>
                        <a href="https://wa.me/+573015187340" target="_blank" rel="noopener noreferrer">
                            <img className='footer__listContact--imgWhatsapp' src={whatsapp} alt="WhatsApp.com" />
                            <p className='footer__listContact--pWhatsapp'>+ 57 3015187340</p>
                        </a>
                    </li>
                    <li className='footer__listContact'>
                        <a href="https://www.linkedin.com/in/andres-felipe-d%C3%ADaz-gamba-4a26502a4/" target="_blank" rel="noopener noreferrer">
                            <img className='footer__listContact--imgLinkedin' src={linkedin} alt="linkedin.com" />
                            <p className='footer__listContact--pLinkedin'>www.linkedin.com</p>
                        </a>
                    </li>
                    <li className='footer__listContact'>
                        <img className='footer__listContact--imgEmail' src={email} alt="email " />
                        <p className='footer__listContact--pEmail'>comandoxrp@hotmail.com</p>
                    </li>
                </ul>
            </section>
        </footer>
    )
}
