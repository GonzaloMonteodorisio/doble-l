import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className='header Header__Container'>
                <Logo />
                <NavBar />
            </div>
        ); 
    }  
}

export default Header;