import style from './item.module.scss';
import ITarefa from '../../../types/tarefa'

// Herda todos os tipos do ITarefa
interface Props extends ITarefa {
    // void não retorna nada
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props) {
    // console.log('Item atual: ', { tarefa, tempo, selecionado, completado, id })
    return (
        <li
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
        onClick={() => !completado && selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
            })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}

/* Considerações sobre ternários - Aula 5-7
Nesse caso dou uma menção honrosa ao operador &&, que nos permite renderizar de forma condicional também, mas sem a necessidade do :, ou seja, de um else:

return (
  <>
    {condicao &&
      <p> Esse JSX só vai renderizar se a condição for verdadeira </p>
    }
  </>
)
*/