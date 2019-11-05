import React, { Component } from 'react';
import './Contact.scss';
import linkedin from '../assets/img/linkedin-icon.png';
import github from '../assets/img/github.png';

export class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <span className="contact__title">Contato</span>
                <div className="contact__social">
                    <div className="contact__social-icon">
                        <a href="https://github.com/DeniCarmo" target="_blank">
                            <img src={github} alt=""/>
                        </a>
                    </div>
                    <div className="contact__social-icon">
                        <a href="https://www.linkedin.com/in/denilson-carmo-4a0623106/" target="_blank">
                            <img src={linkedin} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="contact__email">
                    E-mail:<span> deni.carmo2017@gmail.com</span>
                </div>
            </div>
        );
    }
}

export default Contact;
