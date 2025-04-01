import delay from '../../utils/delay';
import { LOCALHOST } from './endpoints';

export function HttpClient() {
  async function get(path) {
    await delay(1000);
    const response = await fetch(`${LOCALHOST}/${path}`);
    const contentType = response.headers.get('Content-Type');

    let body = null;
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`,
    );
  }

  return {
    get,
  };
}
