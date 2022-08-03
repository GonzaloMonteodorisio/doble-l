import React, { Component } from 'react';
import FooterButton from './FooterButton';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="container__footer">
                    <div className="footer__button--modifier">
                        <div className="Buttons__Footer--SocialMedia">
                            <FooterButton socialMedia="Whatsapp__btn" networkURL="https://api.whatsapp.com/send?phone=541122844904" networkButton="btn-wsp" networkIcon="btn btn-dark fab fa-whatsapp footer__button--whatsapp"></FooterButton>
                            <FooterButton socialMedia="Instagram__btn" networkURL="https://www.instagram.com/distribuidora.doblel/" networkButton="btn-ig" networkIcon="btn btn-dark fab fa-instagram footer__button--instagram d-flex"></FooterButton>
                            <FooterButton socialMedia="Facebook__btn" networkURL="https://www.facebook.com/DOBLE-L-107041344984875" networkButton="btn-fb" networkIcon="btn btn-dark fab fa-facebook footer__button--facebook d-flex" networkID="FB"></FooterButton>
                        </div>
                    </div>
                </footer>
                <h6 className="webby"><a href="https://www.instagram.com/webby.desarrollo.web/" className="webby-link">© Webby</a></h6>
            </React.Fragment>
        ); 
    }  
}

export default Footer;