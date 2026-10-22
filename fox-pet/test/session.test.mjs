import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeSessions } from '../src/pet/session.js';

test('empty snapshots are idle', () => {
  assert.deepEqual(summarizeSessions(undefined, undefined), { running: 0, waiting: 0, known: 0 });
  assert.deepEqual(summarizeSessions({ phase: 'ready', byId: {} }, new Map()), {
    running: 0,
    waiting: 0,
    known: 0,
  });
});

test('running sessions are counted, pending ones are not double counted as work', () => {
  const statuses = new Map([
    ['a', { running: true, pendingInteraction: null }],
    ['b', { running: true, pendingInteraction: { id: 'ask-1' } }],
  ]);
  assert.deepEqual(summarizeSessions({ phase: 'ready', byId: {} }, statuses), {
    running: 1,
    waiting: 1,
    known: 2,
  });
});

test('a pending interaction wins even when the driver keeps running', () => {
  const statuses = new Map([['a', { running: true, pendingInteraction: { kind: 'approval' } }]]);
  assert.deepEqual(summarizeSessions({ phase: 'ready', byId: {} }, statuses), {
    running: 0,
    waiting: 1,
    known: 1,
  });
});

test('catalog fallback works for sessions without a live status entry', () => {
  const catalog = { phase: 'ready', byId: { a: { running: true }, b: { running: false } } };
  assert.deepEqual(summarizeSessions(catalog, new Map()), { running: 1, waiting: 0, known: 0 });
});

test('a plain object is accepted for defensive compatibility', () => {
  assert.deepEqual(
    summarizeSessions({ byId: {} }, { a: { running: false, pendingInteraction: { id: 1 } } }),
    { running: 0, waiting: 1, known: 1 },
  );
});
