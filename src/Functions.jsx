import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import Hello from './components/Hello';
import './components/functions.css';

const Functions = ({ defaultMessage }) => {
    const [message, setMessage] = useState('Probar funciones');
    useEffect(() => {
        // console.log('App mounted');
        return () => {
            console.log('Will unmount', message);
        }
    }, [message]);

    // useEffect(() => {
    //     console.log('Receive prop :', defaultMessage);
    //     return () => {
    //         console.log('Will receive new prop: message');
    //     }
    // }, [defaultMessage]);
    console.log('Will render');
    return (
        <div onClick={ ()=> setMessage('Función probada') }>
            <Hello message={message}/>
        </div>
    );
}

export default Functions;