// classifier.js - Módulo para ler o PDF e classificar
export function classificarQuestão(text) {
    // Exemplo de lógica de classificação automática
    if (text.includes('8.906')) return 'Ética';
    if (text.includes('Constituição')) return 'Constitucional';
    return 'Geral';
}
