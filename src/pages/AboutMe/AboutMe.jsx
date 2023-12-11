import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import './AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="about">
            <nav className="about__nav">
                <NavBar />
            </nav>
            <section className="about__container0">
                <h1 className="about__h1" >SOBRE MI:</h1>

                <section className="about__section1">
                    <h2 className="about__teatle1">Apasionado Explorador Tecnológico:</h2>
                    <p className="about__p">
                        Soy una persona apasionada por la tecnología, un explorador incansable de un mundo que siempre me motiva a aprender y descubrir más sobre él.
                        <br></br>
                        Apartir de mi creatividad y como programador Full Stack con conocimientods de tecnologias como React y NodeJS formaremos un gran equipo.
                    </p>
                </section>

                <section className="about__section2">
                    <h2 className="about__teatle2">Diversidad de Conocimientos:</h2>
                    <p className="about__p">
                        A lo largo de mi vida, he adquirido conocimientos de manera empírica, explorando áreas tan diversas como la música y el mantenimiento de computadoras. Esta búsqueda constante de conocimiento me ha llevado a sumergirme en cursos especializados y a recopilar información de diversas fuentes, consolidando así mi experiencia.
                    </p>
                </section>

                <section className="about__section3">
                    <h2 className="about__teatle3">Formación Académica:</h2>
                    <p className="about__p">
                        Actualmente, curso la Licenciatura en Física en la Universidad Distrital Francis José de Caldas. Mi deseo de aprender y comprender todo lo que nos rodea me ha llevado a explorar el fascinante mundo de la física y verlo en un entorno digital.
                    </p>
                </section>

                <section className="about__section4">
                    <h2 className="about__teatle4">Trabajando y Aprendiendo Juntos:</h2>
                    <p className="about__p">
                        Me comprometo a aplicar lo aprendido de manera práctica. Estoy dispuesto a construir entornos digitales para materializar las ideas ideas, utilizando las herramientas disponibles. El objetivo es proporcionar una experiencia significativa al usuario. Mi enfoque se centra en disponer de nuestros conocimientos e ideas para generar y crear un excelente trabajo en equipo. Considero que trabajar y aprender juntos es clave para el crecimiento personal y colectivo.
                    </p>
                </section>

            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}
