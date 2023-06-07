import React from "react";
import '../styles/sponsor.css';

const Sponsor = ( ) => {
    return(
        <div className="sponsor-container" id="patrocinadores">
            <div className="header-sponsor">
                <h1 className="sponsor-title">Patrocinadores</h1>
                <p className="description-title-sponsor">
                    Algunos de nuestros patrocinadores
                </p>
            </div>
            <div className="icon-sponsors">
                <div className="target-sponsor sponsor-1"></div>
                <div className="target-sponsor sponsor-2"></div>
                <div className="target-sponsor sponsor-3"></div>
                <div className="target-sponsor sponsor-4"></div>
                <div className="target-sponsor sponsor-5"></div>
                <div className="target-sponsor sponsor-6"></div>
            </div>
        </div>
    )
}
export default Sponsor;