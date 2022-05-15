import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './app.module.scss';
import ITarefa from '../types/tarefa';

function App() {
  /**
     * Definindo o state:
     * @param tarefas
     * O array a ser atualizado
     * @param setTarefas
     * A função a ser descrita para a atualização do array (como descrito no onclick)
     * @function useState
     * Vai definir o estado inicial
     */
   const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
   const [selecionado, setSelecionado] = useState<ITarefa>();

   function selecionaTarefa(tarefaSelecionada: ITarefa) {
     setSelecionado(tarefaSelecionada);
     setTarefas(tarefasAntigas =>
      tarefasAntigas
      .map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false})))
   }

   function completaTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        } return tarefa;
      }))
    }
   }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        completaTarefa={completaTarefa}
      />
    </div>
  );
}

export default App;
