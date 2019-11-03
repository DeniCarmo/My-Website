import React, { Component } from 'react';
import './Skills.scss';

export class Skills extends Component {
    render() {
        return (
            <div className="skills container">
                <div className="skills__content">
                    <span className="skills__title">Habilidades</span>
                    <span className="skills__text">
                        Aqui vou contar sobre minhas habilidades e algumas das ferramentas que uso para dar vida às idéias e projetos.
                    </span>
                    <div className="skills-responsive">
                        <div className="skills-responsive__img">
                            <img src="https://i.postimg.cc/Qd3hVxVb/responsive.png" alt="" />
                        </div>
                        <span class="skills-responsive__title">Layout Responsivo</span>
                        <span class="skills-responsive__text">
                            Faça seu website ser compatível com todos os dispositivos, seus visitantes podem vir desde smartphones à desktops, esteja preparado para eles.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
