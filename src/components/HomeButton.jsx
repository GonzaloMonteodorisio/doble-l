import React, { Component } from 'react';
import './homeButton.css';

class HomeButton extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section2btn">
                    <button
                        // onClick="location.href='./NuestrosProductos.html'"
                        className="Button__Home--Pedido">
                        {this.props.message}
                    </button>
                </section>         
            </React.Fragment>
        ); 
    }  
}

export default HomeButton;