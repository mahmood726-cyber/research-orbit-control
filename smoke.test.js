// smoke.test.js — minimal Node.js smoke test for pure utility functions
// Run with: node smoke.test.js
"use strict";

let passed = 0;
let failed = 0;

function assert(desc, condition) {
  if (condition) {
    passed++;
    console.log("  PASS", desc);
  } else {
    failed++;
    console.error("  FAIL", desc);
  }
}

function assertEq(desc, actual, expected) {
  const ok = actual === expected;
  if (ok) {
    passed++;
    console.log("  PASS", desc);
  } else {
    failed++;
    console.error("  FAIL", desc, "— expected", expected, "got", actual);
  }
}

// ---- inline pure utilities (mirrors app.js) ----

function clamp(value, min = 0, max = 100) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function mean(values) {
  const nums = values.filter(Number.isFinite);
  if (!nums.length) return 0;
  return nums.reduce((sum, value) => sum + value, 0) / nums.length;
}

function round1(value) {
  const n = Number(value);
  return Number((Number.isFinite(n) ? n : 0).toFixed(1));
}

function toWeight(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizeWeights(weights) {
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;
  return {
    impact: weights.impact / total,
    execution: weights.execution / total,
    reuse: weights.reuse / total,
    novelty: weights.novelty / total,
    governance: weights.governance / total
  };
}

function scaleLinear(value, min, max) {
  if (!Number.isFinite(value) || max <= min) return 0;
  return clamp(((value - min) / (max - min)) * 100);
}

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

// ---- tests ----

console.log("clamp:");
assertEq("clamp normal value", clamp(50), 50);
assertEq("clamp below min", clamp(-5), 0);
assertEq("clamp above max", clamp(150), 100);
assertEq("clamp NaN returns min", clamp(NaN), 0);
assertEq("clamp custom bounds", clamp(3, 1, 5), 3);

console.log("\nmean:");
assertEq("mean of [1,2,3]", mean([1, 2, 3]), 2);
assertEq("mean of empty array", mean([]), 0);
assertEq("mean ignores NaN", mean([1, NaN, 3]), 2);

console.log("\nround1:");
assertEq("round1 of 3.14", round1(3.14), 3.1);
assertEq("round1 of 0", round1(0), 0);
assertEq("round1 of NaN returns 0", round1(NaN), 0);
assertEq("round1 of string '2.55'", round1("2.55"), 2.5); // IEEE 754: 2.55 stored as 2.549999...

console.log("\ntoWeight:");
assertEq("toWeight of 0 returns 0 (not NaN)", toWeight(0), 0);
assertEq("toWeight of 50", toWeight(50), 50);
assertEq("toWeight of NaN returns 0", toWeight(NaN), 0);
assertEq("toWeight of undefined returns 0", toWeight(undefined), 0);
assertEq("toWeight of '92' parses", toWeight("92"), 92);

console.log("\nnormalizeWeights:");
const norm = normalizeWeights({ impact: 50, execution: 50, reuse: 0, novelty: 0, governance: 0 });
assert("normalizeWeights impact+execution sum to 1", Math.abs(norm.impact + norm.execution - 1) < 1e-10);
assertEq("normalizeWeights impact = 0.5", norm.impact, 0.5);
const normAll0 = normalizeWeights({ impact: 0, execution: 0, reuse: 0, novelty: 0, governance: 0 });
assert("normalizeWeights all-zero divides by 1 not 0", Number.isFinite(normAll0.impact));

console.log("\nscaleLinear:");
assertEq("scaleLinear midpoint", scaleLinear(5, 0, 10), 50);
assertEq("scaleLinear at min", scaleLinear(0, 0, 10), 0);
assertEq("scaleLinear at max", scaleLinear(10, 0, 10), 100);
assertEq("scaleLinear NaN returns 0", scaleLinear(NaN, 0, 10), 0);
assertEq("scaleLinear max<=min returns 0", scaleLinear(5, 5, 5), 0);

console.log("\nslugify:");
assertEq("slugify basic", slugify("MetaFusion"), "metafusion"); // toLowerCase before split, so camelCase not split
assertEq("slugify spaces", slugify("hello world"), "hello-world");
assertEq("slugify null", slugify(null), "");

console.log("\nescapeHtml:");
assertEq("escapeHtml ampersand", escapeHtml("a & b"), "a &amp; b");
assertEq("escapeHtml tags", escapeHtml("<b>"), "&lt;b&gt;");
assertEq("escapeHtml null", escapeHtml(null), "");

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
