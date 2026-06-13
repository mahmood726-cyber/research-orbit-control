"use strict";

const bundledSnapshot = Object.freeze({
  capturedAt: "2026-03-28T11:15:00.000Z",
  description: "Bundled directory inventory for Research Orbit Control.",
  roots: [
    ".pytest_cache",
    "2026-2027-Research-Plan",
    "AdaptSim",
    "AfricaRCT",
    "AlMizan",
    "Archive",
    "BenfordMA",
    "BiasForensics",
    "CausalSynth",
    "cmdstan",
    "data",
    "Dell",
    "E156",
    "E156-backup-claude",
    "E156-framework",
    "E156-framework-backup-codex",
    "EvidenceGapMap",
    "EvidenceHalfLife",
    "EvidenceQuality",
    "F1000_submission",
    "FragilityAtlas",
    "HTML apps",
    "inetpub",
    "Intel",
    "KMextract",
    "Living metas",
    "MetaAudit",
    "MetaFolio",
    "MetaReproducer",
    "MetaShift",
    "Models",
    "ongoing chats",
    "OutcomeReportingBias",
    "OverlapDetector",
    "PerfLogs",
    "PredictionGap",
    "Program Files",
    "Program Files (x86)",
    "ProjectIndex",
    "Projects",
    "RBuildTools",
    "RMSTmeta",
    "src",
    "T",
    "temp",
    "tmp",
    "Truthcert1",
    "ubcma",
    "Users",
    "Windows"
  ],
  projects: [
    "3dvitreous-grapher",
    "501MLM",
    "501MLM_Submission",
    "advanced-nma-pooling",
    "area1_small_sample_analysis",
    "asreview_5star",
    "AutoGRADE",
    "Burhan",
    "cbamm-project2",
    "chat2",
    "chatpaper",
    "childnajia",
    "claude2",
    "claude-plugins",
    "claude-rct-work",
    "clauderepo",
    "clinic-site",
    "CochraneDataExtractor",
    "ctgov-search-strategies",
    "cv-rct-analysis",
    "Dataextractor",
    "DTA70",
    "esc-acs-living-meta",
    "everything-claude-code",
    "evidence-inference",
    "experimental-meta-analysis",
    "Extractor humble",
    "Fatiha-Course",
    "Fatiha-course-github-v2",
    "finalpaper",
    "Finrenone",
    "glm-code",
    "HFN786",
    "hfpef_registry_calibration",
    "hfpef_registry_synth",
    "HTA-oman",
    "HTML-Misc",
    "idea12",
    "IPD Zahid",
    "ipd_qma_project",
    "ipd-meta-pro-link",
    "KMcurve",
    "lec_phase0_bundle",
    "lec_phase0_project",
    "LFA",
    "LFAHFN",
    "LivingMeta_Watchman_Amulet",
    "living-meta-engine",
    "llm-meta-analysis",
    "MAFI",
    "MAFI-Continuation",
    "maxent-reconstructor",
    "meta-epidemiology-bias-correction",
    "MetaExtract",
    "meta-frontier-bibliography",
    "meta-frontier-readiness-atlas",
    "MetaFusion-Lab",
    "Metanew",
    "metaoverfit",
    "metaoverfit-paper",
    "metasprint-autopilot",
    "metasprint-cardio-universe",
    "metasprint-dose-response",
    "metasprint-dta",
    "metasprintnma",
    "metaverse-robust-MA",
    "minireview",
    "MLM501",
    "MLMResearch",
    "Multilevelerror",
    "Multipledatameta",
    "my-python-project",
    "new-app",
    "NMA",
    "nmapaper111025",
    "oman",
    "Pairwise humble",
    "Pairwise70",
    "Paper1",
    "Paper2.111025",
    "PFA_AF_LivingMeta",
    "portfolio-site",
    "PowerShell",
    "private-website",
    "prognostic-meta",
    "pub-bias-simulation",
    "rayyanreplacement",
    "rct-extractor-v2",
    "registry_first_rct_meta",
    "repo100",
    "repo300-ENMA-SNMA",
    "research-orbit-control",
    "rmstnma",
    "Scripts",
    "Stories",
    "superapp",
    "surroNMA",
    "tower",
    "tower_js",
    "TrialRadar",
    "Tricuspid_TEER_LivingMeta",
    "TruthCert_v3.1.0_modeling",
    "TruthCert_v3.1.0_review",
    "truthcert-openclaw-supermemory-stack",
    "TruthCert-Validation-Papers",
    "wasserstein",
    "waternajia",
    "WorldIPD",
    "WorldIPD-private"
  ],
  apps: [
    "dosehtml",
    "DTA_Pro_Review",
    "evidence-board",
    "focus-studio",
    "HTA",
    "hub",
    "IPD-Meta-Pro",
    "kanban-lab",
    "living-meta",
    "nma-dose-response-app",
    "NMAhtml",
    "output",
    "Pairwiseai",
    "Truthcert1",
    "Truthcert1_work"
  ],
  meta: {
    mode: "bundled",
    importLabel: "",
    slices: {
      roots: { source: "Bundled C:\\ capture", live: false, loadedAt: null, folderName: "C:\\" },
      projects: { source: "Bundled C:\\Projects capture", live: false, loadedAt: null, folderName: "Projects" },
      apps: { source: "Bundled C:\\HTML apps capture", live: false, loadedAt: null, folderName: "HTML apps" }
    }
  }
});

const storageKeys = {
  snapshot: "researchOrbitControl.snapshot.v1",
  ui: "researchOrbitControl.ui.v1"
};

const shortFamilyTokens = new Set(["ai", "dta", "hta", "ipd", "km", "llm", "lfa", "mafi", "nma", "qma", "rct", "rmst"]);
const stopTokens = new Set([
  "analysis", "app", "apps", "backup", "bundle", "code", "course", "data", "engine", "final", "framework",
  "github", "humble", "misc", "modeling", "new", "oman", "open", "output", "paper", "papers", "phase0",
  "private", "project", "projects", "python", "repo", "review", "scripts", "site", "stack", "stories",
  "submission", "supermemory", "validation", "version", "watchman", "work"
]);

const researchRootExcludes = [
  /^\./, /^archive$/i, /^cmdstan$/i, /^dell$/i, /^html apps$/i, /^inetpub$/i, /^intel$/i, /^perflogs$/i,
  /^program files/i, /^projects$/i, /^rbuildtools$/i, /^src$/i, /^temp$/i, /^tmp$/i, /^users$/i, /^windows$/i
];

const knownSubtokens = [
  "agent", "audit", "bias", "board", "claude", "control", "dose", "evidence", "extract", "fragility", "hta",
  "html", "hub", "index", "ipd", "kanban", "km", "living", "llm", "meta", "nma", "orbit", "outcome",
  "pairwise", "portfolio", "prediction", "quality", "rct", "registry", "review", "rmst", "shift", "studio",
  "synth", "tower", "trial", "truth"
];

const themeCatalog = [
  {
    id: "meta-core",
    label: "Meta Core",
    description: "General synthesis, evidence architecture, and meta-research infrastructure.",
    keywords: ["meta", "evidence", "audit", "folio", "reproducer", "shift", "gap", "quality", "synth", "review", "fusion", "prognostic", "registry"],
    orbitBias: 10
  },
  {
    id: "bias-truth",
    label: "Bias and Truth",
    description: "Bias diagnostics, validation, reporting bias, truth certification, and fragility.",
    keywords: ["bias", "truth", "fragility", "overlap", "prediction", "quality", "reporting", "benford", "validation", "forensics"],
    orbitBias: 8
  },
  {
    id: "ipd-survival",
    label: "IPD and Survival",
    description: "IPD, KM, RMST, and survival synthesis pipelines.",
    keywords: ["ipd", "km", "rmst", "survival", "teer", "hfpef", "worldipd", "zahid", "registry"],
    orbitBias: 6
  },
  {
    id: "network-hta",
    label: "Network and HTA",
    description: "NMA, dose response, DTA, and HTA-facing modeling.",
    keywords: ["nma", "hta", "dose", "pairwise", "dta", "surro", "advanced", "pooling"],
    orbitBias: 4
  },
  {
    id: "extract-automation",
    label: "Extraction and Automation",
    description: "Extraction, screening, registry parsing, and automation tools.",
    keywords: ["extract", "extractor", "asreview", "rayyan", "ctgov", "automation", "radar", "watchman", "engine"],
    orbitBias: 5
  },
  {
    id: "living-update",
    label: "Living Update",
    description: "Living meta-analysis, monitoring, and longitudinal refresh loops.",
    keywords: ["living", "watchman", "registry", "amulet", "esc", "tricuspid", "pfa", "update"],
    orbitBias: 4
  },
  {
    id: "control-surface",
    label: "Control Surface",
    description: "Operational dashboards, boards, hubs, portfolio controls, and orchestration layers.",
    keywords: ["control", "board", "hub", "studio", "kanban", "portfolio", "tower", "orbit", "superapp", "index", "site"],
    orbitBias: 9
  },
  {
    id: "llm-agent",
    label: "LLM and Agents",
    description: "Agentic tooling, Claude stacks, chats, and AI-assisted workflows.",
    keywords: ["llm", "claude", "chat", "agent", "plugins", "openclaw", "autopilot", "everything", "supermemory", "ai"],
    orbitBias: -16
  }
];

const programTemplates = [
  {
    id: "orbit-control",
    title: "Orbit Control Layer",
    description: "Turn the current estate into a single control surface for triage, fusion, and shipping.",
    requiredThemes: ["control-surface", "meta-core", "bias-truth"],
    optionalThemes: ["extract-automation", "llm-agent"],
    preferKinds: ["app", "project"],
    hintNames: ["research-orbit-control", "ProjectIndex", "hub", "evidence-board", "focus-studio", "MetaFolio", "MetaAudit", "TruthCert_v3.1.0_modeling"],
    targetProblems: ["portfolio-entropy", "bridge-deficit", "interface-governance-debt"],
    noveltyBias: 12,
    governanceBias: 26
  },
  {
    id: "truth-lattice",
    title: "Truth Lattice",
    description: "Fuse bias, validation, and truth-cert assets into one defensible integrity engine.",
    requiredThemes: ["bias-truth", "meta-core", "control-surface"],
    optionalThemes: ["llm-agent", "extract-automation"],
    preferKinds: ["project", "app"],
    hintNames: ["Truthcert1", "TruthCert_v3.1.0_modeling", "TruthCert-Validation-Papers", "BiasForensics", "BenfordMA", "OutcomeReportingBias", "FragilityAtlas"],
    targetProblems: ["validation-fragmentation", "bridge-deficit", "interface-governance-debt"],
    noveltyBias: 18,
    governanceBias: 22
  },
  {
    id: "living-reactor",
    title: "Living Reactor",
    description: "Connect living-meta engines, watchmen, and extraction flows into one update reactor.",
    requiredThemes: ["living-update", "extract-automation", "meta-core"],
    optionalThemes: ["control-surface", "llm-agent"],
    preferKinds: ["project", "app"],
    hintNames: ["LivingMeta_Watchman_Amulet", "living-meta-engine", "living-meta", "esc-acs-living-meta", "Tricuspid_TEER_LivingMeta", "PFA_AF_LivingMeta", "MetaExtract"],
    targetProblems: ["living-update-lag", "bridge-deficit"],
    noveltyBias: 16,
    governanceBias: 14
  },
  {
    id: "survival-command",
    title: "Survival Command",
    description: "Pull the IPD, KM, RMST, and network-survival lines into one command stack.",
    requiredThemes: ["ipd-survival", "network-hta", "meta-core"],
    optionalThemes: ["control-surface", "extract-automation"],
    preferKinds: ["project", "app"],
    hintNames: ["WorldIPD", "IPD-Meta-Pro", "ipd-meta-pro-link", "KMcurve", "KMextract", "RMSTmeta", "rmstnma", "advanced-nma-pooling"],
    targetProblems: ["survival-siloing", "bridge-deficit"],
    noveltyBias: 22,
    governanceBias: 10
  },
  {
    id: "extract-fuse",
    title: "Extract Fuse",
    description: "Combine extraction, registry, and LLM tooling into one ingestion layer for the estate.",
    requiredThemes: ["extract-automation", "llm-agent", "meta-core"],
    optionalThemes: ["control-surface", "living-update"],
    preferKinds: ["project", "app"],
    hintNames: ["MetaExtract", "Dataextractor", "CochraneDataExtractor", "rct-extractor-v2", "rayyanreplacement", "TrialRadar", "llm-meta-analysis"],
    targetProblems: ["bridge-deficit", "portfolio-entropy", "living-update-lag"],
    noveltyBias: 20,
    governanceBias: 12
  },
  {
    id: "hta-bridge",
    title: "HTA Bridge",
    description: "Unify NMA, dose-response, DTA, and HTA-facing apps into one translational line.",
    requiredThemes: ["network-hta", "control-surface", "meta-core"],
    optionalThemes: ["extract-automation", "bias-truth"],
    preferKinds: ["app", "project"],
    hintNames: ["HTA", "HTA-oman", "nma-dose-response-app", "NMAhtml", "NMA", "repo300-ENMA-SNMA", "DTA_Pro_Review", "DTA70"],
    targetProblems: ["bridge-deficit", "survival-siloing", "portfolio-entropy"],
    noveltyBias: 17,
    governanceBias: 16
  }
];

const archetypes = [
  {
    id: "control-first",
    label: "Control First",
    description: "Maximize portfolio order and high-confidence orchestration.",
    weights: { impact: 92, execution: 78, reuse: 88, novelty: 70, governance: 94 }
  },
  {
    id: "stabilize",
    label: "Stabilize",
    description: "Prefer execution speed and cleanup over frontier experimentation.",
    weights: { impact: 74, execution: 96, reuse: 82, novelty: 40, governance: 90 }
  },
  {
    id: "moonshot",
    label: "Moonshot",
    description: "Push novelty and field-reset potential harder than speed.",
    weights: { impact: 100, execution: 56, reuse: 66, novelty: 100, governance: 54 }
  },
  {
    id: "fusion",
    label: "Fusion",
    description: "Exploit dormant overlap and reuse stranded assets aggressively.",
    weights: { impact: 88, execution: 72, reuse: 100, novelty: 78, governance: 74 }
  },
  {
    id: "governance",
    label: "Governance",
    description: "Bias the system toward auditability, validation, and safe control.",
    weights: { impact: 68, execution: 66, reuse: 74, novelty: 34, governance: 100 }
  }
];

const validationState = { webR: null, loading: false, running: false };
const refs = {};

const appState = {
  snapshot: readStoredSnapshot() || defaultSnapshotState(),
  ui: hydrateUiState(),
  analytics: null,
  notice: ""
};

function defaultSnapshotState() {
  return cloneSnapshot(bundledSnapshot);
}

function cloneSnapshot(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeStringArray(value, fallback = []) {
  const source = Array.isArray(value) ? value : fallback;
  return [...new Set(source.map(item => String(item ?? "").trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function normalizeSliceMeta(value, fallback) {
  return {
    source: typeof value?.source === "string" ? value.source : fallback.source,
    live: Boolean(value?.live),
    loadedAt: typeof value?.loadedAt === "string" ? value.loadedAt : fallback.loadedAt,
    folderName: typeof value?.folderName === "string" ? value.folderName : fallback.folderName
  };
}

function normalizeSnapshot(raw) {
  const base = defaultSnapshotState();
  if (!raw || typeof raw !== "object") return base;
  const meta = raw.meta && typeof raw.meta === "object" ? raw.meta : {};
  return {
    capturedAt: typeof raw.capturedAt === "string" ? raw.capturedAt : base.capturedAt,
    description: typeof raw.description === "string" ? raw.description : base.description,
    roots: normalizeStringArray(raw.roots, base.roots),
    projects: normalizeStringArray(raw.projects, base.projects),
    apps: normalizeStringArray(raw.apps, base.apps),
    meta: {
      mode: typeof meta.mode === "string" ? meta.mode : base.meta.mode,
      importLabel: typeof meta.importLabel === "string" ? meta.importLabel : "",
      slices: {
        roots: normalizeSliceMeta(meta.slices?.roots, base.meta.slices.roots),
        projects: normalizeSliceMeta(meta.slices?.projects, base.meta.slices.projects),
        apps: normalizeSliceMeta(meta.slices?.apps, base.meta.slices.apps)
      }
    }
  };
}

function readStoredSnapshot() {
  try {
    const raw = window.localStorage.getItem(storageKeys.snapshot);
    if (!raw) return null;
    return normalizeSnapshot(JSON.parse(raw));
  } catch (error) {
    return null;
  }
}

function writeStoredSnapshot(snapshot) {
  try {
    window.localStorage.setItem(storageKeys.snapshot, JSON.stringify(normalizeSnapshot(snapshot)));
  } catch (error) {}
}

function clearStoredSnapshot() {
  try {
    window.localStorage.removeItem(storageKeys.snapshot);
  } catch (error) {}
}

function defaultUiState() {
  const preset = archetypes[0];
  return { archetype: preset.id, weights: { ...preset.weights } };
}

function hydrateUiState() {
  const base = defaultUiState();
  try {
    const raw = window.localStorage.getItem(storageKeys.ui);
    if (!raw) return base;
    const parsed = JSON.parse(raw);
    const archetype = typeof parsed?.archetype === "string" ? parsed.archetype : base.archetype;
    const sourceWeights = parsed?.weights && typeof parsed.weights === "object" ? parsed.weights : {};
    return {
      archetype,
      weights: {
        impact: clamp(Number(sourceWeights.impact ?? base.weights.impact), 0, 100),
        execution: clamp(Number(sourceWeights.execution ?? base.weights.execution), 0, 100),
        reuse: clamp(Number(sourceWeights.reuse ?? base.weights.reuse), 0, 100),
        novelty: clamp(Number(sourceWeights.novelty ?? base.weights.novelty), 0, 100),
        governance: clamp(Number(sourceWeights.governance ?? base.weights.governance), 0, 100)
      }
    };
  } catch (error) {
    return base;
  }
}

function writeStoredState() {
  try {
    window.localStorage.setItem(storageKeys.ui, JSON.stringify(appState.ui));
  } catch (error) {}
}

function clamp(value, min = 0, max = 100) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function mean(values) {
  const nums = values.filter(Number.isFinite);
  if (!nums.length) return 0;
  return nums.reduce((sum, value) => sum + value, 0) / nums.length;
}

function scaleLinear(value, min, max) {
  if (!Number.isFinite(value) || max <= min) return 0;
  return clamp(((value - min) / (max - min)) * 100);
}

function round1(value) {
  const n = Number(value);
  return Number((Number.isFinite(n) ? n : 0).toFixed(1));
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

function slugify(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatTimestamp(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return "unknown time";
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function formatTokenLabel(token) {
  return shortFamilyTokens.has(token) ? token.toUpperCase() : token.replace(/-/g, " ");
}

function isResearchRoot(name) {
  return !researchRootExcludes.some(pattern => pattern.test(name));
}

function tokenize(name) {
  const spaced = String(name ?? "")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_./-]+/g, " ")
    .toLowerCase();
  const baseTokens = spaced.split(/\s+/).filter(Boolean);
  const expanded = new Set();
  baseTokens.forEach(token => {
    expanded.add(token);
    knownSubtokens.forEach(keyword => {
      if (token !== keyword && token.includes(keyword)) expanded.add(keyword);
    });
  });
  return [...expanded];
}

function uniqueValues(items, mapper) {
  return [...new Set(items.map(mapper))];
}

function classifyThemes(name, kind, tokens) {
  const lower = name.toLowerCase();
  const matches = themeCatalog
    .map(theme => {
      let score = 0;
      theme.keywords.forEach(keyword => {
        if (tokens.includes(keyword)) score += 1.25;
        else if (lower.includes(keyword)) score += 1;
      });
      if (kind === "app" && theme.id === "control-surface") score += 0.8;
      if (kind === "app" && (theme.id === "network-hta" || theme.id === "living-update") && lower.includes("app")) score += 0.35;
      if (kind === "project" && theme.id === "meta-core" && lower.includes("meta")) score += 0.5;
      return { id: theme.id, score };
    })
    .filter(entry => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  if (!matches.length) {
    if (kind === "app") return ["control-surface"];
    if (kind === "project" && lower.includes("site")) return ["control-surface"];
    return ["meta-core"];
  }
  const threshold = Math.max(1, matches[0].score - 0.8);
  return matches.filter(entry => entry.score >= threshold).slice(0, 3).map(entry => entry.id);
}

function makeItem(name, kind) {
  const tokens = tokenize(name);
  const themes = classifyThemes(name, kind, tokens);
  return {
    id: `${kind}:${slugify(name)}`,
    name,
    kind,
    tokens,
    themes,
    primaryTheme: themes[0]
  };
}

function buildItems(snapshot) {
  const roots = snapshot.roots.filter(isResearchRoot).map(name => makeItem(name, "root"));
  const projects = snapshot.projects.map(name => makeItem(name, "project"));
  const apps = snapshot.apps.map(name => makeItem(name, "app"));
  return [...roots, ...projects, ...apps];
}

function validFamilyToken(token) {
  if (!token || /^\d+$/.test(token) || stopTokens.has(token)) return false;
  return shortFamilyTokens.has(token) || token.length >= 4;
}

function buildTokenFamilies(items) {
  const map = new Map();
  items.forEach(item => {
    const tokens = [...new Set(item.tokens.filter(validFamilyToken))];
    tokens.forEach(token => {
      if (!map.has(token)) map.set(token, []);
      map.get(token).push(item);
    });
  });
  return [...map.entries()]
    .filter(([, members]) => members.length >= 2)
    .map(([token, members]) => {
      const kindSpread = uniqueValues(members, member => member.kind).length;
      const themeSpread = uniqueValues(members.flatMap(member => member.themes), value => value).length;
      const gravity = clamp(members.length * 12 + kindSpread * 17 + themeSpread * 7 + (kindSpread === 3 ? 10 : 0));
      return {
        token,
        label: formatTokenLabel(token),
        count: members.length,
        kindSpread,
        themeSpread,
        gravity: round1(gravity),
        members: members.map(member => ({
          id: member.id,
          name: member.name,
          kind: member.kind,
          themes: member.themes
        }))
      };
    })
    .sort((a, b) => b.gravity - a.gravity || b.count - a.count || a.token.localeCompare(b.token));
}

function enrichItemsWithFamilyContext(items, families) {
  const familyMap = new Map(items.map(item => [item.id, []]));
  families.forEach(family => {
    family.members.forEach(member => {
      if (familyMap.has(member.id)) familyMap.get(member.id).push(family);
    });
  });
  return items.map(item => {
    const itemFamilies = familyMap.get(item.id) || [];
    const peerKinds = new Set();
    const peerIds = new Set();
    itemFamilies.forEach(family => {
      family.members.forEach(member => {
        if (member.id !== item.id) {
          peerKinds.add(member.kind);
          peerIds.add(member.id);
        }
      });
    });
    return {
      ...item,
      families: itemFamilies.map(family => family.token),
      familyGravityMean: round1(mean(itemFamilies.map(family => family.gravity))),
      peerKinds: [...peerKinds],
      peerCount: peerIds.size,
      linkageScore: round1((peerKinds.size / 2) * 100)
    };
  });
}

function buildThemeSummaries(items) {
  return themeCatalog
    .map(theme => {
      const themeItems = items.filter(item => item.themes.includes(theme.id));
      const counts = {
        root: themeItems.filter(item => item.kind === "root").length,
        project: themeItems.filter(item => item.kind === "project").length,
        app: themeItems.filter(item => item.kind === "app").length
      };
      const kindsPresent = Object.values(counts).filter(Boolean).length;
      const depthScore = clamp(themeItems.length * 9 + counts.project * 2 + counts.app * 4);
      const nonAppWork = counts.root + counts.project;
      const appCoverage = nonAppWork ? clamp((counts.app / nonAppWork) * 100) : (counts.app ? 100 : 0);
      const meanLinkage = round1(mean(themeItems.map(item => item.linkageScore)));
      const duplicatePressure = round1(mean(themeItems.map(item => item.familyGravityMean)));
      const darkMatter = round1(clamp(depthScore * 0.32 + (100 - appCoverage) * 0.24 + (100 - meanLinkage) * 0.16 + duplicatePressure * 0.18 + kindsPresent * 4));
      const activation = round1(clamp(kindsPresent * 18 + counts.root * 3 + counts.app * 10 + counts.project * 3.5 + meanLinkage * 0.28 + (theme.id === "control-surface" ? 10 : 0)));
      const orbitScore = round1(clamp(darkMatter * 0.58 + activation * 0.42 + (theme.orbitBias || 0)));
      const assets = themeItems
        .map(item => ({ name: item.name, kind: item.kind, rank: item.linkageScore + item.familyGravityMean + item.peerCount * 3 }))
        .sort((a, b) => b.rank - a.rank || a.name.localeCompare(b.name))
        .slice(0, 5);
      return {
        ...theme,
        depth: themeItems.length,
        counts,
        kindsPresent,
        appCoverage: round1(appCoverage),
        duplicatePressure,
        activation,
        darkMatter,
        orbitScore,
        assets
      };
    })
    .sort((a, b) => b.orbitScore - a.orbitScore || b.darkMatter - a.darkMatter || a.label.localeCompare(b.label));
}

function buildDarkMatterAssets(items, themes) {
  const themeLookup = Object.fromEntries(themes.map(theme => [theme.id, theme]));
  return items
    .map(item => {
      const orbit = mean(item.themes.map(themeId => themeLookup[themeId]?.orbitScore || 0));
      const themeDark = mean(item.themes.map(themeId => themeLookup[themeId]?.darkMatter || 0));
      const bridgeability = round1(clamp(item.themes.length * 18 + orbit * 0.28 + (item.kind === "project" ? 16 : item.kind === "app" ? 13 : 10) + item.peerCount * 3));
      const orchestration = round1(clamp(item.linkageScore * 0.45 + (item.kind === "app" ? 20 : 0) + (item.themes.includes("control-surface") ? 18 : 0) + item.familyGravityMean * 0.18));
      const darkMatter = round1(clamp(themeDark * 0.42 + bridgeability * 0.38 + (100 - orchestration) * 0.2 + (item.kind !== "app" && !item.peerKinds.includes("app") ? 10 : 0)));
      const latentLift = round1(clamp(bridgeability * 0.55 + (100 - orchestration) * 0.45));
      return { ...item, bridgeability, orchestration, darkMatter, latentLift };
    })
    .sort((a, b) => b.darkMatter - a.darkMatter || b.latentLift - a.latentLift || a.name.localeCompare(b.name));
}

function buildMetrics(snapshot, items, themes, families, assets) {
  const activeThemes = themes.filter(theme => theme.depth > 0);
  return {
    totalItems: items.length,
    researchRoots: snapshot.roots.filter(isResearchRoot).length,
    projectCount: snapshot.projects.length,
    appCount: snapshot.apps.length,
    activeThemes: activeThemes.length,
    duplicateFamilies: families.length,
    crossKindBridgeRate: round1(mean(items.map(item => (item.peerKinds.length > 0 ? 100 : 0)))),
    meanDarkMatter: round1(mean(assets.map(asset => asset.darkMatter))),
    meanOrbit: round1(mean(activeThemes.map(theme => theme.orbitScore))),
    topThemeLabel: activeThemes[0]?.label || "None"
  };
}

function severityForScore(score) {
  if (score >= 78) return "critical";
  if (score >= 62) return "high";
  if (score >= 48) return "medium";
  return "watch";
}

function buildProblemHypotheses(metrics, themes, families) {
  const themeLookup = Object.fromEntries(themes.map(theme => [theme.id, theme]));
  const topFamily = families[0];
  const familyScale = scaleLinear(families.length, 4, 28);
  const volumeScale = scaleLinear(metrics.totalItems, 35, 150);
  const activeThemeScale = scaleLinear(metrics.activeThemes, 3, themeCatalog.length);
  const bridgeGap = 100 - metrics.crossKindBridgeRate;
  const controlGap = 100 - (themeLookup["control-surface"]?.activation || 0);
  const livingGap = clamp((themeLookup["living-update"]?.darkMatter || 0) * 0.7 + (100 - (themeLookup["living-update"]?.appCoverage || 0)) * 0.3);
  const survivalGap = clamp((themeLookup["ipd-survival"]?.darkMatter || 0) * 0.68 + (100 - (themeLookup["ipd-survival"]?.activation || 0)) * 0.32);
  const validationGap = clamp((themeLookup["bias-truth"]?.darkMatter || 0) * 0.58 + controlGap * 0.22 + (themeLookup["llm-agent"]?.activation || 0) * 0.08);
  const problems = [
    {
      id: "portfolio-entropy",
      label: "Portfolio Entropy",
      score: round1(clamp(volumeScale * 0.34 + familyScale * 0.25 + activeThemeScale * 0.16 + metrics.meanDarkMatter * 0.15 + bridgeGap * 0.12 + 8)),
      remedy: "Install a portfolio control layer and collapse the strongest duplicate families into one execution spine.",
      drivers: [
        `${metrics.totalItems} research assets are already on the drive.`,
        `${families.length} duplicate families are competing for attention.`,
        `${metrics.activeThemes} themes are active at once.`
      ]
    },
    {
      id: "bridge-deficit",
      label: "Bridge Deficit",
      score: round1(clamp(metrics.meanDarkMatter * 0.32 + bridgeGap * 0.3 + controlGap * 0.16 + (themeLookup["extract-automation"]?.darkMatter || 0) * 0.12 + (themeLookup["network-hta"]?.darkMatter || 0) * 0.1)),
      remedy: "Fuse apps, projects, and root-level lines into one transport layer instead of parallel silos.",
      drivers: [
        `${round1(metrics.crossKindBridgeRate)}% of items have cross-kind family links.`,
        `${round1(metrics.meanDarkMatter)} mean dark-matter score suggests latent value is stranded.`,
        `${themeLookup["control-surface"]?.label || "Control"} coverage is still thin relative to the estate.`
      ]
    },
    {
      id: "validation-fragmentation",
      label: "Validation Fragmentation",
      score: round1(clamp(validationGap * 0.52 + (themeLookup["bias-truth"]?.depth || 0) * 3.0 + familyScale * 0.1)),
      remedy: "Consolidate bias, truth-cert, fragility, and reporting-bias work into one validation engine.",
      drivers: [
        `${themeLookup["bias-truth"]?.depth || 0} assets already live in the bias-and-truth line.`,
        `${themeLookup["bias-truth"]?.darkMatter || 0} dark-matter score indicates poor orchestration around integrity work.`,
        `${topFamily ? `The ${topFamily.label} family is still fragmented across multiple assets.` : "Validation assets are split across separate projects."}`
      ]
    },
    {
      id: "living-update-lag",
      label: "Living Update Lag",
      score: round1(clamp(livingGap * 0.7 + (themeLookup["living-update"]?.depth || 0) * 3.2 + (themeLookup["extract-automation"]?.activation || 0) * 0.1)),
      remedy: "Join living-meta lines to extraction and control surfaces so updates become automatic rather than artisanal.",
      drivers: [
        `${themeLookup["living-update"]?.depth || 0} living-update assets are already present.`,
        `${themeLookup["living-update"]?.appCoverage || 0}% app coverage leaves update loops under-instrumented.`,
        `${themeLookup["extract-automation"]?.label || "Automation"} is nearby but not yet fused into one loop.`
      ]
    },
    {
      id: "survival-siloing",
      label: "Survival Siloing",
      score: round1(clamp(survivalGap * 0.72 + (themeLookup["ipd-survival"]?.depth || 0) * 3 + (themeLookup["network-hta"]?.activation || 0) * 0.12)),
      remedy: "Turn IPD, KM, RMST, and survival NMA work into one command program rather than separate lines.",
      drivers: [
        `${themeLookup["ipd-survival"]?.depth || 0} IPD-survival assets are on the drive.`,
        `${themeLookup["ipd-survival"]?.darkMatter || 0} dark-matter score indicates under-composed capability.`,
        `${themeLookup["network-hta"]?.label || "Network"} methods are adjacent but not yet fused.`
      ]
    },
    {
      id: "interface-governance-debt",
      label: "Interface Governance Debt",
      score: round1(clamp(
        (themeLookup["control-surface"]?.darkMatter || 0) * 0.3 +
        (themeLookup["control-surface"]?.duplicatePressure || 0) * 0.12 +
        scaleLinear(metrics.appCount, 3, 18) * 0.1 +
        (themeLookup["llm-agent"]?.depth || 0) * 1.0 +
        bridgeGap * 0.08 +
        familyScale * 0.08
      )),
      remedy: "Create one canonical control surface and subordinate the other apps to it.",
      drivers: [
        `${metrics.appCount} HTML apps already exist.`,
        `${themeLookup["control-surface"]?.duplicatePressure || 0} control-surface duplication pressure is still present.`,
        `${themeLookup["llm-agent"]?.depth || 0} LLM/agent assets increase governance complexity.`
      ]
    }
  ];
  return problems
    .map(problem => ({ ...problem, severity: severityForScore(problem.score) }))
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
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

function toWeight(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function getWeightState() {
  const raw = {
    impact: toWeight(appState.ui.weights.impact),
    execution: toWeight(appState.ui.weights.execution),
    reuse: toWeight(appState.ui.weights.reuse),
    novelty: toWeight(appState.ui.weights.novelty),
    governance: toWeight(appState.ui.weights.governance)
  };
  return { raw, normalized: normalizeWeights(raw) };
}

function pickAssetsForProgram(template, assets) {
  const hintTokens = [...new Set(template.hintNames.flatMap(tokenize))];
  return assets
    .map(asset => {
      let selectionScore = 0;
      template.requiredThemes.forEach(themeId => {
        if (asset.themes.includes(themeId)) selectionScore += 24;
      });
      template.optionalThemes.forEach(themeId => {
        if (asset.themes.includes(themeId)) selectionScore += 10;
      });
      if (template.preferKinds.includes(asset.kind)) selectionScore += 8;
      if (template.hintNames.some(name => name.toLowerCase() === asset.name.toLowerCase())) selectionScore += 34;
      if (hintTokens.some(token => asset.tokens.includes(token))) selectionScore += 5;
      selectionScore += asset.darkMatter * 0.18 + asset.linkageScore * 0.08 + asset.familyGravityMean * 0.08;
      return { ...asset, selectionScore: round1(selectionScore) };
    })
    .filter(asset => asset.selectionScore > 0)
    .sort((a, b) => b.selectionScore - a.selectionScore || b.darkMatter - a.darkMatter || a.name.localeCompare(b.name))
    .slice(0, 7);
}

function buildFusionPrograms(assets, themes, problems, weightState) {
  const weights = weightState.normalized;
  const themeLookup = Object.fromEntries(themes.map(theme => [theme.id, theme]));
  const topProblems = problems.slice(0, 2);
  return programTemplates
    .map(template => {
      const selectedAssets = pickAssetsForProgram(template, assets);
      const requiredThemes = template.requiredThemes.map(themeId => themeLookup[themeId]).filter(Boolean);
      const optionalThemes = template.optionalThemes.map(themeId => themeLookup[themeId]).filter(Boolean);
      const themeOrbit = mean(requiredThemes.map(theme => theme.orbitScore));
      const themeDark = mean(requiredThemes.map(theme => theme.darkMatter));
      const optionalOrbit = mean(optionalThemes.map(theme => theme.orbitScore));
      const kindSpread = (uniqueValues(selectedAssets, asset => asset.kind).length / 3) * 100;
      const appCount = selectedAssets.filter(asset => asset.kind === "app").length;
      const controlCount = selectedAssets.filter(asset => asset.themes.includes("control-surface")).length;
      const familyBoost = mean(selectedAssets.map(asset => asset.familyGravityMean));
      let problemBoost = 0;
      topProblems.forEach((problem, index) => {
        if (template.targetProblems.includes(problem.id)) {
          problemBoost += problem.score * (index === 0 ? 0.1 : 0.05);
        }
      });
      const impact = round1(clamp(themeOrbit * 0.44 + themeDark * 0.18 + kindSpread * 0.18 + selectedAssets.length * 3 + problemBoost * 0.18));
      const execution = round1(clamp(30 + appCount * 13 + controlCount * 6 + selectedAssets.length * 3 - Math.max(0, selectedAssets.length - 6) * 3));
      const reuse = round1(clamp(kindSpread * 0.3 + familyBoost * 0.32 + selectedAssets.length * 5 + appCount * 4));
      const novelty = round1(clamp(themeDark * 0.34 + optionalOrbit * 0.2 + template.noveltyBias + selectedAssets.length * 2));
      const governance = round1(clamp((themeLookup["control-surface"]?.orbitScore || 40) * 0.28 + (themeLookup["bias-truth"]?.activation || 36) * 0.18 + controlCount * 8 + template.governanceBias));
      const tunedScore = round1(
        impact * weights.impact +
        execution * weights.execution +
        reuse * weights.reuse +
        novelty * weights.novelty +
        governance * weights.governance
      );
      return {
        ...template,
        assets: selectedAssets,
        impact,
        execution,
        reuse,
        novelty,
        governance,
        tunedScore,
        upside: round1(clamp(impact * 0.44 + novelty * 0.36 + reuse * 0.2)),
        whyNow: `${requiredThemes.map(theme => theme.label).join(", ")} already exist on the drive, and ${selectedAssets.length} assets can be fused immediately.`
      };
    })
    .sort((a, b) => b.tunedScore - a.tunedScore || b.upside - a.upside || a.title.localeCompare(b.title));
}

function buildMergeQueue(families) {
  return families.slice(0, 8).map(family => {
    const projectCount = family.members.filter(member => member.kind === "project").length;
    const appCount = family.members.filter(member => member.kind === "app").length;
    const rootCount = family.members.filter(member => member.kind === "root").length;
    let action = "Bridge";
    if (projectCount >= 3) action = "Merge line";
    if (projectCount >= 2 && appCount >= 1) action = "Fuse app and project line";
    if (rootCount >= 1 && projectCount >= 1 && appCount === 0) action = "Promote root work";
    return {
      token: family.token,
      label: family.label,
      gravity: family.gravity,
      action,
      members: family.members.slice(0, 6).map(member => member.name)
    };
  });
}

function buildAnalytics(snapshot, weightState) {
  const items = buildItems(snapshot);
  const families = buildTokenFamilies(items);
  const enrichedItems = enrichItemsWithFamilyContext(items, families);
  const themes = buildThemeSummaries(enrichedItems);
  const assets = buildDarkMatterAssets(enrichedItems, themes);
  const metrics = buildMetrics(snapshot, enrichedItems, themes, families, assets);
  const problems = buildProblemHypotheses(metrics, themes, families);
  const programs = buildFusionPrograms(assets, themes, problems, weightState);
  const mergeQueue = buildMergeQueue(families);
  return { snapshot, items: enrichedItems, themes, families, assets, metrics, problems, programs, mergeQueue, weightState };
}

function metricCardHtml(label, value, note) {
  return `
    <div class="metric-card">
      <div class="metric-label">${escapeHtml(label)}</div>
      <div class="metric-value">${escapeHtml(value)}</div>
      <div class="metric-note">${escapeHtml(note)}</div>
    </div>
  `;
}

function severityBadge(problem) {
  const className = problem.severity === "watch" ? "" : ` ${problem.severity}`;
  const label = problem.severity === "watch" ? "Watch" : problem.severity[0].toUpperCase() + problem.severity.slice(1);
  return `<span class="severity-pill${className}">${escapeHtml(label)}</span>`;
}

function renderHero(analytics) {
  const topProblem = analytics.problems[0];
  const topTheme = analytics.themes[0];
  const topProgram = analytics.programs[0];
  refs.heroStats.innerHTML = [
    metricCardHtml("Research Estate", String(analytics.metrics.totalItems), `${analytics.metrics.activeThemes} active themes`),
    metricCardHtml("Winner Problem", topProblem.label, `${topProblem.score}/100 ${topProblem.severity}`),
    metricCardHtml("Highest Orbit Theme", topTheme.label, `Orbit ${topTheme.orbitScore} | dark matter ${topTheme.darkMatter}`),
    metricCardHtml("Best Fusion Program", topProgram.title, `Tuned score ${topProgram.tunedScore}`)
  ].join("");
}

function renderTelemetry(analytics) {
  const metrics = analytics.metrics;
  const cards = [
    { label: "Research Roots", value: metrics.researchRoots, note: "Root-level non-system research directories" },
    { label: "Projects", value: metrics.projectCount, note: "Directories under C:\\Projects" },
    { label: "HTML Apps", value: metrics.appCount, note: "Directories under C:\\HTML apps" },
    { label: "Duplicate Families", value: metrics.duplicateFamilies, note: "Token families with 2+ members" },
    { label: "Cross-Kind Bridge Rate", value: `${metrics.crossKindBridgeRate}%`, note: "Items with app/project/root siblings" },
    { label: "Mean Dark Matter", value: metrics.meanDarkMatter, note: "Average latent-lift pressure" },
    { label: "Mean Orbit", value: metrics.meanOrbit, note: "Average orbit score among active themes" },
    { label: "Dominant Theme", value: metrics.topThemeLabel, note: "Highest-ranked current theme" }
  ];
  refs.telemetryGrid.innerHTML = cards.map(card => metricCardHtml(card.label, String(card.value), card.note)).join("");
}

function renderProblems(analytics) {
  refs.problemGrid.innerHTML = analytics.problems.slice(0, 4).map(problem => `
    <article class="problem-card">
      <div class="tag-row">
        <span class="score-pill">Score ${problem.score}</span>
        ${severityBadge(problem)}
      </div>
      <h3 style="margin-top:0.8rem;">${escapeHtml(problem.label)}</h3>
      <p class="muted">${escapeHtml(problem.remedy)}</p>
      <div class="pill-row">
        ${problem.drivers.slice(0, 3).map(driver => `<span class="tag">${escapeHtml(driver)}</span>`).join("")}
      </div>
    </article>
  `).join("");

  refs.problemList.innerHTML = analytics.problems.map(problem => `
    <div class="list-item">
      <div class="tag-row">
        <strong>${escapeHtml(problem.label)}</strong>
        <span class="score-pill">${problem.score}</span>
        ${severityBadge(problem)}
      </div>
      <div class="metric-note">${escapeHtml(problem.drivers[0])}</div>
    </div>
  `).join("");

  const topProblem = analytics.problems[0];
  const topTheme = analytics.themes[0];
  const topProgram = analytics.programs[0];
  const topFamily = analytics.families[0];
  refs.diagnosisMemo.textContent = [
    `Winner: ${topProblem.label} (${topProblem.score}/100, ${topProblem.severity})`,
    "",
    "Signals:",
    `- ${analytics.metrics.totalItems} research assets across ${analytics.metrics.activeThemes} active themes.`,
    `- Strongest duplicate family: ${topFamily ? `${topFamily.label} (${topFamily.count} assets)` : "none detected"}.`,
    `- Highest orbit theme: ${topTheme.label} (orbit ${topTheme.orbitScore}, dark matter ${topTheme.darkMatter}).`,
    `- Mean dark matter: ${analytics.metrics.meanDarkMatter}.`,
    "",
    "Operating interpretation:",
    `The drive is producing usable research capability faster than it is composing it into one governed system. The fastest correction is ${topProgram.title}.`
  ].join("\n");
}

function renderThemes(analytics) {
  refs.themeGrid.innerHTML = analytics.themes.map(theme => `
    <article class="theme-card">
      <div class="tag-row">
        <span class="score-pill">Orbit ${theme.orbitScore}</span>
        <span class="score-pill">Dark matter ${theme.darkMatter}</span>
      </div>
      <h3 style="margin-top:0.8rem;">${escapeHtml(theme.label)}</h3>
      <p class="muted">${escapeHtml(theme.description)}</p>
      <div class="score-grid">
        <div class="score-box"><strong>${theme.depth}</strong><span>assets</span></div>
        <div class="score-box"><strong>${theme.activation}</strong><span>activation</span></div>
        <div class="score-box"><strong>${theme.appCoverage}</strong><span>app coverage</span></div>
        <div class="score-box"><strong>${theme.duplicatePressure}</strong><span>duplication</span></div>
      </div>
      <div class="theme-bar"><span style="width:${theme.orbitScore}%;"></span></div>
      <div class="pill-row">
        <span class="tag">${theme.counts.root} roots</span>
        <span class="tag">${theme.counts.project} projects</span>
        <span class="tag">${theme.counts.app} apps</span>
      </div>
      <div class="token-row" style="margin-top:0.85rem;">
        ${theme.assets.map(asset => `<span class="asset-chip ${escapeHtml(asset.kind)}">${escapeHtml(asset.name)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderFamiliesAndAssets(analytics) {
  refs.familyList.innerHTML = analytics.families.slice(0, 10).map(family => `
    <div class="list-item">
      <div class="tag-row">
        <strong>${escapeHtml(family.label)}</strong>
        <span class="score-pill">Gravity ${family.gravity}</span>
        <span class="tag">${family.count} assets</span>
        <span class="tag">${family.kindSpread} kinds</span>
      </div>
      <div class="metric-note">${escapeHtml(family.members.slice(0, 5).map(member => member.name).join(" | "))}</div>
    </div>
  `).join("");

  refs.assetList.innerHTML = analytics.assets.slice(0, 10).map(asset => `
    <div class="list-item">
      <div class="tag-row">
        <strong>${escapeHtml(asset.name)}</strong>
        <span class="score-pill">Dark ${asset.darkMatter}</span>
        <span class="tag">${escapeHtml(asset.kind)}</span>
      </div>
      <div class="metric-note">
        Bridgeability ${asset.bridgeability} | orchestration ${asset.orchestration} | themes ${asset.themes.map(themeId => themeCatalog.find(theme => theme.id === themeId)?.label || themeId).join(", ")}
      </div>
    </div>
  `).join("");
}

function renderPrograms(analytics) {
  refs.programGrid.innerHTML = analytics.programs.slice(0, 4).map(program => `
    <article class="program-card">
      <div class="tag-row">
        <span class="score-pill">Tuned ${program.tunedScore}</span>
        <span class="score-pill">Upside ${program.upside}</span>
      </div>
      <h3 style="margin-top:0.8rem;">${escapeHtml(program.title)}</h3>
      <p class="muted">${escapeHtml(program.description)}</p>
      <table class="card-table">
        <tr><th>Impact</th><th>Execution</th><th>Reuse</th><th>Novelty</th><th>Governance</th></tr>
        <tr>
          <td>${program.impact}</td>
          <td>${program.execution}</td>
          <td>${program.reuse}</td>
          <td>${program.novelty}</td>
          <td>${program.governance}</td>
        </tr>
      </table>
      <div class="metric-note">${escapeHtml(program.whyNow)}</div>
      <div class="program-assets" style="margin-top:0.8rem;">
        ${program.assets.map(asset => `<span class="asset-chip ${escapeHtml(asset.kind)}">${escapeHtml(asset.name)}</span>`).join("")}
      </div>
    </article>
  `).join("");

  refs.programList.innerHTML = analytics.programs.map(program => `
    <div class="list-item">
      <div class="tag-row">
        <strong>${escapeHtml(program.title)}</strong>
        <span class="score-pill">${program.tunedScore}</span>
        <span class="tag">Upside ${program.upside}</span>
      </div>
      <div class="metric-note">${escapeHtml(program.whyNow)}</div>
    </div>
  `).join("");

  refs.mergeQueue.innerHTML = analytics.mergeQueue.map(entry => `
    <div class="list-item">
      <div class="tag-row">
        <strong>${escapeHtml(entry.action)}</strong>
        <span class="score-pill">${escapeHtml(entry.label)}</span>
        <span class="tag">Gravity ${entry.gravity}</span>
      </div>
      <div class="metric-note">${escapeHtml(entry.members.join(" | "))}</div>
    </div>
  `).join("");
}

function generateActionMemo(analytics) {
  const topProgram = analytics.programs[0];
  const topProblem = analytics.problems[0];
  const topAsset = analytics.assets[0];
  const topMerge = analytics.mergeQueue[0];
  return [
    `Strategy: ${topProgram.title}`,
    `Unknown problem: ${topProblem.label} (${topProblem.score}/100)`,
    "",
    "Immediate moves:",
    `1. Declare ${topProgram.title} the next canonical build program.`,
    `2. Pull ${topAsset ? topAsset.name : "the top dark-matter asset"} into that stack first.`,
    `3. ${topMerge ? `${topMerge.action} around the ${topMerge.label} family.` : "Start by merging the strongest duplicate family."}`,
    `4. Route the surviving apps and projects back through this control layer.`,
    "",
    "Why this wins:",
    `${topProgram.whyNow}`,
    "",
    "Core payload:",
    `${topProgram.assets.map(asset => asset.name).join(" | ")}`
  ].join("\n");
}

function renderStudio(analytics) {
  const topProgram = analytics.programs[0];
  const topProblem = analytics.problems[0];
  const topAsset = analytics.assets[0];
  refs.tunedInsight.innerHTML = `
    <strong>${escapeHtml(topProgram.title)}</strong> is the current tuned winner.
    It attacks <strong>${escapeHtml(topProblem.label)}</strong> while reusing
    <strong>${topProgram.assets.length}</strong> already-built assets. The highest
    latent-lift pull is <strong>${escapeHtml(topAsset?.name || "none")}</strong>.
    <div class="pill-row" style="margin-top:0.8rem;">
      <span class="tag">Impact ${topProgram.impact}</span>
      <span class="tag">Execution ${topProgram.execution}</span>
      <span class="tag">Reuse ${topProgram.reuse}</span>
      <span class="tag">Novelty ${topProgram.novelty}</span>
      <span class="tag">Governance ${topProgram.governance}</span>
    </div>
  `;
  refs.actionMemo.textContent = generateActionMemo(analytics);
}

function snapshotStatusText(snapshot, analytics) {
  const modeText = snapshot.meta.mode === "bundled"
    ? "Bundled snapshot in use."
    : snapshot.meta.mode === "imported"
      ? "Imported snapshot in use."
      : "Mixed bundled and live snapshot in use.";
  const lines = [
    `<strong>${escapeHtml(modeText)}</strong> Captured ${escapeHtml(formatTimestamp(snapshot.capturedAt))}.`,
    `Roots: ${escapeHtml(snapshot.meta.slices.roots.source)} (${snapshot.roots.length} directories).`,
    `Projects: ${escapeHtml(snapshot.meta.slices.projects.source)} (${snapshot.projects.length} directories).`,
    `HTML apps: ${escapeHtml(snapshot.meta.slices.apps.source)} (${snapshot.apps.length} directories).`
  ];
  if (analytics) {
    lines.push(`Estate model: ${analytics.metrics.totalItems} research items, ${analytics.metrics.activeThemes} active themes, ${analytics.families.length} duplicate families.`);
  }
  if (appState.notice) {
    lines.push(`<strong>Latest event:</strong> ${escapeHtml(appState.notice)}`);
  }
  return lines.join("<br>");
}

function syncSliderLabels() {
  const weights = appState.ui.weights;
  refs.impactRange.value = String(weights.impact);
  refs.executionRange.value = String(weights.execution);
  refs.reuseRange.value = String(weights.reuse);
  refs.noveltyRange.value = String(weights.novelty);
  refs.governanceRange.value = String(weights.governance);
  refs.impactValue.textContent = String(weights.impact);
  refs.executionValue.textContent = String(weights.execution);
  refs.reuseValue.textContent = String(weights.reuse);
  refs.noveltyValue.textContent = String(weights.novelty);
  refs.governanceValue.textContent = String(weights.governance);
}

function populateArchetypes() {
  refs.archetypeSelect.innerHTML = [
    ...archetypes.map(preset => `<option value="${escapeHtml(preset.id)}">${escapeHtml(preset.label)}</option>`),
    `<option value="custom">Custom</option>`
  ].join("");
  refs.archetypeSelect.value = appState.ui.archetype;
}

function applyArchetype(id) {
  if (id === "custom") {
    appState.ui.archetype = "custom";
    writeStoredState();
    refreshApp();
    return;
  }
  const preset = archetypes.find(entry => entry.id === id) || archetypes[0];
  appState.ui.archetype = preset.id;
  appState.ui.weights = { ...preset.weights };
  syncSliderLabels();
  writeStoredState();
  refreshApp();
}

function syncWeightsFromRanges() {
  appState.ui.weights = {
    impact: toWeight(refs.impactRange.value),
    execution: toWeight(refs.executionRange.value),
    reuse: toWeight(refs.reuseRange.value),
    novelty: toWeight(refs.noveltyRange.value),
    governance: toWeight(refs.governanceRange.value)
  };
  appState.ui.archetype = "custom";
  refs.archetypeSelect.value = "custom";
  syncSliderLabels();
  writeStoredState();
  refreshApp();
}

function refreshApp() {
  const weightState = getWeightState();
  appState.analytics = buildAnalytics(appState.snapshot, weightState);
  renderHero(appState.analytics);
  refs.snapshotStatus.innerHTML = snapshotStatusText(appState.snapshot, appState.analytics);
  renderTelemetry(appState.analytics);
  renderProblems(appState.analytics);
  renderThemes(appState.analytics);
  renderFamiliesAndAssets(appState.analytics);
  renderPrograms(appState.analytics);
  renderStudio(appState.analytics);
  refs.scriptPreview.textContent = generateRScript();
  writeStoredSnapshot(appState.snapshot);
  writeStoredState();
}

function inferSliceKind(handleName, names) {
  const lowerName = String(handleName ?? "").toLowerCase();
  const lowerNames = names.map(name => name.toLowerCase());
  const overlap = source => lowerNames.filter(name => source.some(item => item.toLowerCase() === name)).length;
  const rootOverlap = overlap(bundledSnapshot.roots);
  const projectOverlap = overlap(bundledSnapshot.projects);
  const appOverlap = overlap(bundledSnapshot.apps);
  if (lowerName === "projects" || projectOverlap >= Math.max(6, appOverlap + 3, rootOverlap + 3)) return "projects";
  if (lowerName.includes("html") || appOverlap >= Math.max(4, projectOverlap + 2, rootOverlap + 2)) return "apps";
  if (lowerNames.includes("projects") && lowerNames.includes("html apps")) return "roots";
  if (lowerName === "c:" || lowerName === "c:\\" || rootOverlap >= Math.max(8, projectOverlap, appOverlap)) return "roots";
  return null;
}

async function buildLiveSlice(handle) {
  const names = [];
  for await (const entry of handle.values()) {
    if (entry.kind === "directory") names.push(entry.name);
  }
  names.sort((a, b) => a.localeCompare(b));
  const slice = inferSliceKind(handle.name, names);
  if (!slice) {
    throw new Error("Could not infer whether the selected folder is C:\\, C:\\Projects, or C:\\HTML apps.");
  }
  return {
    slice,
    names,
    folderName: handle.name || (slice === "roots" ? "C:\\" : slice === "projects" ? "Projects" : "HTML apps")
  };
}

async function loadLiveFolder() {
  refs.loadFolderBtn.disabled = true;
  try {
    if (typeof window.showDirectoryPicker !== "function") {
      throw new Error("This browser does not expose the File System Access API.");
    }
    const handle = await window.showDirectoryPicker({ mode: "read" });
    const { slice, names, folderName } = await buildLiveSlice(handle);
    const next = cloneSnapshot(appState.snapshot);
    next[slice] = names;
    next.capturedAt = new Date().toISOString();
    next.meta.mode = "mixed";
    next.meta.slices[slice] = {
      source: `Live browser scan of ${folderName}`,
      live: true,
      loadedAt: next.capturedAt,
      folderName
    };
    appState.snapshot = normalizeSnapshot(next);
    appState.notice = `${slice === "roots" ? "C:\\" : slice === "projects" ? "C:\\Projects" : "C:\\HTML apps"} refreshed from the browser-selected folder.`;
    refreshApp();
  } catch (error) {
    appState.notice = `Live folder load failed: ${error.message || String(error)}`;
    refs.snapshotStatus.innerHTML = snapshotStatusText(appState.snapshot, appState.analytics);
  } finally {
    refs.loadFolderBtn.disabled = false;
  }
}

function exportSnapshot() {
  const blob = new Blob([JSON.stringify(appState.snapshot, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `research-orbit-control-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  appState.notice = "Current snapshot exported to JSON.";
  refs.snapshotStatus.innerHTML = snapshotStatusText(appState.snapshot, appState.analytics);
}

function openImport() {
  refs.importSnapshotInput.value = "";
  refs.importSnapshotInput.click();
}

async function importSnapshot(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const imported = normalizeSnapshot(parsed);
    imported.meta.mode = "imported";
    imported.meta.importLabel = file.name;
    imported.capturedAt = imported.capturedAt || new Date().toISOString();
    appState.snapshot = imported;
    appState.notice = `Imported snapshot from ${file.name}.`;
    refreshApp();
  } catch (error) {
    appState.notice = `Snapshot import failed: ${error.message || String(error)}`;
    refs.snapshotStatus.innerHTML = snapshotStatusText(appState.snapshot, appState.analytics);
  }
}

function resetSnapshot() {
  appState.snapshot = defaultSnapshotState();
  clearStoredSnapshot();
  appState.notice = "Reset to the bundled C drive snapshot.";
  refreshApp();
}

function escapeRString(value) {
  return String(value ?? "").replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}

function serializeRVector(values) {
  return `c(${values.map(value => `"${escapeRString(value)}"`).join(", ")})`;
}

function generateRScript() {
  const analytics = appState.analytics || buildAnalytics(appState.snapshot, getWeightState());
  const js = jsValidationSnapshot(analytics);
  return [
    "total_items <- as.integer(" + js.totalItems + ")",
    "research_roots <- as.integer(" + js.researchRoots + ")",
    "project_count <- as.integer(" + js.projectCount + ")",
    "app_count <- as.integer(" + js.appCount + ")",
    "problem_ids <- " + serializeRVector(analytics.problems.map(problem => problem.id)),
    "problem_scores <- c(" + analytics.problems.map(problem => problem.score.toFixed(1)).join(", ") + ")",
    "theme_ids <- " + serializeRVector(analytics.themes.map(theme => theme.id)),
    "theme_scores <- c(" + analytics.themes.map(theme => theme.orbitScore.toFixed(1)).join(", ") + ")",
    "program_ids <- " + serializeRVector(analytics.programs.map(program => program.id)),
    "program_scores <- c(" + analytics.programs.map(program => program.tunedScore.toFixed(1)).join(", ") + ")",
    "asset_ids <- " + serializeRVector(analytics.assets.map(asset => asset.id)),
    "asset_scores <- c(" + analytics.assets.map(asset => asset.darkMatter.toFixed(1)).join(", ") + ")",
    "family_ids <- " + serializeRVector(analytics.families.map(family => family.token)),
    "family_scores <- c(" + analytics.families.map(family => family.gravity.toFixed(1)).join(", ") + ")",
    "family_counts <- c(" + analytics.families.map(family => family.count).join(", ") + ")",
    "top_problem <- problem_ids[order(-problem_scores, problem_ids)][1]",
    "top_theme <- theme_ids[order(-theme_scores, theme_ids)][1]",
    "top_program <- program_ids[order(-program_scores, program_ids)][1]",
    "top_asset <- asset_ids[order(-asset_scores, asset_ids)][1]",
    "top_family <- family_ids[order(-family_scores, -family_counts, family_ids)][1]",
    "mean_dark_matter <- sprintf('%.2f', mean(asset_scores))",
    "family_count <- length(family_ids)",
    "paste(c(total_items, research_roots, project_count, app_count, top_problem, top_theme, top_program, top_asset, top_family, mean_dark_matter, family_count), collapse='|')"
  ].join("\n");
}

function normalizeWebRResult(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return normalizeWebRResult(value[0]);
  if (value && typeof value === "object") {
    if (Object.prototype.hasOwnProperty.call(value, "values")) return normalizeWebRResult(value.values);
    if (Object.prototype.hasOwnProperty.call(value, "value")) return normalizeWebRResult(value.value);
  }
  return String(value ?? "");
}

async function initWebR() {
  if (validationState.webR) return validationState.webR;
  if (validationState.loading) return null;
  validationState.loading = true;
  refs.progressWrap.style.display = "block";
  refs.webrStatus.textContent = "Loading WebR";
  refs.webrStatus.className = "status-badge";
  try {
    refs.progressText.textContent = "Importing WebR runtime...";
    refs.progressBar.value = 18;
    const mod = await import("https://webr.r-wasm.org/v0.4.4/webr.mjs");
    refs.progressText.textContent = "Starting R environment...";
    refs.progressBar.value = 55;
    validationState.webR = new mod.WebR();
    await validationState.webR.init();
    refs.progressText.textContent = "WebR ready.";
    refs.progressBar.value = 100;
    refs.webrStatus.textContent = "WebR ready";
    refs.webrStatus.className = "status-badge ready";
    return validationState.webR;
  } catch (error) {
    refs.webrStatus.textContent = "WebR failed";
    refs.webrStatus.className = "status-badge error";
    refs.validationResults.innerHTML = `<strong>Validation could not start.</strong><br>${escapeHtml(error.message || String(error))}`;
    return null;
  } finally {
    validationState.loading = false;
  }
}

function jsValidationSnapshot(analytics = appState.analytics) {
  return {
    totalItems: String(analytics.metrics.totalItems),
    researchRoots: String(analytics.metrics.researchRoots),
    projectCount: String(analytics.metrics.projectCount),
    appCount: String(analytics.metrics.appCount),
    topProblemId: analytics.problems[0]?.id || "",
    topThemeId: analytics.themes[0]?.id || "",
    topProgramId: analytics.programs[0]?.id || "",
    topAssetId: analytics.assets[0]?.id || "",
    topFamilyId: analytics.families[0]?.token || "",
    meanDarkMatter: mean(analytics.assets.map(asset => asset.darkMatter)).toFixed(2),
    duplicateFamilyCount: String(analytics.families.length)
  };
}

async function runValidation() {
  if (validationState.running) return;
  validationState.running = true;
  refs.runValidationBtn.disabled = true;
  refs.progressWrap.style.display = "block";
  refs.progressText.textContent = "Preparing validation run...";
  refs.progressBar.value = 10;
  const script = generateRScript();
  refs.scriptPreview.textContent = script;
  try {
    const webR = await initWebR();
    if (!webR) return;
    refs.progressText.textContent = "Executing base R checks...";
    refs.progressBar.value = 78;
    const proxy = await webR.evalR(script);
    let raw;
    try {
      raw = await proxy.toJs();
    } finally {
      if (proxy && typeof proxy.destroy === "function") {
        try { await proxy.destroy(); } catch (error) {}
      }
    }
    const parts = normalizeWebRResult(raw).trim().split("|");
    const js = jsValidationSnapshot();
    const checks = [
      { label: "Total research items", js: js.totalItems, r: parts[0], pass: js.totalItems === parts[0] },
      { label: "Research roots", js: js.researchRoots, r: parts[1], pass: js.researchRoots === parts[1] },
      { label: "Project count", js: js.projectCount, r: parts[2], pass: js.projectCount === parts[2] },
      { label: "HTML app count", js: js.appCount, r: parts[3], pass: js.appCount === parts[3] },
      { label: "Top problem", js: js.topProblemId, r: parts[4], pass: js.topProblemId === parts[4] },
      { label: "Top theme", js: js.topThemeId, r: parts[5], pass: js.topThemeId === parts[5] },
      { label: "Top fusion program", js: js.topProgramId, r: parts[6], pass: js.topProgramId === parts[6] },
      { label: "Top dark-matter asset", js: js.topAssetId, r: parts[7], pass: js.topAssetId === parts[7] },
      { label: "Strongest family", js: js.topFamilyId, r: parts[8], pass: js.topFamilyId === parts[8] },
      { label: "Mean dark matter", js: js.meanDarkMatter, r: parts[9], pass: js.meanDarkMatter === parts[9] },
      { label: "Duplicate family count", js: js.duplicateFamilyCount, r: parts[10], pass: js.duplicateFamilyCount === parts[10] }
    ];
    const passed = checks.filter(check => check.pass).length;
    refs.progressText.textContent = `Validation complete: ${passed}/${checks.length} checks passed.`;
    refs.progressBar.value = 100;
    refs.validationResults.innerHTML = `
      <table>
        <tr><th>Check</th><th>JavaScript</th><th>WebR</th><th>Status</th></tr>
        ${checks.map(check => `
          <tr>
            <td>${escapeHtml(check.label)}</td>
            <td>${escapeHtml(check.js)}</td>
            <td>${escapeHtml(check.r)}</td>
            <td>${check.pass ? "Pass" : "Fail"}</td>
          </tr>
        `).join("")}
      </table>
    `;
  } catch (error) {
    refs.validationResults.innerHTML = `<strong>Validation failed.</strong><br>${escapeHtml(error.message || String(error))}`;
    refs.webrStatus.textContent = "WebR failed";
    refs.webrStatus.className = "status-badge error";
  } finally {
    validationState.running = false;
    refs.runValidationBtn.disabled = false;
  }
}

async function copyScript() {
  const script = generateRScript();
  refs.scriptPreview.textContent = script;
  try {
    await navigator.clipboard.writeText(script);
    appState.notice = "R validation script copied to the clipboard.";
  } catch (error) {
    appState.notice = "Clipboard copy failed in this browser context.";
  }
  refs.snapshotStatus.innerHTML = snapshotStatusText(appState.snapshot, appState.analytics);
}

function bindEvents() {
  refs.loadFolderBtn.addEventListener("click", loadLiveFolder);
  refs.exportSnapshotBtn.addEventListener("click", exportSnapshot);
  refs.importSnapshotBtn.addEventListener("click", openImport);
  refs.importSnapshotInput.addEventListener("change", importSnapshot);
  refs.resetSnapshotBtn.addEventListener("click", resetSnapshot);
  refs.archetypeSelect.addEventListener("change", event => applyArchetype(event.target.value));
  refs.impactRange.addEventListener("input", syncWeightsFromRanges);
  refs.executionRange.addEventListener("input", syncWeightsFromRanges);
  refs.reuseRange.addEventListener("input", syncWeightsFromRanges);
  refs.noveltyRange.addEventListener("input", syncWeightsFromRanges);
  refs.governanceRange.addEventListener("input", syncWeightsFromRanges);
  refs.runValidationBtn.addEventListener("click", runValidation);
  refs.copyScriptBtn.addEventListener("click", copyScript);
}

function cacheRefs() {
  refs.heroStats = document.getElementById("heroStats");
  refs.snapshotStatus = document.getElementById("snapshotStatus");
  refs.loadFolderBtn = document.getElementById("loadFolderBtn");
  refs.exportSnapshotBtn = document.getElementById("exportSnapshotBtn");
  refs.importSnapshotBtn = document.getElementById("importSnapshotBtn");
  refs.resetSnapshotBtn = document.getElementById("resetSnapshotBtn");
  refs.importSnapshotInput = document.getElementById("importSnapshotInput");
  refs.telemetryGrid = document.getElementById("telemetryGrid");
  refs.problemGrid = document.getElementById("problemGrid");
  refs.problemList = document.getElementById("problemList");
  refs.diagnosisMemo = document.getElementById("diagnosisMemo");
  refs.themeGrid = document.getElementById("themeGrid");
  refs.familyList = document.getElementById("familyList");
  refs.assetList = document.getElementById("assetList");
  refs.programGrid = document.getElementById("programGrid");
  refs.programList = document.getElementById("programList");
  refs.mergeQueue = document.getElementById("mergeQueue");
  refs.archetypeSelect = document.getElementById("archetypeSelect");
  refs.impactRange = document.getElementById("impactRange");
  refs.executionRange = document.getElementById("executionRange");
  refs.reuseRange = document.getElementById("reuseRange");
  refs.noveltyRange = document.getElementById("noveltyRange");
  refs.governanceRange = document.getElementById("governanceRange");
  refs.impactValue = document.getElementById("impactValue");
  refs.executionValue = document.getElementById("executionValue");
  refs.reuseValue = document.getElementById("reuseValue");
  refs.noveltyValue = document.getElementById("noveltyValue");
  refs.governanceValue = document.getElementById("governanceValue");
  refs.tunedInsight = document.getElementById("tunedInsight");
  refs.actionMemo = document.getElementById("actionMemo");
  refs.webrStatus = document.getElementById("webrStatus");
  refs.runValidationBtn = document.getElementById("runValidationBtn");
  refs.copyScriptBtn = document.getElementById("copyScriptBtn");
  refs.progressWrap = document.getElementById("progressWrap");
  refs.progressBar = document.getElementById("progressBar");
  refs.progressText = document.getElementById("progressText");
  refs.validationResults = document.getElementById("validationResults");
  refs.scriptPreview = document.getElementById("scriptPreview");
}

function init() {
  cacheRefs();
  populateArchetypes();
  if (!archetypes.some(entry => entry.id === appState.ui.archetype) && appState.ui.archetype !== "custom") {
    appState.ui = defaultUiState();
  }
  refs.archetypeSelect.value = appState.ui.archetype;
  syncSliderLabels();
  bindEvents();
  refreshApp();
  window.__researchOrbitControl = {
    get snapshot() { return appState.snapshot; },
    get analytics() { return appState.analytics; },
    refreshApp,
    runValidation,
    loadLiveFolder,
    exportSnapshot,
    resetSnapshot
  };
}

document.addEventListener("DOMContentLoaded", init);
