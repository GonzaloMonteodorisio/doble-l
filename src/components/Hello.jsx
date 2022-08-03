import React, { Component } from 'react';
import './welcome.css';

class Hello extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="Container__Background--img-text">
                    <div className="animate__animated animate__jackInTheBox Bienvenidos__text">
                        {this.props.message}
                    </div>
                </section>          
            </React.Fragment>
        ); 
    }  
}

export default Hello;