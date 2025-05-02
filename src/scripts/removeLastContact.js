import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export async function removeLastContact() {
  try {
    const contacts = await readContacts(); // читаємо контакти з файлу

    if (contacts.length === 0) {
      console.log('Контактів немає. Видаляти нічого.');
      return;
    }

    const removed = contacts.pop(); // видаляємо останній контакт
    await writeContacts(contacts);  // зберігаємо оновлений масив
    console.log('Видалено останній контакт:', removed);
  } catch (error) {
    console.error('Помилка під час видалення останнього контакту:', error.message);
  }
}


removeLastContact();
