import React, { Component } from 'react';
import './logo.css';
import logo from '../images/logos/logo-doble-l.png';

class Logo extends Component {
    render() {
        return (
            <div className="Logo__img--dobleL">
                {/* <a href="./index.html"> */}
                <img
                src={logo}
                alt="LogoDobleL"
                height="100px"
                width="300px"
                />
                {/* </a> */}
            </div>
        ); 
    }
  
}

export default Logo;