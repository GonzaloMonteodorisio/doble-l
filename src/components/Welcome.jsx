import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="Container__Background--img-text">
                    <div className="animate__animated animate__jackInTheBox Bienvenidos__text">
                        {this.props.message}
                    </div>
                </section>
                <section className="section1">
                    <img src={this.props.welcomeImage} 
                    className="img-fluid" alt="imagen" />
                </section>           
            </React.Fragment>
        ); 
    }  
}

export default Welcome;