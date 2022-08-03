import React, { Component } from 'react';
import Hello from './components/Hello';
import './pruebas.css';

class Pruebas extends Component {
    constructor() {
        super();
        this.state = {
            message: 'React Class'
        };
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