import React, { useState } from 'react';
import Item from './Item';
import style from './lista.module.scss';

// Function components
export default function Lista() {
    /**
     * Definindo o state:
     * @param tarefas
     * O array a ser atualizado
     * @param setTarefas
     * A função a ser descrita para a atualização do array (como descrito no onclick)
     * @function useState
     * Vai definir o estado inicial
     */
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },
    {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: '05:00:00'}])}
                }>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                <Item key = {index} { ...item } // destructuring do item passando suas propriedades como parâmetro
                />
                ))}
            </ul>
        </aside>
    )
}