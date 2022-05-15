import Item from './Item';
import style from './lista.module.scss';
import ITarefa from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void // Não retorna nada, ele vai modificar o selecionado e o tarefas, mas não vai trazer retorno, e o void informa isso como tipagem. Como tipar o selecionaTarefa como uma função? Tipando seu parâmetro e seu retorno.
}

// Function components
export default function Lista({ tarefas, selecionaTarefa } : Props ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                <Item 
                    selecionaTarefa={selecionaTarefa}
                    key = {item.id}
                    { ...item } // destructuring do item passando suas propriedades como parâmetro
                />
                ))}
            </ul>
        </aside>
    )
}