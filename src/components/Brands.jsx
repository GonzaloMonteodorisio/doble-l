import React, { Component } from 'react';
import './brands.css';
import Brand from './Brand';
import paulinaImage from '../images/logos/logo-la-paulina.JPEG';
import paladiniImage from '../images/logos/logo-paladini.JPEG';
import calchaquiImage from '../images/logos/logo-calchaqui.JPEG';
import cagnoliImage from '../images/logos/logo-cagnoli.JPEG';
import krachitosImage from '../images/logos/logo-krachitos.JPEG';
import bocattiImage from '../images/logos/logo-bocatti.JPEG';

class Brands extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="container Marcas__Carousel--img">
                    <h1 className="Marcas__txt">{this.props.message}</h1>
                </section>
                {/* Fix that SHIT!! */}
                <section class="logos__marcas--img"> 
                    <Brand brand="paulina" brandLogo={paulinaImage} brandText="La Paulina" />
                    <Brand brand="paladini" brandLogo={paladiniImage} brandText="Paladini" />
                    <Brand brand="calchaqui" brandLogo={calchaquiImage} brandText="Calchaqui" />
                </section>
                <section class="logos__marcas--img">
                    <Brand brand="bocatti" brandLogo={bocattiImage} brandText="Bocatti" />
                    <Brand brand="cagnoli" brandLogo={cagnoliImage} brandText="Cagnoli" />
                    <Brand brand="krachitos" brandLogo={krachitosImage} brandText="Krachitos" />
                </section>
            </React.Fragment>
        ); 
    }  
}

export default Brands;
