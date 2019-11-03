import React, { Component } from 'react';
import './Projects.scss';
import musicSchool from '../assets/img/music-school.jpg';

export class Projects extends Component {
    render() {
        return (
            <div class="projects container">
                <span className="projects__title">Trabalhos e Projetos</span>
                <div className="projects--wrapper row">
                    <div className="projects__img col-12 col-lg-7">
                        <img src={musicSchool} alt=""/>
                    </div>
                    <div class="projects__desc col-12 col-lg-5">
                        <span className="projects__title--project">Escola de Música</span>
                        <span className="projects__text">Projeto</span>
                        <span className="projects__text">Este é um projeto que fiz com o propósito de estudo.</span>
                        <a className="projects__link" href="https://codepen.io/DeniCarmo/full/vpyNpy/" target="_blank">Confira</a>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
