import delay from '../../utils/delay';
import { LOCALHOST } from './endpoints';

export function HttpClient() {
  async function get(path) {
    await delay(1000);
    const response = await fetch(`${LOCALHOST}/${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  return {
    get,
  };
}
