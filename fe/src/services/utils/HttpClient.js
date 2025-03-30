import delay from '../../utils/delay';
import { LOCALHOST } from './endpoints';

export function HttpClient() {
  async function get(path) {
    await delay(1000);
    const response = await fetch(`${LOCALHOST}/${path}`);
    const body = await response.json();
    if (response.ok) {
      return body;
    }

    throw new Error(body.error);
  }

  return {
    get,
  };
}
