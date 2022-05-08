import React from 'react';
import style from './botao.module.scss';

// Class components !eram! mais utilizados por conta da necessidade de manipulação do state, e os function components eram reservados à criação de stateless components. Com a noção dos Hooks (funções externas a serem importadas para o stateless component), não havia mais a necessidade de criar stateful components.
export default class Botao extends React.Component <{ children: any, type?: "button" | "submit" | "reset" | undefined }> {
    render() {
        const { type = "button" } = this.props; // Caso o atributo opcional não seja inserido, setar como button.
        return (
        <button type = {type} className={style.botao}>
            {this.props.children}
            </button>
        )
    }
}