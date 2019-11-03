import React, { Component } from 'react';
import './Header.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

export class Header extends Component {
    render() {
        return (
            <div className="header no-overflow">
                <div className="header__background"></div>
                <div className="header__background--mask"></div>
                <div className="header__content container">
                    <span className="header__title">Bem Vindo!</span>
                    <span className="header__text">
                        Pode me chamar de Deni. Esta é minha casa na internet. Sou um desenvolvedor front end, sinta-se à vontade para dar uma olhada.
                    </span>
                </div>
                <Link className="header__icon" to="about" smooth duration="500">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                </Link>
            </div>
        );
    }
}

export default Header;
