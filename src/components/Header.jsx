import React, { Component } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className='header Header__Container'>
                <Logo />
                <NavBar />
            </header>
        ); 
    }  
}

export default Header;