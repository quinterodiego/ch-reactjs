import React from 'react';

const NavBar = () => {

    return (
        <>
            <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Mi Proyecto</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default NavBar;