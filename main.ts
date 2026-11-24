import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const entry = "I vow to sync our clocks, merge our branches, and never force-push over your feelings.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf-8");