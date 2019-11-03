import React, { Component } from 'react';
import './Tools.scss';
import angular from '../assets/img/angular-icon.png';
import bootstrap from '../assets/img/bootstrap.png';
import sass from '../assets/img/sass-icon.png';
import jquery from '../assets/img/jquery-icon.png';
import javascript from '../assets/img/javascript-icon.png';
import github from '../assets/img/github.png';

export class Tools extends Component {
    render() {
        return (
            <div className="tools container">
                <div className="tools__content">
                    <span className="tools__title">Ferramentas</span>
                    <div className="tools--warpper row">

                        <div className="tools__icon col-4">
                            <img src={angular} alt=""/>
                            <span className="tools__text">Angular</span>
                        </div>

                        <div className="tools__icon col-4">
                            <img src={sass} alt=""/>
                            <span className="tools__text">Sass</span>
                        </div>

                        <div className="tools__icon col-4">
                            <img src={jquery} alt=""/>
                            <span className="tools__text">JQuery</span>
                        </div>

                        <div className="tools__icon col-4">
                            <img className="tools__icon--bootstrap" src={bootstrap} alt=""/>
                            <span className="tools__text">Bootstrap</span>
                        </div>

                        <div className="tools__icon col-4">
                            <img src={javascript} alt=""/>
                            <span className="tools__text">Javascript</span>
                        </div>

                        <div className="tools__icon col-4">
                            <img src={github} alt=""/>
                            <span className="tools__text">Github</span>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Tools;
