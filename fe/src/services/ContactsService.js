import { HttpClient } from './utils/HttpClient';

export function ContactsService() {
  const httpClient = HttpClient();

  async function listContacts(orderBy = 'asc') {
    return httpClient.get(`contacts/?orderBy=${orderBy}`);
  }

  /*  async function createContact(contact) {
    return HttpClient.post('/contacts?', contact);
  }
 */
  return {
    listContacts,
  };
}
