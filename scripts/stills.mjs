import {bundle} from '@remotion/bundler';
import {renderStill, selectComposition} from '@remotion/renderer';
import {mkdirSync} from 'node:fs';
import path from 'node:path';
const out = path.resolve('out/stills');
mkdirSync(out, {recursive: true});
const serveUrl = await bundle({entryPoint: path.resolve('src/index.ts')});
const inputProps = {name: 'SCIENTIAN', tagline: 'Explore Science with Yayan', hud: true, volume: 0};
const comp = await selectComposition({serveUrl, id: 'Intro', inputProps});
const times = (process.argv[2] ?? '0.3,0.7,1.0,1.25,1.75,2.4,3.05,3.45,3.7,4.35,5.0,5.65,6.3,6.95,7.6,8.25,9.0,9.75,10.45,11.15,11.85,12.55,13.4,14.5').split(',').map(Number);
for (const s of times) {
  const file = path.join(out, `t${s.toFixed(1).padStart(4, '0')}.jpg`);
  await renderStill({serveUrl, composition: comp, frame: Math.round(s * 30), output: file, inputProps, imageFormat: 'jpeg', jpegQuality: 80, browserExecutable: process.env.CHROME_PATH ?? null, scale: 0.5});
}
console.log('done');
