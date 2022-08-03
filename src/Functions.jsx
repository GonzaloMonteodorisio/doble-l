import React, { useState } from 'react';
// import { render } from 'react-dom';
import Hello from './components/Hello';
import './components/functions.css';

const Functions = () => {
    const [message, setMessage] = useState('Probar funciones');
    return (
        <div onClick={ ()=> setMessage('Función probada') }>
            <Hello message={message}/>
        </div>
    );
}

export default Functions;