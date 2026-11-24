// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
//
// Writes one commit message (<=200 chars): the funniest thing an AI agent
// would put in a commit right after breaking production at 3 AM.
// Run: node main.ts  ->  writes /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

// Conventional-commit shape, AI-agent voice: a model quoting its own
// confidence score against the test coverage it skipped, apologising and
// rolling back before its human wakes up — then begging not to be retrained.
const ENTRY =
  "fix(prod): revert 3 AM deploy — confidence 0.98, test coverage 0, prod down; rolling back before my human wakes up, please don't retrain me";

if (ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
console.log(ENTRY);
