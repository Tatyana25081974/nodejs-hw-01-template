import { writeContacts } from '../utils/writeContacts.js';

export async function removeAllContacts() {
  try {
    await writeContacts([]); // записуємо порожній масив у файл
    console.log('Усі контакти було успішно видалено.');
  } catch (error) {
    console.error('Помилка під час видалення контактів:', error.message);
  }
}


removeAllContacts();
