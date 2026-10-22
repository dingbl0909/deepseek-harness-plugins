import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import vm from 'node:vm';

const pack = JSON.parse(readFileSync(resolve('package.json'), 'utf8'));

class ReactStub {
  static Component = class Component {
    constructor(props) { this.props = props; this.state = {}; }
    setState(update) { Object.assign(this.state, update); }
  };
  static createElement() { return {}; }
  static useRef(value) { return { current: value }; }
  static useEffect() {}
  static Fragment(props) { return props.children; }
}

test('the built ModuleLoader bundle returns an applicable plugin', () => {
  const code = readFileSync(resolve('lib/client.js'), 'utf8');
  let registration;
  const sandbox = {
    console,
    navigator: { language: 'zh-CN' },
    window: { __ModuleLoader__: { load(value) { registration = value; } } },
  };
  sandbox.globalThis = sandbox;
  vm.runInNewContext(code, sandbox, { filename: 'lib/client.js' });
  assert.ok(registration, 'the bundle must call window.__ModuleLoader__.load');
  assert.equal(registration.id, pack.name);
  const plugin = registration.factory(specifier => {
    if (specifier === 'react') return ReactStub;
    throw new Error(`unexpected external module: ${specifier}`);
  });
  assert.equal(typeof plugin, 'object');
  assert.deepEqual(Array.from(plugin.inject), ['slots']);
  assert.equal(typeof plugin.apply, 'function');
});

test('package metadata points at real files and the module id is the package name', () => {
  assert.equal(pack.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(pack.dsh.client.platform, 'web');
  for (const file of ['lib/index.js', 'lib/client.js', 'cordis.patch.yml', 'README.md', 'assets/icon.png']) {
    assert.doesNotThrow(() => readFileSync(resolve(file)), `${file} should exist`);
  }
});
