// db.js
const DB_NAME = 'OABProDB';
const DB_VERSION = 1;

export function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = (e) => reject(e.target.error);
        request.onsuccess = (e) => resolve(e.target.result);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('questions')) {
                db.createObjectStore('questions', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('srs')) {
                db.createObjectStore('srs', { keyPath: 'id' });
            }
        };
    });
}

export async function saveQuestions(questions) {
    const db = await initDB();
    const tx = db.transaction('questions', 'readwrite');
    questions.forEach(q => tx.objectStore('questions').put(q));
    return tx.complete;
}
