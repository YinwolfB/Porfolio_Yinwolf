import { Link } from 'react-router-dom';
import Blast from "../../../public/logos/Mimi-blaster.png";
import './NavBar.css'

export const NavBar = () => {

    return (
        <nav className='nav'>
            <img className='nav__slogan' src={Blast} alt="slogan" />
            <ul className='nav__containLinks'>
                <li className='nav__link'><Link to="/"> <span className='nav__link--home'> Home </span> </Link></li>
                <li className='nav__link'><Link to="/about-me"> <span className='nav__link--aboutMe'> About Me </span> </Link></li>
                <li className='nav__link'><Link to="/skills"> <span className='nav__link--skills'> Skills </span> </Link></li>
                <li className='nav__link'><Link to="/projects"> <span className='nav__link--projects'> Projects </span> </Link></li>
                <li className='nav__link'><Link to="/contact-me"> <span className='nav__link--contactMe'> Contact Me </span> </Link></li>
            </ul>
        </nav>
    );
};


