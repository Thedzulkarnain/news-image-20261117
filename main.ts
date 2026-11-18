// news-image-20261117: sum up Tuesday 17 November 2026's world news in one image.
//
// The entry image is art.png, a one-page newspaper front page kept beside
// this file. The program copies it unchanged to /output/entry.png.
//
// Node 22, standard library only. No network, no timestamps, no randomness:
// a plain file copy carries the bytes across exactly, with no re-encoding,
// so the same input always writes the same output and two runs produce
// byte-identical files.
//
// Run it with:
//   node main.ts
// (The output directory comes from MAKEFUN_OUTPUT_DIR first, then OUT_DIR,
// falling back to /output, e.g. for a local check:
//   MAKEFUN_OUTPUT_DIR=out node main.ts)

import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUT_DIR ?? "/output";

await mkdir(outDir, { recursive: true });
await copyFile(join(here, "art.png"), join(outDir, "entry.png"));
