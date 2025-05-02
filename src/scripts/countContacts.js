import { readContacts } from '../utils/readContacts.js';

export async function countContacts() {
  try {
    const contacts = await readContacts(); // читаємо файл
    console.log(`Загальна кількість контактів: ${contacts.length}`);
  } catch (error) {
    console.error('Помилка під час підрахунку контактів:', error.message);
  }
}


countContacts();
