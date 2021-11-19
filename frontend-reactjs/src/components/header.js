import React from "react";
import './header.css'
import {Link} from "react-router-dom"
import LOGO from '../images/logo.png'

function Header() {
    return(
        <header>
            <div className="headerH">
                <Link to="/">
                    <div className="Logo">
                        <img src={LOGO} alt=""/>
                    </div>
                </Link>  
                <Link to="/">  
                    <div className="Titulo">
                        <p className="titulo">GRH</p>
                    </div>
                </Link> 
            </div>
        </header>
    )
}

export default Header