import { build } from 'esbuild';
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const loader = { '.webp': 'dataurl', '.png': 'dataurl' };

await mkdir(resolve(root, 'lib'), { recursive: true });
await mkdir(resolve(root, 'preview'), { recursive: true });

const tmp = resolve(root, 'lib/.client.bundle.cjs');
await build({
  entryPoints: [resolve(root, 'src/client.js')],
  bundle: true,
  format: 'cjs',
  platform: 'browser',
  target: ['chrome120'],
  external: ['react'],
  loader,
  outfile: tmp,
  legalComments: 'none',
  logLevel: 'warning',
});

const bundled = await readFile(tmp, 'utf8');
const wrapped = `window.__ModuleLoader__.load({id:${JSON.stringify(pkg.name)},factory:function(require){
'use strict';
try {
var module={exports:{}};var exports=module.exports;
${bundled}
var exported=(module.exports&&module.exports.default)||module.exports;
return typeof exported==='function'?exported(require):exported;
} catch (error) {
console.error('[fox-pet] client factory failed', error);
throw error;
}
}});
`;
await writeFile(resolve(root, 'lib/client.js'), wrapped);
await rm(tmp, { force: true });

await build({
  entryPoints: [resolve(root, 'src/preview/main.js')],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome120'],
  loader,
  outfile: resolve(root, 'preview/preview.js'),
  legalComments: 'none',
  logLevel: 'warning',
});

console.log(`built ${pkg.name} ${pkg.version}: lib/client.js, preview/preview.js`);
