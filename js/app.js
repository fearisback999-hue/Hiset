// HiSET Writing Study App — Main Application Logic

const APP_VERSION = "1.0.0";
const STORAGE_KEY = "hiset_progress";

// ─── State ────────────────────────────────────────────────────────────────────

const state = {
  currentView: "home",
  lessonId: null,
  lessonSection: 0,
  testQuestions: [],
  testIndex: 0,
  testAnswers: [],
  testMode: "full",        // "full" | "quick" | "category" | "exam"
  testCategory: null,
  testExamNum: null,
  testStartTime: null,
  testTimerInterval: null,
  essayPromptId: null,
  essayText: "",
  showEssayRubric: false,
  skillId: null,
  skillTab: "learn",        // "learn" | "spot" | "write"
  skillMcqIndex: 0,
  skillMcqAnswer: null,
  skillDrillIndex: 0,
  skillDrillRevealed: false,
  skillDraft: "",
  progress: loadProgress()
};

// ─── Progress Persistence ─────────────────────────────────────────────────────

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : defaultProgress();
  } catch { return defaultProgress(); }
}

function defaultProgress() {
  return {
    lessonsCompleted: [],
    testHistory: [],
    questionStats: {},   // { qId: { correct: n, total: n } }
    streakDays: 0,
    lastStudyDate: null,
    totalQuestionsAnswered: 0,
    totalCorrect: 0
  };
}

function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch {}
}

// ─── Router ──────────────────────────────────────────────────────────────────

function navigate(view, params = {}) {
  // Clear test timer if leaving test
  if (state.testTimerInterval) {
    clearInterval(state.testTimerInterval);
    state.testTimerInterval = null;
  }
  state.currentView = view;
  Object.assign(state, params);
  render();
  window.scrollTo(0, 0);
}

// ─── Render dispatcher ───────────────────────────────────────────────────────

function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  updateNav();

  switch (state.currentView) {
    case "home":         app.appendChild(renderHome()); break;
    case "lessons":      app.appendChild(renderLessonsMenu()); break;
    case "lesson":       app.appendChild(renderLesson()); break;
    case "practice":     app.appendChild(renderPracticeMenu()); break;
    case "test":         app.appendChild(renderTest()); break;
    case "results":      app.appendChild(renderResults()); break;
    case "essay":        app.appendChild(renderEssayMenu()); break;
    case "essay-write":  app.appendChild(renderEssayWrite()); break;
    case "essay-rubric": app.appendChild(renderEssayRubric()); break;
    case "essay-skill":  app.appendChild(renderEssaySkill()); break;
    case "progress":     app.appendChild(renderProgress()); break;
    case "cheatsheet":   app.appendChild(renderCheatSheet()); break;
    default:             app.appendChild(renderHome());
  }
}

function updateNav() {
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.dataset.view === state.currentView);
  });
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function renderHome() {
  const p = state.progress;
  const pct = p.totalQuestionsAnswered > 0
    ? Math.round((p.totalCorrect / p.totalQuestionsAnswered) * 100) : 0;
  const lessonsTotal = LESSONS.length;
  const lessonsDone = p.lessonsCompleted.length;
  const testsTaken = p.testHistory.length;

  // Update streak
  updateStreak();

  const div = el("div", "home-view");
  div.innerHTML = `
    <div class="home-hero">
      <h1>HiSET Writing Prep</h1>
      <p class="subtitle">Master every topic. Score a 20.</p>
    </div>

    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-num">${pct}%</div>
        <div class="stat-label">Accuracy</div>
        <div class="stat-sub">${p.totalCorrect} / ${p.totalQuestionsAnswered} correct</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${lessonsDone}/${lessonsTotal}</div>
        <div class="stat-label">Lessons Done</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${testsTaken}</div>
        <div class="stat-label">Tests Taken</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${p.streakDays}</div>
        <div class="stat-label">Day Streak 🔥</div>
      </div>
    </div>

    <div class="home-grid">
      <button class="home-card card-lessons" onclick="navigate('lessons')">
        <div class="card-icon">📚</div>
        <div class="card-title">Lessons</div>
        <div class="card-desc">15 topics — grammar, punctuation, style, and organization</div>
      </button>
      <button class="home-card card-practice" onclick="navigate('practice')">
        <div class="card-icon">✏️</div>
        <div class="card-title">Practice Tests</div>
        <div class="card-desc">Full 50-question test or quick 10-question drills by topic</div>
      </button>
      <button class="home-card card-essay" onclick="navigate('essay')">
        <div class="card-icon">📝</div>
        <div class="card-title">Essay Lab</div>
        <div class="card-desc">Practice extended responses with the official scoring rubric</div>
      </button>
      <button class="home-card card-cheat" onclick="navigate('cheatsheet')">
        <div class="card-icon">⚡</div>
        <div class="card-title">Quick Reference</div>
        <div class="card-desc">Grammar rules, transition words, and test tips at a glance</div>
      </button>
    </div>

    <div class="exam-overview card">
      <h2>About the HiSET Writing Test</h2>
      <div class="overview-grid">
        <div class="overview-item">
          <span class="ov-label">Format</span>
          <span class="ov-val">50 Multiple Choice + 1 Essay</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Time</span>
          <span class="ov-val">120 minutes total</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">MC Time</span>
          <span class="ov-val">75 minutes</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Essay Time</span>
          <span class="ov-val">45 minutes</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Score Scale</span>
          <span class="ov-val">1–20 (combined)</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Passing Score</span>
          <span class="ov-val">8/20 (varies by state)</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Essay Scoring</span>
          <span class="ov-val">4 traits, 0–3 each (0–12 total)</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Content</span>
          <span class="ov-val">Organization, Language Facility, Writing Conventions</span>
        </div>
      </div>
    </div>
  `;
  return div;
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.progress.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.progress.lastStudyDate === yesterday) {
      state.progress.streakDays = (state.progress.streakDays || 0) + 1;
    } else if (state.progress.lastStudyDate !== today) {
      state.progress.streakDays = 1;
    }
    state.progress.lastStudyDate = today;
    saveProgress();
  }
}

// ─── LESSONS MENU ────────────────────────────────────────────────────────────

function renderLessonsMenu() {
  const div = el("div", "lessons-view");
  div.innerHTML = `<h1>Lessons</h1><p class="subtitle">Master every grammar and writing skill tested on the HiSET.</p>`;

  const categories = [...new Set(LESSONS.map(l => l.category))];

  categories.forEach(cat => {
    const section = el("div", "lesson-section");
    section.innerHTML = `<h2 class="lesson-cat-title">${cat}</h2>`;
    const grid = el("div", "lesson-grid");

    LESSONS.filter(l => l.category === cat).forEach(lesson => {
      const done = state.progress.lessonsCompleted.includes(lesson.id);
      const card = el("button", `lesson-card ${done ? "lesson-done" : ""}`);
      card.innerHTML = `
        <div class="lesson-icon">${lesson.icon}</div>
        <div class="lesson-info">
          <div class="lesson-name">${lesson.title}</div>
          <div class="lesson-meta">~${lesson.estimatedMinutes} min ${done ? "✅" : ""}</div>
        </div>
      `;
      card.onclick = () => navigate("lesson", { lessonId: lesson.id, lessonSection: 0 });
      grid.appendChild(card);
    });

    section.appendChild(grid);
    div.appendChild(section);
  });

  return div;
}

// ─── LESSON VIEW ─────────────────────────────────────────────────────────────

function renderLesson() {
  const lesson = LESSONS.find(l => l.id === state.lessonId);
  if (!lesson) return renderLessonsMenu();

  const sec = lesson.sections[state.lessonSection];
  const isFirst = state.lessonSection === 0;
  const isLast = state.lessonSection === lesson.sections.length - 1;
  const totalSections = lesson.sections.length;

  const div = el("div", "lesson-view");
  div.innerHTML = `
    <div class="lesson-header">
      <button class="btn-back" onclick="navigate('lessons')">← Lessons</button>
      <div class="lesson-progress-bar">
        <div class="lesson-progress-fill" style="width:${((state.lessonSection + 1) / totalSections) * 100}%"></div>
      </div>
      <span class="lesson-progress-label">${state.lessonSection + 1} / ${totalSections}</span>
    </div>

    <div class="lesson-content card">
      <div class="lesson-title-row">
        <span class="lesson-icon-lg">${lesson.icon}</span>
        <h1>${lesson.title}</h1>
      </div>
      ${isFirst ? `<p class="lesson-intro">${lesson.intro}</p>` : ""}
      <h2 class="section-heading">${sec.heading}</h2>
      <div class="section-body">${sec.content}</div>
    </div>

    <div class="lesson-nav">
      <button class="btn btn-secondary ${isFirst ? "invisible" : ""}" onclick="prevSection()">← Previous</button>
      <button class="btn btn-primary" onclick="${isLast ? "finishLesson()" : "nextSection()"}">
        ${isLast ? "Finish & Practice ✓" : "Next →"}
      </button>
    </div>
  `;
  return div;
}

function nextSection() {
  const lesson = LESSONS.find(l => l.id === state.lessonId);
  if (state.lessonSection < lesson.sections.length - 1) {
    state.lessonSection++;
    render();
    window.scrollTo(0, 0);
  }
}

function prevSection() {
  if (state.lessonSection > 0) {
    state.lessonSection--;
    render();
    window.scrollTo(0, 0);
  }
}

function finishLesson() {
  const lesson = LESSONS.find(l => l.id === state.lessonId);
  if (!state.progress.lessonsCompleted.includes(state.lessonId)) {
    state.progress.lessonsCompleted.push(state.lessonId);
    saveProgress();
  }
  // Go to quick quiz on that lesson's questions
  startTest("quick", null, lesson.quickQuizIds);
}

// ─── PRACTICE MENU ───────────────────────────────────────────────────────────

function renderPracticeMenu() {
  const categories = [...new Set(QUESTIONS.map(q => q.category))];
  const div = el("div", "practice-view");
  div.innerHTML = `
    <h1>Practice Tests</h1>
    <p class="subtitle">Test yourself under timed conditions — just like the real HiSET.</p>

    <h2 class="section-title">📘 Full-Length Practice Exams</h2>
    <p class="subtitle" style="margin-bottom:1rem">Fixed, exam-style sets of 40 questions — the same questions every time, so you can track real improvement.</p>
    <div class="exam-grid">
      ${FIXED_TESTS.map((t, i) => {
        const hist = state.progress.testHistory.filter(h => h.mode === "exam" && h.examNum === i + 1);
        const best = hist.length ? Math.max(...hist.map(h => Math.round((h.score / h.total) * 100))) : null;
        return `
        <button class="exam-card" onclick="startFixedTest(${i + 1})">
          <div class="exam-card-top">
            <span class="exam-badge">Exam ${i + 1}</span>
            ${best !== null ? `<span class="exam-best ${best >= 80 ? "green" : best >= 60 ? "yellow" : "red"}">Best: ${best}%</span>` : `<span class="exam-best gray">New</span>`}
          </div>
          <div class="exam-card-title">${t.title}</div>
          <div class="exam-card-meta">${t.ids.length} questions · timed</div>
        </button>`;
      }).join("")}
    </div>

    <h2 class="section-title">⚡ Quick Modes</h2>
    <div class="practice-options">
      <div class="practice-card card" onclick="startTest('full')">
        <div class="pc-icon">🎲</div>
        <div class="pc-title">Random Full Test</div>
        <div class="pc-desc">50 random questions · All topics · A fresh mix every time</div>
        <button class="btn btn-primary mt-1">Start Random Test</button>
      </div>
      <div class="practice-card card" onclick="startTest('quick')">
        <div class="pc-icon">⚡</div>
        <div class="pc-title">Quick Drill</div>
        <div class="pc-desc">10 random questions · No time limit · Great for daily practice</div>
        <button class="btn btn-secondary mt-1">Start Quick Drill</button>
      </div>
    </div>

    <h2 class="section-title">🎯 Practice by Topic</h2>
    <div class="category-grid">
      ${categories.map(cat => {
        const catQs = QUESTIONS.filter(q => q.category === cat);
        const stats = getCategoryStats(cat);
        const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : null;
        return `
          <button class="category-card" onclick="startTest('category', '${cat}')">
            <div class="cc-name">${cat}</div>
            <div class="cc-meta">${catQs.length} questions</div>
            ${pct !== null ? `<div class="cc-score ${pct >= 80 ? "green" : pct >= 60 ? "yellow" : "red"}">${pct}%</div>` : '<div class="cc-score gray">Not started</div>'}
          </button>
        `;
      }).join("")}
    </div>
  `;
  return div;
}

function getCategoryStats(cat) {
  let correct = 0, total = 0;
  QUESTIONS.filter(q => q.category === cat).forEach(q => {
    const s = state.progress.questionStats[q.id];
    if (s) { correct += s.correct; total += s.total; }
  });
  return { correct, total };
}

// ─── TEST ENGINE ─────────────────────────────────────────────────────────────

// Fixed, repeatable full-length exams (deterministic question sets)
const FIXED_TESTS = [
  { title: "Comprehensive Exam A", ids: range(1, 40) },
  { title: "Comprehensive Exam B", ids: range(41, 80) },
  { title: "Comprehensive Exam C", ids: range(81, 120) },
  { title: "Exam D: Passage & Style Focus", ids: range(121, 160) },
  { title: "Exam E: Passage-Based Editing", ids: range(161, 200) },
  { title: "Exam F: Official HiSET Format", ids: range(201, 240) }
];

function range(a, b) {
  const out = [];
  for (let i = a; i <= b; i++) out.push(i);
  return out;
}

function startFixedTest(examNum) {
  const test = FIXED_TESTS[examNum - 1];
  // Preserve the fixed order; do not shuffle so the exam is repeatable
  const pool = test.ids.map(id => QUESTIONS.find(q => q.id === id)).filter(Boolean);

  state.testQuestions = pool;
  state.testIndex = 0;
  state.testAnswers = new Array(pool.length).fill(null);
  state.testMode = "exam";
  state.testCategory = null;
  state.testExamNum = examNum;
  state.testStartTime = Date.now();

  navigate("test");
}

function startTest(mode, category = null, specificIds = null) {
  state.testExamNum = null;
  let pool;
  if (specificIds) {
    pool = QUESTIONS.filter(q => specificIds.includes(q.id));
  } else if (mode === "full") {
    pool = shuffle([...QUESTIONS]).slice(0, Math.min(50, QUESTIONS.length));
  } else if (mode === "category") {
    pool = shuffle(QUESTIONS.filter(q => q.category === category));
  } else {
    pool = shuffle([...QUESTIONS]).slice(0, 10);
  }

  state.testQuestions = pool;
  state.testIndex = 0;
  state.testAnswers = new Array(pool.length).fill(null);
  state.testMode = mode;
  state.testCategory = category;
  state.testStartTime = Date.now();

  navigate("test");
}

function renderTest() {
  if (state.testIndex >= state.testQuestions.length) {
    return renderResultsTransition();
  }

  const q = state.testQuestions[state.testIndex];
  const total = state.testQuestions.length;
  const answered = state.testAnswers[state.testIndex];
  const hasAnswered = answered !== null && answered !== undefined;
  const isCorrect = hasAnswered && answered === q.correct;
  const pct = ((state.testIndex) / total) * 100;

  const div = el("div", "test-view");
  div.innerHTML = `
    <div class="test-header">
      <div class="test-meta">
        <span>Question ${state.testIndex + 1} of ${total}</span>
        <span class="test-category-tag">${q.category}</span>
      </div>
      <div class="test-progress-bar">
        <div class="test-progress-fill" style="width:${pct}%"></div>
      </div>
    </div>

    <div class="question-card card">
      ${q.passage ? `<div class="passage-box">${formatPassage(q.passage)}</div>` : ""}
      <div class="question-text">${q.question}</div>
      <div class="choices" id="choices">
        ${q.choices.map((c, i) => {
          let cls = "choice";
          if (hasAnswered) {
            if (i === q.correct) cls += " correct";
            else if (i === answered) cls += " incorrect";
          }
          return `
          <button class="${cls}" ${hasAnswered ? "disabled" : ""}
                  onclick="selectAnswer(${i})" data-index="${i}">
            <span class="choice-letter">${"ABCD"[i]}</span>
            <span class="choice-text">${c}</span>
          </button>`;
        }).join("")}
      </div>

      ${hasAnswered ? `
        <div class="explanation-box ${isCorrect ? "exp-correct" : "exp-wrong"}">
          <strong>${isCorrect ? "✅ Correct!" : "❌ Not quite."}</strong> ${q.explanation}
        </div>
      ` : ""}
    </div>

    <div class="test-nav">
      <button class="btn btn-secondary" onclick="prevQuestion()" ${state.testIndex === 0 ? "disabled" : ""}>← Back</button>
      <div class="test-nav-center">
        <span class="test-counter">${state.testAnswers.filter(a => a !== null && a !== undefined).length}/${total} answered</span>
      </div>
      <button class="btn btn-primary" onclick="nextQuestion()" ${!hasAnswered ? "disabled" : ""}>
        ${state.testIndex === total - 1 ? "Finish Test ✓" : "Next →"}
      </button>
    </div>
  `;
  return div;
}

function formatPassage(text) {
  return text.replace(/\((\d+)\)__(.*?)__/g, '<span class="underline-q">($1) <u>$2</u></span>');
}

function selectAnswer(choiceIndex) {
  // Guard: ignore if this question was already answered
  if (state.testAnswers[state.testIndex] !== null && state.testAnswers[state.testIndex] !== undefined) return;

  state.testAnswers[state.testIndex] = choiceIndex;

  const q = state.testQuestions[state.testIndex];
  const isCorrect = choiceIndex === q.correct;

  // Update stats
  const qId = q.id;
  if (!state.progress.questionStats[qId]) {
    state.progress.questionStats[qId] = { correct: 0, total: 0 };
  }
  state.progress.questionStats[qId].total++;
  if (isCorrect) state.progress.questionStats[qId].correct++;

  state.progress.totalQuestionsAnswered++;
  if (isCorrect) state.progress.totalCorrect++;
  saveProgress();

  // Full re-render — guarantees choices highlight, explanation shows, and Next enables
  render();
}

function nextQuestion() {
  if (state.testIndex < state.testQuestions.length - 1) {
    state.testIndex++;
    render();
  } else {
    finishTest();
  }
}

function prevQuestion() {
  if (state.testIndex > 0) {
    state.testIndex--;
    render();
  }
}

function finishTest() {
  const score = state.testAnswers.reduce((acc, ans, i) => {
    return acc + (ans === state.testQuestions[i].correct ? 1 : 0);
  }, 0);

  const elapsed = Math.round((Date.now() - state.testStartTime) / 1000);

  state.progress.testHistory.push({
    date: new Date().toLocaleDateString(),
    mode: state.testMode,
    category: state.testCategory,
    examNum: state.testExamNum || null,
    total: state.testQuestions.length,
    score,
    elapsed
  });
  saveProgress();

  navigate("results");
}

function renderResultsTransition() {
  finishTest();
  return el("div", "");
}

// ─── RESULTS ─────────────────────────────────────────────────────────────────

function renderResults() {
  const history = state.progress.testHistory;
  const last = history[history.length - 1];
  if (!last) return renderHome();

  const pct = Math.round((last.score / last.total) * 100);
  const grade = pct >= 90 ? "🏆 Excellent!" : pct >= 75 ? "👍 Good Job!" : pct >= 60 ? "📈 Keep Practicing" : "💪 More Study Needed";
  const mins = Math.floor(last.elapsed / 60);
  const secs = last.elapsed % 60;

  const missed = state.testQuestions
    .map((q, i) => ({ q, answered: state.testAnswers[i] }))
    .filter(({ q, answered }) => answered !== q.correct);

  const div = el("div", "results-view");
  div.innerHTML = `
    <div class="results-hero ${pct >= 80 ? "hero-green" : pct >= 60 ? "hero-yellow" : "hero-red"}">
      <div class="score-circle">${pct}%</div>
      <div class="score-label">${last.score} / ${last.total} correct</div>
      <div class="score-grade">${grade}</div>
      <div class="score-time">Time: ${mins}m ${secs}s</div>
    </div>

    <div class="results-actions">
      <button class="btn btn-primary" onclick="${state.testMode === "exam" ? `startFixedTest(${state.testExamNum})` : `startTest('${state.testMode}', ${state.testCategory ? `'${state.testCategory}'` : "null"})`}">Retake Test</button>
      <button class="btn btn-secondary" onclick="navigate('practice')">Other Tests</button>
      <button class="btn btn-secondary" onclick="navigate('home')">Home</button>
    </div>

    ${missed.length > 0 ? `
      <div class="missed-section">
        <h2>Review Missed Questions (${missed.length})</h2>
        ${missed.map(({ q, answered }) => `
          <div class="review-card card">
            <div class="review-category">${q.category}</div>
            ${q.passage ? `<div class="review-passage">${formatPassage(q.passage)}</div>` : ""}
            <div class="review-question">${q.question}</div>
            <div class="review-choices">
              ${q.choices.map((c, i) => `
                <div class="review-choice ${i === q.correct ? "correct" : i === answered ? "incorrect" : ""}">
                  <span class="choice-letter">${"ABCD"[i]}</span> ${c}
                </div>
              `).join("")}
            </div>
            <div class="review-explanation">💡 ${q.explanation}</div>
          </div>
        `).join("")}
      </div>
    ` : "<div class='perfect-score card'>🎉 Perfect Score! You answered every question correctly!</div>"}
  `;
  return div;
}

// ─── ESSAY ───────────────────────────────────────────────────────────────────

function renderEssayMenu() {
  const div = el("div", "essay-view");
  div.innerHTML = `
    <h1>Essay Lab</h1>
    <p class="subtitle">The HiSET Extended Response: 45 minutes, two source passages, one argumentative essay.</p>

    <div class="essay-intro card">
      <h2>What the Essay Tests</h2>
      <p>You will read two short passages presenting <strong>opposing views</strong> on a topic. You must write an essay analyzing which argument is <strong>better supported</strong>. You are NOT just giving your opinion — you must use evidence from BOTH passages.</p>
      <div class="essay-traits">
        <div class="trait">
          <div class="trait-name">Development of Ideas</div>
          <div class="trait-score">0–3 points</div>
          <div class="trait-desc">Use specific evidence from the passages to support your argument</div>
        </div>
        <div class="trait">
          <div class="trait-name">Organization</div>
          <div class="trait-score">0–3 points</div>
          <div class="trait-desc">Clear intro, body paragraphs with topic sentences, logical conclusion</div>
        </div>
        <div class="trait">
          <div class="trait-name">Clarity of Language</div>
          <div class="trait-score">0–3 points</div>
          <div class="trait-desc">Precise word choice, varied sentence structure, clear expression</div>
        </div>
        <div class="trait">
          <div class="trait-name">Language Conventions</div>
          <div class="trait-score">0–3 points</div>
          <div class="trait-desc">Correct grammar, spelling, punctuation, and capitalization</div>
        </div>
      </div>
      <p class="mt-1"><strong>Total:</strong> 0–12 points → converted to part of the 1–20 HiSET score</p>
      <button class="btn btn-text" onclick="navigate('essay-rubric')">View Full Scoring Rubric →</button>
    </div>

    <h2>Practice One Piece at a Time</h2>
    <p class="subtitle" style="margin-bottom:.75rem">Build the essay skills individually — thesis, topic sentences, intros, body paragraphs, and conclusions.</p>
    <div class="skill-grid">
      ${ESSAY_SKILLS.map(s => `
        <button class="skill-card" onclick="navigate('essay-skill', {skillId: '${s.id}', skillTab: 'learn', skillMcqIndex: 0, skillMcqAnswer: null})">
          <span class="skill-icon">${s.icon}</span>
          <span class="skill-name">${s.title}</span>
          <span class="skill-tagline">${s.tagline}</span>
        </button>
      `).join("")}
    </div>

    <h2>Write a Full Essay</h2>
    <div class="essay-prompts">
      ${ESSAY_PROMPTS.map(ep => `
        <div class="essay-prompt-card card" onclick="navigate('essay-write', {essayPromptId: ${ep.id}})">
          <div class="ep-title">${ep.title}</div>
          <div class="ep-preview">${ep.passageA.title} vs. ${ep.passageB.title}</div>
          <button class="btn btn-primary mt-1">Write This Essay</button>
        </div>
      `).join("")}
    </div>

    <div class="essay-tips card mt-2">
      <h2>High-Score Essay Strategy</h2>
      <ol class="tips-list">
        <li><strong>Read both passages</strong> (5–7 min): Identify the main claim, key evidence, and weaknesses in each.</li>
        <li><strong>Plan your essay</strong> (3–5 min): Decide which argument is better supported. Outline 3 body paragraphs.</li>
        <li><strong>Write your essay</strong> (30 min):
          <ul>
            <li><em>Intro:</em> Introduce the topic, state which argument is better and why.</li>
            <li><em>Body P1:</em> Strongest evidence supporting your chosen argument (cite from passage).</li>
            <li><em>Body P2:</em> Second piece of evidence — more detail from the passage.</li>
            <li><em>Body P3:</em> Address the opposing argument — acknowledge its point, but explain why it's weaker.</li>
            <li><em>Conclusion:</em> Restate your position and the strongest reasons.</li>
          </ul>
        </li>
        <li><strong>Revise</strong> (3–5 min): Check grammar, spelling, and clarity.</li>
      </ol>
    </div>
  `;
  return div;
}

function renderEssayWrite() {
  const ep = ESSAY_PROMPTS.find(e => e.id === state.essayPromptId);
  if (!ep) return renderEssayMenu();

  const div = el("div", "essay-write-view");
  div.innerHTML = `
    <div class="essay-write-header">
      <button class="btn-back" onclick="navigate('essay')">← Essay Lab</button>
      <h1>${ep.title}</h1>
      <div id="essay-timer" class="essay-timer">45:00</div>
    </div>

    <div class="passages-grid">
      <div class="passage-col card">
        <h3>${ep.passageA.title}</h3>
        <p>${ep.passageA.text}</p>
      </div>
      <div class="passage-col card">
        <h3>${ep.passageB.title}</h3>
        <p>${ep.passageB.text}</p>
      </div>
    </div>

    <div class="essay-task card">
      <strong>Writing Task:</strong> ${ep.prompt}
    </div>

    <div class="essay-write-area card">
      <div class="essay-write-toolbar">
        <span id="word-count" class="word-count">0 words</span>
        <span class="target">Target: 300–500 words</span>
      </div>
      <textarea id="essay-textarea" class="essay-textarea" placeholder="Write your essay here..."
        oninput="updateWordCount()">${state.essayText || ""}</textarea>
    </div>

    <div class="essay-write-footer">
      <button class="btn btn-secondary" onclick="navigate('essay-rubric')">View Rubric</button>
      <button class="btn btn-primary" onclick="saveEssay()">Save Essay</button>
    </div>
  `;

  // Start timer
  startEssayTimer(45 * 60);
  return div;
}

function updateWordCount() {
  const ta = document.getElementById("essay-textarea");
  const wc = document.getElementById("word-count");
  if (ta && wc) {
    const words = ta.value.trim() === "" ? 0 : ta.value.trim().split(/\s+/).length;
    wc.textContent = `${words} word${words !== 1 ? "s" : ""}`;
    state.essayText = ta.value;
  }
}

function saveEssay() {
  const ta = document.getElementById("essay-textarea");
  if (ta) state.essayText = ta.value;
  alert("Essay saved! Review the rubric to score your own writing.");
}

let essayTimerInterval = null;

function startEssayTimer(seconds) {
  if (essayTimerInterval) clearInterval(essayTimerInterval);
  let remaining = seconds;
  const updateTimer = () => {
    const el = document.getElementById("essay-timer");
    if (!el) { clearInterval(essayTimerInterval); return; }
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    el.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    el.className = "essay-timer" + (remaining <= 300 ? " timer-warning" : "");
    if (remaining <= 0) {
      clearInterval(essayTimerInterval);
      el.textContent = "TIME'S UP";
      el.className = "essay-timer timer-done";
    }
    remaining--;
  };
  updateTimer();
  essayTimerInterval = setInterval(updateTimer, 1000);
}

function renderEssayRubric() {
  const div = el("div", "rubric-view");
  div.innerHTML = `
    <div class="rubric-header">
      <button class="btn-back" onclick="navigate('essay')">← Essay Lab</button>
      <h1>Official HiSET Essay Scoring Guide</h1>
    </div>

    <div class="card" style="background:var(--surface2);border-left:4px solid var(--primary);margin-bottom:1.5rem">
      <p style="margin:0"><strong>How scoring works:</strong> Two trained raters each give your essay a single <strong>holistic score from 1 to 6</strong>. If the two scores differ by more than 1 point, a third rater resolves it. You need a minimum score of <strong>2</strong> to pass. Aim for <strong>4 or higher</strong> per rater for a strong score. The essay score contributes to your overall 1–20 Writing scaled score.</p>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #ef4444">
      <h2 style="margin-top:0">Score 1 — Weak Command</h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Little or no development of a central position. Writer's position may not be clear. Ideas lack explanation or repeat ideas from the passages without analysis.</li>
        <li><strong>Organization:</strong> Lacks introduction and/or conclusion. No understanding of paragraphing. Transitions not used or used incorrectly.</li>
        <li><strong>Language:</strong> Minimal language control. Simple word choice and sentence structure. Lacks formal style.</li>
        <li><strong>Conventions:</strong> Minimal command of grammar, usage, capitalization, punctuation, and spelling. Frequent errors throughout.</li>
      </ul>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #f97316">
      <h2 style="margin-top:0">Score 2 — Limited Command <span style="color:var(--danger);font-size:.85rem">(minimum to pass)</span></h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Limited development. Position may be somewhat unclear. Explanation is thin, superficial, or too heavily derived from passages without original analysis.</li>
        <li><strong>Organization:</strong> Has introduction/conclusion but under-developed. Basic paragraphing. Transitions used inconsistently.</li>
        <li><strong>Language:</strong> Developing language skill. General word choice with little variety in sentence structure.</li>
        <li><strong>Conventions:</strong> Limited command. Errors present and may sometimes interfere with understanding.</li>
      </ul>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #eab308">
      <h2 style="margin-top:0">Score 3 — Partial Command</h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Partial development with brief context. Introduces alternate claims. Several ideas provided but explanation is limited or uneven. Evidence from texts is limited, overused, or poorly chosen.</li>
        <li><strong>Organization:</strong> Has introduction and conclusion (may be under-developed). Ideas grouped in paragraphs. Simple transitions used inconsistently.</li>
        <li><strong>Language:</strong> Some developing skill. General word choice, a little variety in sentence structure. Attempts formal style but may not sustain it.</li>
        <li><strong>Conventions:</strong> Partial command. Errors regularly present and may sometimes interfere with understanding.</li>
      </ul>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #22c55e">
      <h2 style="margin-top:0">Score 4 — Adequate Command <span style="color:var(--success);font-size:.85rem">(strong pass)</span></h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Adequate development with clear position. Discusses alternate claims. Several ideas with adequate explanation. Specific, relevant examples and evidence drawn selectively from texts and appropriately integrated.</li>
        <li><strong>Organization:</strong> Clear introduction and conclusion. Transitions consistently used (though may be simple). Logical grouping of ideas.</li>
        <li><strong>Language:</strong> Clear and appropriate language. Some variety in word choice and sentence structure. Formal style established.</li>
        <li><strong>Conventions:</strong> Adequate command. Some errors present but rarely interfere with understanding.</li>
      </ul>
      <div class="rubric-boost">⭐ <strong>Most students should aim for a 4.</strong> This requires: a clear thesis, evidence from BOTH passages, smooth transitions, and clean grammar.</div>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #3b82f6">
      <h2 style="margin-top:0">Score 5 — Strong Command</h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Competent development with balanced discussion of alternate claims. Clear, considered position. Complete explanation with specific, elaborated details. Relevant evidence skillfully integrated from texts.</li>
        <li><strong>Organization:</strong> Clear, sufficient introduction and conclusion. Appropriate paragraphing. Varied transitions and logical sequencing throughout.</li>
        <li><strong>Language:</strong> Precise, varied vocabulary. Well-controlled sentences varied in length and complexity. Formal style and objective tone maintained. Counterclaims discussed fairly.</li>
        <li><strong>Conventions:</strong> Able command. Few errors, and those present are superficial.</li>
      </ul>
    </div>

    <div class="rubric-trait card" style="border-left:4px solid #8b5cf6">
      <h2 style="margin-top:0">Score 6 — Superior Command <span style="color:var(--primary);font-size:.85rem">(perfect essay)</span></h2>
      <ul style="line-height:1.8;margin:0">
        <li><strong>Development:</strong> Expert development. Discusses strengths AND limitations of alternate claims. Clear, nuanced position. Effective, thorough explanation. Compelling evidence effectively integrated from texts.</li>
        <li><strong>Organization:</strong> Effective introduction and conclusion. Clear paragraphing creates a coherent whole. Effective transitions and logical sequencing throughout.</li>
        <li><strong>Language:</strong> Purposeful, varied vocabulary. Varied sentence constructions that enhance meaning. Formal style and objective tone enhance the discussion.</li>
        <li><strong>Conventions:</strong> Superior command. Very few or no errors in grammar, usage, capitalization, punctuation, or spelling.</li>
      </ul>
      <div class="rubric-boost">🏆 <strong>A score-6 essay</strong> discusses BOTH sides fairly, uses compelling evidence from the texts, has a nuanced thesis, and reads like polished writing with zero sentence-level errors.</div>
    </div>

    <div class="rubric-trait card">
      <h2 style="margin-top:0">What Each Score Upgrade Requires</h2>
      <p style="color:var(--text2)">Focus on moving up one level at a time.</p>
      <table class="rubric-table">
        <tr><th>Jump</th><th>The key upgrade is…</th></tr>
        <tr><td><strong>1→2</strong></td><td>Write a recognizable introduction and conclusion. Take a clear side. Use at least one piece of evidence from the passages.</td></tr>
        <tr><td><strong>2→3</strong></td><td>Develop your ideas with explanation — don't just state evidence, explain what it proves. Use paragraphs to separate ideas. Mention the opposing passage.</td></tr>
        <tr><td><strong>3→4</strong></td><td>Use specific evidence drawn directly from the texts (named statistics, quotes, or paraphrased details). Use transitions consistently. Fix major grammar errors.</td></tr>
        <tr><td><strong>4→5</strong></td><td>Integrate evidence skillfully (weave it into your argument, don't just drop quotes). Vary your sentence structure and vocabulary. Discuss counterclaims fairly.</td></tr>
        <tr><td><strong>5→6</strong></td><td>Show nuance — acknowledge strengths AND limitations of both sides. Use compelling, well-chosen evidence. Write with varied, purposeful vocabulary and near-perfect grammar.</td></tr>
      </table>
    </div>

    <div class="rubric-trait card" style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 100%)">
      <h2 style="color:#e0e7ff;margin-top:0">Perfect Score Checklist ✓</h2>
      <p style="color:#a5b4fc;margin-top:0">Use this before you submit your essay.</p>
      <ul style="color:#c7d2fe;line-height:2">
        <li>✅ My <strong>thesis</strong> takes a clear side and previews my reasons</li>
        <li>✅ I cite <strong>specific evidence</strong> from Passage A (statistic, fact, quote, or paraphrase)</li>
        <li>✅ I cite <strong>specific evidence</strong> from Passage B — even the passage I disagree with</li>
        <li>✅ I <strong>explain</strong> how each piece of evidence supports my argument</li>
        <li>✅ I <strong>acknowledge the other side fairly</strong> — then explain why my side is stronger</li>
        <li>✅ Each body paragraph has a <strong>topic sentence</strong> (a claim, not just a topic)</li>
        <li>✅ I use at least <strong>3 different transition words/phrases</strong> across the essay</li>
        <li>✅ My vocabulary is <strong>precise and formal</strong> (no "good," "bad," "says," "stuff")</li>
        <li>✅ My sentences vary in <strong>length and structure</strong> (mix short + long, simple + complex)</li>
        <li>✅ I have a <strong>conclusion</strong> that restates my thesis without adding new evidence</li>
        <li>✅ I proofread for <strong>comma splices, fragments, and subject-verb errors</strong></li>
        <li>✅ My essay is at least <strong>4–5 paragraphs</strong> and <strong>300+ words</strong></li>
      </ul>
    </div>
  `;
  return div;
}

// ─── ESSAY SKILL DRILLS ──────────────────────────────────────────────────────

function renderEssaySkill() {
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  if (!skill) return renderEssayMenu();

  const div = el("div", "skill-view");
  div.innerHTML = `
    <div class="skill-header">
      <button class="btn-back" onclick="navigate('essay')">← Essay Lab</button>
    </div>
    <div class="skill-title-row">
      <span class="skill-icon-lg">${skill.icon}</span>
      <div>
        <h1>${skill.title}</h1>
        <p class="subtitle">${skill.tagline}</p>
      </div>
    </div>

    <div class="skill-tabs">
      <button class="skill-tab ${state.skillTab === "learn" ? "active" : ""}" onclick="setSkillTab('learn')">📖 Learn</button>
      <button class="skill-tab ${state.skillTab === "spot" ? "active" : ""}" onclick="setSkillTab('spot')">✅ Spot the Best</button>
      <button class="skill-tab ${state.skillTab === "write" ? "active" : ""}" onclick="setSkillTab('write')">✍️ Write It</button>
    </div>

    <div id="skill-body"></div>
  `;

  // Render the active tab body after the shell exists
  setTimeout(() => renderSkillBody(skill), 0);
  return div;
}

function setSkillTab(tab) {
  state.skillTab = tab;
  state.skillMcqIndex = 0;
  state.skillMcqAnswer = null;
  state.skillDrillIndex = 0;
  state.skillDrillRevealed = false;
  state.skillDraft = "";
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  document.querySelectorAll(".skill-tab").forEach(t => {
    t.classList.toggle("active", t.textContent.toLowerCase().includes(
      tab === "learn" ? "learn" : tab === "spot" ? "spot" : "write"
    ));
  });
  renderSkillBody(skill);
}

function renderSkillBody(skill) {
  const body = document.getElementById("skill-body");
  if (!body) return;

  if (state.skillTab === "learn") {
    body.innerHTML = renderSkillLearn(skill);
  } else if (state.skillTab === "spot") {
    body.innerHTML = renderSkillSpot(skill);
  } else {
    body.innerHTML = renderSkillWrite(skill);
  }
  window.scrollTo(0, 0);
}

function renderSkillLearn(skill) {
  const l = skill.lesson;
  return `
    <div class="card">
      <h2>What it is</h2>
      <p style="color:var(--text)">${l.what}</p>
      <div class="skill-formula">${l.formula}</div>
    </div>

    <div class="card">
      <h2>Tips for a Top Score</h2>
      <ul class="tips-list">
        ${l.tips.map(t => `<li>${t}</li>`).join("")}
      </ul>
    </div>

    ${l.goodVsBad.map(ex => `
      <div class="card">
        <h2>Weak vs. Strong</h2>
        <div class="gb-block gb-bad">
          <div class="gb-label">❌ Weak</div>
          <div class="gb-text">${ex.bad}</div>
          <div class="gb-why">${ex.why_bad}</div>
        </div>
        <div class="gb-block gb-good">
          <div class="gb-label">✅ Strong</div>
          <div class="gb-text">${ex.good}</div>
          <div class="gb-why">${ex.why_good}</div>
        </div>
      </div>
    `).join("")}

    <div class="skill-cta">
      <button class="btn btn-primary" onclick="setSkillTab('spot')">Try "Spot the Best" →</button>
    </div>
  `;
}

function renderSkillSpot(skill) {
  const items = skill.mcq;
  const idx = state.skillMcqIndex;
  const item = items[idx];
  const answered = state.skillMcqAnswer;

  return `
    <div class="card">
      <div class="spot-progress">Question ${idx + 1} of ${items.length}</div>
      <div class="spot-scenario">${item.scenario}</div>
      <div class="choices" id="skill-choices">
        ${item.choices.map((c, i) => {
          let cls = "choice";
          if (answered !== null) {
            if (i === item.correct) cls += " correct";
            else if (i === answered) cls += " incorrect";
          }
          return `<button class="${cls}" ${answered !== null ? "disabled" : ""} onclick="answerSkillMcq(${i})">
            <span class="choice-letter">${"ABCD"[i]}</span>
            <span class="choice-text">${c}</span>
          </button>`;
        }).join("")}
      </div>
      ${answered !== null ? `
        <div class="explanation-box">
          ${answered === item.correct ? "<strong>✅ Correct!</strong> " : "<strong>❌ Not quite.</strong> "}
          ${item.explanation}
        </div>
        <div class="skill-cta">
          ${idx < items.length - 1
            ? `<button class="btn btn-primary" onclick="nextSkillMcq()">Next Question →</button>`
            : `<button class="btn btn-primary" onclick="setSkillTab('write')">Now Try Writing It →</button>`}
        </div>
      ` : ""}
    </div>
  `;
}

function answerSkillMcq(i) {
  if (state.skillMcqAnswer !== null) return;
  state.skillMcqAnswer = i;
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  renderSkillBody(skill);
}

function nextSkillMcq() {
  state.skillMcqIndex++;
  state.skillMcqAnswer = null;
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  renderSkillBody(skill);
}

function renderSkillWrite(skill) {
  const drills = skill.drills;
  const idx = state.skillDrillIndex;
  const drill = drills[idx];
  const revealed = state.skillDrillRevealed;

  return `
    <div class="card">
      <div class="spot-progress">Drill ${idx + 1} of ${drills.length}</div>
      <div class="drill-scenario">${drill.scenario}</div>
      <textarea id="skill-textarea" class="skill-textarea" placeholder="Write your response here, then tap Grade My Writing..."
        oninput="liveWordCount()">${state.skillDraft || ""}</textarea>
      <div class="draft-meta"><span id="draft-words">0 words</span></div>

      <div class="skill-cta grade-cta">
        <button class="btn btn-primary btn-grade" onclick="gradeMyWriting()">⚡ Grade My Writing</button>
      </div>

      <div id="grade-result"></div>

      <div class="skill-checklist">
        <div class="checklist-title">Self-Check — does your answer do all of these?</div>
        ${drill.checklist.map((c, i) => `
          <label class="checklist-item">
            <input type="checkbox" id="chk-${i}"> <span>${c}</span>
          </label>
        `).join("")}
      </div>

      <div class="skill-cta">
        <button class="btn ${revealed ? "btn-secondary" : "btn-secondary"}" onclick="toggleModelAnswer()">
          ${revealed ? "Hide Model Answer" : "Show Model Answer"}
        </button>
      </div>

      ${revealed ? `
        <div class="model-answer">
          <div class="model-label">⭐ Model Answer</div>
          <div class="model-text">${drill.model}</div>
          <div class="model-note">Compare yours to this. Yours doesn't need to match word-for-word — focus on the structure.</div>
        </div>
      ` : ""}

      <div class="skill-cta">
        ${idx < drills.length - 1
          ? `<button class="btn btn-secondary" onclick="nextSkillDrill()">Next Drill →</button>`
          : `<button class="btn btn-secondary" onclick="navigate('essay')">Back to Essay Lab</button>`}
      </div>
    </div>
  `;
}

function liveWordCount() {
  const ta = document.getElementById("skill-textarea");
  const out = document.getElementById("draft-words");
  if (ta && out) {
    state.skillDraft = ta.value;
    const n = ta.value.trim() === "" ? 0 : ta.value.trim().split(/\s+/).length;
    out.textContent = `${n} word${n === 1 ? "" : "s"}`;
  }
}

function gradeMyWriting() {
  const ta = document.getElementById("skill-textarea");
  const box = document.getElementById("grade-result");
  if (!ta || !box) return;
  const text = ta.value;
  state.skillDraft = text;

  const result = gradeSkill(state.skillId, text);

  if (result.error) {
    box.innerHTML = `<div class="grade-error">${result.error}</div>`;
    return;
  }

  box.innerHTML = `
    <div class="grade-card">
      <div class="grade-head ${result.bandClass}">
        <div class="grade-score-ring">
          <span class="grade-score">${result.score}</span>
          <span class="grade-outof">/100</span>
        </div>
        <div class="grade-band">
          <div class="grade-band-name">${result.band}</div>
          <div class="grade-band-msg">${result.bandMsg}</div>
        </div>
      </div>
      <div class="grade-checks">
        ${result.checks.map(c => `
          <div class="grade-check ${c.pass ? "gc-pass" : "gc-fail"}">
            <span class="gc-icon">${c.pass ? "✅" : "❌"}</span>
            <div class="gc-body">
              <div class="gc-label">${c.label}</div>
              <div class="gc-msg">${c.pass ? c.good : c.bad}</div>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="grade-foot">This is an automated practice score based on structure. Compare with the Model Answer for the full picture.</div>
    </div>
  `;
  box.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function toggleModelAnswer() {
  // preserve textarea content via state
  const ta = document.getElementById("skill-textarea");
  if (ta) state.skillDraft = ta.value;
  state.skillDrillRevealed = !state.skillDrillRevealed;
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  renderSkillBody(skill);
}

function nextSkillDrill() {
  state.skillDrillIndex++;
  state.skillDrillRevealed = false;
  state.skillDraft = "";
  const skill = ESSAY_SKILLS.find(s => s.id === state.skillId);
  renderSkillBody(skill);
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────

function renderProgress() {
  const p = state.progress;
  const overallPct = p.totalQuestionsAnswered > 0
    ? Math.round((p.totalCorrect / p.totalQuestionsAnswered) * 100) : 0;

  const categories = [...new Set(QUESTIONS.map(q => q.category))];
  const catData = categories.map(cat => {
    const s = getCategoryStats(cat);
    return { cat, ...s, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : null };
  });

  const div = el("div", "progress-view");
  div.innerHTML = `
    <h1>Your Progress</h1>

    <div class="overall-stat card">
      <div class="big-circle ${overallPct >= 80 ? "circle-green" : overallPct >= 60 ? "circle-yellow" : "circle-red"}">
        <span>${overallPct}%</span>
        <small>Overall</small>
      </div>
      <div class="overall-details">
        <div>Total Questions: <strong>${p.totalQuestionsAnswered}</strong></div>
        <div>Correct: <strong>${p.totalCorrect}</strong></div>
        <div>Lessons Completed: <strong>${p.lessonsCompleted.length} / ${LESSONS.length}</strong></div>
        <div>Tests Taken: <strong>${p.testHistory.length}</strong></div>
        <div>Study Streak: <strong>${p.streakDays} day${p.streakDays !== 1 ? "s" : ""} 🔥</strong></div>
      </div>
    </div>

    <h2>Performance by Topic</h2>
    <div class="topic-bars">
      ${catData.map(d => `
        <div class="topic-bar-row">
          <div class="topic-bar-label">${d.cat}</div>
          <div class="topic-bar-track">
            <div class="topic-bar-fill ${d.pct === null ? "bar-empty" : d.pct >= 80 ? "bar-green" : d.pct >= 60 ? "bar-yellow" : "bar-red"}"
                 style="width:${d.pct !== null ? d.pct : 0}%"></div>
          </div>
          <div class="topic-bar-pct">${d.pct !== null ? d.pct + "%" : "—"}</div>
        </div>
      `).join("")}
    </div>

    <h2>Test History</h2>
    ${p.testHistory.length === 0
      ? "<p class='muted'>No tests taken yet. Take your first practice test!</p>"
      : `<div class="test-history">
          ${[...p.testHistory].reverse().slice(0, 20).map(t => {
            const pct = Math.round((t.score / t.total) * 100);
            return `
              <div class="history-row">
                <span class="hist-date">${t.date}</span>
                <span class="hist-type">${t.mode === "exam" ? "Exam " + t.examNum : t.mode === "full" ? "Random Test" : t.mode === "category" ? t.category : "Quick Drill"}</span>
                <span class="hist-score ${pct >= 80 ? "green" : pct >= 60 ? "yellow" : "red"}">${t.score}/${t.total} (${pct}%)</span>
              </div>
            `;
          }).join("")}
        </div>`
    }

    <div class="danger-zone card mt-2">
      <h2>Reset Progress</h2>
      <p>This will erase all your saved progress, scores, and streaks.</p>
      <button class="btn btn-danger" onclick="resetProgress()">Reset All Progress</button>
    </div>
  `;
  return div;
}

function resetProgress() {
  if (confirm("Are you sure? This will delete all your progress.")) {
    state.progress = defaultProgress();
    saveProgress();
    navigate("home");
  }
}

// ─── CHEAT SHEET ─────────────────────────────────────────────────────────────

function renderCheatSheet() {
  const div = el("div", "cheat-view");
  div.innerHTML = `
    <h1>Quick Reference Guide</h1>
    <p class="subtitle">Everything you need to know — at a glance.</p>

    <div class="cheat-section card">
      <h2>Exam Overview</h2>
      <ul>
        <li><strong>Multiple Choice:</strong> 50 questions, 75 minutes — passage-based editing/revision items</li>
        <li><strong>Extended Response:</strong> 1 essay, 45 minutes — argue which of two passages makes a better case</li>
        <li><strong>Score:</strong> 1–20 scale. Minimum passing is usually 8 (check your state).</li>
        <li><strong>Essay scored on 4 traits:</strong> Development (0–3), Organization (0–3), Clarity (0–3), Conventions (0–3)</li>
      </ul>
    </div>

    <div class="cheat-section card">
      <h2>Subject-Verb Agreement Rules</h2>
      <ul>
        <li>Collective nouns (team, class, committee) → singular: "The team <u>is</u> ready."</li>
        <li>Each / every / anyone / everyone / someone → singular: "Everyone <u>has</u> a role."</li>
        <li>Neither…nor / Either…or → verb agrees with the closer subject</li>
        <li>"There is/are" → agree with what follows: "There <u>are</u> three options."</li>
        <li>Fields ending in -ics → singular: "Mathematics <u>is</u> hard."</li>
        <li>Amounts of money/time/distance → singular: "Ten miles <u>is</u> far."</li>
      </ul>
    </div>

    <div class="cheat-section card">
      <h2>Pronoun Rules</h2>
      <ul>
        <li>After prepositions → object pronoun: "between you and <u>me</u>" ✓</li>
        <li>Possessives → NO apostrophe: <u>its</u>, <u>whose</u>, <u>their</u>, <u>your</u></li>
        <li>it's = it is | who's = who is | they're = they are</li>
        <li>Who (subject) vs. Whom (object): "Give it to <u>whom</u>?" | "<u>Who</u> called?"</li>
        <li>Singular antecedents → singular pronoun: "Each student has <u>his or her</u> ID."</li>
      </ul>
    </div>

    <div class="cheat-section card">
      <h2>Punctuation Quick Rules</h2>
      <ul>
        <li><strong>Semicolon:</strong> Joins two independent clauses. Before conjunctive adverbs (however, therefore): "; however,"</li>
        <li><strong>Colon:</strong> After a complete clause to introduce a list or explanation</li>
        <li><strong>Comma:</strong> Before FANBOYS joining two clauses | After introductory phrases | Around nonrestrictive clauses | In lists of 3+</li>
        <li><strong>Apostrophe:</strong> In contractions (it's, can't) and possessives (Maria's, the dogs')</li>
        <li><strong>No comma before "because"</strong> when "because" clause ends the sentence</li>
      </ul>
    </div>

    <div class="cheat-section card">
      <h2>FANBOYS — Coordinating Conjunctions</h2>
      <div class="fanboys">
        <span>For</span><span>And</span><span>Nor</span><span>But</span><span>Or</span><span>Yet</span><span>So</span>
      </div>
      <p>Use a comma before FANBOYS when joining two complete sentences.</p>
    </div>

    <div class="cheat-section card">
      <h2>Transition Words by Category</h2>
      <div class="transition-grid">
        <div><strong>Addition:</strong> furthermore, moreover, in addition, also, additionally</div>
        <div><strong>Contrast:</strong> however, nevertheless, on the other hand, yet, in contrast</div>
        <div><strong>Cause/Effect:</strong> therefore, consequently, as a result, thus, hence</div>
        <div><strong>Example:</strong> for example, for instance, to illustrate, specifically</div>
        <div><strong>Sequence:</strong> first, next, then, finally, subsequently, previously</div>
        <div><strong>Summary:</strong> in conclusion, to summarize, ultimately, overall</div>
      </div>
    </div>

    <div class="cheat-section card">
      <h2>Commonly Confused Words</h2>
      <div class="confused-grid">
        <div><strong>affect</strong> (verb) vs. <strong>effect</strong> (noun)</div>
        <div><strong>fewer</strong> (countable) vs. <strong>less</strong> (mass noun)</div>
        <div><strong>lie/lay/lain</strong> (recline) vs. <strong>lay/laid/laid</strong> (place)</div>
        <div><strong>further</strong> (figurative) vs. <strong>farther</strong> (physical distance)</div>
        <div><strong>principle</strong> (rule) vs. <strong>principal</strong> (main/school head)</div>
        <div><strong>ensure</strong> (make sure) vs. <strong>insure</strong> (get insurance)</div>
        <div><strong>accept</strong> (receive) vs. <strong>except</strong> (excluding)</div>
        <div><strong>than</strong> (comparison) vs. <strong>then</strong> (time)</div>
      </div>
    </div>

    <div class="cheat-section card">
      <h2>Essay Template</h2>
      <div class="essay-template">
        <div class="et-para"><strong>Paragraph 1 — Introduction (3–4 sentences)</strong><br>
        Hook → introduce the two passages → thesis: "Passage [A/B] makes a more convincing argument because [reason 1] and [reason 2]."</div>
        <div class="et-para"><strong>Paragraph 2 — First Main Reason</strong><br>
        Topic sentence → evidence from stronger passage (paraphrase or quote) → explain why it supports your claim → counter the other passage</div>
        <div class="et-para"><strong>Paragraph 3 — Second Main Reason</strong><br>
        Topic sentence → another piece of evidence → analysis → connect back to thesis</div>
        <div class="et-para"><strong>Paragraph 4 — Address Opposing Argument</strong><br>
        Acknowledge a point from the weaker passage → explain why it doesn't outweigh the evidence → reinforce your claim</div>
        <div class="et-para"><strong>Paragraph 5 — Conclusion (2–3 sentences)</strong><br>
        Restate thesis in new words → summarize strongest reasons → closing thought</div>
      </div>
    </div>
  `;
  return div;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function el(tag, className = "") {
  const e = document.createElement(tag);
  if (className) e.className = className;
  return e;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  render();
});
