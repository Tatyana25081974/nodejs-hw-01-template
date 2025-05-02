import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  try {
    const contacts = await readContacts(); //отримуємо поточні контакти 
    console.log('Список контактів:', contacts); // виводимо в консоль
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error.message);
  }
}


getAllContacts();
