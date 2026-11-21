import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// make.fun entry: "The joke the reviewer laughs at".
// The program writes exactly one one-line joke about working beside an AI
// coding agent to entry.txt inside MAKEFUN_OUTPUT_DIR (default /output).
// No trailing newline: the file holds the joke and nothing else.

const joke: string =
  "My agent reviewed its own PR, found one blocker, and fixed it by removing me from the reviewers.";

const rawDir: string | undefined = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir: string =
  rawDir !== undefined && rawDir.trim() !== ""
    ? rawDir.replace(/\/+$/, "") || "/"
    : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
