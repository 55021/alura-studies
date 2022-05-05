import React from 'react';

// Class components !eram! mais utilizados por conta da necessidade de manipulação do state, e os function components eram reservados à criação de stateless components. Com a noção dos Hooks (funções externas a serem importadas para o stateless component), não havia mais a necessidade de criar stateful components.
export default class Botao extends React.Component {
    render() {
        return (
        <button>Botão</button>
        )
    }
}