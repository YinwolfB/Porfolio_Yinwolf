import { Proyectos } from "../components/Proyectos/Proyectos";

export const Projects = () => {
    return (
        <div>
            <h2>Proyectos</h2>
            <p>He realizado distintos proyectos de programación en los cuales quiero enfocarme para mostrar mis habilidades como programador.</p>
            <section>  
                <Proyectos/>
            </section>

            <section>
                <h2>Tecnologías o Herramientas Utilizadas </h2>
                <div>
                    <a id="javascript"></a>
                    <img src="" alt="JavaScript" />
                    <h3>JavaScript:</h3>
                    <p>Lenguaje de programación ampliamente utilizado en el desarrollo web para agregar interactividad y dinamismo a las páginas.</p>
                </div>

                <div>
                    <img src="" alt="HTML" />
                    <h3>HTML:</h3>
                    <p>Lenguaje de Marcado de Hipertexto que define la estructura y contenido de una página web mediante etiquetas que indican la función de los elementos, como títulos, párrafos, enlaces e imágenes.</p>
                </div>

                <div>
                    <img src="" alt="CSS" />
                    <h3>CSS:</h3>
                    <p>Hojas de estilo en cascada que permiten dar estilo y diseño a las páginas web, controlando aspectos visuales como colores, fuentes y disposición de elementos.</p>
                </div>

                <div>
                    <img src="" alt="React" />
                    <h3>React:</h3>
                    <p>Biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas, facilitando el desarrollo de aplicaciones de una sola página (SPA).</p>
                </div>

                <div>
                    <img src="" alt="NodeJS" />
                    <h3>NodeJS:</h3>
                    <p>Entorno de ejecución para JavaScript en el lado del servidor, permitiendo construir aplicaciones escalables y de alto rendimiento.</p>
                </div>

                <div>
                    <img src="" alt="Solicitud de Información Local o estática" />
                    <h3>Solicitud de Información Local o estática:</h3>
                    <p>Acceso a recursos locales dentro del proyecto, como imágenes, archivos estáticos y otros.</p>
                </div>

                <div>
                    <img src="" alt="Solicitud de Información por API o dinámicos" />
                    <h3>Solicitud de Información por API o dinámicos:</h3>
                    <p>Interacción con servicios externos a través de API (Interfaz de Programación de Aplicaciones) para obtener o enviar datos, integrando información dinámica en aplicaciones web.</p>
                </div>

                <div>
                    <img src="" alt="CRUD (Create, Read, Update, Delete)" />
                    <h3>CRUD (Create, Read, Update, Delete):</h3>
                    <p>Conjunto de operaciones básicas para la gestión de datos en aplicaciones, incluyendo la creación, lectura, actualización y eliminación de información, comúnmente asociado con bases de datos y servicios web.</p>
                </div>
            </section>

        </div>
    );
};
