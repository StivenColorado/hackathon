import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ThemeToggle from './buttonMode'
import logo from '../assets/logo-escritorio.png'
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='container-logo-button'>
                <img className='logo' src={logo}></img>
                <ThemeToggle />
            </div>
            <ul className="menu">

                <li>
                    <a href="#descripcion">Descripción del evento</a>
                    <ul className="submenu">
                        <li>
                            <a href="#objetivo">Objetivo del evento</a>
                        </li>
                        <li>
                            <a href="#premios">Premios</a>
                        </li>
                        <li>
                            <a href="#patrocinadores">Patrocinadores oficiales</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#fechas">Fechas y ubicación</a>
                </li>
                <li>
                    <a href="#formulario">Formulario de inscripción</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
