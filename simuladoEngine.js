// simuladoEngine.js
export function calcularProximaRevisão(acertou, intervaloAtual) {
    if (acertou) {
        return intervaloAtual * 2; // Dobra o tempo
    } else {
        return 1; // Reseta para 1 dia
    }
}
