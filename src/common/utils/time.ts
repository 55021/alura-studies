export function tempoParaSegundos(tempo: string) {
    // Criando a const já sabendo que ela é uma array com esses três elementos, e setando valores default caso venham indefinidos.
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}