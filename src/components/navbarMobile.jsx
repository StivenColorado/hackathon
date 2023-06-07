import React from "react";
import '../styles/navbarMobile.css'
function NavbarMobile({ className }) {
    return (
      <div className={`menu-mobile ${className}`}>
        {/* contenido del menú móvil */}
        <div className="section-navMobile">
          <span className="icon-navMobile __1"></span>
          <a href="#objetivo" className="text-navMobile">Objetivo</a>
        </div>

        <div className="section-navMobile">
          <span className="icon-navMobile __2"></span>
          <a href="#premios" className="text-navMobile">Premios</a>
        </div>

        <div className="section-navMobile">
          <span className="icon-navMobile __3"></span>
          <a href="#patrocinadores" className="text-navMobile">Patrocinadores</a>
        </div>


        <div className="section-navMobile">
          <span className="icon-navMobile __4"></span>
          <a href="#fechas" className="text-navMobile">Fechas y ubicacion</a>
        </div>

        <div className="section-navMobile">
          <span className="icon-navMobile __5"></span>
          <a href="#formulario" className="text-navMobile">Formulario inscripcion</a>
        </div>
      </div>
    );
  }
  
  export default NavbarMobile;
  