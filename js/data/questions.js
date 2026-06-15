// HiSET Language Arts – Writing: 120 multiple-choice practice questions
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
  }
];
