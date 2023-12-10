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

export const Footer = () => {
    return (
        <div>
            <section>
                <img src={Blast} alt="slogan" />
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
                <h3>contactame</h3>
                <ul>
                    <li>
                        <a href="https://wa.me/+573015187340" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="WhatsApp.com" />
                            <p>+ 57 3015187340</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andres-felipe-d%C3%ADaz-gamba-4a26502a4/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin.com" />
                            <p>www.linkedin.com</p>
                        </a>
                    </li>
                    <li>
                        <img src={email} alt="email " />
                        <p>comandoxrp@hotmail.com</p>
                    </li>
                </ul>

            </section>

        </div>
    )
}
