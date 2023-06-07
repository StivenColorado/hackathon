import React from "react";
import { useState } from "react";
import '../styles/prizes.css'
import TargetPrizes from "./targetPrizes";
import icon1 from '../assets/icon-prize/icon1_prize.png'
import icon2 from '../assets/icon-prize/icon2_prize.png'
import icon3 from '../assets/icon-prize/icon3_prize.png'
import icon4 from '../assets/icon-prize/icon4_prize.png'
import icon5 from '../assets/icon-prize/icon5_prize.png'

const Prizes = () => {
    //funcion para cuando se presione el boton "+ ver mas"
    //cambia el estado
    const [animacionActiva, setAnimacionActiva] = useState(false);

    const handleButtonClick = () => {
        setAnimacionActiva(true);
    };
    const handleCloseButtonClick = () => {
        setAnimacionActiva(false);
    };
    return (
        <div className="prizes-container" id="premios">
            <div className="prizes-article">
                <p className="title-prizes">¡Descubre los emocionantes premios del Hackathon de Taxis Libres!</p>
                <div className="icons-prizes">
                    <span className="--1"></span>
                    <span className="--2"></span>
                    <span className="--3"></span>
                    <span className="--4"></span>
                    <span className="--5"></span>
                </div>
                <div className="description-prizes">
                    En esta sección, te presentamos los increíbles premios que puedes ganar al participar en el Hackathon
                    de Taxis Libres. Estamos comprometidos en reconocer y recompensar tu talento y creatividad.
                    ¡Aquí encontrarás una combinación única de entretenimiento y reconocimiento profesional!
                </div>
                <button className="btn-show-prizes" onClick={handleButtonClick}>
                    + Ver premios
                </button>
            </div>
            <div className={`targets-prizes ${animacionActiva ? "ActivarAnimacion" : "DesactivarAnimacion"}`} >
                <span className="close-targets-prizes" onClick={handleCloseButtonClick}></span>
                <TargetPrizes imagen={icon1} title="Experiencias VIP inolvidables"
                    description="
                Boletos para eventos deportivos de primera categoría hasta
                entradas para conciertos de renombre, te brindamos la oportunidad 
                de disfrutar de experiencias exclusivas y emocionantes.
                "/>
                <TargetPrizes imagen={icon2} title="Viajes de ensueño"
                    description="
                    Imagina explorar destinos increíbles con nuestros premios de 
                    viaje todo incluido. Relájate y celebra tu éxito en un entorno
                    fascinante mientras te mimamos con todos los detalles cubiertos.
                "/>
                <TargetPrizes imagen={icon3} title="Mentoría de expertos destacados"
                    description="
                    Nada supera el valor de recibir consejos y orientación personalizada 
                    de profesionales de la industria. Los ganadores tendrán la oportunidad
                     de recibir mentoría de expertos destacados que los ayudarán a avanzar 
                     en sus carreras.
                "/>
                <TargetPrizes imagen={icon4} title="Reconocimiento en la industria"
                    description="
                    Destaca entre tus pares con nuestro reconocimiento oficial y menciones 
                    especiales en eventos y medios especializados. Te ayudaremos a fortalecer
                     tu perfil profesional y a ampliar tu red de contactos.
                "/>
                <TargetPrizes imagen={icon5} title="Premios en efectivo"
                    description="
                    Además del reconocimiento y las experiencias exclusivas, también podrás 
                    recibir premios en efectivo para impulsar tu próximo proyecto o invertir 
                    en tu desarrollo profesional.
                "/>

            </div>
        </div>
    );
}

export default Prizes;