// HiSET Writing Lessons — 15 complete lessons covering every tested topic

const LESSONS = [
  {
    id: 1,
    title: "Subject-Verb Agreement",
    category: "Language Conventions",
    icon: "📝",
    estimatedMinutes: 12,
    intro: "The verb in a sentence must agree in number (singular or plural) with its subject. This is one of the most tested grammar rules on the HiSET Writing exam.",
    sections: [
      {
        heading: "The Basic Rule",
        content: `A singular subject takes a singular verb. A plural subject takes a plural verb.

<b>Singular:</b> The dog <u>barks</u> at strangers.
<b>Plural:</b> The dogs <u>bark</u> at strangers.

<div class="tip">Tip: Singular verbs in the present tense usually end in <b>-s</b> (he runs, she thinks, it works). Plural verbs do NOT end in -s (they run, we think).</div>`
      },
      {
        heading: "Tricky Situations",
        content: `<b>1. Phrases between subject and verb</b>
Don't be fooled by prepositional phrases between the subject and verb.

The <u>box</u> of chocolates <b>is</b> on the table. (Subject = "box," not "chocolates")
The <u>students</u> in my class <b>work</b> hard. (Subject = "students")

<b>2. Compound subjects with "and" → plural</b>
Marcus <u>and</u> Tina <b>are</b> late. (Two people = plural)

<b>3. "Or / nor / either…or / neither…nor" → verb agrees with the CLOSER subject</b>
Neither the coach <u>nor the players</u> <b>were</b> ready.
Neither the players <u>nor the coach</u> <b>was</b> ready.

<b>4. Collective nouns → usually singular in American English</b>
The team <b>is</b> winning. | The committee <b>has</b> decided. | The jury <b>was</b> seated.

<b>5. "Each," "every," "anyone," "everyone," "someone," "no one" → ALWAYS singular</b>
<u>Each</u> of the students <b>is</b> required to bring a pencil.
<u>Everyone</u> <b>has</b> a role to play.

<b>6. "There is / There are" → verb agrees with the noun that follows</b>
There <b>is</b> one mistake.
There <b>are</b> three mistakes.

<b>7. Subjects ending in -ics → usually singular</b>
Mathematics <b>is</b> challenging. | Politics <b>seems</b> complicated. | Physics <b>requires</b> precision.

<b>8. Amounts of money, time, distance → singular</b>
Ten dollars <b>is</b> the price. | Three miles <b>is</b> not far.`
      },
      {
        heading: "Practice Examples",
        content: `Choose the correct verb:

1. The group of volunteers _____ meeting every Tuesday.
   → <b>is</b> (subject = "group," singular collective noun)

2. Either the manager or the employees _____ responsible.
   → <b>are</b> (closer subject = "employees," plural)

3. There _____ several options available.
   → <b>are</b> ("options" is plural and follows "there")

4. Everyone in all three schools _____ been notified.
   → <b>has</b> ("everyone" is always singular)`
      }
    ],
    quickQuizIds: [1, 2, 3, 4, 5]
  },

  {
    id: 2,
    title: "Pronoun Agreement & Case",
    category: "Language Conventions",
    icon: "🔤",
    estimatedMinutes: 15,
    intro: "Pronouns must agree with their antecedents (the nouns they replace) in number and gender. Pronouns must also be in the correct 'case' — subject, object, or possessive.",
    sections: [
      {
        heading: "Pronoun-Antecedent Agreement",
        content: `A pronoun must agree in number with the noun it replaces.

<b>Correct:</b> Each student must bring <u>his or her</u> own supplies.
(Each = singular → his or her, not their)

<b>Singular antecedents:</b> each, every, either, neither, one, anyone, everyone, someone, nobody → use <b>he/she, his/her, him/her</b>

<b>Collective nouns</b> (team, committee, class) → usually use <b>it/its</b> in American English.
The team celebrated <u>its</u> victory. ✓

<div class="tip">Tip: On the HiSET, "their" used for a singular noun is usually the wrong answer. Choose "his or her."</div>`
      },
      {
        heading: "Pronoun Case: Subject vs. Object",
        content: `<b>Subject pronouns</b> (I, you, he, she, we, they, who) — used as the subject of a verb.
<b>Object pronouns</b> (me, you, him, her, us, them, whom) — used after verbs and prepositions.

<b>Test: Remove the other person</b>
"She gave the award to Marcus and (I / me)."
Remove "Marcus and" → "She gave the award to me." → <b>me</b> ✓

<b>Common errors:</b>
❌ Between you and I → ✅ Between you and <b>me</b>
❌ She gave it to he and I → ✅ She gave it to <b>him and me</b>
❌ Me and her went → ✅ <b>She and I</b> went

<b>Who vs. Whom:</b>
Use <b>who</b> when the pronoun is a subject (he/she/they): The person <u>who</u> called left a message.
Use <b>whom</b> when the pronoun is an object (him/her/them): The person <u>whom</u> I called never answered.`
      },
      {
        heading: "Possessive Pronouns — NO Apostrophes",
        content: `Possessive pronouns NEVER have apostrophes:
<b>its</b> (not it's*) | <b>whose</b> (not who's*) | <b>their</b> (not they're*) | <b>your</b> (not you're*)

*Note: it's = it is | who's = who is | they're = they are | you're = you are

<b>Quick test:</b>
"The company reported _____ earnings." → Replace with "its" → "it is earnings"? No. → Use <b>its</b> (possessive).
"_____ at the door?" → Replace with "who is" → makes sense → Use <b>Who's</b>.`
      }
    ],
    quickQuizIds: [11, 12, 13, 14, 15]
  },

  {
    id: 3,
    title: "Verb Tense & Consistency",
    category: "Language Conventions",
    icon: "⏱️",
    estimatedMinutes: 12,
    intro: "Verbs must be in the correct tense to show when actions happen, and tense must stay consistent throughout a passage unless there's a logical reason to shift.",
    sections: [
      {
        heading: "The Six Main Tenses",
        content: `<b>Simple Past:</b> She <u>studied</u> for hours. (completed action)
<b>Simple Present:</b> She <u>studies</u> every day. (current habit/fact)
<b>Simple Future:</b> She <u>will study</u> tomorrow. (future action)
<b>Present Perfect:</b> She <u>has studied</u> this topic before. (past with present relevance)
<b>Past Perfect:</b> She <u>had studied</u> before the test arrived. (earlier past before another past)
<b>Past Progressive:</b> She <u>was studying</u> when the phone rang. (ongoing past action interrupted)`
      },
      {
        heading: "Tense Consistency",
        content: `Don't shift tense without a reason. Keep the same tense throughout a paragraph.

❌ She walked in, sees the crowd, and smiled.
✅ She <u>walked</u> in, <u>saw</u> the crowd, and <u>smiled</u>. (all past)

<b>Logical tense shifts ARE okay:</b>
"The ancient Romans <u>built</u> roads that <u>are</u> still used today."
(Past for historical fact; present for what is still true now.)

<b>Past Perfect for sequence:</b>
Use the past perfect (had + past participle) when one past action happened BEFORE another past action.
"She realized she <u>had left</u> her keys inside." (Left the keys = earlier than realizing.)`
      },
      {
        heading: "Common Tense Errors",
        content: `<b>1. Using "would have" in an "if" clause</b>
❌ If I would have known, I would have helped.
✅ If I <u>had known</u>, I would have helped.

<b>2. Mixing present and past:</b>
❌ Last year, the company grows by 20% and launches three new products.
✅ Last year, the company <u>grew</u> by 20% and <u>launched</u> three new products.

<b>3. Forgetting the past participle after "have":</b>
❌ Scientists have discover a new species.
✅ Scientists have <u>discovered</u> a new species.`
      }
    ],
    quickQuizIds: [21, 22, 23, 24, 25]
  },

  {
    id: 4,
    title: "Sentence Fragments",
    category: "Sentence Structure",
    icon: "🔧",
    estimatedMinutes: 10,
    intro: "A sentence fragment is an incomplete sentence that is missing a subject, a verb, or both. Fragments are a common error on the HiSET Writing exam.",
    sections: [
      {
        heading: "What Makes a Complete Sentence?",
        content: `A complete sentence needs:
1. A <b>subject</b> (who or what the sentence is about)
2. A <b>verb</b> (what the subject does or is)
3. A <b>complete thought</b>

<b>Complete:</b> The rain fell steadily.
<b>Fragment:</b> Falling steadily for hours. (no subject, no main verb)
<b>Fragment:</b> Although the rain fell. (dependent clause — not a complete thought)`
      },
      {
        heading: "Three Types of Fragments",
        content: `<b>1. Missing subject</b>
❌ Runs five miles every morning.
✅ <u>She</u> runs five miles every morning.

<b>2. Missing verb</b>
❌ The tall building on the corner.
✅ The tall building <u>stands</u> on the corner.

<b>3. Dependent clause standing alone</b>
These begin with subordinating conjunctions: <i>although, because, since, when, while, after, before, if, unless, until, even though, which, who, that</i>

❌ Because she studied hard.
✅ <u>She passed the exam</u> because she studied hard.

❌ Which was a great idea.
✅ He suggested a group project, <u>which was a great idea</u>.`
      },
      {
        heading: "How to Fix Fragments",
        content: `<b>Option 1:</b> Add the missing subject or verb.
Fragment: The exhausted runner at the finish line.
Fix: The exhausted runner <u>collapsed</u> at the finish line.

<b>Option 2:</b> Attach the fragment to a nearby sentence.
Fragment: She loved the job. Especially the flexible hours.
Fix: She loved the job, <u>especially the flexible hours</u>.

<b>Option 3:</b> Remove the subordinating conjunction.
Fragment: Although the weather was perfect.
Fix: The weather was perfect. (remove "Although")`
      }
    ],
    quickQuizIds: [29, 30, 35, 36]
  },

  {
    id: 5,
    title: "Run-On Sentences & Comma Splices",
    category: "Sentence Structure",
    icon: "⚡",
    estimatedMinutes: 10,
    intro: "A run-on sentence incorrectly joins two independent clauses without proper punctuation. A comma splice uses only a comma — which is not strong enough to join two complete sentences.",
    sections: [
      {
        heading: "Identifying Run-Ons and Comma Splices",
        content: `<b>Run-on (fused sentence):</b> Two independent clauses with NO punctuation.
❌ The concert ended late everyone rushed to their cars.

<b>Comma splice:</b> Two independent clauses joined with ONLY a comma.
❌ The concert ended late, everyone rushed to their cars.

<b>Key test:</b> Can each part stand alone as a sentence? If yes, you cannot just combine them with a comma.`
      },
      {
        heading: "Four Ways to Fix Run-Ons",
        content: `<b>1. Period — create two separate sentences</b>
The concert ended late. Everyone rushed to their cars.

<b>2. Semicolon — join closely related independent clauses</b>
The concert ended late; everyone rushed to their cars.

<b>3. Comma + coordinating conjunction (FANBOYS)</b>
<i>For, And, Nor, But, Or, Yet, So</i>
The concert ended late, <u>so</u> everyone rushed to their cars.

<b>4. Subordinating conjunction — make one clause dependent</b>
<u>Because</u> the concert ended late, everyone rushed to their cars.

<div class="tip">Tip: "However," "therefore," "moreover," and "consequently" are NOT coordinating conjunctions. You need a semicolon before them: "; however," "; therefore,"</div>`
      },
      {
        heading: "Common Connector Words",
        content: `<b>Coordinating conjunctions</b> (use comma before): for, and, nor, but, or, yet, so
<b>Conjunctive adverbs</b> (use semicolon before, comma after): however, therefore, moreover, furthermore, consequently, otherwise, meanwhile, indeed, nevertheless

✅ She was tired<b>; however, </b>she kept working.
✅ She was tired<b>, but</b> she kept working.
❌ She was tired<b>, however</b> she kept working. (comma splice)`
      }
    ],
    quickQuizIds: [30, 31, 32, 33]
  },

  {
    id: 6,
    title: "Parallel Structure",
    category: "Sentence Structure",
    icon: "⚖️",
    estimatedMinutes: 10,
    intro: "Parallel structure means that items in a list or comparison must be in the same grammatical form. When you mix forms, the sentence sounds awkward and is grammatically incorrect.",
    sections: [
      {
        heading: "The Rule of Parallelism",
        content: `Words, phrases, or clauses joined by coordinating conjunctions or in a series must be in the same grammatical form.

<b>Nouns with nouns:</b>
❌ She likes swimming, to hike, and running on the beach.
✅ She likes <u>swimming, hiking, and running</u> on the beach. (all gerunds)

<b>Verbs with verbs:</b>
❌ He came, he saw, and conquers.
✅ He <u>came, saw, and conquered</u>. (all simple past)

<b>Infinitives with infinitives:</b>
❌ Her goals were to exercise, eating well, and sleeping enough.
✅ Her goals were <u>to exercise, to eat well, and to sleep</u> enough.`
      },
      {
        heading: "Correlative Conjunctions",
        content: `Correlative conjunctions come in pairs and require parallel structure:
<b>not only…but also | either…or | neither…nor | both…and | whether…or</b>

<b>The rule:</b> Whatever grammatical structure follows the first word must be repeated after the second word.

❌ She not only passed the test but also getting a high score.
✅ She <u>not only passed</u> the test but also <u>got</u> a high score. (verb + verb)

❌ Either you complete the assignment or your grade will suffer.
✅ Either <u>you complete the assignment</u> or <u>you fail the course</u>. (clause + clause)`
      },
      {
        heading: "Comparisons",
        content: `When comparing two things, make sure both sides of the comparison are parallel.

❌ Running is more beneficial than to sit all day.
✅ <u>Running</u> is more beneficial than <u>sitting</u> all day.

❌ I prefer coffee over to drink tea.
✅ I prefer <u>drinking coffee</u> over <u>drinking tea</u>.
or: I prefer <u>coffee</u> over <u>tea</u>.`
      }
    ],
    quickQuizIds: [37, 38, 39, 40, 41]
  },

  {
    id: 7,
    title: "Misplaced & Dangling Modifiers",
    category: "Sentence Structure",
    icon: "🎯",
    estimatedMinutes: 12,
    intro: "A modifier is a word, phrase, or clause that describes something else. It must be placed close to the word it modifies, or the sentence becomes confusing or even funny.",
    sections: [
      {
        heading: "Misplaced Modifiers",
        content: `A misplaced modifier is too far from the word it's supposed to describe, creating confusion.

❌ She <u>almost</u> drove her children to school every day.
(Did she almost drive but then didn't? No — she drove them almost every day.)
✅ She drove her children to school <u>almost</u> every day.

❌ We saw an abandoned house <u>driving along the highway</u>.
(The house was driving? No — we were driving.)
✅ <u>Driving along the highway</u>, we saw an abandoned house.

<div class="tip">Tip: Descriptive phrases placed at the beginning of a sentence (before the comma) must modify the subject immediately after the comma.</div>`
      },
      {
        heading: "Dangling Modifiers",
        content: `A dangling modifier has no clear word to modify — the word it should describe is missing from the sentence entirely.

❌ <u>After studying for hours</u>, the exam seemed easy.
(Who studied? The exam can't study. The person who studied is missing.)
✅ <u>After studying for hours</u>, <b>I</b> found the exam easy.

❌ <u>Running to catch the bus</u>, Maria's phone fell out of her pocket.
(The phone can't run — Maria can. Rephrase so Maria is the subject.)
✅ <u>Running to catch the bus</u>, <b>Maria</b> dropped her phone.

❌ <u>Exhausted from the trip</u>, the hotel room was a welcome sight.
(The hotel room wasn't exhausted — the traveler was.)
✅ <u>Exhausted from the trip</u>, <b>we</b> were grateful for the hotel room.`
      },
      {
        heading: "Quick Fix Strategy",
        content: `<b>Step 1:</b> Identify the introductory phrase (usually before the first comma).
<b>Step 2:</b> Ask: "Who or what is doing this action?"
<b>Step 3:</b> Make sure that person/thing is the subject right after the comma.
<b>Step 4:</b> If not, rewrite so it is.

<b>Also watch:</b> "only," "just," "nearly," "almost," "even," "hardly" — these limiting modifiers should be placed directly before the word they modify.

❌ I only ate three bites. (Does she only eat? Nothing else?)
✅ I ate only three bites. ("only" modifies "three bites")`
      }
    ],
    quickQuizIds: [44, 45, 46, 47, 48]
  },

  {
    id: 8,
    title: "Comma Usage",
    category: "Punctuation & Mechanics",
    icon: "，",
    estimatedMinutes: 15,
    intro: "Commas are the most commonly misused punctuation marks. The HiSET tests whether you know the 7 main rules for comma usage.",
    sections: [
      {
        heading: "The 7 Comma Rules",
        content: `<b>Rule 1: Serial (Oxford) Comma — items in a list of 3 or more</b>
We bought apples<b>,</b> oranges<b>,</b> and bananas.

<b>Rule 2: Compound sentences — before coordinating conjunction (FANBOYS)</b>
She wanted to go<b>,</b> but she was too tired.
(Must be two complete independent clauses, not just two verbs.)

<b>Rule 3: Introductory elements — after a phrase or clause that opens a sentence</b>
After the storm<b>,</b> the streets were flooded.
Because she studied<b>,</b> she passed.
Running to the door<b>,</b> he tripped on the rug.

<b>Rule 4: Nonrestrictive clauses — around extra, nonessential information</b>
My sister<b>,</b> who lives in Boston<b>,</b> called yesterday.
(Who lives in Boston = extra info — I have only one sister.)

<b>Rule 5: NO commas around restrictive clauses — essential information</b>
The student who studied the hardest won the award.
(No commas — "who studied the hardest" is essential to identify which student.)

<b>Rule 6: Coordinate adjectives — between two adjectives that both modify a noun equally</b>
It was a long<b>,</b> difficult journey.
(Test: Can you say "long and difficult"? Yes → use a comma.)
She wore a bright red dress. (Test: "bright and red"? No — they aren't coordinate → no comma.)

<b>Rule 7: Interrupting expressions / transitions — set off with commas on both sides</b>
The results<b>,</b> however<b>,</b> were surprising.
This discovery<b>,</b> in fact<b>,</b> changed everything.`
      },
      {
        heading: "Common Comma Mistakes",
        content: `<b>DON'T use a comma to join two independent clauses (comma splice):</b>
❌ She was tired, she went to bed early.
✅ She was tired, so she went to bed early. (add conjunction)

<b>DON'T use a comma before "because"</b> when the "because" clause comes at the end:
❌ She passed, because she studied.
✅ She passed because she studied.

<b>DON'T separate subject from verb with a single comma:</b>
❌ The tall building on the corner, is very old.
✅ The tall building on the corner is very old.`
      }
    ],
    quickQuizIds: [51, 52, 53, 54, 55]
  },

  {
    id: 9,
    title: "Semicolons, Colons & Dashes",
    category: "Punctuation & Mechanics",
    icon: ";:",
    estimatedMinutes: 10,
    intro: "Semicolons, colons, and dashes are powerful punctuation marks that the HiSET tests regularly. Learning their distinct uses will help you spot errors and choose the right answer.",
    sections: [
      {
        heading: "Semicolons (;)",
        content: `<b>Use 1: Join two independent clauses (related ideas)</b>
The rain finally stopped<b>;</b> we could go outside at last.

<b>Use 2: Before conjunctive adverbs</b>
She was exhausted<b>; however,</b> she kept working.
Other conjunctive adverbs: therefore, moreover, furthermore, consequently, meanwhile, nevertheless

<b>Use 3: In a complex list (super-comma)</b>
The team included Jordan, the captain<b>;</b> Rosa, the co-captain<b>;</b> and Miguel, the goalkeeper.

<div class="warning">Never use a semicolon to introduce a list — that's what colons are for.</div>`
      },
      {
        heading: "Colons (:)",
        content: `<b>Use 1: Introduce a list</b>
She packed everything she needed<b>:</b> a tent, sleeping bag, and flashlight.

<b>Use 2: Introduce an explanation or appositive</b>
He had one wish<b>:</b> to see his family again.

<b>Use 3: Introduce a long quotation or formal statement</b>
The judge read the verdict<b>:</b> "We find the defendant not guilty."

<div class="tip">Rule: What comes BEFORE the colon must be a complete independent clause. You cannot use a colon after "such as," "including," "like," or right after a verb.</div>

❌ The store sells: apples, bananas, and oranges.
✅ The store sells three fruits: apples, bananas, and oranges.`
      },
      {
        heading: "Dashes (— or -)",
        content: `<b>Use 1: Emphasize parenthetical or supplemental information</b>
The key ingredient—fresh garlic—makes all the difference.

<b>Use 2: Show an abrupt break or introduce a list at the end of a sentence</b>
She brought everything—tent, blankets, food, and water.

<b>Dashes vs. Commas:</b> Dashes are more emphatic and draw attention; commas are more neutral. Either can set off nonrestrictive clauses.`
      }
    ],
    quickQuizIds: [59, 60, 61, 62, 64]
  },

  {
    id: 10,
    title: "Apostrophes & Possessives",
    category: "Punctuation & Mechanics",
    icon: "'",
    estimatedMinutes: 10,
    intro: "Apostrophes are used in contractions and to show possession. Misusing apostrophes (especially with 'its,' 'whose,' and plurals) is a very common error the HiSET tests.",
    sections: [
      {
        heading: "Contractions",
        content: `An apostrophe marks where letters are omitted in a contraction:
<b>it's</b> = it is / it has | <b>who's</b> = who is / who has | <b>they're</b> = they are
<b>you're</b> = you are | <b>can't</b> = cannot | <b>don't</b> = do not | <b>I'm</b> = I am

<div class="tip">Quick test: If you can replace the word with two words (it → it is), use the apostrophe form. If not, use the possessive with no apostrophe.</div>`
      },
      {
        heading: "Possessives",
        content: `<b>Singular nouns → add 's</b>
the dog's collar | the teacher's desk | Marcus's car | the class's project

<b>Plural nouns ending in -s → add apostrophe only</b>
the dogs' collars | the teachers' desks | the students' grades

<b>Irregular plurals (not ending in -s) → add 's</b>
children's → the children's playground
men's → the men's locker room
women's → the women's team

<b>Possessive pronouns → NO apostrophe EVER</b>
its | whose | their | your | our | his | her | theirs | ours | yours`
      },
      {
        heading: "Common Errors to Watch For",
        content: `<b>its vs. it's:</b>
❌ The cat licked it's paws. → ✅ The cat licked <u>its</u> paws. (possessive)
❌ Its raining outside. → ✅ <u>It's</u> raining outside. (it is)

<b>whose vs. who's:</b>
❌ Whose going to the party? → ✅ <u>Who's</u> going to the party? (who is)
❌ The man who's car was towed... → ✅ The man <u>whose</u> car was towed... (possessive)

<b>their vs. they're vs. there:</b>
<u>their</u> = possessive ("their house")
<u>they're</u> = they are ("they're late")
<u>there</u> = place or expletive ("over there," "there is")`
      }
    ],
    quickQuizIds: [65, 66, 67, 68, 70]
  },

  {
    id: 11,
    title: "Capitalization",
    category: "Punctuation & Mechanics",
    icon: "🔠",
    estimatedMinutes: 8,
    intro: "Capitalization rules determine which words get capital letters. On the HiSET, you must know when to capitalize and when NOT to — both errors appear on the test.",
    sections: [
      {
        heading: "Always Capitalize",
        content: `<b>1. Proper nouns</b> — specific names of people, places, organizations, and things:
People: Maria Gonzalez, President Lincoln, Dr. Smith
Places: Chicago, the Rocky Mountains, Lake Michigan, the Pacific Ocean
Organizations: the Red Cross, Walmart, the Democratic Party
Events/Documents: World War II, the Civil Rights Act, the Olympics

<b>2. Titles BEFORE a name</b>:
President Obama, Senator Harris, Professor Chen, Dr. Ahmed, Aunt Rosa
(But NOT when used as general titles: "the president spoke," "my aunt called")

<b>3. Languages, nationalities, and religions:</b>
English, Spanish, Japanese, Christianity, Islam, Buddhism

<b>4. Days, months, holidays:</b>
Monday, January, Thanksgiving, Fourth of July
(But NOT seasons: spring, summer, fall, winter)

<b>5. First word of a sentence or direct quotation</b>`
      },
      {
        heading: "Do NOT Capitalize",
        content: `<b>General subjects and occupations (without a name):</b>
❌ I spoke to the Doctor. → ✅ I spoke to the <u>d</u>octor.
I saw my doctor, <u>D</u>r. Kim. (Capitalize title before name only)

<b>School subjects (except specific languages):</b>
❌ She studies Math and Science. → ✅ She studies <u>m</u>ath and <u>s</u>cience.
But: She studies <u>E</u>nglish and <u>S</u>panish. (languages = always capitalized)

<b>Directions (unless they are names of regions):</b>
Drive north on the highway. (direction)
She moved to the <u>N</u>orth. (region)
The American <u>S</u>outh has a distinct culture. (region = proper noun)

<b>Seasons:</b>
I love autumn. | summer break | a winter storm`
      }
    ],
    quickQuizIds: [71, 72, 73, 74, 75]
  },

  {
    id: 12,
    title: "Commonly Confused Words",
    category: "Word Choice & Style",
    icon: "🔀",
    estimatedMinutes: 12,
    intro: "Some words sound similar or are often mixed up. The HiSET tests your ability to choose the right word for the context. Study these commonly confused pairs carefully.",
    sections: [
      {
        heading: "Top Confused Pairs",
        content: `<b>affect vs. effect</b>
<i>affect</i> = verb (to influence): The weather <u>affects</u> my mood.
<i>effect</i> = noun (result): The <u>effect</u> of the rain was flooding.
<i>effect</i> can also be a verb meaning "to bring about": The law <u>effected</u> change.

<b>accept vs. except</b>
<i>accept</i> = to receive/agree to: I <u>accept</u> your offer.
<i>except</i> = excluding / other than: Everyone came <u>except</u> him.

<b>than vs. then</b>
<i>than</i> = comparison: She runs faster <u>than</u> I do.
<i>then</i> = time / next: We ate, <u>then</u> we went home.

<b>principal vs. principle</b>
<i>principal</i> = main, or school leader: the <u>principal</u> reason; the school <u>principal</u>
<i>principle</i> = rule or belief: the <u>principles</u> of democracy

<b>fewer vs. less</b>
<i>fewer</i> = countable things: <u>fewer</u> apples, <u>fewer</u> people
<i>less</i> = uncountable/mass: <u>less</u> water, <u>less</u> time

<b>further vs. farther</b>
<i>farther</i> = physical distance: <u>farther</u> down the road
<i>further</i> = figurative degree: <u>further</u> discussion, no <u>further</u> questions`
      },
      {
        heading: "More Confused Words",
        content: `<b>lie vs. lay</b>
<i>lie/lay/lain</i> = to recline (no object needed): <u>Lie</u> down and rest.
<i>lay/laid/laid</i> = to place something (needs an object): <u>Lay</u> the book on the table.

<b>raise vs. rise</b>
<i>raise/raised/raised</i> = to lift something (needs an object): <u>Raise</u> your hand.
<i>rise/rose/risen</i> = to go up (no object): The sun <u>rises</u> at 6 a.m.

<b>ensure vs. insure vs. assure</b>
<i>ensure</i> = to make certain: <u>Ensure</u> that doors are locked.
<i>insure</i> = to get insurance: We need to <u>insure</u> the car.
<i>assure</i> = to reassure a person: I <u>assure</u> you, it's fine.

<b>who vs. that</b>
Use <i>who</i> for people: the student <u>who</u> answered correctly
Use <i>that</i> for things: the book <u>that</u> she recommended`
      }
    ],
    quickQuizIds: [76, 77, 78, 79, 80]
  },

  {
    id: 13,
    title: "Transitions & Logical Flow",
    category: "Organization & Development",
    icon: "🔗",
    estimatedMinutes: 12,
    intro: "Transition words and phrases show relationships between ideas. Choosing the right transition is crucial for writing that flows logically — and for the HiSET multiple-choice section.",
    sections: [
      {
        heading: "Types of Transitions",
        content: `<b>Addition</b> (adding more of the same): furthermore, in addition, moreover, also, additionally, besides, likewise

<b>Contrast / Concession</b> (showing opposition): however, on the other hand, yet, nevertheless, in contrast, although, despite, even though, while, whereas, but

<b>Cause & Effect</b> (showing result): therefore, as a result, consequently, thus, hence, so, because, since

<b>Example / Illustration</b>: for example, for instance, to illustrate, specifically, namely

<b>Sequence / Time</b>: first, second, next, then, finally, afterward, subsequently, previously, meanwhile, before, after, last

<b>Emphasis</b>: indeed, in fact, certainly, clearly, above all, most importantly

<b>Summary / Conclusion</b>: in conclusion, in summary, to summarize, overall, ultimately, therefore`
      },
      {
        heading: "Choosing the Right Transition",
        content: `To pick the correct transition, identify the RELATIONSHIP between the two sentences.

If the second sentence <b>contradicts or limits</b> the first → use a contrast word (however, yet, but)
"The food was expensive. <u>However</u>, the quality was excellent."

If the second sentence <b>adds more support</b> → use an addition word (furthermore, in addition)
"Exercise improves physical health. <u>Furthermore</u>, it boosts mental well-being."

If the second sentence shows a <b>result</b> → use a cause-effect word (therefore, as a result)
"She trained daily. <u>As a result</u>, she won the competition."

If the second sentence gives an <b>example</b> → use (for example, such as)
"Many factors affect grades. <u>For example</u>, attendance plays a key role."

<div class="tip">On the HiSET, wrong transitions often make a "contrast" where there should be "addition," or vice versa. Read both sentences carefully before choosing.</div>`
      }
    ],
    quickQuizIds: [83, 84, 85, 86]
  },

  {
    id: 14,
    title: "Organization & Paragraph Structure",
    category: "Organization & Development",
    icon: "📋",
    estimatedMinutes: 12,
    intro: "The HiSET tests your ability to recognize well-organized writing. Questions ask you to identify topic sentences, remove irrelevant sentences, and arrange ideas logically.",
    sections: [
      {
        heading: "Paragraph Structure",
        content: `A well-organized paragraph has three parts:

<b>1. Topic Sentence:</b> The first (or occasionally second) sentence that states the main idea. A strong topic sentence is specific and tells the reader exactly what the paragraph is about.
<i>Weak:</i> "There are many things about exercising."
<i>Strong:</i> "Regular exercise offers three significant mental health benefits."

<b>2. Supporting Details:</b> Facts, examples, evidence, and explanations that support the topic sentence. Every sentence must relate to the main idea.

<b>3. Concluding Sentence:</b> Wraps up the paragraph and reinforces the main idea.`
      },
      {
        heading: "Relevance and Unity",
        content: `Every sentence in a paragraph must support the topic sentence. A sentence that introduces a new, unrelated idea breaks the paragraph's unity.

<b>Example:</b>
Topic: Benefits of reading regularly
✅ Reading improves vocabulary and comprehension.
✅ It also develops empathy by exposing readers to different perspectives.
❌ Libraries often close on Sundays. ← <b>Irrelevant — remove this</b>
✅ Reading regularly can also reduce stress and improve concentration.

On the HiSET, questions may ask: "Which sentence should be removed to improve the unity of the paragraph?" — Find the sentence that doesn't directly support the topic.`
      },
      {
        heading: "Logical Sequence and Flow",
        content: `Ideas should be presented in a logical order. Look for:
- <b>Chronological order</b> (events in time sequence): First… then… finally…
- <b>Order of importance</b> (least to most important or vice versa)
- <b>Spatial order</b> (description from one location to another)
- <b>Problem-solution</b> (identify the problem, then offer the solution)

<b>Signal words for sequence:</b>
First, second, third | then, next, finally | before, after, while | previously, subsequently

<b>HiSET question type:</b> "Where is the best place to insert the following sentence?"
Strategy: Read the sentence to insert → identify its relationship (does it follow from a cause? does it introduce an example?) → place it after the sentence it relates to.`
      }
    ],
    quickQuizIds: [86, 87, 88, 89]
  },

  {
    id: 15,
    title: "Word Choice, Clarity & Conciseness",
    category: "Word Choice & Style",
    icon: "✏️",
    estimatedMinutes: 10,
    intro: "Good writing is clear, precise, and concise. The HiSET tests your ability to spot wordy, redundant, or unclear writing and choose a cleaner revision.",
    sections: [
      {
        heading: "Eliminating Wordiness",
        content: `Good writing uses only the words needed to convey the idea. Extra words weaken writing.

<b>Common wordy phrases and their concise replacements:</b>
| Wordy | Concise |
|---|---|
| at this point in time | now |
| due to the fact that | because |
| in the event that | if |
| on account of | because |
| in spite of the fact that | although |
| is able to | can |
| a large number of | many |
| the reason why is that | because |
| in order to | to |
| each and every | every or each |

❌ Due to the fact that it was raining, we stayed inside.
✅ <u>Because</u> it was raining, we stayed inside.`
      },
      {
        heading: "Eliminating Redundancy",
        content: `Redundancy means saying the same thing twice. Remove the repetitive word or phrase.

❌ The two twins are exactly alike in every way.
✅ The twins are exactly alike. ("two" + "twins" is redundant; twins are always two)

❌ She returned back to her hometown.
✅ She returned to her hometown. ("returned" already means "came back")

❌ The end result was disappointing.
✅ The result was disappointing. ("end" + "result" is redundant)

Common redundancies on the HiSET:
"past history" | "future plans" | "advance warning" | "collaborate together" | "final conclusion" | "brief moment" | "unexpected surprise"`
      },
      {
        heading: "Precision and Tone",
        content: `<b>Choose precise words:</b>
❌ She did good work. → ✅ She produced excellent results.
❌ The thing that happened was interesting. → ✅ The accident was unexpected.

<b>Avoid vague intensifiers:</b>
❌ very unique, kind of important, somewhat crucial
✅ unique, important, crucial (unique already means one-of-a-kind)

<b>Maintain consistent tone:</b>
In formal writing, avoid slang, contractions in essays, and overly casual expressions.
Formal: "The data indicate…" | Informal: "The data shows kind of a trend…"

<b>Active vs. Passive Voice:</b>
Active is usually clearer and more direct:
❌ Passive: The report was written by the team.
✅ Active: The team wrote the report.`
      }
    ],
    quickQuizIds: [82, 83, 88, 90]
  },

  {
    id: 16,
    title: "HiSET Exam Strategy & Format",
    category: "Exam Strategies",
    icon: "🎯",
    estimatedMinutes: 20,
    intro: "Know the exam cold before test day. Understanding the exact format, timing, and scoring of the HiSET Writing test lets you allocate your effort strategically — and avoid surprises.",
    sections: [
      {
        heading: "Test Overview",
        content: `The HiSET Language Arts – Writing test has <b>two parts</b> completed in <b>2 hours total</b>:

<b>Part 1 — Multiple Choice</b>
• 50 questions
• ~75 minutes recommended
• Passage-based editing: you read written passages and choose the best revision of underlined portions
• Tests three areas: Writing Conventions (~60%), Language Facility (~20%), Organization (~20%)

<b>Part 2 — Extended Response (Essay)</b>
• 1 essay prompt
• ~45 minutes recommended
• You read two short passages presenting different perspectives on an issue
• You write an argumentative essay explaining which passage makes the STRONGER argument, using evidence from BOTH passages
• Minimum score of 2 (out of 6) required; aim for 4–6 for a strong result

<div class="tip"><b>Key insight:</b> The essay is NOT a personal opinion essay — it is an <b>evidence-based argument</b> about which of two passages is better supported. This is the most common misconception.</div>`
      },
      {
        heading: "Part 1: Multiple-Choice Strategy",
        content: `<b>How the questions work:</b>
Each question presents a short passage (usually 1–5 sentences) with an underlined portion marked (1). You choose the best revision — or confirm "No change."

<b>Step-by-step approach:</b>
1. <b>Read the full passage first</b> — context matters. A word that looks wrong alone may be correct in context.
2. <b>Identify the error type</b> — is it grammar, punctuation, word choice, or organization?
3. <b>Eliminate obviously wrong answers</b> — often 1–2 choices introduce new errors.
4. <b>Say it aloud (mentally)</b> — if an answer sounds awkward, it probably is wrong.
5. <b>Don't over-correct</b> — "No change" is correct roughly 15–20% of the time.

<b>Content area weights (approximate):</b>
| Area | Questions | Examples |
|---|---|---|
| Writing Conventions | ~30 | Grammar, punctuation, spelling |
| Organization | ~10 | Transitions, topic sentences, sentence order |
| Language Facility | ~10 | Word choice, conciseness, tone |

<div class="tip"><b>Time tip:</b> At 75 minutes for 50 questions, you have about 90 seconds per question. Don't spend more than 2 minutes on any single item — mark it and move on.</div>`
      },
      {
        heading: "Part 2: Essay Strategy",
        content: `<b>The Two-Passage Format:</b>
You will read two passages of 200–400 words each. They present opposing views on a debatable topic (education, technology, social policy, etc.). Your job: argue which passage makes the <b>better-supported</b> argument.

<b>Recommended time split (45 minutes):</b>
• 5 min — Read both passages, underline key evidence
• 5 min — Choose your side and plan your essay outline
• 30 min — Write your essay
• 5 min — Proofread for grammar, punctuation, and clarity

<b>Essay structure (5–6 paragraphs):</b>
1. <b>Introduction</b> — introduce the issue + thesis (which passage wins and why)
2. <b>Body 1</b> — strongest reason Passage A/B is better, with evidence
3. <b>Body 2</b> — second reason, with evidence
4. <b>Body 3 (optional)</b> — acknowledge the other passage, then rebut it
5. <b>Conclusion</b> — restate thesis in fresh words, brief summary

<b>Essay must-haves for a high score:</b>
✅ A clear thesis that takes a side
✅ At least 2 specific pieces of evidence from the STRONGER passage
✅ At least 1 reference to the WEAKER passage (to show you read both)
✅ Smooth transitions between paragraphs
✅ Proofread final 5 minutes`
      },
      {
        heading: "Scoring & What You Need",
        content: `<b>Part 1 Scoring:</b>
• Raw score → scaled score of 1–20
• Passing: scaled score of <b>8 or higher</b>
• Perfect score: 20
• Each correct answer counts equally; there is NO penalty for wrong answers, so always guess if unsure

<b>Part 2 (Essay) Scoring:</b>
Two trained raters each score your essay on 4 traits (0–3 each):
| Trait | What They Look For |
|---|---|
| Development | Clear claim + specific evidence from passages |
| Organization | Intro, body, conclusion; smooth transitions |
| Language Facility | Precise vocabulary, sentence variety |
| Conventions | Grammar, punctuation, spelling |

• Each rater scores 0–12; scores are averaged
• Minimum essay score of <b>2 raw</b> required to pass
• Aim for 4+ per rater on each trait for a competitive score

<b>Overall Writing Score:</b>
Combined into a 1–20 scale. Scores of 15–20 are considered strong.

<div class="tip"><b>Perfect score tip:</b> You cannot earn a perfect 20 by ignoring the essay. Both the MC and essay contribute. Focus 60% of your prep time on grammar/conventions (most MC questions) and 40% on essay structure and evidence skills.</div>`
      }
    ],
    quickQuizIds: [121, 122, 124, 128, 130]
  },

  {
    id: 17,
    title: "Passage-Based Editing Technique",
    category: "Exam Strategies",
    icon: "✏️",
    estimatedMinutes: 18,
    intro: "Every multiple-choice question on Part 1 of the HiSET Writing test is passage-based — you revise written text, not just isolated sentences. This lesson teaches the exact approach to maximize your score.",
    sections: [
      {
        heading: "How Passage-Based Questions Work",
        content: `The HiSET doesn't ask you abstract grammar rules in isolation — it embeds those rules in real written passages. You'll see a paragraph or set of sentences with specific portions underlined and labeled (1), (2), etc. Your job is to choose the best revision of each underlined portion.

<b>Three types of underlined portions:</b>
1. <b>Single words</b> — a verb, a pronoun, a transition word
2. <b>Phrases</b> — a prepositional phrase, a modifier, a clause
3. <b>Whole sentences</b> — especially for organization questions (sentence removal, sentence insertion)

<b>Why context is critical:</b>
The same word can be correct or incorrect depending on the sentence around it. Always read the full passage before evaluating the underlined portion.

Example:
Passage: "The committee, along with several advisors, (1)__have__ decided to delay the vote."
Out of context, 'have' looks fine. In context, you see 'committee' is the singular subject — 'has' is correct.`
      },
      {
        heading: "Four Question Types You Will See",
        content: `<b>Type 1: Error Correction</b>
A grammatical or mechanical error is underlined. Choose the correct revision.
Strategy: Identify the exact error type (verb tense? punctuation? modifier?), fix it, then check that your fix doesn't create a new error.

<b>Type 2: Best Revision</b>
The underlined text may not contain an obvious error — but one of the choices is noticeably clearer, more concise, or more effective.
Strategy: Read each choice back into the full sentence. The "best" choice is usually the most concise, precise, and grammatically clean option.

<b>Type 3: Sentence Removal</b>
"Which sentence should be removed to improve the unity of this paragraph?"
Strategy: Identify the paragraph's main idea (usually the topic sentence). Any sentence that introduces an unrelated idea is the answer.

<b>Type 4: Sentence Insertion/Ordering</b>
"Which is the best place to insert this sentence?" or "What is the correct logical order?"
Strategy: Identify where the inserted sentence logically connects. Look for cause-effect links, sequence signals (First/Then/Finally), and pronoun references (if the sentence says "it," there must be an antecedent before it).`
      },
      {
        heading: "Common Traps to Avoid",
        content: `<b>Trap 1: The long answer trap</b>
Wrong answers are often wordy. On word-choice questions, the shortest, clearest option is usually correct.
❌ "due to the fact that there was a disagreement" ✅ "because they disagreed"

<b>Trap 2: The almost-right answer</b>
One wrong choice will fix the identified error but introduce a new one. Check every choice carefully.
Example: Fixing a comma splice with a semicolon is correct. But if the choice also changes the tense wrongly, it's still wrong.

<b>Trap 3: Over-correcting "No change"</b>
If the original sentence sounds right, choose "No change" — don't change something just because you're unsure. About 15–20% of HiSET answers are "No change."

<b>Trap 4: Ignoring passage context for organization questions</b>
For "which sentence doesn't belong?" always re-read the topic sentence to identify the paragraph's controlling idea. The wrong sentence is off-topic relative to that controlling idea — not just different in tone.

<b>Trap 5: Transition type mismatch</b>
"However" ≠ "Therefore" ≠ "Furthermore." Know the four transition categories cold:
• <b>Contrast:</b> however, yet, on the other hand
• <b>Addition:</b> furthermore, moreover, in addition
• <b>Cause-effect:</b> therefore, as a result, consequently
• <b>Example:</b> for example, specifically, for instance`
      },
      {
        heading: "Pacing and Process",
        content: `<b>Recommended process for each question (90 seconds max):</b>
1. Read the full passage (10 sec)
2. Read the question and underlined portion (5 sec)
3. Identify the error type or question type (5 sec)
4. Eliminate 1–2 clearly wrong choices (15 sec)
5. Test the remaining choices by reading them back into the passage (30 sec)
6. Choose the best answer and move on (5 sec)

<b>If you're stuck:</b>
• Skip the question, mark it, and return at the end
• On the actual HiSET, you can review questions before moving to the essay
• Never leave a question blank — eliminate as many choices as you can and guess from the remaining options

<b>Practice strategy:</b>
When you practice, don't just check if you got it right — read the explanation for EVERY question, including correct ones. Understanding why an answer is correct builds pattern recognition faster than just checking a score.

<div class="tip"><b>Golden rule:</b> Read the full passage, identify the error type, eliminate bad choices, test your answer in the sentence. These four steps, done consistently, will earn you the maximum Part 1 score.</div>`
      }
    ],
    quickQuizIds: [127, 131, 133, 136, 138]
  }
];
