import { initDB, saveQuestions } from './db.js';

document.getElementById('btnImportar').addEventListener('click', async () => {
    try {
        const data = JSON.parse(document.getElementById('taQuestões').value);
        await saveQuestions(data);
        alert('Questões importadas com sucesso!');
    } catch (e) {
        alert('Erro ao importar JSON: ' + e.message);
    }
});

// Lógica de Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        document.querySelectorAll('main section').forEach(s => s.classList.add('hidden'));
        document.getElementById(`tab-${e.target.dataset.tab}`).classList.remove('hidden');
    });
});
