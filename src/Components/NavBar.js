import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand text-white" href="#">Mi Proyecto</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </>
    );
}

export default NavBar;