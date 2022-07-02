import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid Block__NavBar--toggle">
                {/* <a className="navbar-brand" href="#"></a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 NavBar__Links">
                            <li className="nav-item li__NavBar--item1">
                                <a
                                className="nav-link active text-white"
                                aria-current="page"
                                href="./index.html"
                                >Home</a>
                                </li>
                            <li className="nav-item">
                                <a
                                className="nav-link text-white li__NavBar--item2"
                                href="./QuienesSomos.html"
                                >Quiénes Somos</a>
                            </li>
                            <li className="nav-item">
                                <a
                                className="nav-link text-white li__NavBar--item3"
                                href="./NuestrosProductos.html"
                                >Nuestros Productos</a>
                            </li>
                            <li className="nav-item">
                                <a
                                className="nav-link text-white li__NavBar--item4"
                                href="./Ubicacion.html"
                                >Ubicación</a>
                            </li>
                                <li className="nav-item">
                                <a
                                className="nav-link text-white li__NavBar--item5"
                                href="./Contacto.html"
                                >Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        ); 
    }
  
}

export default NavBar;