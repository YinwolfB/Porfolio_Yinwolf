import { Link } from 'react-router-dom';
import Blast from "../../../public/logos/Mimi-blaster.png";

export const NavBar = () => {

    return (
        <nav>
            <img src={Blast} alt="slogan" />
            <ul>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact-me">Contact Me</Link></li>
            </ul>
        </nav>
    );
};


