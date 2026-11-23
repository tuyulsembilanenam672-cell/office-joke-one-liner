import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One genuine one-line joke about office life, with a turn at the end:
// blocking focus time to stay free, then the boss books that very
// slot to ask why you are never free. True of the office, tight,
// and a fresh take on the calendar, not the usual Monday line.
const JOKE =
  "I blocked focus time on my calendar so no one would book me \u2014 my boss booked it to ask why I'm never available.";

function main(): void {
  const codePoints = [...JOKE].length;
  if (codePoints < 1 || codePoints > 199) {
    throw new Error(`entry must be 1-199 code points, got ${codePoints}`);
  }
  if (JOKE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (JOKE.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outputPath = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JOKE, "utf8");
  console.log(`Wrote ${codePoints} code points to ${outputPath}`);
}

main();
