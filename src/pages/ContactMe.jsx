import { useState } from "react";

export const ContactMe = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleMailTo = () => {
        const subject = encodeURIComponent("Mensaje desde Porfolio");
        const body = encodeURIComponent(`Nombre/Empresa: ${name}\nEmail: ${email}\nMensaje: ${message}`);

        window.location.href = `mailto:comandoxrp@hotmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div>
            <h2>Trabajemos juntos</h2>
            <section>
                <form>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Nombre / Empresa:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Mensaje:
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>
                    <br />
                    <button type="button" onClick={handleMailTo}>Enviar</button>
                </form>
            </section>

            <div>
                <h2>Visita mis redes.</h2>
                <section>
                    <a href="https://wa.me/+573015187340" target="_blank" rel="noopener noreferrer">
                        <img src="ruta_de_la_imagen_whatsapp" alt="WhatsApp.com" />
                    </a>
                    <a href="https://github.com/YinwolfB?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <img src="ruta_de_la_imagen_github" alt="GitHub.com" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="ruta_de_la_imagen_linkedin" alt="LinkedIn.com" />
                    </a>
                </section>
            </div>
        </div>
    );
};
