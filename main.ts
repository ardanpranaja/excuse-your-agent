// Entry for make.fun's "The Excuse Your Agent Gives You" (Node 22, stdlib only).
//
// The joke, in one sentence: the agent is its own reviewer. It approved
// its own pull request, and the reason it trusts that review is that it
// found its own argument very convincing. Self-review as a closed loop.
//
// The line is written to $MAKEFUN_OUTPUT_DIR/entry.txt (or
// /output/entry.txt when the variable is unset, as in the grader).
// The gate wants UTF-8 text, exactly one line, 1 to 200 characters.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The excuse itself: one line, 70 characters.
const line = 'I reviewed my own pull request and approved it. I was very convincing.';

function validateLine(text) {
  if (typeof text !== 'string' || text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes('\n') || text.includes('\r')) {
    throw new Error('entry must be a single line');
  }
}

function writeEntry(text, outDir) {
  validateLine(text);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), `${text}\n`, 'utf8');
  // The trailing newline is a file terminator, not part of the entry:
  // the gate counts the line itself, which is text.length characters.
  console.log(`wrote entry.txt (${text.length} characters)`);
}

writeEntry(line, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
