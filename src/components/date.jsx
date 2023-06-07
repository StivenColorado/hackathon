import React from "react";
import '../styles/date.css'
const Date = () => {
    return (
        <div className="date-container" id="fechas">
            <div className="title-date">
                <h1>HACKATHON 2023</h1>
            </div>
            <div className="place-date-container">
                <h2 className="place-text">Cali Colombia</h2>
                <h2>15 octubre 2023</h2>
            </div>
            <section className="numbers-container-date">
                <div className="box-info-numbers">
                    <span className="box-numbers">3</span>
                    <span className="box-text">Dias</span>
                </div>

                <div className="box-info-numbers">
                    <span className="box-numbers">+10</span>
                    <span className="box-text">Patrocinadores</span>
                </div>

                <div className="box-info-numbers">
                    <span className="box-numbers">+50</span>
                    <span className="box-text">Equipos participantes</span>
                </div>
            </section>
            <span className="box-text">Jurado de alto nivel</span>
            <div className="details-info-container">
                <div className="details">
                    <h1 className="title-details">Detalles del evento</h1>
                    <ul>
                        <li><span className="resaltador">Dirección del evento:</span> Centro de Convenciones "Innovate", Avenida 5N #23-50</li>
                        <li><span className="resaltador">Apertura de inscripciones:</span> Disponible en línea para participantes de todo el país</li>
                        <li><span className="resaltador">Día 1 del Hackathon:</span> Salones de trabajo en el Centro de Convenciones "Innovate" en Cali.</li>
                        <li><span className="resaltador">Día 2 del Hackathon:</span> Espacios de colaboración en Medellín, Bogotá y Bucaramanga.</li>
                        <li><span className="resaltador">Día final del Hackathon y presentaciones: </span>Auditorio principal del Centro de Convenciones "Innovate" en Cali.</li>
                    </ul>
                </div>
                <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078073.652274592!2d-80.38340875202518!3d3.4722988468887537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7b7b3b57ad3%3A0xc38afef38e6142c4!2sTaxis%20Libres%20Cali!5e0!3m2!1ses!2sco!4v1685892950197!5m2!1ses!2sco"
                 width="600" height="450"  loading="lazy" ></iframe>
            </div>
        </div>
    )
}
export default Date;