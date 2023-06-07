import React from "react";
import imagen from '../assets/Equipo.png';
import '../styles/form.css'
const Form = () => {
    return (
        <div className="form-container" id="formulario">
            <form action="dialog">
                <label htmlFor="nombre"><span className="red">*</span> Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required />

                <label htmlFor="email"><span className="red">*</span> Correo electrónico:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="telefono"><span className="red">*</span> Número de teléfono:</label>
                <input type="tel" id="telefono" name="telefono" />

                <label htmlFor="edad"><span className="red">*</span> Edad:</label>
                <input type="number" id="edad" name="edad" required min={18} />

                <label htmlFor="especializacion">Área de especialización:</label>
                <input type="text" id="especializacion" name="especializacion" />

                <button type="submit">Enviar</button>
            </form>
            <div className="img-form-container">
                <img src={imagen} alt="" className="team-taxis-libres" />
                <p className="description-img">
                    Trabajamos para ti: brindándote soluciones innovadoras y eficientes en el sector del transporte.
                </p>
            </div>
        </div>
    );
}
export default Form;