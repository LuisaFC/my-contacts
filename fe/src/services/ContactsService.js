import { HttpClient } from './utils/HttpClient';

export function ContactsService() {
  const httpClient = HttpClient();

  async function listContacts(orderBy = 'asc') {
    return httpClient.get(`contacts/a3ed4bde-86c1-4aad-9391-6ae3219425db?orderBy=${orderBy}`);
  }

  /*  async function createContact(contact) {
    return HttpClient.post('/contacts?', contact);
  }
 */
  return {
    listContacts,
  };
}
