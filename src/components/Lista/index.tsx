import React from 'react';
import Item from './Item';
import style from './lista.module.scss';

// Function components
export default function Lista() {
    const tarefas = [{
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
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                <Item
                key = {index}
                { ...item } // destructuring do item passando suas propriedades como parâmetro
                />
                ))}
            </ul>
        </aside>
    )
}