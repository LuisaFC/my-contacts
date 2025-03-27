import delay from '../../utils/delay';
import { LOCALHOST } from './endpoints';

export function HttpClient() {
  async function get(path) {
    const response = await fetch(`${LOCALHOST}/${path}`);

    await delay(1000);

    return response.json();
  }

  return {
    get,
  };
}
