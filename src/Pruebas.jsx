import React, { Component } from 'react';
import Hello from './components/Hello';
import './pruebas.css';

class Pruebas extends Component {
    constructor() {
        super();
        this.state = {
            message: 'React Class'
        };
        // Este enlace es necesario para hacer que `this` funcione en el callback
        this.updateName = this.updateName.bind(this);
    }
    updateName = () => {
        this.setState({message: 'React Function'});
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.updateName}>
                    <Hello message={this.state.message}/>
                </div>
            </React.Fragment>
        ); 
    }  
}

export default Pruebas;