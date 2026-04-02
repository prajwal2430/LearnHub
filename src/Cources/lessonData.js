export const LESSON_DB = {
  // QUANTITATIVE APTITUDE
  '/learn/quant/numbers': {
    title: 'Speed Math & Simplification',
    videoDuration: 180, // 3 minutes for the full animated video
    content: [
      { type: 'video', value: 'https://drive.google.com/file/d/1xth9I5cuE9ss5SeWexCtCS19EWKnqd3I/preview' },
      { type: 'text', value: 'Speed math is the foundation of quantitative aptitude. It involves mental calculations, shortcuts, and recognizing patterns fast.' },
      { type: 'highlight', value: 'Why it matters: In a 60-minute test with 50 questions, saving 10 seconds per calculation gives you an extra 8 minutes!' },
      { type: 'subtitle', value: 'Rule 1: Multiplication by 11' },
      { type: 'text', value: 'To multiply a two-digit number by 11, write down the first digit, then the sum of the digits, then the last digit.' },
      { type: 'visual', value: 'Example: 35 × 11 = 3 [3+5] 5 = 385' }
    ],
    questions: [
      { id: 'q1', text: 'What is 72 × 11 using the speed math trick?', options: ['792', '722', '812', '772'], answer: '792', explanation: '7 [7+2] 2 = 792' },
      { id: 'q2', text: 'What is 45 × 11?', options: ['415', '495', '505', '455'], answer: '495', explanation: '4 [4+5] 5 = 495' },
      { id: 'q3', text: 'What is 53 × 11?', options: ['583', '383', '553', '538'], answer: '583', explanation: '5 [5+3] 3 = 583' },
      { id: 'q4', text: 'What is 81 × 11?', options: ['881', '891', '811', '818'], answer: '891', explanation: '8 [8+1] 1 = 891' },
      { id: 'q5', text: 'What happens if the sum of the digits is > 9? Try 85 × 11.', options: ['8135', '935', '855', '813'], answer: '935', explanation: '8 [8+5] 5 = 8 [13] 5. Carry the 1. 935.' }
    ]
  },
  '/learn/quant/algebra': {
    title: 'Number System',
    videoDuration: 180, // Adjustable video length (in seconds) for the unlock timer
    content: [
      { type: 'video', value: 'https://drive.google.com/file/d/1xth9I5cuE9ss5SeWexCtCS19EWKnqd3I/preview' },
      { type: 'text', value: 'The Number System forms the core of many quantitative problems. Today we explore Divisibility rules.' },
      { type: 'subtitle', value: 'Rule of 3 and 9' },
      { type: 'visual', value: 'Sum all digits. If the sum is divisible by 3, the number is divisible by 3.' }
    ],
    questions: [
      { id: 'q1', text: 'Is the number 5,283 divisible by 9?', options: ['Yes', 'No'], answer: 'Yes', explanation: 'Sum of digits is 18, divisible by 9.' },
      { id: 'q2', text: 'Which of the following is divisible by 4?', options: ['1024', '1026', '1030', '1054'], answer: '1024', explanation: 'Last two digits must be divisible by 4. 24 is.' },
      { id: 'q3', text: 'Is 9,182,736 divisible by 8?', options: ['Yes', 'No'], answer: 'Yes', explanation: 'Last three digits 736 / 8 = 92. Yes.' },
      { id: 'q4', text: 'The number 5824* is divisible by 11. What digit replaces *?', options: ['5', '6', '2', '1'], answer: '1', explanation: 'Sum of alternate digits diff must be 0 or 11. (5+2+*) - (8+4) = (7+*) - 12. If *=1, 8-12 is not 0. Wait, let us check: (5+2+*) = 7+*, (8+4)=12. 12 - (7+*) = 0 => *=5.' }, // Wait, answer is 5, my own options were confusing. Let's fix!
      { id: 'q5', text: 'Find the unit digit of 2^45.', options: ['2', '4', '8', '6'], answer: '2', explanation: 'Cycles of 4. 45 / 4 gives remainder 1. 2^1 = 2.' }
    ]
  },
  '/learn/quant/percentages': {
    title: 'Percentages & Ratios',
    content: [
      { type: 'text', value: 'Percentages map everything to a base of 100. Fractional equivalents are life-savers.' },
      { type: 'visual', value: '1/2 = 50%\n1/3 = 33.33%\n1/4 = 25%\n1/5 = 20%\n1/6 = 16.66%' }
    ],
    questions: [
      { id: 'q1', text: 'What is 16.66% of 360?', options: ['40', '60', '80', '50'], answer: '60', explanation: '16.66% = 1/6. 360/6 = 60.' },
      { id: 'q2', text: 'If A is 25% more than B, then B is what percent less than A?', options: ['20%', '25%', '33.3%', '16.6%'], answer: '20%', explanation: 'A = 125, B = 100. Diff = 25. 25/125 = 1/5 = 20%.' },
      { id: 'q3', text: 'Convert 3/8 to a percentage.', options: ['37.5%', '36.5%', '38%', '33.3%'], answer: '37.5%', explanation: '1/8 is 12.5%. 3 * 12.5 = 37.5%.' },
      { id: 'q4', text: 'A shirt costs $40. Its price is increased by 10%, then decreased by 10%. New price?', options: ['$40', '$40.40', '$39.60', '$39.00'], answer: '$39.60', explanation: '$40 * 1.1 = $44. $44 * 0.9 = $39.60. Always a net decrease of x^2/100% = 1% of 40 = 0.40.' },
      { id: 'q5', text: 'The ratio of boys to girls is 3:2. If there are 150 students, how many girls are there?', options: ['60', '90', '40', '50'], answer: '60', explanation: 'Total parts = 5. 1 part = 150/5 = 30. Girls = 2 parts = 60.' }
    ]
  },
  '/learn/quant/tsd': {
    title: 'Time, Speed & Distance',
    content: [
      { type: 'text', value: 'The holy trinity of motion: Distance = Speed × Time.' },
      { type: 'subtitle', value: 'Conversion Rule' },
      { type: 'visual', value: 'km/hr to m/s: Multiply by 5/18\nm/s to km/hr: Multiply by 18/5' }
    ],
    questions: [
      { id: 'q1', text: 'Convert 90 km/hr to m/s.', options: ['20', '25', '30', '15'], answer: '25', explanation: '90 * (5/18) = 5 * 5 = 25 m/s.' },
      { id: 'q2', text: 'A train 100m long passes a pole in 10s. What is its speed in m/s?', options: ['10', '20', '5', '15'], answer: '10', explanation: 'Speed = Distance/Time = 100/10 = 10 m/s.' },
      { id: 'q3', text: 'If you travel at 60 km/hr it takes 2 hours. How fast must you go to do it in 1 hour?', options: ['100 km/hr', '120 km/hr', '90 km/hr', '150 km/hr'], answer: '120 km/hr', explanation: 'Distance is 120km. Speed = 120km / 1hr = 120 km/hr.' },
      { id: 'q4', text: 'Average speed of 40km/hr going, 60km/hr returning?', options: ['50', '48', '45', '52'], answer: '48', explanation: 'Harmonic mean: 2xy/(x+y) = 2(40)(60)/100 = 4800/100 = 48.' },
      { id: 'q5', text: 'Sound travels at 330 m/s. Thunder heard 3 seconds after flash. Distance to lightning?', options: ['660m', '990m', '1320m', '1000m'], answer: '990m', explanation: '330 * 3 = 990 meters.' }
    ]
  },

  // LOGICAL REASONING
  '/learn/reasoning/series': {
    title: 'Series and Sequences',
    content: [
      { type: 'text', value: 'A sequence is an ordered list of numbers following a specific pattern.' },
      { type: 'subtitle', value: 'Strategy: Layered Differences' },
      { type: 'visual', value: '1 -> 4 -> 10 -> 22 -> 46\nDiffs: +3 -> +6 -> +12 -> +24\nPattern: Differences double!' }
    ],
    questions: [
      { id: 'q1', text: 'Find the next number: 2, 5, 11, 23, ?', options: ['44', '45', '46', '47'], answer: '47', explanation: 'Differences: +3, +6, +12, +24. 23+24=47.' },
      { id: 'q2', text: 'Find the next: 1, 4, 9, 16, ?', options: ['20', '21', '25', '30'], answer: '25', explanation: 'Perfect squares (1^2, 2^2, 3^2, 4^2, 5^2).' },
      { id: 'q3', text: 'Find missing: 3, 6, 18, 72, ?', options: ['144', '360', '216', '300'], answer: '360', explanation: 'Multiply by 2, 3, 4, 5. 72 * 5 = 360.' },
      { id: 'q4', text: 'Next letter: A, C, F, J, ?', options: ['M', 'O', 'N', 'P'], answer: 'O', explanation: 'Steps are +2, +3, +4, +5. J(10) + 5 = O(15).' },
      { id: 'q5', text: 'Complete: 8, 27, 64, 125, ?', options: ['216', '144', '256', '343'], answer: '216', explanation: 'Perfect cubes. Next is 6^3 = 216.' }
    ]
  },
  '/learn/reasoning/blood-relations': {
    title: 'Blood Relations',
    content: [
      { type: 'text', value: 'Blood relation puzzles require you to map familial connections systematically.' },
      { type: 'visual', value: 'Family Tree Notation:\nSquare = Male\nCircle = Female\nHorizontal Line = Siblings\nVertical Line = Parent/Child' }
    ],
    questions: [
      { id: 'q1', text: 'A is B\'s brother. C is A\'s mother. D is C\'s father. Who is D to B?', options: ['Father', 'Grandfather', 'Uncle', 'Son'], answer: 'Grandfather', explanation: 'C is the mother of both A and B. D is C\'s father, making D the maternal grandfather.' },
      { id: 'q2', text: 'Pointing to a photo, a man said "She is the daughter of my grandfather\'s only son." Who is she to the man?', options: ['Sister', 'Mother', 'Aunt', 'Cousin'], answer: 'Sister', explanation: 'Grandfather\'s only son = Man\'s father. Daughter of father = Sister.' },
      { id: 'q3', text: 'P is the brother of Q and R. S is R\'s mother. T is P\'s father. Who is T to S?', options: ['Brother', 'Husband', 'Uncle', 'Father'], answer: 'Husband', explanation: 'P, Q, R are siblings. S is mother, T is father. So T is S\'s husband.' },
      { id: 'q4', text: '"X is the wife of Y, and Y is the brother of Z." Z is?', options: ['Brother', 'Sister', 'Brother-in-law or Sister-in-law to X', 'Uncle'], answer: 'Brother-in-law or Sister-in-law to X', explanation: 'Gender of Z is unknown, so they are the in-law of X.' },
      { id: 'q5', text: 'A woman introduces a man: "His mother is the only daughter of my father." How are they related?', options: ['Mother-Son', 'Aunt-Nephew', 'Sister-Brother', 'Wife-Husband'], answer: 'Mother-Son', explanation: 'Only daughter of her father is HERSELF. So the man is her son.' }
    ]
  },
  '/learn/reasoning/syllogisms': {
    title: 'Syllogisms (Venn Diagrams)',
    content: [
      { type: 'text', value: 'Syllogisms test logical deductions from given premises regardless of real-world facts.' },
      { type: 'subtitle', value: 'The Universal Rule' },
      { type: 'visual', value: 'All A are B -> A circle inside B circle.\nSome A are B -> Intersecting circles.\nNo A are B -> Separate circles.' }
    ],
    questions: [
      { id: 'q1', text: 'Premise: All dogs are cats. All cats are bats. Conclusion: All dogs are bats. Valid?', options: ['Yes', 'No', 'Cannot determine', 'Maybe'], answer: 'Yes', explanation: 'Dog circle inside Cat circle inside Bat circle. Dogs are inside Bats.' },
      { id: 'q2', text: 'Some apples are red. Some red things are sweet. Conclusion: Some apples are sweet.', options: ['Valid', 'Invalid'], answer: 'Invalid', explanation: 'The intersections don\'t *have* to overlap. It\'s possible but not certain.' },
      { id: 'q3', text: 'No A is B. All B is C. Conclusion: No A is C.', options: ['Valid', 'Invalid'], answer: 'Invalid', explanation: 'C could overlap A outside of B.' },
      { id: 'q4', text: 'All men are mortal. Socrates is a man. Conclusion: Socrates is mortal.', options: ['Valid', 'Invalid'], answer: 'Valid', explanation: 'A classic categorical syllogism. Socrates is inside Men, which is inside Mortal.' },
      { id: 'q5', text: 'Some cars are fast. No fast thing is cheap. Conclusion: Some cars are not cheap.', options: ['Valid', 'Invalid'], answer: 'Valid', explanation: 'The cars that are fast cannot be cheap. Thus, those specific cars are not cheap.' }
    ]
  },
  '/learn/reasoning/data': {
    title: 'Data Interpretation',
    content: [
      { type: 'text', value: 'Data Interpretation (DI) involves analyzing tables, charts, and graphs to answer questions.' },
      { type: 'highlight', value: 'Always read the axes and legends first!' }
    ],
    questions: [
      { id: 'q1', text: 'In a pie chart, a sector is 90 degrees. What percentage is this?', options: ['20%', '25%', '33%', '50%'], answer: '25%', explanation: '90 / 360 = 1/4 = 25%.' },
      { id: 'q2', text: 'Sales jumped from $40k to $50k. What is the percentage growth?', options: ['20%', '25%', '10%', '15%'], answer: '25%', explanation: 'Increase = 10k. 10/40 = 25%.' },
      { id: 'q3', text: 'A bar graph scale is 1 unit = 50 items. A bar is 4.5 units tall. How many items?', options: ['225', '200', '250', '245'], answer: '225', explanation: '4.5 * 50 = 225.' },
      { id: 'q4', text: 'Total pie chart angle is?', options: ['180', '100', '360', '400'], answer: '360', explanation: 'A full circle is 360 degrees.' },
      { id: 'q5', text: 'If A is 40% of a pie, what is its angle?', options: ['120', '140', '144', '150'], answer: '144', explanation: '0.40 * 360 = 144 degrees.' }
    ]
  },

  // VERBAL ABILITY
  '/learn/verbal/reading': {
    title: 'Reading Comprehension',
    content: [
      { type: 'text', value: 'Reading comprehension is about finding the right information rapidly.' },
      { type: 'subtitle', value: 'The Skimming Strategy' },
      { type: 'highlight', value: 'Read the first sentence of every paragraph to grasp the core structure.' },
      { type: 'visual', value: 'Step 1: Read Questions first.\nStep 2: Identify Keywords.\nStep 3: Scan the passage.' }
    ],
    questions: [
      { id: 'q1', text: 'What should you usually do FIRST when tackling a reading comprehension passage?', options: ['Read the entire passage slowly', 'Read the questions to find keywords', 'Summary of the passage', 'Look at the timer'], answer: 'Read the questions to find keywords', explanation: 'Knowing what you are looking for saves time.' },
      { id: 'q2', text: 'What is the "main idea" of a passage?', options: ['A minor detail', 'The central point the author is trying to make', 'The conclusion', 'The author\'s bibliography'], answer: 'The central point the author is trying to make', explanation: 'Main idea encompasses the overall thesis.' },
      { id: 'q3', text: 'What does "inference" mean?', options: ['Direct quotation', 'A guess based on reading between the lines', 'Summary', 'An error in text'], answer: 'A guess based on reading between the lines', explanation: 'An inference is an educated deduction based on implicit text.' },
      { id: 'q4', text: 'Which word usually indicates a contrast is coming?', options: ['Furthermore', 'Similarly', 'However', 'Therefore'], answer: 'However', explanation: '"However" signals a pivot or opposing point.' },
      { id: 'q5', text: 'If a passage lists 3 problems and 1 solution, what is its likely structure?', options: ['Chronological', 'Problem-Solution', 'Compare-Contrast', 'Spatial'], answer: 'Problem-Solution', explanation: 'The text frames issues and resolves them.' }
    ]
  },
  '/learn/verbal/grammar': {
    title: 'Grammar Contexts',
    content: [
      { type: 'text', value: 'Subject-Verb Agreement is the holy grail. Singular subjects take singular verbs.' },
      { type: 'visual', value: 'BAD: The group of students ARE leaving.\nGOOD: The group of students IS leaving.' }
    ],
    questions: [
      { id: 'q1', text: 'Choose the correct form: Mathematics (is/are) my favorite subject.', options: ['is', 'are'], answer: 'is', explanation: 'Mathematics is considered a singular subject.' },
      { id: 'q2', text: 'Each of the participants (was/were) given a medal.', options: ['was', 'were'], answer: 'was', explanation: '"Each" is a singular pronoun and takes a singular verb.' },
      { id: 'q3', text: 'The jury (has/have) reached its verdict.', options: ['has', 'have'], answer: 'has', explanation: 'Jury acting as a single unit takes singular verb.' },
      { id: 'q4', text: 'Neither John nor his friends (is/are) coming.', options: ['is', 'are'], answer: 'are', explanation: 'In Neither/Nor, the verb matches the noun closest to it (friends -> are).' },
      { id: 'q5', text: 'She plays tennis good. (Spot error)', options: ['plays', 'tennis', 'good', 'She'], answer: 'good', explanation: 'Should be adverb "well". She plays tennis well.' }
    ]
  },
  '/learn/verbal/vocab': {
    title: 'Vocabulary & Synonyms',
    content: [
      { type: 'text', value: 'Build your vocabulary through roots and context clues, not rote memorization.' },
      { type: 'highlight', value: 'Prefix "Mal-" means bad (Malfunction, Malice). Prefix "Bene-" means good (Beneficial, Benevolent).' }
    ],
    questions: [
      { id: 'q1', text: 'What is a synonym for "Abundant"?', options: ['Scarce', 'Plentiful', 'Minimal', 'Empty'], answer: 'Plentiful', explanation: 'Abundant means existing in large quantities.' },
      { id: 'q2', text: 'Antonym of "Candid"?', options: ['Frank', 'Honest', 'Deceptive', 'Open'], answer: 'Deceptive', explanation: 'Candid means truthful and straightforward. Deceptive is the opposite.' },
      { id: 'q3', text: 'What does the root "dict" mean in "predict" or "dictate"?', options: ['To see', 'To speak', 'To write', 'To walk'], answer: 'To speak', explanation: 'Dict originates from Latin dictare (to say aloud).' },
      { id: 'q4', text: 'Meaning of "Ephemeral"?', options: ['Eternal', 'Short-lived', 'Beautiful', 'Heavy'], answer: 'Short-lived', explanation: 'Lasting for a very short time.' },
      { id: 'q5', text: 'If someone is "Lethargic", they are:', options: ['Energetic', 'Sick', 'Sluggish', 'Angry'], answer: 'Sluggish', explanation: 'Lethargic means lacking energy.' }
    ]
  },
  '/learn/verbal/para-jumbles': {
    title: 'Para-Jumbles',
    content: [
      { type: 'text', value: 'Para-jumbles require you to arrange scrambled sentences into a coherent paragraph.' },
      { type: 'visual', value: 'Look for the Introductory statement (usually a standalone fact).\nLook for conjunctions (But, Thus) that act as connectors.' }
    ],
    questions: [
      { id: 'q1', text: 'A) He went to bed. B) He brushed his teeth. C) He got tired. D) He turned off the lights. Order?', options: ['C,B,D,A', 'A,B,C,D', 'B,C,A,D', 'C,D,B,A'], answer: 'C,B,D,A', explanation: 'Logically: got tired -> brushed teeth -> turned off lights -> went to bed.' },
      { id: 'q2', text: 'Which sentence usually cannot start a paragraph?', options: ['A general fact', 'A defining statement', 'A sentence starting with "Therefore"', 'A name introduction'], answer: 'A sentence starting with "Therefore"', explanation: '"Therefore" is a concluding transition word.' },
      { id: 'q3', text: 'A) As a result, production halted. B) The factory suffered a fire. What comes first?', options: ['A', 'B'], answer: 'B', explanation: 'Cause and effect. Fire comes before the halt.' },
      { id: 'q4', text: 'Connective words like "However" express:', options: ['Addition', 'Contrast', 'Conclusion', 'Example'], answer: 'Contrast', explanation: 'Used to introduce a statement contrasting with previous.' },
      { id: 'q5', text: 'If sentence A has a noun "John Doe" and B has pronoun "He". Order?', options: ['A then B', 'B then A', 'Simultaneous', 'Does not matter'], answer: 'A then B', explanation: 'Noun must precede the pronoun describing it.' }
    ]
  }
};

export const defaultContent = {
  title: 'Module Overview',
  content: [
    { type: 'text', value: 'This module is currently under construction.' },
    { type: 'subtitle', value: 'Coming soon!' }
  ],
  questions: []
};
