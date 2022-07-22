import React, { Component } from 'react';
import './brand.css';

class Brand extends Component {
    render() {
        return (
            <div className={this.props.brand}>
                {/* <a href="./NuestrosProductos.html"> */}
                    <img className="img-fluid" src={this.props.brandLogo} alt={this.props.brandText} width="200rem" height="200rem" />
                {/* </a> */}
            </div>
        ); 
    }
  
}

export default Brand;