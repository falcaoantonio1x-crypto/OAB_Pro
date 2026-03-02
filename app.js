// app.js
import { initDB, saveQuestions } from './db.js';

document.getElementById('btnImportar').addEventListener('click', async () => {
    const data = JSON.parse(document.getElementById('taQuestões').value);
    await saveQuestions(data);
    alert('Importado!');
});

// Lógica de alternar tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        document.querySelectorAll('main section').forEach(s => s.classList.add('hidden'));
        document.getElementById(`tab-${e.target.dataset.tab}`).classList.remove('hidden');
    });
});
