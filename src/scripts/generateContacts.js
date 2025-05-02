import { readContacts } from "../utils/readContacts.js"; 
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

// Функція для генерації кількох фейкових контактів
function generateFakeContacts(count) {
  const contacts = [];
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  return contacts;
}

// Основна функція
export async function generateContacts(count) {
  try {
    const existingContacts = await readContacts(); // читаємо поточні
    const newContacts = generateFakeContacts(count); // створюємо нові
    const updatedContacts = [...existingContacts, ...newContacts]; // додаємо до існуючих
    await writeContacts(updatedContacts); // записуємо назад
    console.log(`Успішно згенеровано ${count} контактів.`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error.message);
  }
}


generateContacts(5);