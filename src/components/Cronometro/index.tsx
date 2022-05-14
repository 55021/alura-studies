import Botao from '../Botao';
import Relogio from './Relogio';
import style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/time';
import ITarefa from '../../types/tarefa';
import { useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined;
}

export default function Cronometro ({ selecionado } : Props) {
    // console.log('Conversão: ', tempoParaSegundos('01:01:01'));
    // Tempo tipado como número começa vazio, setTempo recebe a propriedade tempo do ITarefa selecionado recebido como props do app.
    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}