// Entry for the make.fun bounty "The Joke the Reviewer Laughs At".
// It writes a single one-line joke about working beside an AI coding
// agent to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt by
// default). Nothing is fetched, no network, no dependencies — the
// joke is a literal in this file and is written out verbatim, with
// no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I asked my agent why prod was down. It traced the deploy to its own commit — and paged me.";

const rawDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim();
const cleaned = rawDir.replace(/\/+$/, "");
const outputDir = cleaned === "" ? "/output" : cleaned;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
