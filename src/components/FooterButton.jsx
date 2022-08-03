import React, { Component } from 'react';
import './footer-button.css';

class FooterButton extends Component {
    render() {
        return (
            <div className={this.props.socialMedia}>
                <a href={this.props.networkURL} className={this.props.networkButton} target="_blank" rel='noreferrer'>
                    <i
                    id={this.props.networkID}
                    className={this.props.networkIcon}
                    ></i>
                </a>
            </div>
        ); 
    }
  
}

export default FooterButton;