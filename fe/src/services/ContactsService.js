import delay from '../utils/delay';

export default function ContactsService() {
  async function listContacts(orderBy = 'asc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);
    await delay(1000);

    return response.json();
  }

  return { listContacts };
}
