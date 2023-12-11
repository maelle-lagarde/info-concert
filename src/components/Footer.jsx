import React from "react";
import logo from '../img/logo.svg';

export default function Footer () {
    return (
        <div className="footer">
            <div className="row-footer">
                <img id="logo-nav" src={logo} alt="logo" />

                <div className="links-footer">
                    <ul>
                        <li><a href="#">conditions d'utilisations</a></li>
                        <li><a href="#">politique données personnelles</a></li>
                        <li><a href="#">informations du consommateurs</a></li>
                        <li><a href="#">politique cookies</a></li>
                    </ul>
                </div>
            </div>
            
            
            <div className="copyright">
                <p>© 2023 Info Concert Tous droits réservés.</p>
                <a href="#"><button>contact</button></a>
            </div>
        </div>
    );
}