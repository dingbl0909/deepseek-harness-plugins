// Client-only plugin: a minimal Host entry so Cordis can discover and mount us.
export const name = 'whaleMusume';

export function apply() {
  // The whole companion lives in the browser bundle declared through dsh.client.
}
