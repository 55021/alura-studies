
/**
 * Quando for passado como ITarefa[], quer dizer que é um array de itens desse tipo descrito como ITarefa. Também poderia ser escrito como Array<ITarefa>
 */
export default interface ITarefa {
    tarefa: string,
    tempo: string,
    selecionado: boolean,
    completado: boolean,
    id: string
}