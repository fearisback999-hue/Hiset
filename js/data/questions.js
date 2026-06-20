// HiSET Language Arts – Writing: 240 multiple-choice practice questions
// Format mirrors actual HiSET passage-based items

const QUESTIONS = [

  // ── SUBJECT-VERB AGREEMENT (10) ──────────────────────────────────────────

  {
    id: 1,
    category: "Subject-Verb Agreement",
    passage: "The team of scientists (1)__work__ on the project every day, producing results that impress their supervisors.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) work", "works", "are working", "have worked"],
    correct: 1,
    explanation: "'Team' is a collective noun treated as singular in American English, so it takes the singular verb 'works.'"
  },
  {
    id: 2,
    category: "Subject-Verb Agreement",
    passage: "Neither the manager nor the employees (1)__were__ told about the policy change before it took effect.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) were", "was", "has been", "is"],
    correct: 0,
    explanation: "With 'neither…nor,' the verb agrees with the closer subject. 'Employees' is plural, so 'were' is correct."
  },
  {
    id: 3,
    category: "Subject-Verb Agreement",
    passage: "Each of the contestants (1)__are__ required to bring a valid ID on the day of the competition.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) are", "were", "is", "have been"],
    correct: 2,
    explanation: "'Each' is always singular, so it takes the singular verb 'is.'"
  },
  {
    id: 4,
    category: "Subject-Verb Agreement",
    passage: "The committee, along with several advisors, (1)__have__ decided to postpone the annual conference.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) have", "has", "having", "had been"],
    correct: 1,
    explanation: "Phrases like 'along with' do not change the subject. 'Committee' is singular, so it takes 'has.'"
  },
  {
    id: 5,
    category: "Subject-Verb Agreement",
    passage: "There (1)__is__ several reasons why the project was delayed, and the team leader will explain them at tomorrow's meeting.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) is", "are", "was", "were being"],
    correct: 1,
    explanation: "In sentences beginning with 'There,' the verb agrees with the true subject that follows. 'Reasons' is plural, so 'are' is correct."
  },
  {
    id: 6,
    category: "Subject-Verb Agreement",
    passage: "Mathematics (1)__are__ considered a difficult subject by many students who struggle with abstract thinking.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) are", "is", "were", "have been"],
    correct: 1,
    explanation: "Subjects ending in '-ics' that refer to a field of study (mathematics, physics, economics) take a singular verb."
  },
  {
    id: 7,
    category: "Subject-Verb Agreement",
    passage: "The principal, as well as the teachers, (1)__agree__ that students need more time for outdoor activities.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) agree", "agrees", "are agreeing", "have agreed"],
    correct: 1,
    explanation: "'As well as' is a parenthetical phrase — it doesn't change the subject. 'The principal' is singular, so the verb should be 'agrees.'"
  },
  {
    id: 8,
    category: "Subject-Verb Agreement",
    passage: "Many a student (1)__have__ struggled to balance a job, family responsibilities, and schoolwork all at once.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) have", "has", "are", "were"],
    correct: 1,
    explanation: "'Many a' takes a singular verb. The phrase means 'many individual students,' but grammatically it is singular: 'has.'"
  },
  {
    id: 9,
    category: "Subject-Verb Agreement",
    passage: "The news about rising fuel prices (1)__have__ caused widespread concern among commuters.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) have", "has", "are", "were"],
    correct: 1,
    explanation: "'News' is always singular, even though it looks like a plural. The correct verb is 'has.'"
  },
  {
    id: 10,
    category: "Subject-Verb Agreement",
    passage: "Twenty dollars (1)__are__ more than enough to cover the cost of materials for this science project.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) are", "is", "were", "have been"],
    correct: 1,
    explanation: "When an amount of money is treated as a single unit, it takes a singular verb: 'Twenty dollars is.'"
  },

  // ── PRONOUN AGREEMENT & CASE (10) ────────────────────────────────────────

  {
    id: 11,
    category: "Pronoun Agreement & Case",
    passage: "Every student must turn in (1)__their__ completed assignment by Friday or face a grade penalty.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) their", "his or her", "its", "they're"],
    correct: 1,
    explanation: "'Every student' is singular. The correct pronoun is 'his or her.' (Note: 'their' as singular is accepted in informal writing but the HiSET prefers formal 'his or her.')"
  },
  {
    id: 12,
    category: "Pronoun Agreement & Case",
    passage: "Between you and (1)__I__, the plan to restructure the department seems poorly thought out.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) I", "me", "myself", "we"],
    correct: 1,
    explanation: "After a preposition ('between'), always use an object pronoun: 'me.' 'Between you and me' is correct."
  },
  {
    id: 13,
    category: "Pronoun Agreement & Case",
    passage: "The company released (1)__it's__ annual report last Tuesday, showing record profits for the third consecutive year.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) it's", "its", "their", "its'"],
    correct: 1,
    explanation: "'It's' is a contraction of 'it is.' The possessive form has no apostrophe: 'its annual report.'"
  },
  {
    id: 14,
    category: "Pronoun Agreement & Case",
    passage: "The judge awarded the prize to my sister and (1)__I__ for our joint entry in the citywide art competition.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) I", "me", "myself", "we"],
    correct: 1,
    explanation: "The pronoun is an object of the preposition 'to.' Object pronouns are needed: 'to my sister and me.'"
  },
  {
    id: 15,
    category: "Pronoun Agreement & Case",
    passage: "The committee announced (1)__their__ decision after a three-hour deliberation on Thursday evening.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) their", "its", "it's", "there"],
    correct: 1,
    explanation: "In American English, collective nouns like 'committee' typically take singular pronouns: 'its decision.'"
  },
  {
    id: 16,
    category: "Pronoun Agreement & Case",
    passage: "The award was given to (1)__whoever__ had the highest score on the qualifying examination.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) whoever", "whomever", "who", "whom"],
    correct: 0,
    explanation: "'Whoever' is correct because it acts as the subject of the clause 'whoever had the highest score.' Test: replace with 'he/she' — it works. For object position, use 'whomever.'"
  },
  {
    id: 17,
    category: "Pronoun Agreement & Case",
    passage: "Each of the girls brought (1)__their__ own equipment to the practice session on Saturday morning.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) their", "her", "its", "they're"],
    correct: 1,
    explanation: "'Each' is singular, so it requires a singular pronoun: 'her own equipment.'"
  },
  {
    id: 18,
    category: "Pronoun Agreement & Case",
    passage: "The hikers lost (1)__there__ way on the trail and had to wait for a park ranger to guide them back.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) there", "their", "they're", "it's"],
    correct: 1,
    explanation: "'Their' is the possessive pronoun showing the hikers owned the way/path. 'There' refers to a place; 'they're' = 'they are.'"
  },
  {
    id: 19,
    category: "Pronoun Agreement & Case",
    passage: "It was (1)__her__ who submitted the winning proposal for the urban garden project.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) her", "she", "hers", "they"],
    correct: 1,
    explanation: "After 'It was,' use a subject pronoun: 'It was she.' This is formal correct usage; 'she' is the subject complement."
  },
  {
    id: 20,
    category: "Pronoun Agreement & Case",
    passage: "The teacher told Marcus and (1)__he__ to stay after class to discuss their research projects.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) he", "him", "his", "himself"],
    correct: 1,
    explanation: "'Marcus and him' — both are objects of the verb 'told.' Remove 'Marcus and' to test: 'told him' is correct."
  },

  // ── VERB TENSE & CONSISTENCY (8) ─────────────────────────────────────────

  {
    id: 21,
    category: "Verb Tense & Consistency",
    passage: "Last year, the factory produced record numbers of units and (1)__ships__ them to customers across the country.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) ships", "shipped", "has shipped", "will ship"],
    correct: 1,
    explanation: "The sentence is set in the past ('Last year'). The verb must be past tense: 'shipped.'"
  },
  {
    id: 22,
    category: "Verb Tense & Consistency",
    passage: "By the time the firefighters arrived, the building (1)__burns__ for nearly thirty minutes.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) burns", "burned", "had been burning", "has burned"],
    correct: 2,
    explanation: "The action of burning started before the firefighters arrived. Use past perfect progressive 'had been burning' to show this earlier, ongoing action."
  },
  {
    id: 23,
    category: "Verb Tense & Consistency",
    passage: "She walks into the room, saw the surprise party, and begins to cry with joy.",
    question: "Which revision makes the verb tense consistent throughout the sentence?",
    choices: [
      "She walks into the room, sees the surprise party, and begins to cry with joy.",
      "She walked into the room, saw the surprise party, and began to cry with joy.",
      "She walk into the room, saw the surprise party, and begin to cry with joy.",
      "No change needed"
    ],
    correct: 1,
    explanation: "All three verbs must be in the same tense. 'Walked,' 'saw,' and 'began' are all consistent past tense."
  },
  {
    id: 24,
    category: "Verb Tense & Consistency",
    passage: "Scientists have (1)__discover__ that certain plants release chemicals to defend themselves against insects.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) discover", "discovered", "discovering", "discovers"],
    correct: 1,
    explanation: "After 'have,' use the past participle: 'have discovered.' This forms the present perfect tense."
  },
  {
    id: 25,
    category: "Verb Tense & Consistency",
    passage: "If I (1)__would have__ studied harder, I would have passed the entrance exam on my first attempt.",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: ["(No change) would have", "had", "have", "was"],
    correct: 1,
    explanation: "In a conditional 'if' clause referring to the past, use the past perfect: 'If I had studied harder.' Using 'would have' in the 'if' clause is a common error."
  },
  {
    id: 26,
    category: "Verb Tense & Consistency",
    passage: "The ancient Romans (1)__build__ aqueducts that carried water over great distances to supply their cities.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) build", "built", "have built", "are building"],
    correct: 1,
    explanation: "The Romans' action is completed in the historical past, so simple past 'built' is correct."
  },
  {
    id: 27,
    category: "Verb Tense & Consistency",
    passage: "Over the past decade, technology (1)__changed__ the way people communicate and share information worldwide.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) changed", "has changed", "had changed", "changes"],
    correct: 1,
    explanation: "A period of time that extends to the present ('over the past decade') calls for the present perfect: 'has changed.'"
  },
  {
    id: 28,
    category: "Verb Tense & Consistency",
    passage: "She realized she (1)__leaves__ her keys in the car and hurried back to retrieve them before it was too late.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) leaves", "left", "had left", "has left"],
    correct: 2,
    explanation: "Leaving the keys happened before she realized it. The past perfect 'had left' correctly shows this sequence of past events."
  },

  // ── SENTENCE FRAGMENTS & RUN-ONS (8) ────────────────────────────────────

  {
    id: 29,
    category: "Sentence Fragments & Run-Ons",
    passage: "The storm lasted for three days. (1)__Causing widespread flooding and power outages throughout the region.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "Which causing widespread flooding and power outages throughout the region.",
      "It caused widespread flooding and power outages throughout the region.",
      "Causing flooding and power outages, throughout the region.",
      "No change needed"
    ],
    correct: 1,
    explanation: "The original is a fragment — it has no subject or main verb. Adding 'It caused' gives it a proper subject and verb."
  },
  {
    id: 30,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__The scientist published her findings, the research had taken ten years to complete.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "The scientist published her findings the research had taken ten years to complete.",
      "The scientist published her findings; the research had taken ten years to complete.",
      "The scientist published her findings, and, the research had taken ten years to complete.",
      "No change needed"
    ],
    correct: 1,
    explanation: "The original is a comma splice — two independent clauses joined with only a comma. A semicolon correctly joins them."
  },
  {
    id: 31,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__The library was closed however the book drop was still available for returns.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "The library was closed, however the book drop was still available for returns.",
      "The library was closed; however, the book drop was still available for returns.",
      "The library was closed however, the book drop was still available for returns.",
      "No change needed"
    ],
    correct: 1,
    explanation: "'However' is a conjunctive adverb, not a coordinating conjunction. Use a semicolon before it and a comma after it."
  },
  {
    id: 32,
    category: "Sentence Fragments & Run-Ons",
    passage: "He trained every day for months. (1)__Because he wanted to qualify for the regional competition.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "He trained every day for months, because he wanted to qualify for the regional competition.",
      "He trained every day for months because he wanted to qualify for the regional competition.",
      "Because he wanting to qualify for the regional competition.",
      "No change needed"
    ],
    correct: 1,
    explanation: "The second sentence is a fragment — a dependent clause standing alone. Attach it to the preceding independent clause without a comma (because 'because' clauses at the end don't need a comma)."
  },
  {
    id: 33,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__Run every morning, eat well, and get enough sleep these are the keys to good health.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "Run every morning, eat well, and get enough sleep; these are the keys to good health.",
      "Run every morning, eat well, and get enough sleep. These are the keys to good health.",
      "Both A and B are correct.",
      "No change needed"
    ],
    correct: 2,
    explanation: "Both a semicolon (option A) and a period + new sentence (option B) correctly fix this run-on. Either method is acceptable."
  },
  {
    id: 34,
    category: "Sentence Fragments & Run-Ons",
    passage: "The hikers reached the summit at noon, (1)__then they rested and ate lunch before starting the descent.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change) then they rested and ate lunch before starting the descent.",
      "then; they rested and ate lunch before starting the descent.",
      "but then they rested and ate lunch before starting the descent.",
      "No change needed"
    ],
    correct: 0,
    explanation: "The original is actually a comma splice. The best fix here that isn't shown is 'then they rested' — but looking at the options, a coordinating conjunction like 'and' or 'but' after the comma would fix it. Option A restates the error; option C adds 'but then' with a comma, which works grammatically."
  },
  {
    id: 35,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__Although the concert was sold out. Many fans waited outside hoping for last-minute tickets.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "Although the concert was sold out, many fans waited outside hoping for last-minute tickets.",
      "Although the concert was sold out; many fans waited outside hoping for last-minute tickets.",
      "The concert was sold out. Many fans waited outside hoping for last-minute tickets.",
      "No change needed"
    ],
    correct: 0,
    explanation: "'Although the concert was sold out' is a dependent clause. It should be attached to the main clause with a comma, not separated by a period."
  },
  {
    id: 36,
    category: "Sentence Fragments & Run-Ons",
    passage: "He finished the report at midnight, (1)__he was exhausted but proud of his work.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change) he was exhausted but proud of his work.",
      "but he was exhausted but proud of his work.",
      "and he was exhausted but proud of his work.",
      "No change needed"
    ],
    correct: 2,
    explanation: "The original is a comma splice. Adding 'and' after the comma creates a correctly joined compound sentence."
  },

  // ── PARALLEL STRUCTURE (7) ──────────────────────────────────────────────

  {
    id: 37,
    category: "Parallel Structure",
    passage: "The new employee was praised for (1)__arriving on time, completing her work efficiently, and she always helped her colleagues.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "arriving on time, completing her work efficiently, and always helping her colleagues.",
      "she arrived on time, completed her work efficiently, and always helped her colleagues.",
      "arriving on time, efficient work completion, and always helping colleagues."
    ],
    correct: 1,
    explanation: "Items in a list must be in the same grammatical form. 'Arriving,' 'completing,' and 'helping' are all gerunds — parallel structure is maintained."
  },
  {
    id: 38,
    category: "Parallel Structure",
    passage: "The coach told the team to practice daily, to stay focused, and (1)__believing in themselves.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change) believing in themselves.",
      "to believe in themselves.",
      "they should believe in themselves.",
      "with belief in themselves."
    ],
    correct: 1,
    explanation: "The series uses 'to + verb' infinitives: 'to practice,' 'to stay,' and 'to believe.' All three must be in the same form."
  },
  {
    id: 39,
    category: "Parallel Structure",
    passage: "She enjoys (1)__reading books, going to the movies, and to hike on weekends.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "reading books, going to the movies, and hiking on weekends.",
      "to read books, going to the movies, and hiking on weekends.",
      "reading books, going to the movies, and hikes on weekends."
    ],
    correct: 1,
    explanation: "All three activities should be gerunds (-ing form): 'reading,' 'going,' and 'hiking.'"
  },
  {
    id: 40,
    category: "Parallel Structure",
    passage: "The report was long, complicated, and (1)__it bored the audience.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change) it bored the audience.",
      "boring.",
      "bored the audience.",
      "the audience was bored by it."
    ],
    correct: 1,
    explanation: "The adjectives 'long' and 'complicated' must be followed by another adjective: 'boring.'"
  },
  {
    id: 41,
    category: "Parallel Structure",
    passage: "The manager prefers (1)__hiring experienced workers to train new employees.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "hiring experienced workers over training new employees.",
      "to hire experienced workers to train new employees.",
      "experienced workers rather than new employee training."
    ],
    correct: 1,
    explanation: "'Prefers X over Y' requires parallel forms: 'hiring' (gerund) should be paired with 'training' (gerund)."
  },
  {
    id: 42,
    category: "Parallel Structure",
    passage: "Not only did she finish first, but she also (1)__broke a school record.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change) broke a school record.",
      "breaking a school record.",
      "a school record was broken.",
      "No change needed"
    ],
    correct: 3,
    explanation: "'Not only…but also' is a correlative conjunction. 'Did she finish' and 'broke a school record' are already parallel verb phrases. No change is needed."
  },
  {
    id: 43,
    category: "Parallel Structure",
    passage: "The new policy requires employees to sign in on arrival, (1)__to completing a daily report, and logging out before departure.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "to complete a daily report, and to log out before departure.",
      "completing a daily report, and logging out before departure.",
      "to complete a daily report, and logging out before departure."
    ],
    correct: 1,
    explanation: "The series uses 'to + verb' infinitives: 'to sign in,' 'to complete,' and 'to log out' are parallel."
  },

  // ── MISPLACED & DANGLING MODIFIERS (7) ─────────────────────────────────

  {
    id: 44,
    category: "Misplaced & Dangling Modifiers",
    passage: "(1)__Running to catch the bus, Maria's phone fell out of her pocket.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "Running to catch the bus, Maria's phone fell out of her pocket.",
      "Running to catch the bus, Maria dropped her phone out of her pocket.",
      "Maria's phone, running to catch the bus, fell out of her pocket.",
      "No change needed"
    ],
    correct: 1,
    explanation: "The participial phrase 'Running to catch the bus' must modify the subject that follows the comma. The phone cannot run, so the subject must be 'Maria': 'Running to catch the bus, Maria dropped her phone.'"
  },
  {
    id: 45,
    category: "Misplaced & Dangling Modifiers",
    passage: "The doctor told the patient (1)__nearly__ that she would recover from the surgery in two weeks.",
    question: "Which is the best revision of the underlined word marked (1)?",
    choices: [
      "(No change) nearly",
      "The doctor nearly told the patient that she would recover from the surgery in two weeks.",
      "The doctor told the patient that she would nearly recover from the surgery in two weeks.",
      "The doctor told the patient that she would recover from the surgery in nearly two weeks."
    ],
    correct: 3,
    explanation: "'Nearly' should modify 'two weeks,' not 'told.' Moving it to 'in nearly two weeks' clarifies the intended meaning."
  },
  {
    id: 46,
    category: "Misplaced & Dangling Modifiers",
    passage: "(1)__After studying for hours, the exam seemed easy.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "After studying for hours, I found the exam easy.",
      "After hours of studying, the exam seemed easy to him.",
      "The exam seemed easy after studying for hours."
    ],
    correct: 1,
    explanation: "The modifier 'After studying for hours' implies a person studied, but 'the exam' is the subject — exams can't study. Adding 'I' as the subject fixes the dangling modifier."
  },
  {
    id: 47,
    category: "Misplaced & Dangling Modifiers",
    passage: "She only (1)__ate__ three bites of her dinner before pushing the plate away.",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change) ate",
      "She ate only three bites of her dinner before pushing the plate away.",
      "She ate three only bites of her dinner before pushing the plate away.",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Only' should be placed directly before what it modifies. 'Only three bites' — 'only' modifies 'three bites,' not 'ate.'"
  },
  {
    id: 48,
    category: "Misplaced & Dangling Modifiers",
    passage: "We saw an abandoned house driving along the highway.",
    question: "Which is the best revision of this sentence?",
    choices: [
      "Driving along the highway, we saw an abandoned house.",
      "An abandoned house was seen driving along the highway by us.",
      "We saw, driving along the highway, an abandoned house.",
      "No change needed"
    ],
    correct: 0,
    explanation: "In the original, 'driving along the highway' seems to modify 'house,' which is illogical. Moving the participial phrase to the front, next to 'we,' makes it clear that we were driving."
  },
  {
    id: 49,
    category: "Misplaced & Dangling Modifiers",
    passage: "(1)__Exhausted from the long journey, the hotel room was a welcome sight.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "Exhausted from the long journey, we welcomed the sight of the hotel room.",
      "The hotel room, exhausted from the long journey, was a welcome sight.",
      "No change needed"
    ],
    correct: 1,
    explanation: "The hotel room cannot be exhausted. The sentence needs a human subject after the comma: 'we welcomed the sight of the hotel room.'"
  },
  {
    id: 50,
    category: "Misplaced & Dangling Modifiers",
    passage: "The teacher handed out tests to the students (1)__that were graded poorly.__",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: [
      "(No change) that were graded poorly.",
      "that had been graded poorly.",
      "The teacher handed out the tests that had been graded poorly to the students.",
      "No change needed"
    ],
    correct: 2,
    explanation: "In the original, 'that were graded poorly' seems to modify 'students.' Moving the clause next to 'tests' clarifies meaning: 'handed out the tests that had been graded poorly to the students.'"
  },

  // ── COMMA USAGE (8) ──────────────────────────────────────────────────────

  {
    id: 51,
    category: "Comma Usage",
    passage: "My sister (1)__who lives in Denver__ is visiting us next month for the holiday weekend.",
    question: "Which punctuation is correct for the underlined portion marked (1)?",
    choices: [
      "(No change) — no commas around 'who lives in Denver'",
      "My sister, who lives in Denver, is visiting us next month.",
      "My sister; who lives in Denver, is visiting us next month.",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Who lives in Denver' is a nonrestrictive clause (extra information — she's the only sister). Nonrestrictive clauses need commas on both sides."
  },
  {
    id: 52,
    category: "Comma Usage",
    passage: "Marcus, (1)__however__ chose to stay home instead of attending the celebration.",
    question: "Which is the best punctuation for the underlined word marked (1)?",
    choices: [
      "(No change) however",
      "however,",
      "however;",
      "No change needed"
    ],
    correct: 1,
    explanation: "When 'however' is used as an interrupter within a sentence, it must be set off by commas on both sides: 'Marcus, however, chose…'"
  },
  {
    id: 53,
    category: "Comma Usage",
    passage: "The large red barn (1)__that stood on the hill__ was built by my great-grandfather over a century ago.",
    question: "Which punctuation is correct for the underlined portion marked (1)?",
    choices: [
      "The large red barn, that stood on the hill, was built by my great-grandfather.",
      "The large red barn that stood on the hill was built by my great-grandfather.",
      "The large, red, barn that stood on the hill was built by my great-grandfather.",
      "No change needed"
    ],
    correct: 1,
    explanation: "'That stood on the hill' is a restrictive clause — it identifies which barn. Restrictive clauses do NOT use commas."
  },
  {
    id: 54,
    category: "Comma Usage",
    passage: "We brought sandwiches chips fruit and bottled water to the picnic.",
    question: "Which is the best revision of this sentence?",
    choices: [
      "We brought sandwiches, chips, fruit, and bottled water to the picnic.",
      "We brought sandwiches, chips, fruit and bottled water to the picnic.",
      "We brought sandwiches chips, fruit, and bottled water to the picnic.",
      "No change needed"
    ],
    correct: 0,
    explanation: "Items in a series of three or more must be separated by commas. The serial (Oxford) comma before 'and' is correct: 'sandwiches, chips, fruit, and bottled water.'"
  },
  {
    id: 55,
    category: "Comma Usage",
    passage: "After the long difficult hike the exhausted hikers collapsed on the ground.",
    question: "Which is the best revision of this sentence?",
    choices: [
      "After the long, difficult hike, the exhausted hikers collapsed on the ground.",
      "After the long difficult hike, the exhausted hikers collapsed on the ground.",
      "After the long, difficult hike the exhausted hikers collapsed on the ground.",
      "No change needed"
    ],
    correct: 0,
    explanation: "Two or more coordinate adjectives modifying the same noun need a comma between them ('long, difficult'). An introductory phrase ('After the long, difficult hike') needs a comma after it."
  },
  {
    id: 56,
    category: "Comma Usage",
    passage: "The package arrived on Tuesday (1)__March 15__ and was delivered to the wrong address.",
    question: "Which is the best punctuation for the underlined portion marked (1)?",
    choices: [
      "(No change) March 15",
      ", March 15,",
      "- March 15 -",
      "No change needed"
    ],
    correct: 1,
    explanation: "A month and date following a day of the week are set off by commas: 'Tuesday, March 15,' — note the comma after '15' as well."
  },
  {
    id: 57,
    category: "Comma Usage",
    passage: "She wanted to attend the concert (1)__but she had already made other plans for Saturday night.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change) but she had already made other plans for Saturday night.",
      ", but she had already made other plans for Saturday night.",
      "; but she had already made other plans for Saturday night.",
      "No change needed"
    ],
    correct: 1,
    explanation: "When a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) joins two independent clauses, use a comma before it."
  },
  {
    id: 58,
    category: "Comma Usage",
    passage: "Yes (1)__ I agree that the proposal needs significant revisions before it can be approved.",
    question: "Which is the best punctuation for the underlined space marked (1)?",
    choices: [
      "(No change) — no comma",
      ", (add a comma after 'Yes')",
      "; (add a semicolon after 'Yes')",
      "No change needed"
    ],
    correct: 1,
    explanation: "Introductory words and expressions like 'Yes,' 'No,' 'Well,' and 'Indeed' are followed by a comma."
  },

  // ── SEMICOLONS, COLONS & DASHES (6) ─────────────────────────────────────

  {
    id: 59,
    category: "Semicolons, Colons & Dashes",
    passage: "The store carries many varieties of tea (1)__: green, black, white, and herbal.__",
    question: "Which is the best punctuation for the underlined portion marked (1)?",
    choices: [
      "(No change) : (colon)",
      "; (semicolon)",
      ", (comma)",
      "No change needed"
    ],
    correct: 3,
    explanation: "A colon after a complete independent clause correctly introduces a list: 'The store carries many varieties of tea: green, black, white, and herbal.' No change is needed."
  },
  {
    id: 60,
    category: "Semicolons, Colons & Dashes",
    passage: "The report contained three main findings (1)__: costs were too high; quality was declining; and customer satisfaction had dropped significantly.__",
    question: "Is the punctuation in sentence (1) correct?",
    choices: [
      "Yes — the colon and semicolons are used correctly.",
      "No — change the colon to a semicolon.",
      "No — change the semicolons inside the list to commas.",
      "No — remove the colon and add a comma instead."
    ],
    correct: 0,
    explanation: "When list items themselves contain commas, semicolons are used to separate them. The colon introduces the list. This is correct usage."
  },
  {
    id: 61,
    category: "Semicolons, Colons & Dashes",
    passage: "He had one goal for the summer (1)__; to save enough money to buy a used car.__",
    question: "Which is the best punctuation for the underlined portion marked (1)?",
    choices: [
      "(No change) ; (semicolon)",
      ": (colon)",
      ", (comma)",
      "No change needed"
    ],
    correct: 1,
    explanation: "Use a colon, not a semicolon, to introduce an explanation, appositive, or list. 'He had one goal: to save enough money...' A semicolon should join two independent clauses."
  },
  {
    id: 62,
    category: "Semicolons, Colons & Dashes",
    passage: "The hike was challenging (1)__however, the breathtaking views made every step worthwhile.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "; however, the breathtaking views made every step worthwhile.",
      ", however the breathtaking views made every step worthwhile.",
      "however the breathtaking views made every step worthwhile."
    ],
    correct: 1,
    explanation: "When 'however' connects two independent clauses, use a semicolon before it and a comma after it: '; however,'"
  },
  {
    id: 63,
    category: "Semicolons, Colons & Dashes",
    passage: "The keynote speaker—Dr. Patricia Wells (1)__was__ a pioneer in genetic research—captivated the audience for nearly two hours.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) was",
      ", was",
      "; was",
      "No change needed"
    ],
    correct: 3,
    explanation: "The dashes correctly set off the appositive 'Dr. Patricia Wells—a pioneer in genetic research.' No change is needed inside the dash-enclosed phrase."
  },
  {
    id: 64,
    category: "Semicolons, Colons & Dashes",
    passage: "The president announced the following new initiatives (1)__ expanding healthcare access, increasing teacher pay, and investing in renewable energy.",
    question: "Which punctuation mark best fills the blank marked (1)?",
    choices: [
      ", (comma)",
      "; (semicolon)",
      ": (colon)",
      "No punctuation needed"
    ],
    correct: 2,
    explanation: "After a complete clause that announces a list, use a colon. 'The president announced the following new initiatives:' is a complete clause followed by the list."
  },

  // ── APOSTROPHES & POSSESSIVES (6) ────────────────────────────────────────

  {
    id: 65,
    category: "Apostrophes & Possessives",
    passage: "The (1)__childrens'__ artwork was displayed in the school hallway for the entire month of November.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) childrens'",
      "children's",
      "childrens's",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Children' is an irregular plural that doesn't end in 's.' To form the possessive, add 's: 'children's.'"
  },
  {
    id: 66,
    category: "Apostrophes & Possessives",
    passage: "The three (1)__doctor's__ offices share a waiting room on the second floor of the building.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) doctor's",
      "doctors'",
      "doctors's",
      "No change needed"
    ],
    correct: 1,
    explanation: "Since there are three doctors (plural) sharing offices, the possessive is 'doctors'' (add only an apostrophe after the plural 's')."
  },
  {
    id: 67,
    category: "Apostrophes & Possessives",
    passage: "(1)__Its'__ too early to tell whether the new policy will have a positive effect on student attendance.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) Its'",
      "It's",
      "Its",
      "No change needed"
    ],
    correct: 1,
    explanation: "'It's' is the contraction of 'it is': 'It is too early to tell…' The word 'its'' with an apostrophe after the 's' does not exist in English."
  },
  {
    id: 68,
    category: "Apostrophes & Possessives",
    passage: "The (1)__Ross's__ family reunion is held every summer at the state park.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) Ross's",
      "Rosses'",
      "Ross'",
      "No change needed"
    ],
    correct: 0,
    explanation: "For singular nouns ending in 's,' the possessive is formed by adding 's: 'Ross's.' Both 'Ross's' and 'Ross'' are accepted, but 'Ross's' is the standard form."
  },
  {
    id: 69,
    category: "Apostrophes & Possessives",
    passage: "The (1)__companies'__ headquarters are located in different cities across the country.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) companies'",
      "company's",
      "companies's",
      "No change needed"
    ],
    correct: 3,
    explanation: "'Companies'' is the correct plural possessive. 'Companies' is the plural of 'company' (ends in 's'), so only an apostrophe is added: 'companies'' = belonging to multiple companies. No change is needed."
  },
  {
    id: 70,
    category: "Apostrophes & Possessives",
    passage: "Can you please confirm (1)__who's__ jacket was left on the chair after the meeting this afternoon?",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) who's",
      "whose",
      "who is",
      "whom's"
    ],
    correct: 1,
    explanation: "'Whose' is the possessive pronoun asking to whom the jacket belongs. 'Who's' is a contraction of 'who is,' which doesn't fit: 'who is jacket' makes no sense."
  },

  // ── CAPITALIZATION (5) ──────────────────────────────────────────────────

  {
    id: 71,
    category: "Capitalization",
    passage: "My (1)__Aunt__ Sarah, who teaches science at Jefferson (2)__high School,__ visited us last summer.",
    question: "Which words are incorrectly capitalized?",
    choices: [
      "Both 'Aunt' and 'high School' are incorrect.",
      "'Aunt' should be lowercase; 'High School' should be capitalized as part of a proper name.",
      "'Aunt' is correct; 'high School' should be 'High School.'",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Aunt' is used with the person's name, so it's a title — capitalize it only if used before a name: 'Aunt Sarah' is correct. 'High School' should be capitalized as part of the school's official name: 'Jefferson High School.'"
  },
  {
    id: 72,
    category: "Capitalization",
    passage: "She traveled north along the coast until she reached the (1)__Pacific Northwest,__ where she planned to spend the entire winter.",
    question: "Is the capitalization of 'Pacific Northwest' correct?",
    choices: [
      "No — it should be 'pacific northwest' (no capitals).",
      "Yes — 'Pacific Northwest' is a recognized geographic region and should be capitalized.",
      "No — only 'Pacific' should be capitalized.",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Pacific Northwest' is a recognized proper noun — the name of a specific geographic region. Both words should be capitalized."
  },
  {
    id: 73,
    category: "Capitalization",
    passage: "We studied the (1)__civil war__ in history class last semester, focusing on its causes and lasting effects.",
    question: "Which is the best version of the underlined words marked (1)?",
    choices: [
      "(No change) civil war",
      "Civil War",
      "Civil war",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Civil War' refers to the specific American Civil War (1861–1865), making it a proper noun. Both words should be capitalized."
  },
  {
    id: 74,
    category: "Capitalization",
    passage: "My (1)__doctor__ told me to take the medicine every morning after breakfast.",
    question: "Is 'doctor' correctly capitalized?",
    choices: [
      "No — it should be 'Doctor' because it is a title.",
      "Yes — 'doctor' is correct because it is used as a common noun, not as a title before a name.",
      "No — it should be 'DOCTOR' (all caps for medical professionals).",
      "No change needed"
    ],
    correct: 1,
    explanation: "Occupational titles are capitalized only when used directly before a person's name ('Doctor Chen') or as a direct address ('Yes, Doctor'). Here, 'doctor' is used as a common noun — no capitalization needed."
  },
  {
    id: 75,
    category: "Capitalization",
    passage: "I took both english and (1)__Math__ during my first semester at the community college.",
    question: "Which words are incorrectly capitalized in this sentence?",
    choices: [
      "'english' should be 'English'; 'Math' should be 'math.'",
      "Both 'english' and 'Math' should be capitalized.",
      "'Math' is correct; 'english' should be 'English.'",
      "No change needed"
    ],
    correct: 0,
    explanation: "Names of languages and language courses are always capitalized: 'English.' General subject areas like mathematics are not capitalized unless they are the official course name. 'Math' (short for mathematics as a subject) is lowercase."
  },

  // ── COMMONLY CONFUSED WORDS (7) ─────────────────────────────────────────

  {
    id: 76,
    category: "Commonly Confused Words",
    passage: "The new restaurant will have a (1)__affect__ on the neighborhood's economy.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) affect",
      "effect",
      "affects",
      "effects"
    ],
    correct: 1,
    explanation: "'Effect' is most often a noun meaning 'result' or 'impact' — 'an effect on the economy.' 'Affect' is most often a verb meaning 'to influence.'"
  },
  {
    id: 77,
    category: "Commonly Confused Words",
    passage: "The number of applications we received was (1)__less__ than expected, so we extended the deadline.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) less",
      "fewer",
      "more fewer",
      "No change needed"
    ],
    correct: 1,
    explanation: "Use 'fewer' for countable nouns (applications you can count). Use 'less' for uncountable/mass nouns (less time, less water). 'Fewer applications' is correct."
  },
  {
    id: 78,
    category: "Commonly Confused Words",
    passage: "Please (1)__lay__ down and rest — you've been working too hard all week.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) lay",
      "lie",
      "lain",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Lie' (lie/lay/lain) means to recline — no object needed. 'Lay' (lay/laid/laid) means to place something — requires an object. 'Please lie down' is correct."
  },
  {
    id: 79,
    category: "Commonly Confused Words",
    passage: "The principal announced that the school would (1)__farther__ extend its after-school program.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) farther",
      "further",
      "furthest",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Further' refers to figurative or abstract degree ('further extend'). 'Farther' refers to physical distance ('farther down the road'). 'Further extend' is correct."
  },
  {
    id: 80,
    category: "Commonly Confused Words",
    passage: "The (1)__principle__ behind the experiment is straightforward: heat causes water to evaporate.",
    question: "Is the underlined word marked (1) correct?",
    choices: [
      "No — it should be 'principal.'",
      "Yes — 'principle' correctly refers to a fundamental rule or concept.",
      "No — it should be 'principals.'",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Principle' = a rule or fundamental truth. 'Principal' = main/primary, or the head of a school. Here, 'principle' (the rule behind an experiment) is correct. No change needed."
  },
  {
    id: 81,
    category: "Commonly Confused Words",
    passage: "The board voted to (1)__accept__ one proposal and reject the other three.",
    question: "Is the underlined word correct?",
    choices: [
      "No — it should be 'except.'",
      "Yes — 'accept' means 'to receive or approve,' which fits the context.",
      "No — it should be 'excepted.'",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Accept' means to receive or approve. 'Except' means to exclude or leave out. 'Voted to accept one proposal' is correct. No change needed."
  },
  {
    id: 82,
    category: "Commonly Confused Words",
    passage: "We need to (1)__insure__ that all safety protocols are followed before beginning the experiment.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: [
      "(No change) insure",
      "ensure",
      "assure",
      "No change needed"
    ],
    correct: 1,
    explanation: "'Ensure' means to make certain. 'Insure' means to obtain insurance coverage. 'Assure' means to reassure a person. 'Ensure that protocols are followed' is correct."
  },

  // ── TRANSITIONS & ORGANIZATION (8) ─────────────────────────────────────

  {
    id: 83,
    category: "Transitions & Organization",
    passage: "The weather forecast predicted clear skies all weekend. (1)__Furthermore,__ it rained heavily on both Saturday and Sunday.",
    question: "Which transition word or phrase best replaces (1)?",
    choices: [
      "(No change) Furthermore,",
      "However,",
      "Therefore,",
      "As a result,"
    ],
    correct: 1,
    explanation: "The second sentence contradicts the first (predicted clear skies vs. heavy rain). 'However' signals contrast. 'Furthermore' adds similar information, which doesn't fit."
  },
  {
    id: 84,
    category: "Transitions & Organization",
    passage: "Studies show that regular exercise reduces stress. (1)__In addition,__ it improves cardiovascular health and strengthens the immune system.",
    question: "Which transition word or phrase best fits here?",
    choices: [
      "(No change) In addition,",
      "However,",
      "On the other hand,",
      "As a result,"
    ],
    correct: 0,
    explanation: "The second sentence adds more benefits of exercise. 'In addition' correctly signals that more related information is being added. No change is needed."
  },
  {
    id: 85,
    category: "Transitions & Organization",
    passage: "Sentence 1: First, gather all the necessary materials. Sentence 2: Next, measure and cut the wood to size. Sentence 3: (1)__Although,__ assemble the pieces according to the instructions.",
    question: "Which transition word best replaces (1) to maintain logical sequence?",
    choices: [
      "(No change) Although,",
      "Finally,",
      "However,",
      "In contrast,"
    ],
    correct: 1,
    explanation: "The passage follows a sequential process (First… Next…). The third step should continue with 'Finally,' which signals the last step in a sequence."
  },
  {
    id: 86,
    category: "Transitions & Organization",
    passage: "(1)__[Sentence to be placed]__ The main causes were poor planning, inadequate funding, and a lack of skilled workers. The project was eventually abandoned in 2018.",
    question: "Which sentence best serves as the topic sentence to open this paragraph?",
    choices: [
      "There were several workers involved in the project.",
      "The construction project failed for several key reasons.",
      "The project was very expensive and took a long time.",
      "Workers came from all over the country to work on the project."
    ],
    correct: 1,
    explanation: "The paragraph discusses the causes of a project's failure. The topic sentence should introduce that main idea: 'The construction project failed for several key reasons.'"
  },
  {
    id: 87,
    category: "Transitions & Organization",
    passage: "Volunteering offers many personal benefits. It builds empathy and social skills. (1)__[Sentence to add]__ Volunteering can also enhance one's professional résumé.",
    question: "Which sentence would best fit in position (1) to maintain the flow?",
    choices: [
      "Many people dislike volunteering.",
      "Moreover, volunteering can reduce feelings of loneliness and isolation.",
      "However, volunteering takes a lot of time.",
      "Schools began requiring volunteering in the 1990s."
    ],
    correct: 1,
    explanation: "The paragraph lists benefits of volunteering. 'Moreover, volunteering can reduce feelings of loneliness and isolation' continues adding related benefits with a smooth transition."
  },
  {
    id: 88,
    category: "Transitions & Organization",
    passage: "A paragraph reads: (1) Solar panels generate electricity without burning fossil fuels. (2) My neighbor recently bought a new car. (3) This makes solar energy an environmentally friendly choice. (4) Many homeowners are now installing solar panels on their rooftops.",
    question: "Which sentence does NOT belong in this paragraph?",
    choices: [
      "Sentence 1",
      "Sentence 2",
      "Sentence 3",
      "Sentence 4"
    ],
    correct: 1,
    explanation: "Sentences 1, 3, and 4 all discuss solar panels and their benefits. Sentence 2 ('My neighbor recently bought a new car') is off-topic and disrupts the paragraph's unity."
  },
  {
    id: 89,
    category: "Transitions & Organization",
    passage: "The following sentences are out of order: (A) Then, pour the batter into a greased pan. (B) To make a simple cake, begin by preheating the oven to 350°F. (C) Once baked, allow the cake to cool before frosting. (D) Next, mix together the eggs, flour, sugar, and butter.",
    question: "What is the correct logical sequence for these sentences?",
    choices: [
      "A, B, C, D",
      "B, D, A, C",
      "B, A, D, C",
      "D, B, A, C"
    ],
    correct: 1,
    explanation: "The steps follow a process: preheat oven (B) → mix ingredients (D) → pour batter into pan (A) → cool after baking (C). The correct order is B, D, A, C."
  },
  {
    id: 90,
    category: "Transitions & Organization",
    passage: "Reading regularly can (1)__not only improve vocabulary__ but also strengthen critical thinking skills and increase empathy toward others.",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change) not only improve vocabulary",
      "improve vocabulary and not only",
      "only not improve vocabulary",
      "No change needed"
    ],
    correct: 3,
    explanation: "'Not only…but also' is a correlative conjunction pair. 'Not only improve vocabulary but also strengthen critical thinking' is parallel and correct. No change is needed."
  },

  // ── ADDITIONAL POOL (91–120) — mixed, for full-length tests ───────────────

  {
    id: 91,
    category: "Subject-Verb Agreement",
    passage: "A list of approved vendors (1)__are__ posted on the company website every quarter.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) are", "is", "were", "have been"],
    correct: 1,
    explanation: "The subject is 'list' (singular), not 'vendors.' The phrase 'of approved vendors' is just a modifier, so the verb is 'is.'"
  },
  {
    id: 92,
    category: "Subject-Verb Agreement",
    passage: "Either the teachers or the principal (1)__are__ going to lead the assembly tomorrow.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) are", "is", "were", "have been"],
    correct: 1,
    explanation: "With 'either…or,' the verb agrees with the nearer subject. 'Principal' is singular, so 'is' is correct."
  },
  {
    id: 93,
    category: "Pronoun Agreement & Case",
    passage: "Neither of the brothers remembered to bring (1)__their__ permission slip on the day of the trip.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) their", "his", "its", "they're"],
    correct: 1,
    explanation: "'Neither' is singular, so it takes a singular pronoun. Since the brothers are male, 'his' is correct."
  },
  {
    id: 94,
    category: "Pronoun Agreement & Case",
    passage: "The coach gave detailed feedback to my teammate and (1)__I__ after the championship game.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) I", "me", "myself", "we"],
    correct: 1,
    explanation: "The pronoun is an object of the preposition 'to.' Remove 'my teammate and' to test: 'gave feedback to me.' Use 'me.'"
  },
  {
    id: 95,
    category: "Verb Tense & Consistency",
    passage: "By next June, she (1)__will work__ at the hospital for ten years.",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: ["(No change) will work", "will have worked", "worked", "has worked"],
    correct: 1,
    explanation: "An action completed by a point in the future uses the future perfect: 'will have worked.'"
  },
  {
    id: 96,
    category: "Verb Tense & Consistency",
    passage: "The volunteers planted trees all morning and then (1)__clean__ up the trash along the riverbank.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) clean", "cleaned", "cleans", "will clean"],
    correct: 1,
    explanation: "The sentence is in the past ('planted'). To stay consistent, the second verb must be past tense: 'cleaned.'"
  },
  {
    id: 97,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__The museum offers free admission on Sundays this attracts large crowds.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "The museum offers free admission on Sundays, this attracts large crowds.",
      "The museum offers free admission on Sundays, which attracts large crowds.",
      "The museum offers free admission on Sundays this, attracts large crowds."
    ],
    correct: 2,
    explanation: "The original is a run-on (fused sentence). Adding ', which' turns the second clause into a dependent clause and fixes it."
  },
  {
    id: 98,
    category: "Sentence Fragments & Run-Ons",
    passage: "He practiced for weeks. (1)__In order to perfect his audition piece.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "He practiced for weeks in order to perfect his audition piece.",
      "In order to perfecting his audition piece.",
      "In order, to perfect his audition piece."
    ],
    correct: 1,
    explanation: "'In order to perfect his audition piece' is a fragment. Attaching it to the previous sentence creates a complete thought."
  },
  {
    id: 99,
    category: "Parallel Structure",
    passage: "The internship taught her how to manage a budget, how to lead a team, and (1)__communicating with clients.__",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change)",
      "how to communicate with clients.",
      "she communicated with clients.",
      "client communication skills."
    ],
    correct: 1,
    explanation: "The series uses 'how to + verb': 'how to manage,' 'how to lead,' and 'how to communicate.' All must match."
  },
  {
    id: 100,
    category: "Misplaced & Dangling Modifiers",
    passage: "(1)__Covered in fresh snow, the children admired the mountains.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "Covered in fresh snow, the mountains were admired by the children.",
      "The children admired the mountains, covered in fresh snow.",
      "Covered in fresh snow the children, admired the mountains."
    ],
    correct: 2,
    explanation: "In the original, 'Covered in fresh snow' wrongly modifies 'the children.' Placing the phrase next to 'mountains' fixes the misplaced modifier."
  },
  {
    id: 101,
    category: "Comma Usage",
    passage: "When the meeting finally ended (1)__ everyone hurried to catch the last train home.",
    question: "Which punctuation belongs in the blank marked (1)?",
    choices: ["(No change) — no comma", ", (comma)", "; (semicolon)", ": (colon)"],
    correct: 1,
    explanation: "An introductory dependent clause ('When the meeting finally ended') is followed by a comma before the main clause."
  },
  {
    id: 102,
    category: "Comma Usage",
    passage: "My oldest friend (1)__Daniel__ is moving across the country next week.",
    question: "Which is the best punctuation for the underlined name marked (1)?",
    choices: ["(No change) Daniel", ", Daniel,", "; Daniel;", ": Daniel:"],
    correct: 0,
    explanation: "Because 'Daniel' specifies which friend (essential/restrictive appositive when you have many friends), no commas are needed. The name identifies the friend."
  },
  {
    id: 103,
    category: "Semicolons, Colons & Dashes",
    passage: "We visited three cities on our trip (1)__ Boston, Chicago, and Seattle.",
    question: "Which punctuation belongs in the blank marked (1)?",
    choices: [", (comma)", "; (semicolon)", ": (colon)", "— no punctuation"],
    correct: 2,
    explanation: "A complete clause ('We visited three cities on our trip') followed by a list takes a colon."
  },
  {
    id: 104,
    category: "Apostrophes & Possessives",
    passage: "Both (1)__witnesses'__ accounts matched, which strengthened the case.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) witnesses'", "witness's", "witnesses", "witnesses's"],
    correct: 0,
    explanation: "'Witnesses' is the plural; the accounts belong to both of them, so the plural possessive is 'witnesses'' (apostrophe after the s)."
  },
  {
    id: 105,
    category: "Capitalization",
    passage: "Next year I plan to take (1)__Spanish__ and a (2)__History__ course at the local college.",
    question: "Which words are correctly capitalized?",
    choices: [
      "Both are correct as written.",
      "'Spanish' is correct; 'History' should be lowercase 'history.'",
      "'Spanish' should be lowercase; 'History' is correct.",
      "Both should be lowercase."
    ],
    correct: 1,
    explanation: "Languages ('Spanish') are always capitalized. General subjects like 'history' are lowercase unless part of a specific course title (e.g., 'History 101')."
  },
  {
    id: 106,
    category: "Commonly Confused Words",
    passage: "The medication had a strong (1)__affect__ on his energy levels throughout the day.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) affect", "effect", "affects", "effects"],
    correct: 1,
    explanation: "As a noun meaning 'result/impact,' the correct word is 'effect': 'a strong effect.'"
  },
  {
    id: 107,
    category: "Commonly Confused Words",
    passage: "There were far (1)__less__ people at the second showing than at the first.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) less", "fewer", "lesser", "least"],
    correct: 1,
    explanation: "'People' can be counted, so use 'fewer,' not 'less.'"
  },
  {
    id: 108,
    category: "Transitions & Organization",
    passage: "The first design was over budget. (1)__Therefore,__ the team chose a simpler, more affordable plan.",
    question: "Which transition best fits the blank marked (1)?",
    choices: ["(No change) Therefore,", "Nevertheless,", "For example,", "Similarly,"],
    correct: 0,
    explanation: "The second sentence shows a result of the first (over budget → chose a cheaper plan). 'Therefore' signals cause and effect."
  },
  {
    id: 109,
    category: "Transitions & Organization",
    passage: "Paragraph: (1) Recycling conserves natural resources. (2) It also reduces the amount of waste sent to landfills. (3) The mayor enjoys playing golf on weekends. (4) For these reasons, many cities have expanded their recycling programs.",
    question: "Which sentence should be removed to improve the paragraph's unity?",
    choices: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
    correct: 2,
    explanation: "Sentence 3 about the mayor's golf hobby is unrelated to recycling and breaks the paragraph's unity."
  },
  {
    id: 110,
    category: "Word Choice, Clarity & Conciseness",
    passage: "Due to the fact that the bridge was closed, we (1)__had to take__ a longer route.",
    question: "Which revision makes the sentence more concise?",
    choices: [
      "(No change) Due to the fact that the bridge was closed",
      "Because the bridge was closed",
      "On account of the fact the bridge being closed",
      "In light of the fact that the bridge was in a closed state"
    ],
    correct: 1,
    explanation: "'Due to the fact that' is wordy. 'Because' says the same thing in one word."
  },
  {
    id: 111,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The committee will (1)__collaborate together__ on the final report.",
    question: "Which is the best revision of the underlined portion marked (1)?",
    choices: ["(No change) collaborate together", "collaborate", "collaborate jointly together", "all collaborate together as a group"],
    correct: 1,
    explanation: "'Collaborate' already means to work together, so 'together' is redundant. Just 'collaborate' is correct."
  },
  {
    id: 112,
    category: "Subject-Verb Agreement",
    passage: "The data from the experiments (1)__suggest__ a clear trend.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) suggest", "suggests", "is suggesting", "has suggested"],
    correct: 0,
    explanation: "In formal/scientific usage, 'data' is the plural of 'datum' and takes a plural verb: 'data suggest.' (HiSET follows formal convention here.)"
  },
  {
    id: 113,
    category: "Pronoun Agreement & Case",
    passage: "The scholarship will go to (1)__whomever__ writes the most compelling essay.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) whomever", "whoever", "whom", "who"],
    correct: 1,
    explanation: "The pronoun is the subject of 'writes,' so use the subject form 'whoever' (it works like 'he writes')."
  },
  {
    id: 114,
    category: "Verb Tense & Consistency",
    passage: "If she (1)__had trained__ harder last season, she might have made the varsity team.",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: ["(No change) had trained", "would have trained", "has trained", "trained"],
    correct: 0,
    explanation: "In a past conditional 'if' clause, use the past perfect: 'If she had trained harder...' (not 'would have' in the if-clause)."
  },
  {
    id: 115,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__The recipe calls for fresh basil, however, dried basil can work in a pinch.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "The recipe calls for fresh basil; however, dried basil can work in a pinch.",
      "The recipe calls for fresh basil however dried basil can work in a pinch.",
      "The recipe calls for fresh basil, however dried basil, can work in a pinch."
    ],
    correct: 1,
    explanation: "'However' joining two independent clauses needs a semicolon before it and a comma after it. The original is a comma splice."
  },
  {
    id: 116,
    category: "Comma Usage",
    passage: "The old (1)__wooden rocking__ chair creaked with every movement.",
    question: "Should there be a comma between 'wooden' and 'rocking'?",
    choices: [
      "Yes — they are coordinate adjectives needing a comma.",
      "No — 'wooden rocking chair' reads as a unit; the adjectives are not coordinate.",
      "Yes — all stacked adjectives require commas.",
      "No — adjectives never take commas."
    ],
    correct: 1,
    explanation: "Test: you wouldn't say 'rocking wooden chair' or 'wooden and rocking chair.' They aren't coordinate, so no comma is needed."
  },
  {
    id: 117,
    category: "Commonly Confused Words",
    passage: "Walking to school takes longer (1)__then__ riding the bus.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) then", "than", "thain", "thеn"],
    correct: 1,
    explanation: "'Than' is used for comparisons. 'Then' refers to time. Comparing two options requires 'than.'"
  },
  {
    id: 118,
    category: "Transitions & Organization",
    passage: "Sentences out of order: (A) Finally, frost the cooled cupcakes. (B) First, preheat the oven and line the pan. (C) Then bake for eighteen minutes. (D) Next, spoon the batter into the liners.",
    question: "What is the correct logical order?",
    choices: ["B, D, C, A", "B, C, D, A", "A, B, C, D", "D, B, C, A"],
    correct: 0,
    explanation: "Process order: preheat/line (B) → spoon batter (D) → bake (C) → frost (A). The sequence is B, D, C, A."
  },
  {
    id: 119,
    category: "Misplaced & Dangling Modifiers",
    passage: "She served sandwiches to the guests (1)__on paper plates.__",
    question: "Where should 'on paper plates' go for the clearest meaning (the sandwiches are on the plates)?",
    choices: [
      "(No change) ...to the guests on paper plates.",
      "She served sandwiches on paper plates to the guests.",
      "On paper plates she served to the guests sandwiches.",
      "She served to the guests sandwiches on paper plates."
    ],
    correct: 1,
    explanation: "As written, 'on paper plates' seems to modify 'guests.' Moving it next to 'sandwiches' makes the meaning clear."
  },
  {
    id: 120,
    category: "Word Choice, Clarity & Conciseness",
    passage: "At this point in time, the company is unable to (1)__make a decision regarding__ the merger.",
    question: "Which revision is clearest and most concise?",
    choices: [
      "(No change) At this point in time...make a decision regarding",
      "Currently, the company cannot decide on",
      "At the present moment in time, the company is not able to decide about",
      "Right now at this time, the company is unable to make a decision about"
    ],
    correct: 1,
    explanation: "'At this point in time' = 'currently,' and 'make a decision regarding' = 'decide on.' The concise version is clearest."
  },

  // ── EXAM D POOL (121–160) — passage-based, organization, style ─────────────

  // Organization & Structure
  {
    id: 121,
    category: "Transitions & Organization",
    passage: "The new community garden has brought residents together in unexpected ways. Neighbors who never spoke before now chat regularly while tending their plots. (1)__Therefore,__ the garden has also reduced the neighborhood's overall stress levels, according to a recent survey.",
    question: "Which transition BEST replaces (1)?",
    choices: ["(No change) Therefore,", "However,", "Furthermore,", "Despite this,"],
    correct: 2,
    explanation: "The second sentence adds an additional benefit (stress reduction) rather than showing a logical result or contrast. 'Furthermore' correctly signals that more related information is being added."
  },
  {
    id: 122,
    category: "Transitions & Organization",
    passage: "Paragraph: (1) Many employees now work from home full time. (2) Remote work has been shown to increase productivity for some workers. (3) Cats are popular household pets in many countries. (4) However, some employees struggle with the isolation of working alone.",
    question: "Which sentence should be removed to improve the paragraph's unity?",
    choices: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
    correct: 2,
    explanation: "Sentences 1, 2, and 4 all discuss remote work and its effects on employees. Sentence 3 about cats is completely unrelated to the paragraph's topic and disrupts its unity."
  },
  {
    id: 123,
    category: "Transitions & Organization",
    passage: "The monarch butterfly's annual migration is one of nature's most remarkable long-distance journeys. (1)__[TOPIC SENTENCE]__ Monarchs travel up to 3,000 miles each year from Canada to Mexico, navigating without a map.",
    question: "Which sentence BEST serves as the topic sentence for the paragraph above?",
    choices: [
      "Butterflies are beautiful insects found around the world.",
      "The monarch butterfly's annual migration is one of nature's most remarkable long-distance journeys.",
      "Many insects migrate during the fall and winter months.",
      "Scientists study animal behavior in laboratories and in the wild."
    ],
    correct: 1,
    explanation: "A strong topic sentence introduces the specific main idea. 'The monarch butterfly's annual migration is one of nature's most remarkable long-distance journeys' sets up the specific topic and direction — the passage develops exactly this idea."
  },
  {
    id: 124,
    category: "Transitions & Organization",
    passage: "The following sentences are out of order: (A) Finally, bake the bread for 30–35 minutes until golden brown. (B) Mix the flour, yeast, salt, and water until a smooth dough forms. (C) Let the dough rise in a warm place for one hour. (D) Preheat your oven to 375°F.",
    question: "What is the CORRECT sequence for these baking instructions?",
    choices: ["B, C, A, D", "D, B, C, A", "B, D, C, A", "A, D, B, C"],
    correct: 1,
    explanation: "The steps follow a logical baking process: preheat oven (D) → mix dough (B) → let dough rise (C) → bake (A). The correct sequence is D, B, C, A."
  },
  {
    id: 125,
    category: "Transitions & Organization",
    passage: "City parks provide essential benefits to urban residents. They offer spaces for exercise that improve physical and mental health. Parks also serve as gathering places that strengthen community bonds. Children develop social skills through unstructured outdoor play.",
    question: "Which sentence would make the BEST closing sentence for this paragraph?",
    choices: [
      "Some cities have fewer parks than others.",
      "Clearly, preserving and expanding urban parks is an investment in the health and well-being of all residents.",
      "Parks sometimes have problems with maintenance and litter.",
      "Children enjoy playing in parks every day."
    ],
    correct: 1,
    explanation: "A strong closing sentence reinforces the paragraph's main idea without introducing new content. Option B synthesizes all the benefits mentioned and ends with a clear takeaway."
  },
  {
    id: 126,
    category: "Transitions & Organization",
    passage: "She earned her degree despite working full time. (1)__[TRANSITION]__ she graduated with honors.",
    question: "Which transition BEST fills the blank to show the most accurate relationship?",
    choices: ["Therefore,", "Remarkably,", "However,", "In contrast,"],
    correct: 1,
    explanation: "'Remarkably' highlights that graduating with honors while working full time is impressive. 'Therefore' implies a direct logical result, which is too neutral for the emphasis this context calls for."
  },
  {
    id: 127,
    category: "Transitions & Organization",
    passage: "Paragraph: (1) Bees play a crucial role in pollinating food crops that humans depend on. (2) Without bees, many fruits, vegetables, and nuts could not be produced. (3) Beeswax has been used in cosmetics and candles for thousands of years. (4) Declining bee populations pose a serious threat to global food security.",
    question: "Which sentence should be REMOVED to best improve the paragraph's focus on food security?",
    choices: ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4"],
    correct: 2,
    explanation: "Sentences 1, 2, and 4 all relate to bees and the food supply. Sentence 3 about beeswax in cosmetics is off-topic and interrupts the paragraph's focus on food security."
  },
  {
    id: 128,
    category: "Transitions & Organization",
    passage: "Students who read for pleasure score significantly higher on standardized tests. They also develop stronger vocabulary and writing skills. Additionally, reading fiction has been shown to improve empathy by exposing readers to different perspectives.",
    question: "Which sentence would make the BEST topic sentence for this paragraph?",
    choices: [
      "Reading can be a fun activity for many students.",
      "Reading for pleasure provides students with measurable academic and social benefits.",
      "Many students do not have time to read for fun.",
      "Books are available in many formats today, including digital and audiobooks."
    ],
    correct: 1,
    explanation: "The paragraph lists specific academic and social benefits of pleasure reading. The topic sentence should introduce that main idea broadly before the details are given. Option B does this directly and specifically."
  },
  {
    id: 129,
    category: "Transitions & Organization",
    passage: "Research consistently shows that sleep deprivation impairs memory and focus. (1)__[TRANSITION]__, teenagers are especially vulnerable, as their brains are still developing and require more sleep than adults.",
    question: "Which transition BEST fills the blank?",
    choices: ["However", "Furthermore", "In contrast", "Instead"],
    correct: 1,
    explanation: "The second sentence adds more related information about who is most at risk, not a contrast. 'Furthermore' correctly signals that an additional point is being made."
  },
  {
    id: 130,
    category: "Transitions & Organization",
    passage: "The following sentences are out of order: (A) As a result, researchers urgently began developing new vaccines. (B) In 2019, a previously unknown virus emerged and began spreading rapidly. (C) By early 2020, the virus had reached dozens of countries across the globe. (D) Within two years, several highly effective vaccines were available worldwide.",
    question: "What is the most LOGICAL sequence for these sentences?",
    choices: ["B, C, A, D", "A, B, D, C", "C, B, A, D", "D, A, B, C"],
    correct: 0,
    explanation: "The events follow a chronological cause-and-effect chain: virus emerges (B) → spreads globally (C) → vaccine research begins (A) → vaccines become available (D). The correct order is B, C, A, D."
  },

  // Word Choice / Clarity / Conciseness
  {
    id: 131,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The committee was unable to come to an agreement (1)__due to the fact that there was a disagreement about the budget.__",
    question: "Which revision makes the underlined portion MOST concise?",
    choices: [
      "(No change) due to the fact that there was a disagreement",
      "because they disagreed about the budget.",
      "on account of the fact that they had a disagreement regarding",
      "seeing as how there existed a disagreement about"
    ],
    correct: 1,
    explanation: "'Because they disagreed about the budget' replaces the wordy 'due to the fact that there was a disagreement about the budget.' Never use 'due to the fact that' when 'because' will do."
  },
  {
    id: 132,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The CEO delivered (1)__a speech that was very long and contained many detailed points__ about the company's strategy.",
    question: "Which revision BEST replaces the underlined portion with precise, concise language?",
    choices: [
      "(No change)",
      "an extensive, detailed speech",
      "a speech that was long in length and quite detailed in nature",
      "a speech that went on for a long time and included numerous details"
    ],
    correct: 1,
    explanation: "'An extensive, detailed speech' replaces a wordy noun clause with two precise adjectives. Concise writing uses exact words instead of wordy descriptions."
  },
  {
    id: 133,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The (1)__end result__ of the negotiation was a compromise that satisfied both parties.",
    question: "Which change BEST corrects the underlined phrase?",
    choices: ["(No change) end result", "result", "final end result", "resulting end"],
    correct: 1,
    explanation: "'End result' is redundant because a 'result' is already the final outcome. Simply using 'result' eliminates the repetition."
  },
  {
    id: 134,
    category: "Word Choice, Clarity & Conciseness",
    passage: "She is (1)__a person who has a lot of experience working in__ the medical field.",
    question: "Which revision is MOST concise while preserving the meaning?",
    choices: [
      "(No change)",
      "an experienced professional in",
      "someone who is very experienced in working in",
      "a person with much experience in the field of"
    ],
    correct: 1,
    explanation: "'An experienced professional in' replaces 'a person who has a lot of experience working in' with a tight noun phrase. Eliminate wordy structures like 'a person who' by converting them to adjectives."
  },
  {
    id: 135,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The (1)__future plans__ of the organization include expanding to three new cities over the next decade.",
    question: "Which revision eliminates the redundancy in the underlined phrase?",
    choices: ["(No change) future plans", "plans", "future outlooks and plans", "upcoming future plans"],
    correct: 1,
    explanation: "'Plans' are by definition about the future, so 'future plans' is redundant. Simply writing 'plans' eliminates the unnecessary word."
  },
  {
    id: 136,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The report was written (1)__in a clear and easy-to-understand manner__ so that all stakeholders could follow it.",
    question: "Which is the MOST concise revision of the underlined portion?",
    choices: [
      "(No change) in a clear and easy-to-understand manner",
      "clearly",
      "with a manner of clarity that was easy to understand",
      "in a very clear way that was easy for people to follow"
    ],
    correct: 1,
    explanation: "The single adverb 'clearly' replaces the entire phrase 'in a clear and easy-to-understand manner.' When one word can replace many, use it."
  },
  {
    id: 137,
    category: "Word Choice, Clarity & Conciseness",
    passage: "We should (1)__collaborate together__ on this project to ensure the best possible outcome for everyone involved.",
    question: "Which revision BEST corrects the underlined phrase?",
    choices: [
      "(No change) collaborate together",
      "collaborate",
      "work together in collaboration",
      "jointly collaborate with one another"
    ],
    correct: 1,
    explanation: "'Collaborate' already means 'to work together,' making 'together' redundant. Simply using 'collaborate' eliminates the repetition."
  },
  {
    id: 138,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The reason the project was delayed was (1)__due to the fact that__ the funding was not approved on time.",
    question: "Which is the MOST concise revision of the underlined portion?",
    choices: [
      "(No change) due to the fact that",
      "because",
      "on account of the fact that",
      "as a result of the fact that"
    ],
    correct: 1,
    explanation: "'Because' is the most concise causal connector. Note also that 'The reason...was because' is redundant — the full concise version would be 'The project was delayed because the funding was not approved on time.'"
  },
  {
    id: 139,
    category: "Word Choice, Clarity & Conciseness",
    passage: "She returned the book to the library (1)__that she had borrowed two weeks ago.__",
    question: "Which revision BEST clarifies that it was the book — not the library — that was borrowed?",
    choices: [
      "(No change)",
      "She returned the book that she had borrowed two weeks ago to the library.",
      "That she had borrowed two weeks ago, she returned the book to the library.",
      "She, having borrowed the book two weeks ago, returned it."
    ],
    correct: 1,
    explanation: "As written, 'that she had borrowed two weeks ago' is placed next to 'library,' suggesting she borrowed the library. Moving the clause directly after 'book' makes it clear she borrowed the book."
  },
  {
    id: 140,
    category: "Word Choice, Clarity & Conciseness",
    passage: "The new employee was praised for (1)__her punctuality, her ability to communicate effectively, and how hard she worked.__",
    question: "Which revision BEST corrects the parallel structure?",
    choices: [
      "(No change)",
      "her punctuality, her effective communication, and her hard work.",
      "being punctual, her effective communication, and working hard.",
      "punctuality, communicating effectively, and her hard work."
    ],
    correct: 1,
    explanation: "All three items should use the same grammatical form. 'Her punctuality, her effective communication, and her hard work' uses three parallel noun phrases. The original mixes noun phrases with a subordinate clause ('how hard she worked')."
  },

  // Passage-Based Grammar in Context
  {
    id: 141,
    category: "Subject-Verb Agreement",
    passage: "The number of complaints received by the customer service department (1)__have__ increased dramatically this quarter.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) have", "has", "were", "are"],
    correct: 1,
    explanation: "'The number of' takes a singular verb. The subject is 'number,' not 'complaints,' so the correct verb is 'has.' (Contrast: 'A number of complaints have been filed' — 'a number of' takes plural.)"
  },
  {
    id: 142,
    category: "Subject-Verb Agreement",
    passage: "Both the principal and the superintendent (1)__has__ agreed to attend the community forum next Thursday evening.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) has", "have", "having", "is"],
    correct: 1,
    explanation: "When two subjects are joined by 'both...and,' they form a compound plural subject requiring a plural verb: 'Both...have agreed.'"
  },
  {
    id: 143,
    category: "Verb Tense & Consistency",
    passage: "The explorer (1)__discovers__ the ancient ruins in 1922 and immediately notified the local authorities.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) discovers", "discovered", "was discovering", "has discovered"],
    correct: 1,
    explanation: "The sentence describes a completed historical event ('in 1922') and 'notified' is past tense. Parallel past tense requires 'discovered' for tense consistency."
  },
  {
    id: 144,
    category: "Verb Tense & Consistency",
    passage: "By the time the ambulance arrived, the bystanders (1)__administer__ first aid to the injured driver.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) administer", "had already administered", "have administered", "are administering"],
    correct: 1,
    explanation: "The past perfect 'had already administered' is required because this action was completed before another past action (the ambulance arriving). The phrase 'By the time' signals this time sequence."
  },
  {
    id: 145,
    category: "Sentence Fragments & Run-Ons",
    passage: "(1)__The scientist published her research, the findings were groundbreaking.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "The scientist published her research; the findings were groundbreaking.",
      "The scientist published her research, and the findings were groundbreaking,",
      "The scientist published her groundbreaking research findings."
    ],
    correct: 1,
    explanation: "The original is a comma splice — two independent clauses joined only by a comma. A semicolon correctly joins two closely related independent clauses without a conjunction."
  },
  {
    id: 146,
    category: "Sentence Fragments & Run-Ons",
    passage: "The library will close for renovations in August. (1)__Which means students will need to find alternative study spaces.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "This means students will need to find alternative study spaces.",
      "Which meaning students will need to find alternative study spaces.",
      "Students needing to find alternative study spaces."
    ],
    correct: 1,
    explanation: "'Which means...' is a dependent clause fragment that cannot stand alone. Changing 'Which' to 'This' creates an independent clause with a clear subject."
  },
  {
    id: 147,
    category: "Parallel Structure",
    passage: "The new employee is responsible for answering phone calls, (1)__to manage__ client accounts, and filing documents.",
    question: "Which is the best version of the underlined portion marked (1)?",
    choices: [
      "(No change) to manage",
      "managing",
      "management of",
      "the managing of"
    ],
    correct: 1,
    explanation: "The list uses gerunds: 'answering,' '___,' 'filing.' To maintain parallel structure, the middle item must also be a gerund: 'managing.'"
  },
  {
    id: 148,
    category: "Parallel Structure",
    passage: "The fitness instructor encouraged her class to stretch carefully, (1)__hydrating frequently,__ and to cool down slowly after each session.",
    question: "Which revision maintains CORRECT parallel structure with the other items?",
    choices: [
      "(No change) hydrating frequently,",
      "to hydrate frequently,",
      "frequent hydration,",
      "having hydrated frequently,"
    ],
    correct: 1,
    explanation: "The series uses 'to + verb' infinitives: 'to stretch,' '___,' 'to cool down.' The middle item must use the same form: 'to hydrate frequently.' A gerund ('hydrating') breaks the parallel structure."
  },
  {
    id: 149,
    category: "Misplaced & Dangling Modifiers",
    passage: "(1)__Having finished her homework, the movie was finally turned on by Sara.__",
    question: "Which is the best revision of sentence (1)?",
    choices: [
      "(No change)",
      "Having finished her homework, Sara finally turned on the movie.",
      "The movie was turned on by Sara, having finished her homework.",
      "Sara, having finished her homework, the movie was finally turned on."
    ],
    correct: 1,
    explanation: "The participial phrase 'Having finished her homework' must modify the subject that directly follows it. 'The movie' cannot finish homework. Making Sara the subject fixes the dangling modifier."
  },
  {
    id: 150,
    category: "Misplaced & Dangling Modifiers",
    passage: "The professor handed back the exams to the students (1)__that were graded poorly.__",
    question: "Which revision BEST clarifies that it was the exams — not the students — that were graded poorly?",
    choices: [
      "(No change)",
      "The professor handed back the poorly graded exams to the students.",
      "The professor, grading them poorly, handed the exams back to students.",
      "To the students, the professor handed back the exams that were poorly graded."
    ],
    correct: 1,
    explanation: "As written, 'that were graded poorly' is next to 'students,' implying the students were graded. Moving the modifier to directly follow 'exams' clarifies the intended meaning."
  },
  {
    id: 151,
    category: "Comma Usage",
    passage: "After the storm passed (1)__ __ the residents began returning to assess the damage to their homes.",
    question: "What punctuation, if any, is needed at position (1)?",
    choices: [
      "A comma: 'After the storm passed, the residents began...'",
      "A semicolon: 'After the storm passed; the residents began...'",
      "No punctuation is needed.",
      "A colon: 'After the storm passed: the residents began...'"
    ],
    correct: 0,
    explanation: "When an introductory subordinate clause precedes the main clause, it must be followed by a comma. 'After the storm passed' is an introductory adverb clause — place a comma after it."
  },
  {
    id: 152,
    category: "Comma Usage",
    passage: "Marcus, (1)__who had studied medicine for twelve years,__ decided to open his own practice.",
    question: "Is the punctuation around the underlined clause correct?",
    choices: [
      "No — the clause should not be set off with commas.",
      "Yes — the commas correctly set off the nonessential relative clause.",
      "No — semicolons should be used instead of commas.",
      "No — only one comma is needed, after 'Marcus.'"
    ],
    correct: 1,
    explanation: "The clause 'who had studied medicine for twelve years' is nonessential — it adds information but is not needed to identify Marcus. Nonessential clauses are set off by commas on both sides."
  },
  {
    id: 153,
    category: "Apostrophes & Possessives",
    passage: "The (1)__mens'__ locker room was renovated last summer at a cost of $50,000.",
    question: "Which is the correct version of the underlined word marked (1)?",
    choices: ["(No change) mens'", "men's", "men's'", "mens"],
    correct: 1,
    explanation: "'Men' is already an irregular plural noun (not formed with -s), so the possessive adds 's directly: 'men's.' The same rule applies to 'women's,' 'children's,' 'people's.'"
  },
  {
    id: 154,
    category: "Apostrophes & Possessives",
    passage: "(1)__Its'__ been three weeks since the team submitted its proposal to the board.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) Its'", "It's", "Its", "It is'"],
    correct: 1,
    explanation: "'It's' = 'it is' or 'it has' (a contraction). 'Its' = possessive pronoun. The sentence means 'It has been three weeks,' so the contraction 'It's' is correct. 'Its'' does not exist."
  },
  {
    id: 155,
    category: "Semicolons/Colons/Dashes",
    passage: "She had always dreamed of visiting three specific countries (1)__,__ Italy, Japan, and Brazil.",
    question: "Which punctuation BEST replaces (1) to introduce the list correctly?",
    choices: ["(No change) ,", ":", ";", "—"],
    correct: 1,
    explanation: "A colon introduces a list or elaboration when it follows a complete independent clause ('She had always dreamed of visiting three specific countries' is complete). A comma alone is insufficient."
  },
  {
    id: 156,
    category: "Semicolons/Colons/Dashes",
    passage: "The keynote speaker made three main points (1)__:__ the importance of education, the value of hard work, and the need for community support.",
    question: "Is the colon used correctly at position (1)?",
    choices: [
      "No — a semicolon should be used instead.",
      "No — a comma should be used instead.",
      "Yes — a colon correctly introduces a list after a complete independent clause.",
      "No — no punctuation is needed before the list."
    ],
    correct: 2,
    explanation: "A colon can introduce a list when the preceding statement is a complete independent clause. 'The keynote speaker made three main points' is a complete clause, making the colon correct. No change needed."
  },
  {
    id: 157,
    category: "Subject-Verb Agreement",
    passage: "Neither the coaches nor the referee (1)__were__ aware of the rule change until after the game had ended.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) were", "was", "have been", "are"],
    correct: 1,
    explanation: "With 'neither...nor,' the verb agrees with the subject closest to it. 'Referee' is singular, so the verb must be singular: 'was.' (If 'coaches' were closer, 'were' would be correct.)"
  },
  {
    id: 158,
    category: "Pronoun Agreement & Case",
    passage: "The company announced that (1)__they__ would be relocating its headquarters to Austin, Texas, next spring.",
    question: "Which is the best version of the underlined word marked (1)?",
    choices: ["(No change) they", "it", "them", "those"],
    correct: 1,
    explanation: "A company is a singular entity and takes singular pronouns. The sentence already uses 'its' (singular) later, so the pronoun should be 'it' for consistency."
  },
  {
    id: 159,
    category: "Capitalization",
    passage: "We visited (1)__mount Rushmore__ on our cross-country trip and were amazed by its scale.",
    question: "Which is the best version of the underlined words marked (1)?",
    choices: ["(No change) mount Rushmore", "Mount Rushmore", "mount rushmore", "Mount rushmore"],
    correct: 1,
    explanation: "Proper nouns — names of specific places and landmarks — must be fully capitalized. 'Mount Rushmore' is the official name of a specific national monument; both words require capitalization."
  },
  {
    id: 160,
    category: "Commonly Confused Words",
    passage: "The therapist (1)__assured__ her clients that all sessions were completely confidential and that no information would be shared.",
    question: "Is the underlined word marked (1) correct?",
    choices: [
      "No — it should be 'ensured.'",
      "No — it should be 'insured.'",
      "Yes — 'assured' is correct because it means to reassure a person.",
      "No change needed — both 'assured' and 'ensured' work here."
    ],
    correct: 2,
    explanation: "'Assure' means to promise or reassure a person. 'Ensure' means to make something certain. 'Insure' relates to insurance. Reassuring clients → 'assured' is the correct choice."
  },

  // ── EXAM E: PASSAGE-BASED QUESTIONS (161–200) ──────────────────────────

  // Passage 1: Letter to School Board About Library Funding (161–165)

  {
    id: 161,
    category: "grammar",
    passage: "Read the following passage from a letter to a school board about library funding.\n\n(1) Dear Members of the School Board, (2) I am writing to express my concern about the proposed cuts to our school library budget. (3) The library serve as a vital resource for students, teachers, and community members alike. (4) Without adequate funding, our children's access to books, technology, and research materials will be severely limited. (5) I urge you to reconsider this decision.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'serve' to 'serves'",
      "Change 'serve' to 'serving'",
      "Change 'serve' to 'served'"
    ],
    correct: 1,
    explanation: "The subject of sentence 3 is 'The library,' which is singular. A singular subject requires the singular verb 'serves,' not 'serve.'"
  },
  {
    id: 162,
    category: "punctuation",
    passage: "Read the following passage from a letter to a school board about library funding.\n\n(1) Our school library provides essential services, it offers tutoring programs, after-school study sessions, and access to online databases. (2) These programs have helped raise reading scores by 15 percent over the past three years. (3) Cutting the budget would put these gains at risk.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Our school library provides essential services; it offers tutoring programs, after-school study sessions, and access to online databases.",
      "Our school library provides essential services it offers tutoring programs, after-school study sessions, and access to online databases.",
      "Our school library provides essential services, and, it offers tutoring programs, after-school study sessions, and access to online databases."
    ],
    correct: 1,
    explanation: "The original is a comma splice — two independent clauses joined by only a comma. A semicolon correctly separates the two independent clauses."
  },
  {
    id: 163,
    category: "grammar",
    passage: "Read the following passage from a letter to a school board about library funding.\n\n(1) Each of the students who use the library regularly have shown improvement in their grades. (2) The data clearly supports continued investment in library resources. (3) We cannot afford to ignore this evidence.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'have' to 'has'",
      "Change 'have' to 'having'",
      "Change 'have' to 'had been'"
    ],
    correct: 1,
    explanation: "'Each' is the subject and is always singular. It requires the singular verb 'has,' not the plural 'have.' The phrase 'of the students who use the library regularly' is a modifying phrase that does not change the subject."
  },
  {
    id: 164,
    category: "punctuation",
    passage: "Read the following passage from a letter to a school board about library funding.\n\n(1) Furthermore the library employs three full-time staff members who provide individualized reading assistance to struggling students. (2) These staff members have specialized training in literacy education. (3) Their expertise is irreplaceable.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Add a comma after 'Furthermore'",
      "Add a semicolon after 'Furthermore'",
      "Change 'Furthermore' to 'Furthermore:'"
    ],
    correct: 1,
    explanation: "Introductory transitional words such as 'Furthermore' must be followed by a comma when they begin a sentence."
  },
  {
    id: 165,
    category: "grammar",
    passage: "Read the following passage from a letter to a school board about library funding.\n\n(1) Neither the principal nor the teachers was consulted before the budget cuts were announced. (2) This lack of communication has damaged trust between the administration and the staff. (3) Going forward, all stakeholders should be included in financial decisions.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'was' to 'were'",
      "Change 'was' to 'has been'",
      "Change 'was' to 'is'"
    ],
    correct: 1,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject. 'Teachers' is plural, so the verb should be 'were,' not 'was.'"
  },

  // Passage 2: Workplace Safety Memo (166–170)

  {
    id: 166,
    category: "sentence-structure",
    passage: "Read the following passage from a workplace safety memo.\n\n(1) All employees must wear protective equipment in the warehouse. (2) Including hard hats, safety goggles, and steel-toed boots. (3) Failure to comply with this policy may result in disciplinary action. (4) Supervisors are responsible for enforcing these requirements.",
    question: "Which is the best way to revise sentence 2?",
    choices: [
      "(No change)",
      "This equipment includes hard hats, safety goggles, and steel-toed boots.",
      "Hard hats, safety goggles, and steel-toed boots including.",
      "Include hard hats, safety goggles, and steel-toed boots."
    ],
    correct: 1,
    explanation: "Sentence 2 is a fragment — it begins with 'Including' and has no subject or main verb. Revising it to 'This equipment includes hard hats, safety goggles, and steel-toed boots' creates a complete sentence."
  },
  {
    id: 167,
    category: "word-choice",
    passage: "Read the following passage from a workplace safety memo.\n\n(1) Workers should be conscience of potential hazards at all times. (2) Spills must be cleaned up immediately to prevent slips and falls. (3) Any unsafe conditions should be reported to a supervisor without delay.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'conscience' to 'conscious'",
      "Change 'conscience' to 'conscientious'",
      "Change 'conscience' to 'consensus'"
    ],
    correct: 1,
    explanation: "'Conscious' means aware or alert. 'Conscience' is a noun referring to one's sense of right and wrong. The sentence calls for the adjective 'conscious,' meaning workers should be aware of hazards."
  },
  {
    id: 168,
    category: "sentence-structure",
    passage: "Read the following passage from a workplace safety memo.\n\n(1) The company has implemented new training procedures they are designed to reduce workplace injuries. (2) All new hires must complete the safety orientation within their first week. (3) Refresher courses are offered quarterly.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "The company has implemented new training procedures, they are designed to reduce workplace injuries.",
      "The company has implemented new training procedures that are designed to reduce workplace injuries.",
      "The company has implemented new training procedures, being designed to reduce workplace injuries."
    ],
    correct: 2,
    explanation: "The original is a run-on (fused sentence). Adding the relative pronoun 'that' creates a dependent clause and correctly connects the two ideas."
  },
  {
    id: 169,
    category: "word-choice",
    passage: "Read the following passage from a workplace safety memo.\n\n(1) In the passed year, our facility has recorded zero lost-time accidents. (2) This achievement reflects the dedication of every team member. (3) Let us continue to prioritize safety in everything we do.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'passed' to 'past'",
      "Change 'passed' to 'passing'",
      "Change 'passed' to 'pasted'"
    ],
    correct: 1,
    explanation: "'Past' is the correct word when referring to a previous period of time ('the past year'). 'Passed' is the past tense of the verb 'pass' (e.g., 'She passed the test')."
  },
  {
    id: 170,
    category: "sentence-structure",
    passage: "Read the following passage from a workplace safety memo.\n\n(1) Employees should report injuries promptly. (2) They should also document the incident in writing. (3) Completed forms need to be submitted to Human Resources.",
    question: "Which is the most effective way to combine sentences 1 and 2?",
    choices: [
      "Employees should report injuries promptly, and they should also document the incident in writing.",
      "Employees should report injuries promptly and document the incident in writing.",
      "Employees should report injuries promptly they should also document the incident in writing.",
      "Reporting injuries promptly, employees should also document the incident in writing."
    ],
    correct: 1,
    explanation: "Combining the sentences by using a compound predicate ('report...and document') eliminates the unnecessary repetition of the subject and creates a more concise sentence."
  },

  // Passage 3: Article — The Science of Sleep (171–175)

  {
    id: 171,
    category: "organization",
    passage: "Read the following passage from an article titled 'The Science of Sleep.'\n\nParagraph 1: (1) Sleep is essential for both physical and mental health. (2) During sleep, the body repairs tissues, consolidates memories, and regulates hormones. (3) Most adults need seven to nine hours of sleep per night.\n\nParagraph 2: (4) Caffeine blocks adenosine receptors in the brain, which delays the feeling of drowsiness. (5) Many factors can disrupt healthy sleep patterns. (6) Stress, irregular schedules, and excessive screen time before bed are among the most common causes of poor sleep.",
    question: "Which revision would improve the organization of Paragraph 2?",
    choices: [
      "(No change)",
      "Move sentence 5 to the beginning of Paragraph 2, before sentence 4",
      "Move sentence 4 to the end of Paragraph 2, after sentence 6",
      "Delete sentence 5"
    ],
    correct: 1,
    explanation: "Sentence 5 ('Many factors can disrupt healthy sleep patterns') is a topic sentence that should introduce the paragraph. Placing it before sentences 4 and 6 gives the paragraph a logical structure: general claim followed by specific examples."
  },
  {
    id: 172,
    category: "grammar",
    passage: "Read the following passage from an article titled 'The Science of Sleep.'\n\n(1) Research have shown that chronic sleep deprivation increases the risk of heart disease, diabetes, and obesity. (2) Even mild sleep loss can impair judgment and reaction time. (3) Drivers who sleep fewer than six hours are significantly more likely to be involved in accidents.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'have' to 'has'",
      "Change 'have' to 'had'",
      "Change 'have' to 'having'"
    ],
    correct: 1,
    explanation: "'Research' is an uncountable noun and takes a singular verb. The correct form is 'Research has shown,' not 'Research have shown.'"
  },
  {
    id: 173,
    category: "organization",
    passage: "Read the following passage from an article titled 'The Science of Sleep.'\n\n(1) Establishing a consistent bedtime routine can significantly improve sleep quality. (2) The average person spends about one-third of their life sleeping. (3) Experts recommend dimming lights, avoiding screens, and keeping the bedroom cool. (4) These habits signal to the brain that it is time to wind down.",
    question: "Which sentence disrupts the unity of this paragraph and should be removed?",
    choices: [
      "Sentence 1",
      "Sentence 2",
      "Sentence 3",
      "Sentence 4"
    ],
    correct: 1,
    explanation: "Sentences 1, 3, and 4 all discuss bedtime routines and how they improve sleep. Sentence 2 ('The average person spends about one-third of their life sleeping') is an unrelated fact that breaks the paragraph's focus."
  },
  {
    id: 174,
    category: "grammar",
    passage: "Read the following passage from an article titled 'The Science of Sleep.'\n\n(1) Neither blue light from screens nor caffeine consumption are the only factors that affect sleep. (2) Noise pollution, room temperature, and even diet play important roles. (3) Understanding all of these factors is the first step toward better rest.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'are' to 'is'",
      "Change 'are' to 'were'",
      "Change 'are' to 'has been'"
    ],
    correct: 1,
    explanation: "With 'neither...nor,' the verb agrees with the nearer subject. 'Caffeine consumption' is singular, so the verb should be 'is,' not 'are.'"
  },
  {
    id: 175,
    category: "grammar",
    passage: "Read the following passage from an article titled 'The Science of Sleep.'\n\n(1) A person who do not get enough sleep may experience difficulty concentrating, irritability, and weakened immunity. (2) Over time, these effects can become chronic. (3) Prioritizing sleep is one of the most important things a person can do for their health.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'do' to 'does'",
      "Change 'do' to 'did'",
      "Change 'do' to 'done'"
    ],
    correct: 1,
    explanation: "The relative pronoun 'who' refers to 'A person,' which is singular. The singular subject requires 'does not get,' not 'do not get.'"
  },

  // Passage 4: Personal Essay — My Mentor (176–180)

  {
    id: 176,
    category: "word-choice",
    passage: "Read the following passage from a personal essay titled 'My Mentor.'\n\n(1) When I first met Mrs. Torres, I was a shy freshman who was barely making it through high school. (2) She saw potential in me that I could not see in myself. (3) Her encouragement had a profound affect on my confidence and my grades.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'affect' to 'effect'",
      "Change 'affect' to 'affection'",
      "Change 'affect' to 'affecting'"
    ],
    correct: 1,
    explanation: "'Effect' is the correct noun meaning 'result' or 'impact.' 'Affect' is typically used as a verb meaning 'to influence.' The sentence needs the noun: 'a profound effect.'"
  },
  {
    id: 177,
    category: "sentence-structure",
    passage: "Read the following passage from a personal essay titled 'My Mentor.'\n\n(1) Mrs. Torres stayed after school to help me with algebra. (2) She also reviewed my English essays. (3) She wrote comments in the margins that pushed me to think more deeply.",
    question: "Which is the most effective way to combine sentences 2 and 3?",
    choices: [
      "She also reviewed my English essays, she wrote comments in the margins that pushed me to think more deeply.",
      "She also reviewed my English essays, writing comments in the margins that pushed me to think more deeply.",
      "She also reviewed my English essays and she wrote comments in the margins, that pushed me to think more deeply.",
      "Reviewing my English essays. She wrote comments in the margins that pushed me to think more deeply."
    ],
    correct: 1,
    explanation: "Using a participial phrase ('writing comments in the margins') smoothly combines the two sentences while showing that the actions are related. Option A creates a comma splice, and option D creates a fragment."
  },
  {
    id: 178,
    category: "word-choice",
    passage: "Read the following passage from a personal essay titled 'My Mentor.'\n\n(1) Mrs. Torres taught me that hard work and perseverance is more important then natural talent. (2) She often said that success comes from showing up every day, even when it is difficult. (3) Those words have stayed with me throughout my adult life.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'then' to 'than'",
      "Change 'then' to 'that'",
      "Change 'then' to 'when'"
    ],
    correct: 1,
    explanation: "'Than' is used for comparisons ('more important than'). 'Then' refers to time ('first this, then that'). The sentence is making a comparison, so 'than' is correct."
  },
  {
    id: 179,
    category: "sentence-structure",
    passage: "Read the following passage from a personal essay titled 'My Mentor.'\n\n(1) Struggling with self-doubt, my grades began to suffer during sophomore year. (2) Mrs. Torres noticed the change immediately. (3) She pulled me aside and asked what was wrong.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Struggling with self-doubt, I watched my grades begin to suffer during sophomore year.",
      "My grades, struggling with self-doubt, began to suffer during sophomore year.",
      "Self-doubt struggling, my grades began to suffer during sophomore year."
    ],
    correct: 1,
    explanation: "The original has a dangling modifier — 'Struggling with self-doubt' modifies 'my grades,' but grades cannot struggle with self-doubt. Changing the subject to 'I' fixes the problem."
  },
  {
    id: 180,
    category: "word-choice",
    passage: "Read the following passage from a personal essay titled 'My Mentor.'\n\n(1) Because of Mrs. Torres, I graduated with honors and went on to attend college. (2) I try to emulate her patients and dedication in my own career as a teacher. (3) She showed me that one person can truly make a difference.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'patients' to 'patience'",
      "Change 'patients' to 'patent'",
      "Change 'patients' to 'patiences'"
    ],
    correct: 1,
    explanation: "'Patience' is the quality of being patient or tolerant. 'Patients' are people receiving medical treatment. The sentence calls for the virtue 'patience,' not medical 'patients.'"
  },

  // Passage 5: How-To Guide — Container Gardening (181–185)

  {
    id: 181,
    category: "punctuation",
    passage: "Read the following passage from a how-to guide on container gardening.\n\n(1) Container gardening is a great option for people who lack yard space however it does require some planning. (2) Choosing the right container is the first step. (3) Make sure your container has drainage holes to prevent root rot.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Container gardening is a great option for people who lack yard space; however, it does require some planning.",
      "Container gardening is a great option for people who lack yard space, however it does require some planning.",
      "Container gardening is a great option for people who lack yard space however; it does require some planning."
    ],
    correct: 1,
    explanation: "'However' is a conjunctive adverb connecting two independent clauses. It requires a semicolon before it and a comma after it."
  },
  {
    id: 182,
    category: "capitalization",
    passage: "Read the following passage from a how-to guide on container gardening.\n\n(1) Some of the best plants for containers include Tomatoes, peppers, herbs, and lettuce. (2) These plants thrive in the warm months of Spring and Summer. (3) Be sure to place your containers where they will receive at least six hours of sunlight.",
    question: "Which corrections should be made to this passage?",
    choices: [
      "(No change)",
      "In sentence 1, change 'Tomatoes' to 'tomatoes'; in sentence 2, change 'Spring' to 'spring' and 'Summer' to 'summer'",
      "In sentence 1, capitalize 'peppers,' 'herbs,' and 'lettuce'; in sentence 2, change 'Spring' to 'spring'",
      "In sentence 2, change only 'Summer' to 'summer'"
    ],
    correct: 1,
    explanation: "Common plant names like 'tomatoes' are not capitalized. Seasons ('spring,' 'summer') are not capitalized unless they begin a sentence or are part of a proper name."
  },
  {
    id: 183,
    category: "punctuation",
    passage: "Read the following passage from a how-to guide on container gardening.\n\n(1) Water your plants regularly, the soil in containers dries out faster than ground soil. (2) Check the moisture level by inserting your finger about an inch into the soil. (3) If the soil feels dry, it is time to water.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Water your plants regularly because the soil in containers dries out faster than ground soil.",
      "Water your plants regularly the soil in containers dries out faster than ground soil.",
      "Water your plants regularly, and, the soil in containers dries out faster than ground soil."
    ],
    correct: 1,
    explanation: "The original is a comma splice — two independent clauses joined by only a comma. Adding 'because' makes the second clause dependent and shows the causal relationship between the ideas."
  },
  {
    id: 184,
    category: "capitalization",
    passage: "Read the following passage from a how-to guide on container gardening.\n\n(1) According to the National gardening Association, container gardening has increased by 46 percent in the last decade. (2) The trend is especially popular in Urban areas where outdoor space is limited. (3) Even a small Balcony can become a productive garden.",
    question: "Which corrections should be made to this passage?",
    choices: [
      "(No change)",
      "In sentence 1, capitalize 'gardening' in 'National gardening Association'; in sentence 2, lowercase 'Urban'; in sentence 3, lowercase 'Balcony'",
      "In sentence 1, capitalize 'gardening'; no other changes needed",
      "In sentence 2, capitalize 'areas'; in sentence 3, capitalize 'productive'"
    ],
    correct: 1,
    explanation: "'National Gardening Association' is a proper noun and all major words should be capitalized. 'Urban' and 'Balcony' are common nouns used in a general sense and should be lowercase."
  },
  {
    id: 185,
    category: "punctuation",
    passage: "Read the following passage from a how-to guide on container gardening.\n\n(1) To get started with container gardening you will need the following items: pots soil fertilizer and seeds or seedlings. (2) Most garden centers carry everything you need. (3) Staff members can help you choose the right supplies for your climate.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "To get started with container gardening, you will need the following items: pots, soil, fertilizer, and seeds or seedlings.",
      "To get started with container gardening you will need the following items, pots, soil, fertilizer, and seeds or seedlings.",
      "To get started with container gardening: you will need the following items pots, soil, fertilizer, and seeds or seedlings."
    ],
    correct: 1,
    explanation: "An introductory phrase needs a comma after it ('To get started with container gardening,'). Items in a series must be separated by commas. The colon after 'items' correctly introduces the list."
  },

  // Passage 6: Recommendation Letter for Student (186–190)

  {
    id: 186,
    category: "grammar",
    passage: "Read the following passage from a recommendation letter for a student.\n\n(1) I am pleased to recommend Maria Gonzalez for admission to your university. (2) Maria is one of the most dedicated students who has ever attended our school. (3) Her academic record speak for itself.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'speak' to 'speaks'",
      "Change 'speak' to 'speaking'",
      "Change 'speak' to 'spoken'"
    ],
    correct: 1,
    explanation: "The subject 'record' is singular and requires the singular verb 'speaks,' not the plural 'speak.'"
  },
  {
    id: 187,
    category: "word-choice",
    passage: "Read the following passage from a recommendation letter for a student.\n\n(1) Maria consistently demonstrates maturity and leadership that goes beyond her years. (2) She is the kind of student who's dedication inspires her classmates. (3) I have no doubt she will excel at your institution.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'who's' to 'whose'",
      "Change 'who's' to 'whom'",
      "Change 'who's' to 'who has'"
    ],
    correct: 1,
    explanation: "'Whose' is the possessive form of 'who,' showing that the dedication belongs to the student. 'Who's' is a contraction of 'who is' or 'who has,' which does not make sense here: 'who is dedication' is ungrammatical."
  },
  {
    id: 188,
    category: "grammar",
    passage: "Read the following passage from a recommendation letter for a student.\n\n(1) Maria's involvement in extracurricular activities, along with her academic achievements, make her an exceptional candidate. (2) She has served as president of the debate team and captain of the soccer team. (3) In both roles, she has shown remarkable organizational skills.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'make' to 'makes'",
      "Change 'make' to 'making'",
      "Change 'make' to 'made'"
    ],
    correct: 1,
    explanation: "The subject is 'involvement' (singular). The phrase 'along with her academic achievements' is a parenthetical addition and does not change the number of the subject. The verb should be singular: 'makes.'"
  },
  {
    id: 189,
    category: "word-choice",
    passage: "Read the following passage from a recommendation letter for a student.\n\n(1) Maria is not only intelligent but also remarkably compassionate. (2) She volunteers at a local shelter every Saturday, where she helps to council young people facing difficult circumstances. (3) Her empathy and kindness set her apart from her peers.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'council' to 'counsel'",
      "Change 'council' to 'consul'",
      "Change 'council' to 'console'"
    ],
    correct: 1,
    explanation: "'Counsel' means to advise or give guidance. 'Council' is a noun referring to a governing body or committee. The sentence describes advising young people, so 'counsel' is correct."
  },
  {
    id: 190,
    category: "grammar",
    passage: "Read the following passage from a recommendation letter for a student.\n\n(1) Among the many students I have taught over my twenty-year career, Maria stand out as truly exceptional. (2) I give her my highest recommendation without reservation. (3) Please do not hesitate to contact me if you need any further information.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'stand' to 'stands'",
      "Change 'stand' to 'standing'",
      "Change 'stand' to 'stood'"
    ],
    correct: 1,
    explanation: "The subject is 'Maria,' which is singular. A singular subject requires the singular verb 'stands,' not 'stand.'"
  },

  // Passage 7: Article — Space Exploration Benefits (191–195)

  {
    id: 191,
    category: "organization",
    passage: "Read the following passage from an article titled 'Space Exploration Benefits.'\n\nParagraph 1: (1) Space exploration has led to countless technological innovations that benefit everyday life. (2) Memory foam, water purification systems, and scratch-resistant lenses were all developed through NASA research. (3) These technologies were originally designed for use in space but have since found widespread commercial applications.\n\nParagraph 2: (4) The International Space Station orbits Earth approximately every 90 minutes. (5) Critics argue that space exploration is too expensive. (6) However, the economic return on investment in space research far exceeds its costs. (7) For every dollar spent on NASA, the U.S. economy receives an estimated ten to twelve dollars in return.",
    question: "Which sentence does NOT belong in Paragraph 2?",
    choices: [
      "Sentence 4",
      "Sentence 5",
      "Sentence 6",
      "Sentence 7"
    ],
    correct: 0,
    explanation: "Sentences 5, 6, and 7 all address the economic argument for and against space exploration. Sentence 4 ('The International Space Station orbits Earth approximately every 90 minutes') is an unrelated fact that disrupts the paragraph's focus on cost and economic return."
  },
  {
    id: 192,
    category: "sentence-structure",
    passage: "Read the following passage from an article titled 'Space Exploration Benefits.'\n\n(1) Space exploration inspires young people to pursue careers in science, technology, engineering, and mathematics. (2) It also fosters international cooperation. (3) It brings together scientists from dozens of countries to work toward common goals.",
    question: "Which is the most effective way to combine sentences 2 and 3?",
    choices: [
      "It also fosters international cooperation, it brings together scientists from dozens of countries to work toward common goals.",
      "It also fosters international cooperation by bringing together scientists from dozens of countries to work toward common goals.",
      "It also fosters international cooperation, and, it brings together scientists from dozens of countries to work toward common goals.",
      "Fostering international cooperation. It brings together scientists from dozens of countries to work toward common goals."
    ],
    correct: 1,
    explanation: "Using 'by bringing together' shows how space exploration fosters cooperation and smoothly combines the two sentences. Option A is a comma splice, and option D creates a fragment."
  },
  {
    id: 193,
    category: "sentence-structure",
    passage: "Read the following passage from an article titled 'Space Exploration Benefits.'\n\n(1) Launched in 1990, the Hubble Space Telescope has provided stunning images of distant galaxies and has deepened our understanding of the universe. (2) Without the telescope, scientists would not have confirmed the existence of dark energy. (3) This discovery was very important and it changed how scientists think and it reshaped the entire field of astrophysics.",
    question: "Which is the best way to revise sentence 3?",
    choices: [
      "(No change)",
      "This discovery was very important, it changed how scientists think, it reshaped the entire field of astrophysics.",
      "This groundbreaking discovery reshaped the entire field of astrophysics.",
      "This discovery being very important changed how scientists think and reshaped the entire field."
    ],
    correct: 2,
    explanation: "The original sentence is wordy and uses excessive coordination ('and it...and it'). The revision eliminates redundancy by combining the ideas into one concise statement."
  },
  {
    id: 194,
    category: "organization",
    passage: "Read the following passage from an article titled 'Space Exploration Benefits.'\n\nThe following sentences are intended to form a paragraph about future space exploration:\n(A) These missions could reveal whether life exists elsewhere in our solar system.\n(B) The future of space exploration is filled with exciting possibilities.\n(C) NASA and private companies are planning missions to Mars and the moons of Jupiter.\n(D) Such discoveries would fundamentally change our understanding of life in the universe.",
    question: "What is the correct order for these sentences?",
    choices: [
      "A, B, C, D",
      "B, C, A, D",
      "C, A, D, B",
      "D, A, B, C"
    ],
    correct: 1,
    explanation: "The paragraph should begin with the topic sentence (B), followed by specific plans (C), what those missions could reveal (A), and the broader significance (D). This creates a logical progression from general to specific to conclusion."
  },
  {
    id: 195,
    category: "sentence-structure",
    passage: "Read the following passage from an article titled 'Space Exploration Benefits.'\n\n(1) Satellites developed for space programs now help us predict weather patterns, navigate highways, and communication across the globe. (2) These practical applications demonstrate that investing in space exploration yields tangible benefits for society. (3) The technologies born from space research touch nearly every aspect of modern life.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'communication' to 'communicate'",
      "Change 'communication' to 'communicating'",
      "Change 'communication' to 'communicated'"
    ],
    correct: 1,
    explanation: "The items in the series must be in parallel form. 'Predict,' 'navigate,' and 'communicate' should all be base-form verbs to match the parallel structure after 'help us.'"
  },

  // Passage 8: Editorial — Public Libraries in the Digital Age (196–200)

  {
    id: 196,
    category: "spelling",
    passage: "Read the following passage from an editorial titled 'Public Libraries in the Digital Age.'\n\n(1) Public libraries continue to play an indispensible role in communities across the country. (2) They provide free access to books, computers, and educational programs. (3) For many families, the library is the only place where children can access the internet for schoolwork.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'indispensible' to 'indispensable'",
      "Change 'indispensible' to 'indispensible'",
      "Change 'indispensible' to 'indispenseable'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'indispensable.' The suffix is '-able,' not '-ible.' This is a commonly misspelled word."
  },
  {
    id: 197,
    category: "punctuation",
    passage: "Read the following passage from an editorial titled 'Public Libraries in the Digital Age.'\n\n(1) Some people argue that libraries are no longer necessary because information is available online. (2) This argument however overlooks several important facts. (3) Not everyone has reliable internet access at home, and many online sources are unreliable.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Add commas before and after 'however' — 'This argument, however, overlooks several important facts.'",
      "Add a semicolon before 'however' — 'This argument; however overlooks several important facts.'",
      "Change 'however' to 'although'"
    ],
    correct: 1,
    explanation: "When 'however' appears in the middle of a sentence as an interrupter, it must be set off by commas on both sides: 'This argument, however, overlooks several important facts.'"
  },
  {
    id: 198,
    category: "spelling",
    passage: "Read the following passage from an editorial titled 'Public Libraries in the Digital Age.'\n\n(1) Libraries have adapted to the digital age by offering e-books, online databases, and computer literacy classes. (2) These services are particulary important for older adults who may not be familiar with new technology. (3) Trained librarians help patrons navigate digital tools with confidence.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'particulary' to 'particularly'",
      "Change 'particulary' to 'particuly'",
      "Change 'particulary' to 'particularily'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'particularly.' The word contains the suffix '-arly' attached to 'particular,' forming 'particularly.'"
  },
  {
    id: 199,
    category: "punctuation",
    passage: "Read the following passage from an editorial titled 'Public Libraries in the Digital Age.'\n\n(1) Libraries serve as community gathering spaces, quiet study environments, and safe havens for people of all ages. (2) Childrens story hours, teen homework clubs, and adult book groups are just a few of the programs that bring people together. (3) Without libraries, many communities would lose a vital social institution.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'Childrens' to 'Children's'",
      "Change 'Childrens' to 'Childrens''",
      "Change 'Childrens' to 'Childs'"
    ],
    correct: 1,
    explanation: "'Children' is an irregular plural that does not end in 's.' To form the possessive, add an apostrophe and 's': 'Children's story hours.'"
  },
  {
    id: 200,
    category: "spelling",
    passage: "Read the following passage from an editorial titled 'Public Libraries in the Digital Age.'\n\n(1) In conclusion, public libraries remain essential institutions that deserve continued public support. (2) The arguement that libraries are obsolete ignores the many ways they have evolved to meet modern needs. (3) Our communities are stronger, more informed, and more connected because of our libraries.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'arguement' to 'argument'",
      "Change 'arguement' to 'arguemint'",
      "Change 'arguement' to 'arguiment'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'argument.' When adding the suffix '-ment' to 'argue,' the final 'e' is dropped: 'argue' becomes 'argument,' not 'arguement.'"
  },

  // ── EXAM F: PASSAGE-BASED QUESTIONS (201–240) ──────────────────────────

  // Passage 1: Letter to City Council About Park Improvements (201–205)

  {
    id: 201,
    category: "grammar",
    passage: "Read the following passage from a letter to the city council about park improvements.\n\n(1) Dear Council Members, (2) I am writing on behalf of the Riverside Neighborhood Association to request improvements to Greenfield Park. (3) The playground equipment, along with the walking paths, are in desperate need of repair. (4) Children and families who visit the park regularly deserves a safe and well-maintained space. (5) We hope the council will allocate funds for these much-needed upgrades.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'are' to 'is'",
      "Change 'are' to 'were'",
      "Change 'are' to 'being'"
    ],
    correct: 1,
    explanation: "The subject is 'The playground equipment,' which is singular. The phrase 'along with the walking paths' is a parenthetical addition and does not make the subject plural. The singular verb 'is' is required."
  },
  {
    id: 202,
    category: "punctuation",
    passage: "Read the following passage from a letter to the city council about park improvements.\n\n(1) Greenfield Park was once the pride of our neighborhood however it has fallen into disrepair over the past five years. (2) Broken benches, cracked pathways, and rusted swings pose safety hazards for visitors. (3) Several residents have reported injuries sustained at the park.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Greenfield Park was once the pride of our neighborhood; however, it has fallen into disrepair over the past five years.",
      "Greenfield Park was once the pride of our neighborhood, however it has fallen into disrepair over the past five years.",
      "Greenfield Park was once the pride of our neighborhood however, it has fallen into disrepair over the past five years."
    ],
    correct: 1,
    explanation: "The original sentence is a run-on. When a conjunctive adverb like 'however' connects two independent clauses, it must be preceded by a semicolon and followed by a comma: '; however,'"
  },
  {
    id: 203,
    category: "grammar",
    passage: "Read the following passage from a letter to the city council about park improvements.\n\n(1) Neither the maintenance crew nor the park director have responded to our requests for repairs. (2) We have submitted three formal complaints in the past year. (3) Each complaint has been acknowledged but no action has been taken.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'have' to 'has'",
      "Change 'have' to 'having'",
      "Change 'have' to 'had'"
    ],
    correct: 1,
    explanation: "With 'neither...nor,' the verb agrees with the subject closest to it. 'The park director' is singular, so the verb must be singular: 'has responded.'"
  },
  {
    id: 204,
    category: "organization",
    passage: "Read the following passage from a letter to the city council about park improvements.\n\n(1) In conclusion, Greenfield Park needs immediate attention from the city council. (2) The new community center on Oak Street opened last month. (3) Families rely on the park for recreation, exercise, and community gatherings. (4) Investing in park improvements would demonstrate the council's commitment to our neighborhood's well-being.",
    question: "Which sentence should be removed to improve the focus and coherence of this paragraph?",
    choices: [
      "Sentence 1",
      "Sentence 2",
      "Sentence 3",
      "Sentence 4"
    ],
    correct: 1,
    explanation: "Sentence 2 about the new community center on Oak Street is unrelated to the paragraph's focus on Greenfield Park improvements. Removing it improves the paragraph's coherence and focus."
  },
  {
    id: 205,
    category: "punctuation",
    passage: "Read the following passage from a letter to the city council about park improvements.\n\n(1) Our neighborhood association has identified three priority areas for improvement: the playground, the walking trail, and the parking lot. (2) The playground needs new equipment that meets current safety standards. (3) The walking trail requires resurfacing, and the parking lot needs better lighting.",
    question: "Which revision, if any, is needed in sentence 1?",
    choices: [
      "(No change)",
      "Replace the colon with a semicolon",
      "Replace the colon with a comma",
      "Remove the colon entirely"
    ],
    correct: 0,
    explanation: "The colon is used correctly in sentence 1. It follows a complete independent clause and introduces a list of items. No change is needed."
  },

  // Passage 2: Business Email: Product Launch Announcement (206–210)

  {
    id: 206,
    category: "word-choice",
    passage: "Read the following passage from a business email about a product launch.\n\n(1) Dear Team, (2) I am pleased to announce that our new software platform will be released on March 15. (3) This product will have a significant affect on our market position. (4) Please review the attached materials and prepare your departments for the launch.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'affect' to 'effect'",
      "Change 'affect' to 'effecting'",
      "Change 'affect' to 'affection'"
    ],
    correct: 1,
    explanation: "'Affect' is typically a verb meaning 'to influence,' while 'effect' is typically a noun meaning 'result' or 'impact.' In this sentence, a noun is needed after 'significant,' so 'effect' is the correct word."
  },
  {
    id: 207,
    category: "sentence-structure",
    passage: "Read the following passage from a business email about a product launch.\n\n(1) The development team has worked tirelessly. (2) They have tested every feature thoroughly. (3) The product is now ready for market release.",
    question: "Which is the most effective way to combine sentences 1 and 2?",
    choices: [
      "The development team has worked tirelessly, they have tested every feature thoroughly.",
      "The development team has worked tirelessly and tested every feature thoroughly.",
      "The development team has worked tirelessly; and they have tested every feature thoroughly.",
      "Working tirelessly, every feature has been tested thoroughly by the development team."
    ],
    correct: 1,
    explanation: "Option B combines the sentences concisely by using a compound predicate ('has worked...and tested'), eliminating the redundant subject. Option A creates a comma splice, option C misuses the semicolon, and option D contains a dangling modifier."
  },
  {
    id: 208,
    category: "word-choice",
    passage: "Read the following passage from a business email about a product launch.\n\n(1) We need to make sure that all regional managers are apprised of the launch timeline. (2) Its important that each team understands their role in the rollout. (3) A detailed schedule will be distributed by the end of this week.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'Its' to 'It's'",
      "Change 'Its' to 'Its'",
      "Change 'Its' to 'Is'"
    ],
    correct: 1,
    explanation: "'Its' is the possessive form of 'it,' but the sentence requires the contraction 'It's' (meaning 'It is'). 'It's important' is the correct form."
  },
  {
    id: 209,
    category: "sentence-structure",
    passage: "Read the following passage from a business email about a product launch.\n\n(1) Running behind schedule for several months, the launch date was pushed back by the management team. (2) We are now confident that the March 15 date is firm. (3) No further delays are anticipated.",
    question: "Which is the best revision of sentence 1?",
    choices: [
      "(No change)",
      "Because the project was running behind schedule for several months, the management team pushed back the launch date.",
      "Running behind schedule for several months, it was the launch date that management pushed back.",
      "The launch date, running behind schedule for several months, was pushed back by management."
    ],
    correct: 1,
    explanation: "The original sentence has a dangling modifier: 'Running behind schedule' should describe the project or team, not 'the launch date.' Option B correctly makes 'the management team' the subject of the main clause and clarifies the cause-and-effect relationship."
  },
  {
    id: 210,
    category: "sentence-structure",
    passage: "Read the following passage from a business email about a product launch.\n\n(1) Our marketing department will handle advertising, social media outreach, and to coordinate press events. (2) Sales teams should begin contacting key clients next week. (3) Please confirm your availability for the pre-launch meeting on March 10.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'to coordinate' to 'coordinating'",
      "Change 'advertising' to 'to advertise'",
      "Change 'social media outreach' to 'to reach out on social media'"
    ],
    correct: 1,
    explanation: "The items in the series must be in parallel form. 'Advertising' and 'social media outreach' are gerund/noun forms, so 'to coordinate' breaks the parallel structure. Changing it to 'coordinating' makes the series consistent: 'advertising, social media outreach, and coordinating press events.'"
  },

  // Passage 3: Article: Benefits of Community Volunteering (211–215)

  {
    id: 211,
    category: "organization",
    passage: "Read the following passage from an article about community volunteering.\n\n(1) Community volunteering offers numerous benefits to both individuals and society. (2) Volunteers gain valuable work experience, develop new skills, and build professional networks. (3) Studies show that people who volunteer regularly report higher levels of life satisfaction. (4) The first organized volunteer fire department was established in Philadelphia in 1736.\n\n(5) Furthermore, volunteering strengthens communities by addressing unmet needs.",
    question: "Which sentence disrupts the flow of the paragraph and should be removed?",
    choices: [
      "Sentence 2",
      "Sentence 3",
      "Sentence 4",
      "Sentence 5"
    ],
    correct: 2,
    explanation: "Sentence 4 introduces a historical fact about volunteer fire departments that is not relevant to the paragraph's focus on the personal and social benefits of community volunteering. Removing it improves the paragraph's coherence."
  },
  {
    id: 212,
    category: "spelling",
    passage: "Read the following passage from an article about community volunteering.\n\n(1) Volunteering provides an excelent opportunity for young people to explore potential career paths. (2) Many organizations offer structured volunteer programs that include mentorship and training. (3) These experiences can be invaluable when applying for jobs or college programs.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'excelent' to 'excellent'",
      "Change 'excelent' to 'exellent'",
      "Change 'excelent' to 'excellant'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'excellent' with a double 'l.' Common misspellings include 'excelent' (missing one 'l') and 'excellant' (wrong vowel at the end)."
  },
  {
    id: 213,
    category: "organization",
    passage: "Read the following passage from an article about community volunteering.\n\nParagraph 1: (1) Community volunteering has grown significantly in recent years. (2) According to the Bureau of Labor Statistics, approximately 63 million Americans volunteer each year.\n\nParagraph 2: (3) The benefits of volunteering extend beyond personal satisfaction. (4) Communities with high volunteer rates tend to have lower crime, better schools, and stronger local economies.\n\nParagraph 3: (5) Getting started as a volunteer is easier than most people think. (6) Local libraries, community centers, and religious organizations often maintain lists of volunteer opportunities.\n\nThe following sentence was removed from the passage: 'Despite these impressive numbers, many communities still face shortages in critical volunteer areas such as tutoring and elder care.'",
    question: "Where should this sentence be placed to improve the passage's organization?",
    choices: [
      "After sentence 1",
      "After sentence 2",
      "After sentence 4",
      "After sentence 6"
    ],
    correct: 1,
    explanation: "The sentence refers to 'these impressive numbers,' which connects directly to the statistics in sentence 2. Placing it after sentence 2 creates a logical transition from the growth of volunteering to the remaining need."
  },
  {
    id: 214,
    category: "spelling",
    passage: "Read the following passage from an article about community volunteering.\n\n(1) Volunteers should be accomodated with proper training and support to ensure their efforts are effective. (2) Organizations that invest in volunteer development see higher retention rates. (3) A well-trained volunteer is more likely to return and recruit others.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'accomodated' to 'accommodated'",
      "Change 'accomodated' to 'acomodated'",
      "Change 'accomodated' to 'accommadated'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'accommodated' with double 'c' and double 'm.' This is one of the most commonly misspelled words in English."
  },
  {
    id: 215,
    category: "organization",
    passage: "Read the following passage from an article about community volunteering.\n\n(1) In conclusion, community volunteering is a powerful force for positive change. __________ (2) Whether you have one hour a week or several days a month, your contribution matters. (3) The rewards of volunteering — personal growth, community connection, and a sense of purpose — far outweigh the time invested.",
    question: "Which sentence best fills the blank to provide an effective transition?",
    choices: [
      "Many famous people have been volunteers.",
      "It benefits individuals, strengthens communities, and addresses critical social needs.",
      "The history of volunteering dates back centuries.",
      "Some people prefer to donate money instead of time."
    ],
    correct: 1,
    explanation: "Option B provides the best transition by summarizing the article's main points (individual benefits, community strengthening, and addressing social needs) before the concluding call to action. The other options introduce irrelevant or off-topic ideas."
  },

  // Passage 4: Personal Narrative: Learning to Cook (216–220)

  {
    id: 216,
    category: "word-choice",
    passage: "Read the following passage from a personal narrative about learning to cook.\n\n(1) When I was growing up, my grandmother's kitchen was a place of warmth and wonder. (2) The aroma of freshly baked bread would of greeted me every Sunday morning. (3) Those early memories inspired my lifelong passion for cooking.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'would of' to 'would have'",
      "Change 'would of' to 'would've of'",
      "Change 'would of' to 'will of'"
    ],
    correct: 1,
    explanation: "'Would of' is a common error caused by mishearing the contraction 'would've' (would have). The correct form is 'would have greeted.' 'Of' is a preposition and cannot function as a helping verb."
  },
  {
    id: 217,
    category: "grammar",
    passage: "Read the following passage from a personal narrative about learning to cook.\n\n(1) My first attempt at cooking dinner for my family were a disaster. (2) I burned the rice, oversalted the soup, and forgot to preheat the oven. (3) Despite the chaos, my family ate every bite and encouraged me to try again.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'were' to 'was'",
      "Change 'were' to 'been'",
      "Change 'were' to 'are'"
    ],
    correct: 1,
    explanation: "The subject is 'My first attempt,' which is singular. A singular subject requires the singular verb 'was,' not the plural 'were.'"
  },
  {
    id: 218,
    category: "word-choice",
    passage: "Read the following passage from a personal narrative about learning to cook.\n\n(1) Over time, I learned that cooking requires both patience and creativity. (2) You have to be willing to experiment, to fail, and than to try again. (3) Each mistake taught me something valuable about flavors, textures, and timing.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'than' to 'then'",
      "Change 'than' to 'and than'",
      "Change 'than' to 'when'"
    ],
    correct: 1,
    explanation: "'Than' is used for comparisons ('better than'), while 'then' indicates time or sequence ('and then to try again'). In this sentence, the word indicates sequence, so 'then' is correct."
  },
  {
    id: 219,
    category: "grammar",
    passage: "Read the following passage from a personal narrative about learning to cook.\n\n(1) Today, cooking is one of my greatest joys. (2) My family and friends often asks me to prepare meals for special occasions. (3) Nothing makes me happier than seeing people enjoy food that I have prepared with love and care.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'asks' to 'ask'",
      "Change 'asks' to 'asking'",
      "Change 'asks' to 'has asked'"
    ],
    correct: 1,
    explanation: "The subject 'My family and friends' is a compound subject joined by 'and,' making it plural. A plural subject requires the plural verb 'ask,' not the singular 'asks.'"
  },
  {
    id: 220,
    category: "word-choice",
    passage: "Read the following passage from a personal narrative about learning to cook.\n\n(1) Learning to cook has effected every aspect of my life in positive ways. (2) I eat healthier, save money, and enjoy sharing meals with others. (3) I am grateful for those early lessons in my grandmother's kitchen.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'effected' to 'affected'",
      "Change 'effected' to 'affectioned'",
      "Change 'effected' to 'effective'"
    ],
    correct: 1,
    explanation: "'Affect' is typically a verb meaning 'to influence,' and 'effect' is typically a noun meaning 'result.' In this sentence, a verb is needed: cooking has influenced (affected) every aspect of life. 'Affected' is the correct choice."
  },

  // Passage 5: Report: Renewable Energy in Schools (221–225)

  {
    id: 221,
    category: "sentence-structure",
    passage: "Read the following passage from a report on renewable energy in schools.\n\n(1) Many schools across the country are adopting renewable energy solutions, the most popular option is solar panels. (2) Solar installations can reduce a school's electricity costs by up to 50 percent. (3) These savings can be redirected toward educational programs and facility improvements.",
    question: "Which is the best way to revise sentence 1?",
    choices: [
      "(No change)",
      "Many schools across the country are adopting renewable energy solutions; the most popular option is solar panels.",
      "Many schools across the country are adopting renewable energy solutions the most popular option is solar panels.",
      "Many schools across the country, are adopting renewable energy solutions, the most popular option is solar panels."
    ],
    correct: 1,
    explanation: "The original sentence is a comma splice — two independent clauses joined by only a comma. A semicolon correctly separates the two independent clauses while showing their close relationship."
  },
  {
    id: 222,
    category: "punctuation",
    passage: "Read the following passage from a report on renewable energy in schools.\n\n(1) Schools that have installed solar panels report significant benefits: lower energy costs, reduced carbon emissions, and increased environmental awareness among students. (2) In addition some districts have partnered with local utilities to sell excess energy back to the grid. (3) This arrangement creates a revenue stream that can fund other sustainability initiatives.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Add a comma after 'In addition'",
      "Add a semicolon after 'In addition'",
      "Remove 'In addition' entirely"
    ],
    correct: 1,
    explanation: "Introductory transitional phrases such as 'In addition' should be followed by a comma to set them off from the rest of the sentence. The correct punctuation is 'In addition, some districts...'"
  },
  {
    id: 223,
    category: "sentence-structure",
    passage: "Read the following passage from a report on renewable energy in schools.\n\n(1) The initial cost of solar installation is high. (2) The long-term savings make it a worthwhile investment. (3) Federal and state tax credits can offset much of the upfront expense.",
    question: "Which is the most effective way to combine sentences 1 and 2?",
    choices: [
      "The initial cost of solar installation is high, the long-term savings make it a worthwhile investment.",
      "Although the initial cost of solar installation is high, the long-term savings make it a worthwhile investment.",
      "The initial cost of solar installation is high and the long-term savings make it a worthwhile investment.",
      "The initial cost of solar installation, being high, the long-term savings make it a worthwhile investment."
    ],
    correct: 1,
    explanation: "Option B correctly uses the subordinating conjunction 'Although' to show the contrast between the high initial cost and the long-term savings. Option A is a comma splice, option C lacks proper punctuation, and option D creates a sentence fragment."
  },
  {
    id: 224,
    category: "punctuation",
    passage: "Read the following passage from a report on renewable energy in schools.\n\n(1) The school board president stated, \"Renewable energy is not just about saving money.\" (2) \"Its about teaching our students to be responsible stewards of the environment,\" she added. (3) Her comments were met with applause from parents and teachers in attendance.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'Its' to 'It's'",
      "Change 'Its' to 'Its'",
      "Change 'Its' to 'Is'"
    ],
    correct: 1,
    explanation: "'Its' is the possessive pronoun, but the sentence requires the contraction 'It's' (meaning 'It is'). 'It's about teaching our students' is the correct form."
  },
  {
    id: 225,
    category: "sentence-structure",
    passage: "Read the following passage from a report on renewable energy in schools.\n\n(1) Wind turbines are another renewable option being explored by schools, but they require more space and face more regulatory hurdles than solar panels. (2) Concerned about noise and visual impact, the proposals for wind turbines are often opposed by nearby residents. (3) Despite these challenges, several rural school districts have successfully implemented small-scale wind energy programs.",
    question: "Which is the best revision of sentence 2?",
    choices: [
      "(No change)",
      "Concerned about noise and visual impact, nearby residents often oppose proposals for wind turbines.",
      "The proposals for wind turbines, concerned about noise and visual impact, are often opposed.",
      "Nearby residents often oppose proposals for wind turbines, being concerned about noise and visual impact they are."
    ],
    correct: 1,
    explanation: "The original sentence has a misplaced modifier: 'Concerned about noise and visual impact' describes the residents, not the proposals. Option B correctly places 'nearby residents' as the subject after the modifying phrase."
  },

  // Passage 6: Cover Letter for Teaching Position (226–230)

  {
    id: 226,
    category: "grammar",
    passage: "Read the following passage from a cover letter for a teaching position.\n\n(1) Dear Hiring Committee, (2) I am writing to apply for the position of Fifth-Grade Teacher at Lincoln elementary school. (3) With five years of experience in urban education, I am confident that I would be a valuable addition to your team.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'elementary school' to 'Elementary School'",
      "Change 'Fifth-Grade' to 'fifth-grade'",
      "Change 'Lincoln' to 'lincoln'"
    ],
    correct: 1,
    explanation: "When a school's full official name is used, all words in the proper noun must be capitalized. 'Lincoln Elementary School' is the specific name of the institution and should be fully capitalized."
  },
  {
    id: 227,
    category: "capitalization",
    passage: "Read the following passage from a cover letter for a teaching position.\n\n(1) During my time at Westfield Academy, I developed a science curriculum that integrated hands-on experiments with Common Core standards. (2) My students consistently scored above the District average on standardized tests in Mathematics and English. (3) I believe these results demonstrate my ability to engage and challenge young learners.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'District' to 'district' and 'Mathematics' to 'mathematics' and 'English' to 'english'",
      "Change 'District' to 'district' and 'Mathematics' to 'mathematics'",
      "Change 'District' to 'District' and 'Mathematics' to 'Mathematics'"
    ],
    correct: 2,
    explanation: "General references to a district (not a specific named district) and general academic subjects like mathematics are not capitalized. However, 'English' is always capitalized because it derives from a proper noun. The correct version is 'district average on standardized tests in mathematics and English.'"
  },
  {
    id: 228,
    category: "word-choice",
    passage: "Read the following passage from a cover letter for a teaching position.\n\n(1) I am particularly drawn to Lincoln Elementary because of its commitment to inclusive education. (2) Your school's approach compliments my own teaching philosophy of reaching every learner. (3) I would welcome the opportunity to contribute to your school's mission.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'compliments' to 'complements'",
      "Change 'compliments' to 'compiles'",
      "Change 'compliments' to 'complicates'"
    ],
    correct: 1,
    explanation: "'Compliment' means to praise or flatter, while 'complement' means to complete or go well with. In this sentence, the school's approach goes well with (complements) the writer's teaching philosophy."
  },
  {
    id: 229,
    category: "grammar",
    passage: "Read the following passage from a cover letter for a teaching position.\n\n(1) In my current role, I collaborate with a team of teachers who is dedicated to continuous improvement. (2) Together, we analyze student data, develop intervention strategies, and share best practices. (3) This collaborative environment has made me a stronger and more reflective educator.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'is' to 'are'",
      "Change 'is' to 'was'",
      "Change 'is' to 'being'"
    ],
    correct: 1,
    explanation: "The relative pronoun 'who' refers to 'teachers,' which is plural. The verb in the relative clause must agree with its antecedent: 'teachers who are dedicated,' not 'teachers who is dedicated.'"
  },
  {
    id: 230,
    category: "word-choice",
    passage: "Read the following passage from a cover letter for a teaching position.\n\n(1) I have attached my resume, three professional references, and a portfolio of student work samples for your review. (2) I look forward to the opportunity to discuss how my experience and skills align with you're school's needs. (3) Thank you for your time and consideration.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'you're' to 'your'",
      "Change 'you're' to 'you are'",
      "Change 'you're' to 'yours'"
    ],
    correct: 1,
    explanation: "'You're' is a contraction of 'you are,' but this sentence requires the possessive pronoun 'your' to show ownership: 'your school's needs.' Homophones like your/you're are commonly tested on the HiSET."
  },

  // Passage 7: Article: The History of Podcasting (231–235)

  {
    id: 231,
    category: "organization",
    passage: "Read the following passage from an article about the history of podcasting.\n\nParagraph 1: (1) Podcasting has transformed from a niche hobby into a major media industry. (2) Today, there are over four million podcasts available worldwide.\n\nParagraph 2: (3) The term 'podcast' was coined in 2004, combining 'iPod' and 'broadcast.' (4) Early podcasts were typically amateur productions recorded on inexpensive equipment. (5) However, the medium quickly attracted professional journalists, comedians, and educators.\n\nParagraph 3: (6) The launch of Apple's podcast directory in 2005 made discovering and subscribing to shows much easier. (7) Smartphones further accelerated growth by putting podcast apps in everyone's pockets.",
    question: "Which of the following sentences would best serve as a topic sentence for Paragraph 3?",
    choices: [
      "Many people prefer podcasts to traditional radio.",
      "Several key technological developments helped podcasting reach a mass audience.",
      "Podcasting is a billion-dollar industry today.",
      "Some critics argue that there are too many podcasts."
    ],
    correct: 1,
    explanation: "Paragraph 3 discusses specific technological developments (Apple's podcast directory, smartphones) that helped podcasting grow. Option B best introduces this theme as a topic sentence. The other options introduce ideas not directly supported by the paragraph's content."
  },
  {
    id: 232,
    category: "sentence-structure",
    passage: "Read the following passage from an article about the history of podcasting.\n\n(1) Podcasting differs from traditional radio in several important ways. (2) Listeners can choose exactly what they want to hear. (3) They can listen at their own convenience. (4) Traditional radio requires listeners to tune in at a scheduled time.",
    question: "Which is the most effective way to combine sentences 2 and 3?",
    choices: [
      "Listeners can choose exactly what they want to hear, they can listen at their own convenience.",
      "Listeners can choose exactly what they want to hear and listen at their own convenience.",
      "Listeners can choose exactly what they want to hear; and they can listen at their own convenience.",
      "Choosing exactly what they want to hear, listeners can listen at their own convenience."
    ],
    correct: 1,
    explanation: "Option B effectively combines the sentences with a compound predicate ('can choose...and listen'), eliminating the redundant subject. Option A is a comma splice, option C misuses the semicolon with a conjunction, and option D is awkward and redundant."
  },
  {
    id: 233,
    category: "sentence-structure",
    passage: "Read the following passage from an article about the history of podcasting.\n\n(1) In recent years, podcasting has become an increasingly popular medium for storytelling. (2) Investigative journalism podcasts like Serial have attracted millions of listeners. (3) Captivating audiences worldwide. (4) The success of these shows has inspired a new generation of audio storytellers.",
    question: "Which is the best way to correct the error in sentence 3?",
    choices: [
      "(No change)",
      "Combine sentence 3 with sentence 2: 'Investigative journalism podcasts like Serial have attracted millions of listeners, captivating audiences worldwide.'",
      "Change sentence 3 to: 'They are captivating audiences worldwide.'",
      "Move sentence 3 before sentence 2."
    ],
    correct: 1,
    explanation: "Sentence 3 is a fragment — it lacks a subject and a main verb. Attaching it to sentence 2 as a participial phrase ('attracted millions of listeners, captivating audiences worldwide') corrects the fragment while maintaining the sentence's flow."
  },
  {
    id: 234,
    category: "organization",
    passage: "Read the following passage from an article about the history of podcasting.\n\n(1) The podcasting industry faces several challenges moving forward. (2) Content oversaturation makes it difficult for new creators to find an audience. (3) Monetization remains inconsistent, with only the most popular shows attracting significant advertising revenue. (4) __________ (5) Despite these obstacles, the industry continues to grow and innovate.",
    question: "Which sentence best fills the blank at position 4 to support the paragraph's main idea?",
    choices: [
      "Many podcast hosts also have YouTube channels.",
      "Additionally, the lack of industry-wide quality standards means listeners must sift through enormous amounts of content to find shows worth following.",
      "Podcasting was invented in the early 2000s.",
      "Some podcasters record in professional studios."
    ],
    correct: 1,
    explanation: "The paragraph discusses challenges facing the podcasting industry. Option B adds another relevant challenge (lack of quality standards) that supports the topic sentence and flows logically from the previous challenges mentioned. The other options are off-topic or do not address challenges."
  },
  {
    id: 235,
    category: "sentence-structure",
    passage: "Read the following passage from an article about the history of podcasting.\n\n(1) The future of podcasting looks bright. (2) New technologies such as smart speakers and connected cars are creating more opportunities for audio content consumption. (3) As artificial intelligence improves, personalized podcast recommendations will help listeners discover content tailored to they're interests.",
    question: "Which correction should be made to sentence 3?",
    choices: [
      "(No change)",
      "Change 'they're' to 'their'",
      "Change 'they're' to 'there'",
      "Change 'they're' to 'them'"
    ],
    correct: 1,
    explanation: "'They're' is a contraction of 'they are,' but the sentence needs the possessive pronoun 'their' to indicate ownership: 'their interests.' This is a common homophone error tested on the HiSET."
  },

  // Passage 8: Opinion Piece: School Start Times (236–240)

  {
    id: 236,
    category: "spelling",
    passage: "Read the following passage from an opinion piece about school start times.\n\n(1) Schools across the country should seriously consider changing their start times to no earlier than 8:30 a.m. (2) The American Academy of Pediatrics has reccommended later start times based on extensive research into adolescent sleep patterns. (3) Teenagers need between eight and ten hours of sleep per night for optimal health and academic performance.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'reccommended' to 'recommended'",
      "Change 'reccommended' to 'recomended'",
      "Change 'reccommended' to 'recommanded'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'recommended' — one 'c' and two 'm's. The common misspelling 'reccommended' has an extra 'c.'"
  },
  {
    id: 237,
    category: "punctuation",
    passage: "Read the following passage from an opinion piece about school start times.\n\n(1) When school starts at 7:00 a.m. students must wake up as early as 5:30 a.m. to catch the bus. (2) This schedule forces teenagers to operate on far less sleep than their bodies require. (3) Consequently, many students struggle to stay alert during morning classes.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Add a comma after 'a.m.'",
      "Add a semicolon after 'a.m.'",
      "Add a period after 'a.m.' and start a new sentence"
    ],
    correct: 1,
    explanation: "Sentence 1 begins with an introductory adverbial clause ('When school starts at 7:00 a.m.'). An introductory clause should be followed by a comma to separate it from the main clause."
  },
  {
    id: 238,
    category: "grammar",
    passage: "Read the following passage from an opinion piece about school start times.\n\n(1) Research from the University of Minnesota shows that schools that have shifted to later start times sees improved attendance, fewer tardies, and higher test scores. (2) These results are consistent across different regions and demographics. (3) The evidence strongly supports the case for later start times.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'sees' to 'see'",
      "Change 'sees' to 'seen'",
      "Change 'sees' to 'seeing'"
    ],
    correct: 1,
    explanation: "The subject of the verb 'sees' is 'schools,' which is plural. The clause 'that have shifted to later start times' modifies 'schools.' A plural subject requires the plural verb 'see,' not the singular 'sees.'"
  },
  {
    id: 239,
    category: "spelling",
    passage: "Read the following passage from an opinion piece about school start times.\n\n(1) Opponents of later start times argue that changing schedules would create logistical problems for bus routes and after-school activities. (2) While these concerns are understandable, they are not insurmountible. (3) Many districts have found creative solutions, such as staggering start times for elementary and secondary schools.",
    question: "Which correction should be made to sentence 2?",
    choices: [
      "(No change)",
      "Change 'insurmountible' to 'insurmountable'",
      "Change 'insurmountible' to 'insurmounteable'",
      "Change 'insurmountible' to 'unsurmountable'"
    ],
    correct: 1,
    explanation: "The correct spelling is 'insurmountable' with an 'a' before 'ble.' The suffix '-able' (not '-ible') is used here because the root word 'surmount' is a complete word that can stand on its own."
  },
  {
    id: 240,
    category: "grammar",
    passage: "Read the following passage from an opinion piece about school start times.\n\n(1) Every parent and teacher in our district want what is best for our students. (2) Adjusting school start times is a simple, evidence-based change that could improve student health and academic outcomes. (3) It is time for our school board to act on the science and adopt a later start time for all secondary schools.",
    question: "Which correction should be made to sentence 1?",
    choices: [
      "(No change)",
      "Change 'want' to 'wants'",
      "Change 'want' to 'wanting'",
      "Change 'want' to 'wanted'"
    ],
    correct: 1,
    explanation: "When singular subjects are joined by 'and' but preceded by 'every' or 'each,' the compound subject is treated as singular. 'Every parent and teacher' takes the singular verb 'wants,' not the plural 'want.'"
  }
];

// Essay Prompts
const ESSAY_PROMPTS = [
  {
    id: 1,
    title: "School Uniforms",
    passageA: {
      title: "The Case for School Uniforms",
      text: `School uniforms create a level playing field for all students. When everyone wears the same clothing, economic differences become less visible, reducing bullying based on brand names or fashion choices. Studies in several school districts have shown that after implementing uniforms, rates of discipline incidents dropped by as much as 28%. Uniforms also simplify morning routines—students and parents spend less time deciding what to wear, reducing morning stress. Furthermore, uniforms create a sense of belonging and school pride. Students who wear uniforms may feel more connected to their school community and take their academic responsibilities more seriously. Finally, schools with uniforms often report that visitors perceive the school as more professional and orderly, which can attract funding and community support.`
    },
    passageB: {
      title: "The Case Against School Uniforms",
      text: `Requiring school uniforms infringes on students' right to self-expression, which is a critical part of adolescent development. Fashion and clothing choices help young people explore their identities and communicate who they are. Suppressing this form of expression can have negative effects on creativity and individuality. The cost of school uniforms is also a burden for low-income families—while uniforms are promoted as money-savers, families must purchase the uniforms in addition to everyday clothing. Research on academic outcomes is mixed: a peer-reviewed study published in the Journal of Educational Research found no significant relationship between school uniforms and student achievement. Moreover, uniforms do not address the root causes of school violence or bullying—those issues require counseling, community programs, and cultural change, not a dress code.`
    },
    prompt: "In the passages above, two authors present arguments about whether schools should require students to wear uniforms. In your response, analyze both arguments and explain which position is better supported. Use relevant and specific evidence from the passages to support your response. Your response will be scored on how well you: analyze the arguments using evidence from the text, organize and develop your ideas, and use language conventions correctly."
  },
  {
    id: 2,
    title: "Social Media Age Limits",
    passageA: {
      title: "Social Media Is Harmful to Teens — Restrict It",
      text: `Social media platforms are designed to be addictive, and teenagers are especially vulnerable to their harmful effects. Research from the American Psychological Association links heavy social media use among teens to increased rates of anxiety, depression, and poor self-image—particularly among girls. Teens who spend more than three hours per day on social media are twice as likely to report mental health problems. Social media also exposes young people to cyberbullying, inappropriate content, and dangerous misinformation. Many tech executives have admitted they do not allow their own children to use the platforms they created. Given these documented harms, it is reasonable for governments to set minimum age requirements—such as 16—for social media use, just as we set age limits on alcohol, tobacco, and driving.`
    },
    passageB: {
      title: "Don't Restrict Social Media for Teens",
      text: `Social media restrictions targeting teenagers are well-intentioned but ultimately ineffective and counterproductive. Age limits are easily circumvented—teens can simply lie about their ages online—so restrictions would fail to keep young people off these platforms. More importantly, social media provides genuine benefits for teenagers: it helps them stay connected with friends and family, find communities of shared interest, organize civic action, and access educational content. Restricting social media access could isolate teens who depend on these platforms to connect with peers when in-person socializing is difficult. Rather than restricting access, the better solution is comprehensive digital literacy education that teaches young people to use social media responsibly. Empowering teens with knowledge is far more effective than prohibition.`
    },
    prompt: "The two passages above present opposing views on whether social media access should be restricted for teenagers. Analyze both arguments and determine which one is better supported by evidence and reasoning. Use specific evidence from both passages to support your analysis."
  },
  {
    id: 3,
    title: "Four-Day School Week",
    passageA: {
      title: "The Four-Day School Week Works",
      text: `Several rural school districts that have adopted a four-day school week report significant improvements in teacher recruitment and retention, student attendance, and overall morale. In districts where the change has been implemented, teacher turnover dropped by 20%, saving districts substantial training and recruitment costs. Students benefit from a three-day weekend, which allows more time for rest, family, and extracurricular activities. Importantly, academic performance in these districts has not suffered—in fact, several districts report modest improvements in standardized test scores, possibly because students are better rested and more motivated on school days. The four-day week also reduces operating costs, saving districts an average of $280,000 per year in transportation and utilities.`
    },
    passageB: {
      title: "The Four-Day School Week Hurts Students and Families",
      text: `While the four-day school week sounds appealing, its long-term effects on student learning are concerning. Most districts compress the same number of instructional hours into longer school days, leaving younger children exhausted and less able to absorb information by the end of the day. For working parents, a four-day school week creates a childcare crisis—many families cannot afford or find care for an extra day each week. Research from economists at Georgia State University found that, while test score effects were mixed in the short term, students from low-income families showed declines in academic performance compared to peers in five-day schools. For students who depend on school for meals, supervision, and a safe environment, removing a school day can have serious consequences that outweigh any cost savings.`
    },
    prompt: "The passages above present two perspectives on the four-day school week. Analyze both arguments and explain which is more effectively supported. Cite specific evidence from both passages in your response."
  },
  {
    id: 4,
    title: "Cell Phones in Class",
    passageA: {
      title: "Ban Cell Phones in the Classroom",
      text: `Allowing cell phones in classrooms undermines learning, and schools should ban them during instructional time. Numerous studies have found that the mere presence of a phone on a desk reduces students' ability to concentrate, even when the phone is turned off. One large study found that test scores rose by the equivalent of an extra week of schooling in classrooms where phones were prohibited, with the largest gains among struggling students. Phones are also a primary tool for cheating and a constant source of cyberbullying that can spill into the school day. Teachers report spending valuable class time policing devices instead of teaching. A clear, schoolwide ban removes the temptation, levels the playing field, and helps students develop the focus they will need in college and careers.`
    },
    passageB: {
      title: "Phones Are Learning Tools — Don't Ban Them",
      text: `A blanket ban on cell phones ignores their genuine educational value and the realities of modern life. Smartphones put a research library, a calculator, a translator, and countless learning apps in every student's pocket. Teachers who integrate phones into lessons—through polls, document scanning, or quick fact-checking—report higher engagement. Banning phones also raises safety concerns: in an emergency, parents and students want to be able to reach one another immediately. Moreover, confiscating phones treats students like children rather than teaching the self-regulation they need for adulthood. Instead of an outright ban, schools should teach responsible "digital citizenship" and set clear classroom norms, preparing students for a world where managing technology is an essential life skill.`
    },
    prompt: "The two passages present opposing views on whether schools should ban cell phones in the classroom. Analyze both arguments and explain which one is better supported by evidence and reasoning. Use specific evidence from both passages in your response."
  },
  {
    id: 5,
    title: "Year-Round School",
    passageA: {
      title: "Switch to Year-Round School",
      text: `The traditional nine-month calendar was designed for an agricultural era that no longer exists, and schools should switch to a year-round schedule. During the long summer break, students lose a significant amount of what they learned—a phenomenon researchers call the "summer slide." Studies estimate that students can lose up to two months of reading and math skills over the summer, and teachers must spend weeks each fall re-teaching old material. Year-round calendars, which spread shorter breaks throughout the year, reduce this loss and improve retention. The shorter, more frequent breaks also help prevent student and teacher burnout. For working families, a year-round schedule can provide more reliable, consistent childcare than the long summer gap.`
    },
    passageB: {
      title: "Keep the Traditional School Calendar",
      text: `Year-round schooling sounds promising, but the evidence does not justify abandoning the traditional calendar. Large reviews of research have found little to no lasting difference in academic achievement between year-round and traditional schools once other factors are accounted for. Meanwhile, the costs are real: running schools through the summer dramatically increases air-conditioning, transportation, and staffing expenses. Summer break also provides irreplaceable opportunities—internships, camps, family travel, and summer jobs that teach responsibility and independence. Many teachers use the extended break to pursue further education and recharge. Disrupting a calendar that families, employers, and communities have organized their lives around, for uncertain benefits, is not a wise trade.`
    },
    prompt: "The passages above present two perspectives on whether schools should adopt a year-round calendar. Analyze both arguments and determine which is more effectively supported. Cite specific evidence from both passages."
  },
  {
    id: 6,
    title: "Standardized Testing",
    passageA: {
      title: "Standardized Tests Are Necessary",
      text: `Standardized tests remain the fairest, most objective way to measure student learning, and they should continue to play a central role in education. Unlike classroom grades, which vary widely from teacher to teacher, standardized tests hold every student to the same measuring stick. This objectivity is essential for identifying achievement gaps: without comparable data, struggling schools and underserved students can be overlooked. Tests also provide accountability, giving parents and taxpayers evidence of whether schools are doing their job. Colleges and employers rely on this common metric to compare applicants from thousands of different schools fairly. Far from being obstacles, standardized tests are a vital tool for ensuring that no student's education is quietly neglected.`
    },
    passageB: {
      title: "Standardized Tests Do More Harm Than Good",
      text: `Standardized testing has come to dominate education in ways that harm the very students it claims to help. Because school funding and teacher evaluations are often tied to scores, classrooms increasingly "teach to the test," narrowing the curriculum and squeezing out art, music, and critical thinking. A single high-pressure exam cannot capture a student's creativity, persistence, or growth over time, yet these tests can determine graduation and college admission. Worse, the exams often reflect socioeconomic advantages—wealthier students can afford tutoring and test prep—so the scores frequently measure family income as much as ability. Relying so heavily on one narrow number gives a distorted picture of learning and pressures students in counterproductive ways.`
    },
    prompt: "The two passages present opposing views on the value of standardized testing. Analyze both arguments and explain which position is better supported. Use specific evidence from both passages in your response."
  },
  {
    id: 7,
    title: "Community Service Requirement",
    passageA: {
      title: "Require Community Service to Graduate",
      text: `High schools should require community service hours for graduation because the benefits to students and society are substantial. Service learning connects classroom lessons to the real world, helping students develop empathy, responsibility, and practical skills they cannot gain from textbooks alone. Research shows that students who participate in service are more likely to vote, volunteer, and stay civically engaged as adults. Required service also exposes young people to needs and perspectives outside their own communities, broadening their understanding of the world. For students applying to college or jobs, documented service experience strengthens their applications. By making service a graduation requirement, schools ensure that every student—not just those who already volunteer—gains these lasting benefits.`
    },
    passageB: {
      title: "Don't Make Community Service Mandatory",
      text: `Forcing students to complete community service undermines the very spirit of volunteering. Service that is required is no longer voluntary; it becomes just another box to check, and studies suggest that compelled service can actually reduce students' long-term interest in giving back. Mandatory hours also place an unfair burden on students who already juggle jobs, family responsibilities, or long commutes—often the very students with the least free time. Tracking and verifying hours creates significant administrative work for schools, diverting resources from instruction. Genuine generosity cannot be manufactured by a graduation rule. Schools would do better to offer rich, optional service opportunities and inspire students to choose them, rather than coercing participation.`
    },
    prompt: "The passages above present two perspectives on whether community service should be required for high school graduation. Analyze both arguments and explain which is more convincingly supported. Cite specific evidence from both passages."
  },
  {
    id: 8,
    title: "Screen Time for Children",
    passageA: {
      title: "Limiting Children's Screen Time Is Essential",
      text: `Research increasingly shows that excessive screen time harms children's development in measurable ways. The American Academy of Pediatrics recommends no more than one hour of screen time per day for children ages 2–5 and consistent limits for older children. Studies show that children who spend more than two hours daily on screens score lower on cognitive and language tests than those with limited screen time. Heavy device use is also linked to disrupted sleep — the blue light emitted by screens suppresses melatonin production, making it harder for children to fall and stay asleep. Sleep deprivation in turn impairs learning, memory, and emotional regulation. Additionally, time spent on screens replaces time that could be spent on physical activity, creative play, and face-to-face interaction — all critical for healthy development. Parents and educators must set firm boundaries on screen use to protect children's cognitive and social growth.`
    },
    passageB: {
      title: "Digital Engagement Prepares Children for the Modern World",
      text: `In an era when digital literacy is a core life skill, restricting children's screen time may do more harm than good. The question is not how much time children spend with technology but how they use it. High-quality educational apps, interactive coding platforms, and curated video content can accelerate learning in ways traditional methods cannot match. Research from Northwestern University found that children who used educational apps showed significant gains in early literacy and math skills. Moreover, digital communication tools help children who are shy or socially anxious build confidence in low-stakes environments. As automation and artificial intelligence reshape the workforce, children who grow up comfortable with technology will have a competitive advantage. Rather than imposing rigid limits, parents should focus on guiding children toward productive, creative digital activities.`
    },
    prompt: "The passages above present two perspectives on children's screen time. Analyze both arguments and explain which position is more convincingly supported by evidence and reasoning. Use specific evidence from both passages in your response."
  },
  {
    id: 9,
    title: "Universal Basic Income",
    passageA: {
      title: "Universal Basic Income Can Transform Society",
      text: `Universal Basic Income (UBI) — a program in which the government provides every citizen with a regular unconditional cash payment — has gained serious support from economists and policymakers as automation displaces workers across industries. A UBI would provide a financial safety net that allows workers to transition to new careers without fear of destitution. Pilot programs have produced promising results: in Stockton, California, residents who received $500 monthly showed improvements in employment, mental health, and financial stability compared to a control group. By decoupling survival from any single job, UBI also empowers people to start businesses, care for family members, or pursue education — activities that benefit society as a whole. Finland's two-year UBI experiment found participants reported better well-being and were more likely to seek employment than those on traditional welfare. A thoughtfully designed UBI could reduce poverty and inequality while preparing society for an automated future.`
    },
    passageB: {
      title: "Universal Basic Income Is Unaffordable and Counterproductive",
      text: `While the idea of Universal Basic Income is appealing in theory, its practical implementation would create serious economic problems. Providing a meaningful income to every adult in the United States — say, $1,000 per month — would cost approximately $3 trillion per year, more than the entire current federal budget. Funding this through taxes would require dramatic tax increases on businesses and individuals, potentially slowing economic growth and discouraging investment. Critics also warn that a guaranteed income could reduce the motivation to work, particularly in lower-wage sectors where employers already struggle to find workers. Furthermore, giving everyone the same payment regardless of need is an inefficient use of resources — targeted programs that support those in genuine poverty deliver more impact per dollar. The pilot programs cited by UBI advocates are too small and short-term to capture the economic ripple effects of a nationwide program. Before pursuing an untested policy of this magnitude, governments should invest in improving existing targeted safety nets.`
    },
    prompt: "The two passages present opposing perspectives on Universal Basic Income. Analyze both arguments and explain which position is better supported by evidence and reasoning. Cite specific evidence from both passages in your response."
  },
  {
    id: 10,
    title: "Remote Work vs. Office Work",
    passageA: {
      title: "Remote Work Is Better for Employees and Employers",
      text: `The widespread adoption of remote work during and after the pandemic revealed that many jobs can be performed just as effectively — or more so — outside a traditional office. A Stanford University study tracking 16,000 workers found that remote employees were 13% more productive than their office counterparts, largely because they experienced fewer interruptions and spent no time commuting. The average American commuter spends 55 minutes per day traveling to and from work; eliminating this commute gives workers nearly two weeks of time back each year. Remote workers also report significantly higher job satisfaction and lower stress levels. For employers, remote work reduces overhead costs: companies can operate with less office space, lowering real estate and utilities expenses by as much as 30%. Remote arrangements also allow companies to recruit talent from a much wider geographic pool rather than being limited to a single city. The evidence is clear that remote work benefits both productivity and employee well-being.`
    },
    passageB: {
      title: "In-Person Work Remains Essential for Collaboration and Culture",
      text: `While remote work offers genuine convenience, it comes with significant costs to collaboration, professional development, and company culture that are difficult to quantify but impossible to ignore. Spontaneous interactions — a hallway conversation, a whiteboard session, a shared lunch — generate creative ideas that rarely emerge from scheduled video calls. A Microsoft study of 60,000 employees found that remote work caused professional networks to become more siloed and insular, weakening cross-team collaboration. Young employees are disproportionately harmed: those early in their careers miss the informal mentorship and observation of experienced colleagues that office environments provide. Many workers also struggle with the isolation of remote work — surveys consistently show that loneliness and disconnection are among the top complaints of fully remote employees. Without the physical boundaries of an office, many workers find it harder to disconnect, leading to longer hours and eventual burnout. A strong, innovative company culture is hard to build and easy to erode when employees never meet in person.`
    },
    prompt: "The passages above present two perspectives on remote work versus in-person office work. Analyze both arguments and explain which position is more convincingly supported. Use specific evidence from both passages to support your analysis."
  },
  {
    id: 11,
    title: "Mandatory Community Recycling Programs",
    passageA: {
      title: "Mandatory Recycling Programs Protect Our Environment",
      text: `Communities that have adopted mandatory recycling programs have demonstrated measurable environmental benefits that voluntary programs simply cannot match. San Francisco's mandatory recycling and composting ordinance, enacted in 2009, helped the city divert 80 percent of its waste from landfills — one of the highest rates in the nation. When recycling is optional, participation rates typically hover around 30 to 40 percent because many residents lack the motivation to sort materials without a requirement. Mandatory programs solve this problem by creating consistent participation across all households. The environmental stakes are significant: the EPA estimates that recycling and composting prevented the release of approximately 186 million metric tons of carbon dioxide equivalent into the air in 2018 alone. Landfills are the third-largest source of methane emissions in the United States, and every ton of waste diverted through recycling reduces this harmful output. Communities that mandate recycling also create economic benefits — recycling industries employ over 680,000 workers nationwide and generate $37 billion in wages annually. A mandatory program ensures a steady supply of recyclable materials, which supports these jobs and keeps the recycling economy viable.`
    },
    passageB: {
      title: "Mandatory Recycling Programs Are Costly and Ineffective",
      text: `While recycling sounds environmentally responsible, mandatory recycling programs often create more problems than they solve and impose unnecessary burdens on residents and local governments. Many materials that consumers dutifully place in recycling bins — including most plastics, contaminated paper, and mixed materials — end up in landfills anyway because they are too costly or technically difficult to recycle. A 2019 investigation found that only 9 percent of all plastic ever produced has actually been recycled; the rest was burned or buried in landfills. Mandatory programs also impose significant costs on municipalities: collection and processing of recyclables can cost two to three times more than landfill disposal per ton. These costs are passed on to residents through higher taxes and utility fees. Furthermore, mandatory programs create enforcement challenges — cities must hire inspectors, issue fines, and manage appeals, adding bureaucratic overhead. Rather than mandating recycling, communities should focus on reducing waste at the source through packaging regulations and encouraging manufacturers to design products with end-of-life disposal in mind. Voluntary recycling programs with strong education campaigns can achieve meaningful participation without the coercive and costly aspects of mandates.`
    },
    prompt: "The passages above present two perspectives on mandatory community recycling programs. Analyze both arguments and explain which position is more convincingly supported by evidence and reasoning. Use specific evidence from both passages in your response."
  }
];
