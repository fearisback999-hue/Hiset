// AI-powered features for HiSET Writing Prep
// Uses Google Gemini API for essay grading, wrong-answer explanations, and tutoring

const AI_CONFIG = {
  apiKey: "",
  model: "gemini-2.0-flash",
  maxTokens: 1500
};

function aiConfigured() {
  return AI_CONFIG.apiKey.length > 10;
}

function setAIKey(key) {
  AI_CONFIG.apiKey = key.trim();
  _workingModel = null;
  try { localStorage.setItem("hiset_ai_key", AI_CONFIG.apiKey); } catch {}
}

function loadAIKey() {
  try {
    const k = localStorage.getItem("hiset_ai_key");
    if (k) AI_CONFIG.apiKey = k;
  } catch {}
}

loadAIKey();

let _workingModel = null;

async function _geminiRequest(model, body, headers) {
  const resp = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${AI_CONFIG.apiKey}`,
    { method: "POST", headers, body }
  );
  return resp;
}

async function callAI(systemPrompt, userPrompt, maxTokens) {
  if (!aiConfigured()) throw new Error("NO_KEY");

  const fullPrompt = systemPrompt + "\n\n" + userPrompt;
  const body = JSON.stringify({
    contents: [{ parts: [{ text: fullPrompt }] }],
    generationConfig: { maxOutputTokens: maxTokens || AI_CONFIG.maxTokens }
  });
  const headers = { "Content-Type": "application/json" };

  const models = _workingModel
    ? [_workingModel]
    : [AI_CONFIG.model, "gemini-2.0-flash-lite", "gemini-1.5-flash"];

  for (const model of models) {
    let resp = await _geminiRequest(model, body, headers);

    if (resp.status === 404) continue;

    if (resp.status === 429) {
      await new Promise(r => setTimeout(r, 4000));
      resp = await _geminiRequest(model, body, headers);
      if (resp.status === 429) {
        await new Promise(r => setTimeout(r, 8000));
        resp = await _geminiRequest(model, body, headers);
      }
      if (resp.status === 429) throw new Error("RATE_LIMIT");
    }

    if (!resp.ok) {
      const err = await resp.text();
      if (resp.status === 400 && err.includes("API key")) throw new Error("INVALID_KEY");
      throw new Error(`API error ${resp.status}`);
    }

    _workingModel = model;
    const data = await resp.json();
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error("Invalid response from Gemini API");
    }
    return data.candidates[0].content.parts[0].text;
  }

  _workingModel = null;
  throw new Error("No available Gemini model. Check your API key at ai.google.dev");
}

// Grade a full essay using AI
async function aiGradeEssay(essayText, passageA, passageB, prompt) {
  const system = `You are an expert HiSET essay grader. The student is targeting a Score 5 (Strong Command). Score their essay using the official HiSET holistic rubric (1-6 scale).

SCORING GUIDE:
1 = Weak: No clear position, no organization, minimal language control, frequent errors
2 = Limited: Unclear position, basic paragraphing, developing language, errors interfere
3 = Partial: Some development, groups ideas in paragraphs, general word choice, regular errors
4 = Adequate: Clear position, discusses alternate claims, specific evidence from texts, some errors. Uses transitions consistently. Formal style established.
5 = Strong: Competent development with BALANCED discussion of alternate claims. Clear, considered position. Complete explanation with specific, elaborated details. Relevant evidence SKILLFULLY INTEGRATED from texts. Precise, varied vocabulary. Well-controlled sentences varied in length and complexity. Formal style and objective tone maintained. Counterclaims discussed FAIRLY. Few errors.
6 = Superior: Expert development. Discusses strengths AND limitations of alternate claims. Nuanced position. Compelling evidence effectively integrated. Purposeful vocabulary. Near-perfect grammar.

CRITICAL DIFFERENCES (4 vs 5):
- A 4 MENTIONS evidence; a 5 INTEGRATES it into the argument seamlessly
- A 4 ACKNOWLEDGES the other side; a 5 ENGAGES with it fairly and explains why it's weaker
- A 4 has adequate sentences; a 5 varies sentence length and structure deliberately
- A 4 uses transitions; a 5 uses VARIED transitions that connect ideas logically

You must respond in this exact format:
SCORE: [number 1-6]
STRENGTHS:
- [strength 1]
- [strength 2]
- [strength 3]
IMPROVEMENTS:
- [specific actionable improvement 1 — quote the exact weak sentence and show how to fix it]
- [specific actionable improvement 2 — quote the exact weak sentence and show how to fix it]
- [specific actionable improvement 3 — quote the exact weak sentence and show how to fix it]
REWRITE_TIP: [Take their weakest paragraph and rewrite 2-3 sentences to show Score 5 quality. Show the before and after.]
NEXT_SCORE: [Exactly what they need to change to move up one score level — be brutally specific about sentences, evidence, structure]`;

  const user = `The student was given two passages and asked to write an argumentative essay.

PASSAGE A: ${passageA}

PASSAGE B: ${passageB}

WRITING TASK: ${prompt}

STUDENT'S ESSAY:
${essayText}

Grade this essay on the HiSET 1-6 holistic scale. Be honest but encouraging. Give specific, actionable feedback referencing their actual text.`;

  return await callAI(system, user, 2000);
}

// Explain why a specific answer is wrong and teach the concept
async function aiExplainQuestion(question, passage, choices, correctIndex, studentAnswer, category) {
  const system = `You are a patient, encouraging HiSET writing tutor. A student got a practice question wrong. Explain:
1. WHY their answer is wrong (be specific about the error)
2. WHY the correct answer is right (teach the underlying rule)
3. A MEMORY TIP to remember this concept for the real test

Keep it conversational and under 200 words. Use "you" to address the student directly. Bold key terms with **term**.`;

  const user = `Category: ${category}
${passage ? `Passage context: ${passage.substring(0, 500)}...` : ""}
Question: ${question}
Choices: ${choices.map((c, i) => `${String.fromCharCode(65 + i)}. ${c}`).join(" | ")}
Student picked: ${String.fromCharCode(65 + studentAnswer)} (${choices[studentAnswer]})
Correct answer: ${String.fromCharCode(65 + correctIndex)} (${choices[correctIndex]})

Explain why they're wrong and teach the rule.`;

  return await callAI(system, user, 800);
}

// AI tutor chat for any writing question
async function aiTutor(userMessage, context) {
  const system = `You are a friendly, expert HiSET writing tutor. The student is preparing for the HiSET Language Arts - Writing exam.

The exam has two parts:
1. Multiple Choice (50 questions, 75 min): Passage-based editing — grammar, organization, style
2. Extended Response (1 essay, 45 min): Read two opposing passages, argue which is better supported

SCORING: Holistic 1-6 per rater (two raters), combined 2-12. Aim for 4+ per rater.

Help the student understand grammar rules, essay structure, test strategies, and writing skills. Be encouraging but honest. Give specific examples. Keep responses focused and under 250 words unless they ask for more detail.

${context ? `Current context: ${context}` : ""}`;

  return await callAI(system, userMessage, 1200);
}

// Generate practice on weak areas
async function aiGenerateQuestion(category, difficulty) {
  const system = `You are a HiSET practice question generator. Create ONE multiple-choice question in the style of the HiSET Language Arts - Writing exam.

Respond in this exact JSON format (no markdown, just raw JSON):
{
  "passage": "A short passage (2-3 sentences) containing an error or requiring revision",
  "question": "The question asking about a specific underlined/numbered portion",
  "choices": ["A. choice", "B. choice", "C. choice", "D. choice"],
  "correct": 0,
  "explanation": "Brief explanation of why the correct answer is right"
}

The correct field is 0-based (A=0, B=1, C=2, D=3).`;

  const user = `Generate a ${difficulty || "medium"} difficulty HiSET-style question about: ${category}

Make it realistic — use a passage context, include "No change" as option A when appropriate, and test real grammar/writing skills.`;

  const text = await callAI(system, user, 800);
  try {
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    throw new Error("Failed to parse AI question");
  }
}

// Parse the AI grade response into structured data
function parseAIGrade(text) {
  const scoreMatch = text.match(/SCORE:\s*(\d)/);
  const score = scoreMatch ? parseInt(scoreMatch[1]) : null;

  const strengthsMatch = text.match(/STRENGTHS:\n([\s\S]*?)(?=IMPROVEMENTS:)/);
  const strengths = strengthsMatch
    ? strengthsMatch[1].split("\n").filter(l => l.trim().startsWith("-")).map(l => l.trim().replace(/^-\s*/, ""))
    : [];

  const improvementsMatch = text.match(/IMPROVEMENTS:\n([\s\S]*?)(?=REWRITE_TIP:)/);
  const improvements = improvementsMatch
    ? improvementsMatch[1].split("\n").filter(l => l.trim().startsWith("-")).map(l => l.trim().replace(/^-\s*/, ""))
    : [];

  const rewriteMatch = text.match(/REWRITE_TIP:\s*([\s\S]*?)(?=NEXT_SCORE:)/);
  const rewriteTip = rewriteMatch ? rewriteMatch[1].trim() : "";

  const nextMatch = text.match(/NEXT_SCORE:\s*([\s\S]*?)$/);
  const nextScore = nextMatch ? nextMatch[1].trim() : "";

  return { score, strengths, improvements, rewriteTip, nextScore, raw: text };
}

// Format markdown-like text to HTML
function mdToHtml(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br>");
}
