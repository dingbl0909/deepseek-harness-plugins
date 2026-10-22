/**
 * Count work and pending interactions without depending on React or the DOM.
 * `useSessions` exposes a catalog with a `byId` map; `useSessionStatus`
 * exposes a Map (or, defensively, a plain object) of live session statuses.
 */
export function summarizeSessions(catalog, statuses) {
  const map = statuses instanceof Map ? statuses : new Map(Object.entries(statuses || {}));
  let running = 0;
  let waiting = 0;
  const seen = new Set();

  for (const [id, status] of map) {
    seen.add(String(id));
    if (status?.pendingInteraction != null) waiting += 1;
    if (status?.running === true && status.pendingInteraction == null) running += 1;
  }

  const byId = catalog?.byId || {};
  for (const [id, entry] of Object.entries(byId)) {
    if (seen.has(String(id))) continue;
    if (entry?.running === true) running += 1;
  }

  return { running, waiting, known: seen.size };
}
