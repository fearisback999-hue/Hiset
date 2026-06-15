// HiSET Essay Skills Drills — practice essay components individually
// Each skill: a lesson, multiple-choice "spot the best" items, and open writing drills

const ESSAY_SKILLS = [
  {
    id: "thesis",
    title: "Thesis Statements",
    icon: "🎯",
    tagline: "The single sentence that states your whole argument",
    lesson: {
      what: `A <b>thesis statement</b> is the sentence (usually the last sentence of your introduction) that tells the reader exactly what your essay will argue. On the HiSET, your thesis must clearly state <b>which of the two passages makes the stronger argument</b> and ideally hint at <b>why</b>.`,
      formula: `<b>Formula:</b> [Passage A / Passage B] presents the more convincing argument because [reason 1] and [reason 2].`,
      tips: [
        "Take a clear side — never write \"both passages have good points\" as your thesis.",
        "Name the position you're supporting (the author's claim, not just \"Passage A\").",
        "Preview your reasons — this becomes the roadmap for your body paragraphs.",
        "Keep it to one focused sentence. Avoid vague words like \"interesting\" or \"good.\"",
        "Put it at the END of your introduction paragraph."
      ],
      goodVsBad: [
        {
          bad: "There are two passages about school uniforms and they both make points.",
          why_bad: "Takes no side, previews no reasons — it just describes the prompt.",
          good: "Passage A presents the stronger argument that schools should require uniforms, because it offers concrete statistics on reduced discipline problems and explains how uniforms build school unity.",
          why_good: "Takes a clear side, names the claim, and previews two specific reasons."
        }
      ]
    },
    mcq: [
      {
        scenario: "Prompt: Two passages debate whether social media should be restricted for teens. You believe the \"restrict it\" passage is stronger. Which is the best thesis?",
        choices: [
          "Social media is a big topic that affects many teenagers today.",
          "I think social media is sometimes bad but also sometimes good for teens.",
          "Passage A makes the more convincing case for restricting teen social media, because it cites specific research linking heavy use to anxiety and depression and compares the limits to other proven age restrictions.",
          "Both passages are well written and make their points clearly."
        ],
        correct: 2,
        explanation: "Option C takes a clear side, names the claim (restricting social media), and previews two specific reasons. The others are vague, wishy-washy, or just describe the topic."
      },
      {
        scenario: "Which thesis would earn the highest Development score?",
        choices: [
          "The four-day school week is an interesting idea with pros and cons.",
          "Passage B better supports its position that the four-day school week harms students, because it provides evidence of declines for low-income students and explains the childcare burden on working families.",
          "Schools should think carefully before changing their schedules.",
          "Passage A and Passage B disagree about the four-day school week."
        ],
        correct: 1,
        explanation: "Option B clearly picks a side (Passage B), identifies the claim, and names two concrete reasons drawn from the passage. The rest are general observations that take no position."
      },
      {
        scenario: "What is the main problem with this thesis? \"Passage A is good and has nice evidence about uniforms.\"",
        choices: [
          "It is too long and detailed.",
          "It uses vague language (\"good,\" \"nice\") and does not preview specific reasons.",
          "It takes a side, which you should never do.",
          "It mentions a passage, which is not allowed."
        ],
        correct: 1,
        explanation: "A strong thesis needs precise language and a preview of specific reasons. \"Good\" and \"nice\" tell the reader nothing about WHY the argument is stronger."
      },
      {
        scenario: "Where should the thesis statement appear in your essay?",
        choices: [
          "As the very first sentence of the essay",
          "At the end of the introduction paragraph",
          "In the conclusion only",
          "It should be repeated in every paragraph"
        ],
        correct: 1,
        explanation: "The thesis typically comes at the END of your introduction, after you've briefly introduced the topic. It then guides the body paragraphs that follow."
      }
    ],
    drills: [
      {
        scenario: "Prompt: Two passages debate whether schools should require uniforms. You think the AGAINST-uniforms passage is stronger. Write a one-sentence thesis.",
        model: "Passage B presents the more convincing argument against requiring school uniforms, because it shows that uniforms suppress students' self-expression and points to peer-reviewed research finding no link between uniforms and academic achievement.",
        checklist: [
          "Does it clearly name which side/passage is stronger?",
          "Does it state the specific claim (against uniforms)?",
          "Does it preview at least two reasons?",
          "Is it one focused sentence with no vague words like \"good\"?"
        ]
      },
      {
        scenario: "Prompt: Two passages debate whether teens should face social media restrictions. Pick EITHER side and write a thesis that previews two reasons.",
        model: "Passage B makes the stronger argument against restricting teen social media, because it explains that age limits are easily bypassed and that these platforms provide genuine benefits like connection, community, and civic engagement.",
        checklist: [
          "Did you commit to one side?",
          "Did you name the claim, not just \"Passage B\"?",
          "Did you preview two distinct reasons?",
          "Could a reader predict your body paragraphs from this sentence?"
        ]
      }
    ]
  },

  {
    id: "topic",
    title: "Topic Sentences",
    icon: "📌",
    tagline: "The first sentence of each body paragraph",
    lesson: {
      what: `A <b>topic sentence</b> opens each body paragraph and states the <b>one main idea</b> that paragraph will develop. It connects back to your thesis and tells the reader what evidence is coming. Strong topic sentences make your essay easy to follow — which boosts your <b>Organization</b> score.`,
      formula: `<b>Formula:</b> [Transition word], [the passage] supports its claim by [one specific reason/evidence].`,
      tips: [
        "Each body paragraph = ONE main idea, announced in the topic sentence.",
        "Begin with a transition (First, Furthermore, In addition, In contrast) to show flow.",
        "Refer back to your thesis — the topic sentence should be one of the reasons you previewed.",
        "Don't put evidence/quotes in the topic sentence itself — save those for the sentences after it.",
        "Avoid starting a body paragraph with a quote or a fact with no framing."
      ],
      goodVsBad: [
        {
          bad: "Discipline problems dropped by 28 percent.",
          why_bad: "This is raw evidence dropped in with no framing. It doesn't announce the paragraph's main idea.",
          good: "First, Passage A strengthens its argument with concrete statistics showing that uniforms reduce behavior problems.",
          why_good: "Starts with a transition, names the passage, states ONE clear idea (statistics on behavior), and sets up the evidence that follows."
        }
      ]
    },
    mcq: [
      {
        scenario: "Your thesis says Passage A is stronger because of (1) statistics and (2) school unity. Which is the best topic sentence to OPEN your second body paragraph (about unity)?",
        choices: [
          "Uniforms make everyone look the same.",
          "Furthermore, Passage A argues convincingly that uniforms build a sense of belonging and school pride.",
          "Students wear uniforms in many countries around the world.",
          "In conclusion, uniforms are a good idea for most schools."
        ],
        correct: 1,
        explanation: "Option B uses a transition (\"Furthermore\"), names the passage, and announces the single idea of the paragraph (belonging/school pride) — which matches reason 2 of the thesis."
      },
      {
        scenario: "Which sentence is NOT a good topic sentence?",
        choices: [
          "First, Passage B provides strong evidence that the four-day week harms low-income students.",
          "In addition, the author of Passage B highlights the childcare burden on working families.",
          "The study found that test score effects were mixed in the short term.",
          "Finally, Passage B effectively undercuts the cost-savings claim made by the opposing side."
        ],
        correct: 2,
        explanation: "Option C is a piece of evidence, not a topic sentence. It belongs INSIDE the paragraph as support — but a topic sentence should frame the main idea first."
      },
      {
        scenario: "What makes a topic sentence effective for the Organization score?",
        choices: [
          "It contains a direct quotation from the passage.",
          "It is the longest sentence in the paragraph.",
          "It uses a transition and states one clear idea that connects to the thesis.",
          "It asks the reader a question."
        ],
        correct: 2,
        explanation: "Effective topic sentences use transitions and announce a single, thesis-connected idea. This creates the clear structure that earns Organization points."
      }
    ],
    drills: [
      {
        scenario: "Your thesis: \"Passage B is stronger against teen social media restrictions because (1) limits are easily bypassed and (2) the platforms offer real benefits.\" Write the topic sentence for the body paragraph about reason 1 (limits are bypassed).",
        model: "First, Passage B convincingly argues that age restrictions would fail in practice because teens can easily lie about their age to bypass them.",
        checklist: [
          "Does it begin with a transition word?",
          "Does it name the passage?",
          "Does it state ONE idea that matches a thesis reason?",
          "Does it set up (but not yet include) the evidence?"
        ]
      },
      {
        scenario: "Write a topic sentence for a body paragraph that ADDRESSES THE OPPOSING argument (a concession paragraph) in a uniforms essay where you support uniforms.",
        model: "Although Passage B raises a fair concern that uniforms may limit self-expression, this drawback is outweighed by the documented benefits to school safety and unity.",
        checklist: [
          "Does it acknowledge the other side fairly (\"Although...\")?",
          "Does it then pivot back to defend your position?",
          "Is it one clear sentence?",
          "Does it use a contrast transition?"
        ]
      }
    ]
  },

  {
    id: "intro",
    title: "Introductions",
    icon: "🚪",
    tagline: "The opening paragraph that frames your argument",
    lesson: {
      what: `Your <b>introduction</b> sets up the whole essay. A strong HiSET intro does three things: (1) <b>introduces the topic/debate</b>, (2) briefly notes that two passages disagree, and (3) ends with your <b>thesis</b> stating which side is stronger and why.`,
      formula: `<b>Structure (3–4 sentences):</b> Hook/context → mention the debate between the two passages → THESIS (which side + why).`,
      tips: [
        "Keep it short — 3 to 4 sentences. Don't give all your evidence here.",
        "Open with a general statement about the topic (a \"hook\"), not \"In this essay I will...\"",
        "Mention that the passages present opposing views.",
        "ALWAYS end with your thesis.",
        "Avoid restating the prompt word-for-word."
      ],
      goodVsBad: [
        {
          bad: "In this essay I am going to talk about the two passages and which one I think is better and why I think that.",
          why_bad: "Announces the essay mechanically, gives no real context, and contains no thesis or position.",
          good: "School uniform policies spark heated debate among parents and educators. The two passages take opposing sides: one argues uniforms improve schools, while the other warns they limit students' freedom. Ultimately, Passage A presents the more convincing argument, because it backs its claims with concrete statistics and shows how uniforms strengthen school community.",
          why_good: "Opens with context, frames the debate, and ends with a clear thesis previewing two reasons."
        }
      ]
    },
    mcq: [
      {
        scenario: "Which is the strongest OPENING sentence (hook) for an introduction?",
        choices: [
          "In this essay I will discuss social media.",
          "Social media has become a constant presence in the lives of today's teenagers, raising urgent questions about its effects.",
          "Passage A says one thing and Passage B says another thing.",
          "Social media is a website that people use."
        ],
        correct: 1,
        explanation: "Option B gives real context and engages the reader. Mechanical openers (\"In this essay I will\") and flat statements weaken your introduction."
      },
      {
        scenario: "What must EVERY introduction end with?",
        choices: [
          "A question for the reader",
          "A direct quote from Passage A",
          "The thesis statement",
          "A summary of all your evidence"
        ],
        correct: 2,
        explanation: "The thesis is the anchor of your essay and belongs at the end of your introduction, setting up everything that follows."
      }
    ],
    drills: [
      {
        scenario: "Write a complete 3–4 sentence introduction for the four-day school week prompt. Choose the side you find stronger and end with a thesis.",
        model: "Across the country, school districts are experimenting with shortening the school week to four days. The two passages disagree sharply: one praises the four-day week for boosting morale and saving money, while the other warns of harm to students and families. While the cost savings are appealing, Passage B presents the more convincing argument, because it provides evidence that low-income students fall behind and that working parents face an impossible childcare burden.",
        checklist: [
          "Does it open with topic context (a hook), not \"In this essay\"?",
          "Does it note that the passages disagree?",
          "Does it end with a clear thesis taking a side?",
          "Is it 3–4 sentences (not overloaded with evidence)?"
        ]
      }
    ]
  },

  {
    id: "body",
    title: "Body Paragraphs",
    icon: "🧱",
    tagline: "Where you prove your argument with evidence",
    lesson: {
      what: `Body paragraphs are where you <b>prove</b> your thesis using <b>evidence from the passages</b>. The best structure is <b>P-E-E-L</b>: <b>P</b>oint (topic sentence), <b>E</b>vidence (cite the passage), <b>E</b>xplain (why it supports your claim), <b>L</b>ink (connect back to thesis). This earns points for both Development and Organization.`,
      formula: `<b>P-E-E-L:</b> Point → Evidence (quote/paraphrase the passage) → Explain → Link back to thesis.`,
      tips: [
        "Start with your topic sentence (the Point).",
        "Then give Evidence — paraphrase or quote specific details from the passage.",
        "Always Explain WHY that evidence supports your position. Don't just drop a fact.",
        "End by Linking the idea back to your overall argument.",
        "Use evidence from BOTH passages across your essay — even the one you disagree with."
      ],
      goodVsBad: [
        {
          bad: "Passage A is right. Uniforms are good. Discipline dropped 28%. So that's why.",
          why_bad: "No real topic sentence, evidence is dropped in without explanation, and there's no analysis or link to the thesis.",
          good: "First, Passage A supports its claim with concrete statistics. The author notes that after schools adopted uniforms, discipline incidents \"dropped by as much as 28 percent.\" This is powerful evidence because it shows a measurable, real-world improvement rather than just an opinion. Such data makes Passage A's argument far harder to dismiss than the opposing passage's general claims.",
          why_good: "Clear topic sentence (Point), specific cited Evidence, an Explanation of why it matters, and a Link comparing it to the weaker passage."
        }
      ]
    },
    mcq: [
      {
        scenario: "In the P-E-E-L structure, what should come immediately AFTER you present a piece of evidence?",
        choices: [
          "A new, unrelated piece of evidence",
          "An explanation of why that evidence supports your argument",
          "The conclusion of the essay",
          "A question for the reader"
        ],
        correct: 1,
        explanation: "After Evidence comes Explanation. Simply dropping a fact without explaining its significance is one of the most common ways students lose Development points."
      },
      {
        scenario: "Which sentence best EXPLAINS this evidence: \"Passage B notes a study found no link between uniforms and achievement\"?",
        choices: [
          "Uniforms come in many colors and styles.",
          "This matters because it directly undercuts the main justification for uniforms — that they improve school performance.",
          "I have worn a uniform before.",
          "Passage A also has some statistics."
        ],
        correct: 1,
        explanation: "Option B explains the significance of the evidence — it shows WHY the fact weakens the opposing argument. That analysis is what earns Development points."
      },
      {
        scenario: "How should you use the passage you DISAGREE with?",
        choices: [
          "Ignore it completely.",
          "Acknowledge one of its points, then explain why your side's evidence is stronger.",
          "Quote it but never mention your own side.",
          "Insult the author's reasoning."
        ],
        correct: 1,
        explanation: "A high-scoring essay engages BOTH passages. Acknowledging the opposing point and then refuting it shows sophisticated analysis."
      }
    ],
    drills: [
      {
        scenario: "Write ONE full P-E-E-L body paragraph supporting Passage A's pro-uniform argument. Use the statistic about a 28% drop in discipline incidents. (4–6 sentences.)",
        model: "First, Passage A strengthens its argument with concrete statistics rather than mere opinion. The author reports that after several districts adopted uniforms, discipline incidents \"dropped by as much as 28 percent.\" This evidence is persuasive because it points to a measurable, real-world result that readers can verify, not just a prediction. By grounding its claim in data, Passage A presents a far more convincing case than Passage B, which relies largely on general statements about self-expression. For this reason, the statistical support is one of the strongest elements of Passage A's argument.",
        checklist: [
          "Point: Does it start with a clear topic sentence?",
          "Evidence: Does it cite a specific detail from the passage?",
          "Explain: Does it say WHY the evidence matters?",
          "Link: Does it connect back to your thesis or compare to the other passage?"
        ]
      },
      {
        scenario: "Write a CONCESSION body paragraph: acknowledge a point from the passage you disagree with, then explain why your side still wins. (4–5 sentences.)",
        model: "Admittedly, Passage B raises a legitimate concern when it argues that uniforms can limit students' self-expression during an important stage of development. Self-expression does matter, and this point deserves to be taken seriously. However, this concern is outweighed by Passage A's evidence of safer, more focused schools. Students can express their identities in many ways beyond clothing — through art, writing, clubs, and conversation — while the documented drop in discipline problems affects the entire learning environment. The benefit to the whole school community ultimately outweighs the limitation on one form of personal expression.",
        checklist: [
          "Does it fairly acknowledge the opposing point?",
          "Does it pivot with a contrast word (However, Yet)?",
          "Does it explain why your side is still stronger?",
          "Does it stay respectful and analytical?"
        ]
      }
    ]
  },

  {
    id: "conclusion",
    title: "Conclusions",
    icon: "🏁",
    tagline: "The closing paragraph that seals your argument",
    lesson: {
      what: `Your <b>conclusion</b> wraps up the essay. It should <b>restate your thesis in fresh words</b>, briefly <b>summarize your strongest reasons</b>, and end with a <b>final thought</b>. A good conclusion leaves the reader convinced — and a missing or rushed conclusion costs Organization points.`,
      formula: `<b>Structure (2–3 sentences):</b> Restate thesis (new words) → recap your main reasons → closing thought.`,
      tips: [
        "Do NOT introduce new evidence or new arguments here.",
        "Restate your thesis using different wording — don't copy it word-for-word.",
        "Briefly remind the reader of your two main reasons.",
        "End with a final thought that gives a sense of closure.",
        "Even a short, clear conclusion is far better than none."
      ],
      goodVsBad: [
        {
          bad: "So that is why Passage A is better. Also, another reason uniforms are good is that they look professional, which I forgot to mention earlier.",
          why_bad: "Introduces brand-new evidence (a fatal conclusion error) and restates the thesis lazily without summarizing the real reasons.",
          good: "In the end, Passage A makes the stronger case for school uniforms. Its reliance on concrete statistics and its clear explanation of how uniforms build community give it an edge over the more general claims of Passage B. When an argument is backed by measurable results, it earns the reader's trust.",
          why_good: "Restates the thesis in new words, recaps the two reasons, adds a final thought, and introduces no new evidence."
        }
      ]
    },
    mcq: [
      {
        scenario: "Which is the biggest mistake to avoid in a conclusion?",
        choices: [
          "Restating your thesis in new words",
          "Summarizing your main reasons",
          "Introducing a brand-new argument or piece of evidence",
          "Ending with a final thought"
        ],
        correct: 2,
        explanation: "Conclusions should NOT introduce new evidence or arguments. That belongs in the body. The conclusion's job is to summarize and close."
      },
      {
        scenario: "Which is the best concluding sentence?",
        choices: [
          "There are many things to think about with this topic.",
          "Because it supports its claims with measurable evidence and clear reasoning, Passage B ultimately presents the more convincing argument.",
          "Anyway, that's my essay about the passages.",
          "Also, I just thought of another reason Passage B is right."
        ],
        correct: 1,
        explanation: "Option B restates the position with fresh wording and reminds the reader of the core reason. The others are vague, too casual, or wrongly add new content."
      }
    ],
    drills: [
      {
        scenario: "Write a 2–3 sentence conclusion for an essay arguing Passage B is stronger on the social media debate (reasons: limits are easily bypassed + platforms have real benefits).",
        model: "Ultimately, Passage B offers the more persuasive argument against restricting teen social media. By showing that age limits are easily evaded and that these platforms provide real benefits like connection and civic engagement, it makes a stronger case than the opposing passage. Rather than banning a tool teens will use anyway, the wiser path is to teach them to use it responsibly.",
        checklist: [
          "Does it restate the thesis in NEW words?",
          "Does it recap the two main reasons?",
          "Does it avoid adding new evidence?",
          "Does it end with a satisfying final thought?"
        ]
      }
    ]
  }
];
