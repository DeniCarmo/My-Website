import React, { Component } from 'react';
import './Footer.scss'
import logo from '../assets/img/myLogo.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer container">
                <span className="footer__text">Desenvolvido por:</span>
                <img className="footer__logo" src={logo} />
            </div>
        );
    }
}

export default Footer;
