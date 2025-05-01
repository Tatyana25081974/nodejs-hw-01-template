import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const filePath = path.resolve(PATH_DB);         // створюємо абсолютний шлях
    const data = await readFile(filePath, 'utf8');  // читаємо файл як текст
    return JSON.parse(data);                        // перетворюємо в масив об'єктів
  } catch (error) {
    console.log('Помилка читання файлу:', error.message);
    return []; // якщо файл порожній або пошкоджений — повертаємо порожній масив
  }
}

