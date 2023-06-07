import React from "react";
import '../styles/footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="section1-footer">
                <div className="logo-footer"></div>
                <li><a href="#">Aviso legal Pagina web</a></li>
                <li><a href="#">Politica de Tratamiento de datos</a></li>
                <li><a href="#">Ayuda</a></li>
            </div>
            <div className="section-icons-footer">
                <div className="footer-icon __1"></div>
                <div className="footer-icon __2"></div>
                <div className="footer-icon __3"></div>
                <div className="footer-icon __4"></div>
                <div className="footer-icon __5"></div>
            </div>
            <div className="copyright-container">
                @ 2023 Taxis Libres
            </div>
        </footer>
    );
}

export default Footer;