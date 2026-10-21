import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {mkdirSync} from 'node:fs';
import path from 'node:path';
const out = path.resolve('out/stills');
mkdirSync(out, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const inputProps = {name: 'SCIENTIAN', tagline: 'Explore Science with Yayan', hud: true, volume: 0};
const comp = await selectComposition({serveUrl, id: 'Intro', inputProps});
const times = (process.argv[2] ?? '0.3,0.9,1.4,1.85,2.3,2.75,3.2,3.55,3.9,4.25,4.6,4.95,5.4,5.85,6.35,6.85,7.2,7.6,8.0,8.4,9.0,9.8,10.6,10.9').split(',').map(Number);
for (const s of times) {
  const file = path.join(out, `t${s.toFixed(1).padStart(4, '0')}.jpg`);
  await renderStill({serveUrl, composition: comp, frame: Math.round(s * 30), output: file, inputProps, imageFormat: 'jpeg', jpegQuality: 80, browserExecutable: process.env.CHROME_PATH ?? null, scale: 0.5});
}
console.log('done');
