import React, { Component } from 'react';
import './About.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

export class About extends Component {
    render() {
        return (
            <div className="about container" id="about">
                <div className="about__content">
                    <span className="about__title">Olá!</span>
                    <span className="about__text">
                        Meu nome é Denilson, mas pode me chamar de Deni, sou um desenvolvedor front end e moro em Araçatuba - SP. Como eu disse, você está na minha casa na internet, aqui verá minhas habilidades, meus trabalhos e meus projetos. Estou sempre estudando e procurando melhorar como profissional. Fique à vontade para olhar e caso goste do que vê, é mais do que bem vindo(a) para <Link to="contact" smooth duration="500">entrar em contato.</Link>
                    </span>
                </div>
            </div>
        );
    }
}

export default About;
