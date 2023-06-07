import React from "react";
import '../styles/goal.css'
const Goal = () => {
    return (
        <div className="goal-container" id="objetivo">
            <h1 className="title-goal">
                ¡Únete al emocionante Hackathon de Taxis Libres y sé parte de la innovación!
            </h1>
            <p className="goal-description">
                El objetivo principal del Hackathon de Taxis Libres
                es desafiar a los participantes a ejecutar retos en movilidad
                en taxi en un tiempo máximo de tres días.
            </p>


            <ul className="timeline">
                <li className="point active">
                    <div className="point-content">
                        <h3>Punto 1</h3>
                        <p>Definicion de retos</p>
                    </div>
                </li>
                <li className="point">
                    <div className="point-content">
                        <h3>Punto 2</h3>
                        <p>Formacion de equipos</p>
                    </div>
                </li>
                <li className="point">
                    <div className="point-content">
                        <h3>Punto 3</h3>
                        <p>Investigacion y analisis</p>
                    </div>
                </li>
                <li className="point">
                    <div className="point-content">
                        <h3>Punto 4</h3>
                        <p>Desarrollo de soluciones</p>
                    </div>
                </li>
                <li className="point">
                    <div className="point-content">
                        <h3>Punto 5</h3>
                        <p>Implementacion y presentacion</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Goal;