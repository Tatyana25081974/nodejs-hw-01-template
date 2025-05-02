import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function addOneContact() {
  try {
    const contacts = await readContacts();             // Зчитуємо поточні контакти
    const newContact = createFakeContact();            // Створюємо 1 новий контакт
    const updatedContacts = [...contacts, newContact]; // Додаємо його в масив
    await writeContacts(updatedContacts);              // Записуємо назад у файл
    console.log('Додано новий контакт:', newContact);
  } catch (error) {
    console.error('Помилка додавання контакту:', error.message);
  }
}


addOneContact();
