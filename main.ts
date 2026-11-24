import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line code review approval carrying quiet existential dread.
const LINE =
  "Approved. test_auth_flaky only passes when run alone, and I have decided not to ask why anymore.";

// The bounty requires exactly one line of at most 140 characters.
if (LINE.includes("\n") || LINE.length > 140 || LINE.length === 0) {
  throw new Error(`entry must be a single line of 1-140 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
