import React from "react";
import '../styles/Pamphlet.css'
import img from '../assets/publish.png'
const Pamphlet = () => {
    return (
        <section className="phamphlet-container">
            <article className="pamphlet-article">
                <div className="header-article">
                    <span className="icon-header-article"></span>
                    Taxis Libres
                </div>
                <p className="phamplet-title">¡Prepárate para la emocionante aventura del Hackathon de Taxis Libres!</p>
                <p className="phamplet-description">Es hora de liberar tu creatividad y demostrar tus habilidades en
                    una competencia única en su clase. En este evento anual, ingenieros,
                    programadores, diseñadores, comunicadores, analistas de datos y diversos
                    perfiles se reúnen para dar rienda suelta a su ingenio y talento.</p>
                <button className="enrollment-button">
                    Inscribirse
                </button>
            </article>
            <img className="image-pamphlet" src={img} alt="si" />
        </section>
    );
}
export default Pamphlet;