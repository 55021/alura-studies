import Botao from '../Botao';
import Relogio from './Relogio';
import style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import ITarefa from '../../types/tarefa';
import { useState, useEffect } from 'react';

interface Props {
    selecionado: ITarefa | undefined,
    completaTarefa: () => void
}

export default function Cronometro ({ selecionado, completaTarefa } : Props) {
    // console.log('Conversão: ', tempoParaSegundos('01:01:01'));
    // Tempo tipado como número começa vazio, setTempo recebe a propriedade tempo do ITarefa selecionado recebido como props do app.
    const [tempo, setTempo] = useState<number>();

    // FUNÇÃO RECURSIVA
    // Recebendo undefined, o valor default será 0, atendendo à tipagem number do parâmetro.
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }

            completaTarefa();
        }, 1000)
    }

    // Função a executar e array de dependências
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    )
}