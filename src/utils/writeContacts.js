import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(contacts) {
  try {
    const filePath = path.resolve(PATH_DB);               // абсолютний шлях до файлу
    const json = JSON.stringify(contacts, null, 2);       // форматований JSON
    await writeFile(filePath, json, 'utf8');              // записуємо у файл
  } catch (error) {
    console.log('Помилка запису у файл:', error.message);
  }
}
