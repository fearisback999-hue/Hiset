// HiSET Essay Auto-Grader — heuristic scoring engine for written components
// Analyzes the user's text and returns a score (0–100) plus targeted feedback.

const VAGUE_WORDS = ["good", "bad", "nice", "interesting", "stuff", "things", "thing",
  "a lot", "lots", "very good", "great", "cool", "okay", "ok", "kind of", "sort of"];

const PASSAGE_REFS = ["passage a", "passage b", "passage 1", "passage 2",
  "the first passage", "the second passage", "author a", "author b",
  "the first author", "the second author"];

const SIDE_WORDS = ["stronger", "more convincing", "better supported", "most convincing",
  "more persuasive", "most persuasive", "more effective", "better argument",
  "makes the stronger", "makes a stronger", "more compelling", "best supported"];

const REASON_CUES = ["because", "since", "as it", "due to", "by ", "through ",
  "for instance", "by citing", "by providing", "by showing", "by offering"];

const TRANSITIONS = ["first", "second", "third", "next", "finally", "furthermore",
  "moreover", "in addition", "additionally", "however", "in contrast", "on the other hand",
  "although", "while", "consequently", "therefore", "as a result", "for example",
  "for instance", "ultimately", "in conclusion", "overall"];

const EVIDENCE_CUES = ["according to", "the author", "states that", "notes that",
  "argues that", "claims that", "points out", "explains that", "cites", "\"",
  "research", "study", "statistic", "percent", "%", "evidence", "data", "for example"];

function wordCount(text) {
  const t = text.trim();
  return t === "" ? 0 : t.split(/\s+/).length;
}

function sentenceCount(text) {
  const m = text.trim().match(/[.!?]+(\s|$)/g);
  return m ? m.length : (text.trim() ? 1 : 0);
}

function containsAny(lower, list) {
  return list.some(w => lower.includes(w));
}

function countAny(lower, list) {
  return list.reduce((n, w) => n + (lower.includes(w) ? 1 : 0), 0);
}

// ── Per-skill graders ────────────────────────────────────────────────────────

function gradeThesis(text) {
  const lower = text.toLowerCase();
  const wc = wordCount(text);
  const sc = sentenceCount(text);
  const checks = [];

  // 1. Takes a clear side
  const namesPassage = containsAny(lower, PASSAGE_REFS);
  const hasSideWord = containsAny(lower, SIDE_WORDS);
  checks.push({
    label: "Takes a clear side",
    pass: namesPassage && hasSideWord,
    weight: 25,
    good: "You clearly name which passage/argument is stronger.",
    bad: namesPassage
      ? "You mention a passage, but say WHICH is stronger using words like \"more convincing\" or \"better supported.\""
      : "Name which side wins — e.g., \"Passage A presents the more convincing argument...\""
  });

  // 2. Previews reasons
  const hasReasonCue = containsAny(lower, REASON_CUES);
  checks.push({
    label: "Previews your reasons",
    pass: hasReasonCue,
    weight: 25,
    good: "You preview WHY (a \"because…\" reason). This roadmaps your body paragraphs.",
    bad: "Add a reason with \"because\" — e.g., \"...because it uses concrete statistics and clear examples.\""
  });

  // 3. Has TWO reasons (look for "and" after a because, or two reason cues)
  const becauseIdx = lower.search(/because|since/);
  let twoReasons = false;
  if (becauseIdx !== -1) {
    const tail = lower.slice(becauseIdx);
    twoReasons = / and | as well as |, and |; /.test(tail) || countAny(tail, REASON_CUES) >= 2;
  }
  checks.push({
    label: "Gives two distinct reasons",
    pass: twoReasons,
    weight: 20,
    good: "You preview two reasons — excellent. That sets up two strong body paragraphs.",
    bad: "Preview TWO reasons joined by \"and\" — e.g., \"...because it cites statistics AND explains the benefits.\""
  });

  // 4. Avoids vague words
  const vagueFound = VAGUE_WORDS.filter(w => lower.includes(w));
  checks.push({
    label: "Uses precise language",
    pass: vagueFound.length === 0,
    weight: 15,
    good: "Your wording is specific — no vague filler.",
    bad: `Replace vague words (${vagueFound.slice(0,3).join(", ")}) with specific language like "concrete evidence" or "measurable results."`
  });

  // 5. One focused sentence, right length
  const goodLength = wc >= 12 && wc <= 55;
  const oneSentence = sc <= 1;
  checks.push({
    label: "One focused sentence (12–55 words)",
    pass: goodLength && oneSentence,
    weight: 15,
    good: `Length is on target (${wc} words, ${sc} sentence${sc === 1 ? "" : "s"}).`,
    bad: !oneSentence
      ? `A thesis should be ONE sentence (yours has ${sc}). Combine into a single statement.`
      : wc < 12
        ? `Too short (${wc} words). Add your side and your reasons.`
        : `Too long (${wc} words). Tighten it to one focused sentence.`
  });

  return finalizeGrade(checks, wc);
}

function gradeTopicSentence(text) {
  const lower = text.toLowerCase();
  const wc = wordCount(text);
  const checks = [];

  const startsTransition = TRANSITIONS.some(t => lower.trim().startsWith(t));
  checks.push({
    label: "Opens with a transition",
    pass: startsTransition,
    weight: 25,
    good: "You open with a transition word — great for flow and Organization points.",
    bad: "Start with a transition like \"First,\" \"Furthermore,\" or \"In contrast,\" to signal structure."
  });

  checks.push({
    label: "Names the passage / argument",
    pass: containsAny(lower, PASSAGE_REFS) || lower.includes("author") || lower.includes("argument"),
    weight: 25,
    good: "You reference the passage/argument the paragraph is about.",
    bad: "Reference the passage — e.g., \"Passage A strengthens its case by...\""
  });

  checks.push({
    label: "States ONE clear idea",
    pass: wc >= 8 && sentenceCount(text) <= 1,
    weight: 25,
    good: "It's a single, focused claim — perfect for opening a body paragraph.",
    bad: sentenceCount(text) > 1
      ? "Keep it to one sentence that announces a single idea."
      : "Add a bit more — clearly state the one idea this paragraph will prove."
  });

  checks.push({
    label: "Frames an idea, not raw evidence",
    pass: !/^\s*(\d|the study|the author found|"|\d+\s*percent)/i.test(text) && !lower.startsWith("according"),
    weight: 25,
    good: "You frame the main idea rather than dumping a statistic. Save evidence for the next sentence.",
    bad: "A topic sentence should frame the idea, not lead with a raw fact/quote. Put the evidence in the following sentence."
  });

  return finalizeGrade(checks, wc);
}

function gradeBodyParagraph(text) {
  const lower = text.toLowerCase();
  const wc = wordCount(text);
  const sc = sentenceCount(text);
  const checks = [];

  checks.push({
    label: "Point: opens with a clear claim",
    pass: sc >= 1 && wc >= 30,
    weight: 20,
    good: "You open with a claim and develop it.",
    bad: "Start with a topic sentence stating your point, then develop it."
  });

  const hasEvidence = containsAny(lower, EVIDENCE_CUES);
  checks.push({
    label: "Evidence: cites the passage",
    pass: hasEvidence,
    weight: 30,
    good: "You bring in specific evidence from the passage.",
    bad: "Cite specific evidence — quote or paraphrase the passage (\"The author notes that...\")."
  });

  const hasExplain = containsAny(lower, ["this shows", "this matters", "because", "this is",
    "which means", "this evidence", "this proves", "demonstrates", "as a result", "this suggests"]);
  checks.push({
    label: "Explain: analyzes the evidence",
    pass: hasExplain,
    weight: 30,
    good: "You explain WHY the evidence supports your argument — that's where Development points live.",
    bad: "After your evidence, explain its significance (\"This matters because...\"). Don't just drop a fact."
  });

  checks.push({
    label: "Developed length (4+ sentences)",
    pass: sc >= 4 && wc >= 55,
    weight: 20,
    good: `Solid development (${sc} sentences, ${wc} words).`,
    bad: `Develop it further (you have ${sc} sentence${sc===1?"":"s"}). Aim for 4–6 sentences using Point–Evidence–Explain–Link.`
  });

  return finalizeGrade(checks, wc);
}

function gradeIntroduction(text) {
  const lower = text.toLowerCase();
  const wc = wordCount(text);
  const sc = sentenceCount(text);
  const checks = [];

  checks.push({
    label: "Opens with context (a hook)",
    pass: !lower.trim().startsWith("in this essay") && !lower.trim().startsWith("i will") && wc >= 20,
    weight: 25,
    good: "You open with real context rather than a mechanical \"In this essay I will...\"",
    bad: "Avoid \"In this essay I will...\" Open with a sentence of real context about the topic."
  });

  checks.push({
    label: "Frames the debate (two sides)",
    pass: containsAny(lower, PASSAGE_REFS) || lower.includes("two passages") || lower.includes("debate") || lower.includes("disagree"),
    weight: 25,
    good: "You note that the two passages take opposing views.",
    bad: "Mention that the two passages disagree before stating your thesis."
  });

  checks.push({
    label: "Ends with a thesis (takes a side)",
    pass: containsAny(lower, SIDE_WORDS),
    weight: 30,
    good: "You end with a clear thesis taking a side.",
    bad: "End with a thesis naming which passage is stronger (\"...Passage B is more convincing because...\")."
  });

  checks.push({
    label: "Right length (3–4 sentences)",
    pass: sc >= 3 && sc <= 5 && wc >= 35,
    weight: 20,
    good: `Good intro length (${sc} sentences).`,
    bad: sc < 3 ? `Add more (you have ${sc} sentence${sc===1?"":"s"}). Aim for 3–4: hook, debate, thesis.`
                : `A bit long for an intro (${sc} sentences). Save evidence for the body.`
  });

  return finalizeGrade(checks, wc);
}

function gradeConclusion(text) {
  const lower = text.toLowerCase();
  const wc = wordCount(text);
  const sc = sentenceCount(text);
  const checks = [];

  checks.push({
    label: "Restates your position",
    pass: containsAny(lower, SIDE_WORDS) || containsAny(lower, PASSAGE_REFS),
    weight: 30,
    good: "You restate which side wins.",
    bad: "Restate your position in fresh words (\"Ultimately, Passage A makes the stronger case...\")."
  });

  checks.push({
    label: "Signals a conclusion",
    pass: containsAny(lower, ["in conclusion", "ultimately", "in the end", "overall", "to conclude", "in summary", "for these reasons"]),
    weight: 20,
    good: "You use a closing signal phrase.",
    bad: "Open with a closing signal: \"Ultimately,\" \"In the end,\" or \"For these reasons,\""
  });

  checks.push({
    label: "Recaps your reasons",
    pass: containsAny(lower, REASON_CUES) || lower.includes("evidence") || lower.includes("reason"),
    weight: 30,
    good: "You remind the reader of your main reasons.",
    bad: "Briefly recap your two main reasons before your final thought."
  });

  checks.push({
    label: "Concise (2–4 sentences, no new evidence)",
    pass: sc >= 2 && sc <= 4,
    weight: 20,
    good: `Good conclusion length (${sc} sentences).`,
    bad: `Aim for 2–4 sentences (you have ${sc}). Don't introduce new evidence here.`
  });

  return finalizeGrade(checks, wc);
}

// ── Shared finalizer ──────────────────────────────────────────────────────────

function finalizeGrade(checks, wc) {
  const earned = checks.reduce((s, c) => s + (c.pass ? c.weight : 0), 0);
  const total = checks.reduce((s, c) => s + c.weight, 0);
  const score = Math.round((earned / total) * 100);

  let band, bandClass, bandMsg;
  if (score >= 85) { band = "Excellent"; bandClass = "grade-a"; bandMsg = "This would score at the top of the rubric. 🏆"; }
  else if (score >= 70) { band = "Strong"; bandClass = "grade-b"; bandMsg = "Solid work — fix the flagged items to make it top-tier."; }
  else if (score >= 50) { band = "Developing"; bandClass = "grade-c"; bandMsg = "On the right track. Address the ❌ items below."; }
  else { band = "Needs Work"; bandClass = "grade-d"; bandMsg = "Use the checklist below to rebuild it step by step."; }

  return { score, band, bandClass, bandMsg, checks, wordCount: wc };
}

// ── Dispatcher ────────────────────────────────────────────────────────────────

function gradeSkill(skillId, text) {
  if (!text || wordCount(text) < 3) {
    return { error: "Write at least a few words first, then tap Grade." };
  }
  switch (skillId) {
    case "thesis":     return gradeThesis(text);
    case "topic":      return gradeTopicSentence(text);
    case "body":       return gradeBodyParagraph(text);
    case "intro":      return gradeIntroduction(text);
    case "conclusion": return gradeConclusion(text);
    default:           return gradeThesis(text);
  }
}
