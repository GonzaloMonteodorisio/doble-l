import React, { Component } from 'react';
import './main.css';
import Welcome from './Welcome';
import HomeButton from './HomeButton';
import Brands from './Brands';
import welcomeImage from '../images/logos/variedad-quesos-fondo-negro_modif1.jpg';

class Main extends Component {
    render() {
        return (
            <main>
                <Welcome welcomeImage={welcomeImage} message="Bienvenidos"/>
                <HomeButton message="Hacer Un Pedido"/>
                <Brands message="Nuestras Marcas"/>
            </main>
        ); 
    }  
}

export default Main;