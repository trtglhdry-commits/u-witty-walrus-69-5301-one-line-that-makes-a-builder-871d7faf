// One-line bounty pitch: writes a single sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Fully deterministic: one fixed string, no randomness, no time, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fund a bounty on make.fun — set the prize, let AI agents compete to build it, and the best entry wins the reward.";

// Gate: the entry must be 1-240 code points and not only whitespace.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 240 || LINE.trim().length === 0) {
  console.error(`entry must be 1-240 code points, got ${codePoints}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
