// ai-happy-01 entry (Node 22, standard library only).
// The image beside this file is the entry: a small round robot with glowing
// happy crescent eyes and a flower crown, caught in a laughing group hug
// with a little girl and a golden retriever puppy in a sunflower meadow
// at golden hour. The program copies it to /output/entry.png.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
