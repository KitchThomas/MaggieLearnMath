/**
 * Canadian Grade 5-6 Spelling Words
 * Aligned with Canadian curriculum standards
 */

const SpellingWords = {
  // English Words - Grade 5
  grade5English: {
    // Homophones (同音词)
    homophones: [
      { word: "their", definition: "belonging to them", example: "Their house is blue." },
      { word: "there", definition: "in that place", example: "Put it over there." },
      { word: "they're", definition: "they are", example: "They're going to school." },
      { word: "your", definition: "belonging to you", example: "Is this your book?" },
      { word: "you're", definition: "you are", example: "You're doing great!" },
      { word: "its", definition: "belonging to it", example: "The cat licked its paws." },
      { word: "it's", definition: "it is", example: "It's a sunny day." },
      { word: "to", definition: "toward", example: "Go to the store." },
      { word: "too", definition: "also or very", example: "Me too!" },
      { word: "two", definition: "number 2", example: "I have two apples." }
    ],

    // Multisyllabic words (多音节词)
    multisyllabic: [
      { word: "beautiful", definition: "very pretty", example: "The sunset was beautiful." },
      { word: "adventure", definition: "exciting experience", example: "We went on an adventure." },
      { word: "important", definition: "significant", example: "It's important to study." },
      { word: "different", definition: "not the same", example: "Everyone is different." },
      { word: "community", definition: "group of people", example: "Our community is friendly." },
      { word: "environment", definition: "nature around us", example: "Protect the environment." },
      { word: "celebration", definition: "happy event", example: "The birthday celebration was fun." },
      { word: "temperature", definition: "how hot or cold", example: "Check the temperature." },
      { word: "government", definition: "leadership", example: "The government makes laws." },
      { word: "unbelievable", definition: "hard to believe", example: "That's unbelievable!" }
    ],

    // Academic vocabulary (学术词汇)
    academic: [
      { word: "analyze", definition: "study carefully", example: "Analyze the data." },
      { word: "compare", definition: "find similarities", example: "Compare the two pictures." },
      { word: "contrast", definition: "find differences", example: "Contrast day and night." },
      { word: "evaluate", definition: "judge or assess", example: "Evaluate the results." },
      { word: " summarize", definition: "briefly tell", example: "Summarize the story." },
      { word: "conclude", definition: "finish or decide", example: "What can you conclude?" },
      { word: "evidence", definition: "proof", example: "Show your evidence." },
      { word: "opinion", definition: "personal belief", example: "What's your opinion?" },
      { word: "perspective", definition: "point of view", example: "From my perspective..." },
      { word: "solution", definition: "answer", example: "Find the solution." }
    ],

    // Science vocabulary (科学词汇)
    science: [
      { word: "experiment", definition: "scientific test", example: "Do the experiment carefully." },
      { word: "hypothesis", definition: "educated guess", example: "State your hypothesis." },
      { word: "observation", definition: "watching carefully", example: "Make an observation." },
      { word: "conclusion", definition: "final decision", example: "Write your conclusion." },
      { word: "variable", definition: "something that changes", example: "Identify the variable." },
      { word: "energy", definition: "power to do things", example: "Save energy at home." },
      { word: "ecosystem", definition: "living things environment", example: "Protect our ecosystem." },
      { word: "organism", definition: "living thing", example: "Every organism needs water." },
      { word: "adaptation", definition: "change to survive", example: "Polar bears have adaptations." },
      { word: "migration", definition: "moving from place to place", example: "Birds do migration." }
    ],

    // Prefixes and suffixes (前缀和后缀)
    prefixesSuffixes: [
      { word: "unhappy", definition: "not happy", example: "She looked unhappy." },
      { word: "disagree", definition: "not agree", example: "I disagree with you." },
      { word: "preview", definition: "see before", example: "Preview the movie." },
      { word: "rewrite", definition: "write again", example: "Rewrite your answer." },
      { word: "careful", definition: "with care", example: "Be careful!" },
      { word: "careless", definition: "without care", example: "Don't be careless." },
      { word: "teacher", definition: "person who teaches", example: "The teacher is kind." },
      { word: "actor", definition: "person who acts", example: "The actor was famous." },
      { word: "friendship", definition: "being friends", example: "Friendship is important." },
      { word: "darkness", definition: "being dark", example: "The darkness was scary." }
    ]
  },

  // English Words - Grade 6
  grade6English: {
    // Complex multisyllabic words
    multisyllabic: [
      { word: "extraordinary", definition: "very unusual", example: "That's extraordinary!" },
      { word: "responsibility", definition: "duty to do something", example: "It's your responsibility." },
      { word: "accommodation", definition: "place to stay", example: "Book accommodation." },
      { word: "characteristic", definition: "typical feature", example: "A characteristic of cats." },
      { word: "sophisticated", definition: "complex or advanced", example: "The design is sophisticated." },
      { word: "collaboration", definition: "working together", example: "Collaboration is key." },
      { word: "interpretation", definition: "explaining meaning", example: "What's your interpretation?" },
      { word: "discrimination", definition: "unfair treatment", example: "Fight discrimination." },
      { word: "appreciation", definition: "being thankful", example: "Show appreciation." },
      { word: "perseverance", definition: "not giving up", example: "Perseverance pays off." }
    ],

    // Greek and Latin roots (希腊和拉丁词根)
    roots: [
      { word: "inspect", definition: "look closely (spect)", example: "Inspect the car." },
      { word: "spectator", definition: "person who watches (spect)", example: "The spectator cheered." },
      { word: "transport", definition: "carry across (port)", example: "Transport goods." },
      { word: "portable", definition: "can be carried (port)", example: "A portable phone." },
      { word: "structure", definition: "building (struct)", example: "The structure is strong." },
      { word: "construct", definition: "to build (struct)", example: "Construct a tower." },
      { word: "autograph", definition: "signature (graph)", example: "Get his autograph." },
      { word: "photograph", definition: "picture (graph)", example: "Take a photograph." },
      { word: "biology", definition: "study of life (bio)", example: "Learn biology." },
      { word: "biography", definition: "life story (bio)", example: "Read her biography." }
    ],

    // Social studies vocabulary (社会研究词汇)
    socialStudies: [
      { word: "democracy", definition: "people's rule", example: "Canada is a democracy." },
      { word: "citizenship", definition: "being a citizen", example: "Apply for citizenship." },
      { word: "government", definition: "ruling system", example: "Elect a government." },
      { word: "parliament", definition: "law-making group", example: "Visit Parliament Hill." },
      { word: "constitution", definition: "basic laws", example: "Read the Constitution." },
      { word: "immigration", definition: "coming to live", example: "Canada has immigration." },
      { word: "multicultural", definition: "many cultures", example: "Canada is multicultural." },
      { word: "diversity", definition: "variety", example: "Celebrate diversity." },
      { word: "indigenous", definition: "original peoples", example: "Learn indigenous history." },
      { word: "province", definition: "region of Canada", example: "Which province?" }
    ],

    // Literature vocabulary (文学词汇)
    literature: [
      { word: "protagonist", definition: "main character", example: "The protagonist is brave." },
      { word: "antagonist", definition: "opposing character", example: "The antagonist is evil." },
      { word: "narrative", definition: "story", example: "Write a narrative." },
      { word: "dialogue", definition: "conversation", example: "The dialogue is funny." },
      { word: "climax", definition: "most exciting part", example: "The climax surprised me." },
      { word: "resolution", definition: "ending", example: "The resolution was happy." },
      { word: "figurative", definition: "not literal", example: "Figurative language." },
      { word: "metaphor", definition: "comparison without like", example: "Life is a journey." },
      { word: "simile", definition: "comparison with like", example: "Fast as lightning." },
      { word: "personification", definition: "human qualities to things", example: "The wind whispered." }
    ],

    // Mathematics vocabulary (数学词汇)
    mathematics: [
      { word: "numerator", definition: "top of fraction", example: "The numerator is 3." },
      { word: "denominator", definition: "bottom of fraction", example: "The denominator is 4." },
      { word: "quotient", definition: "division answer", example: "Find the quotient." },
      { word: "product", definition: "multiplication answer", example: "The product is 12." },
      { word: "variable", definition: "unknown value", example: "Solve for the variable." },
      { word: "equation", definition: "math statement", example: "Write the equation." },
      { word: "polygon", definition: "many-sided shape", example: "Draw a polygon." },
      { word: "perimeter", definition: "distance around", example: "Find the perimeter." },
      { word: "probability", definition: "chance of something", example: "What's the probability?" },
      { word: "coordinate", definition: "position on grid", example: "Plot the coordinate." }
    ]
  },

  // French Words - Grade 5-6
  grade5_6French: {
    // Les homophones (同音词)
    homophones: [
      { word: "leur", definition: "leur (à eux)", example: "Leur maison est bleue." },
      { word: "leurs", definition: "leurs (à eux, pluriel)", example: "Leurs livres sont ici." },
      { word: "mais", definition: "mais (conjonction)", example: "Je veux venir, mais je ne peux pas." },
      { word: "mes", definition: "mes (à moi)", example: "Mes amis sont gentils." },
      { word: "met", definition: "mettre (il met)", example: "Il met son manteau." },
      { word: "mets", definition: "mettre (je mets)", example: "Je mets la table." },
      { word: "on", definition: "on (les gens)", example: "On va au parc." },
      { word: "ont", definition: "avoir (ils ont)", example: "Ils ont un chien." },
      { word: "son", definition: "son (à lui)", example: "Son chat est noir." },
      { word: "sont", definition: "être (ils sont)", example: "Ils sont contents." }
    ],

    // L'alimentation (食物)
    food: [
      { word: "pomme", definition: "apple", example: "Je mange une pomme." },
      { word: "banane", definition: "banana", example: "La banane est jaune." },
      { word: "fromage", definition: "cheese", example: "J'aime le fromage." },
      { word: "pain", definition: "bread", example: "Le pain est frais." },
      { word: "lait", definition: "milk", example: "Je bois du lait." },
      { word: "eau", definition: "water", example: "L'eau est fraîche." },
      { word: "poulet", definition: "chicken", example: "Le poulet est bon." },
      { word: "légume", definition: "vegetable", example: "Mange tes légumes!" },
      { word: "délicieux", definition: "delicious", example: "C'est délicieux!" },
      { word: "faim", definition: "hungry", example: "J'ai faim." }
    ],

    // L'école (学校)
    school: [
      { word: "école", definition: "school", example: "Je vais à l'école." },
      { word: "professeur", definition: "teacher", example: "Le professeur est gentil." },
      { word: "élève", definition: "student", example: "Je suis un élève." },
      { word: "classe", definition: "classroom", example: "La classe est grande." },
      { word: "cahier", definition: "notebook", example: "Ouvre ton cahier." },
      { word: "crayon", definition: "pencil", example: "J'ai un crayon." },
      { word: "livre", definition: "book", example: "Ce livre est intéressant." },
      { word: "devoirs", definition: "homework", example: "Fais tes devoirs." },
      { word: "examen", definition: "exam/test", example: "L'examen est demain." },
      { word: "récréation", definition: "recess", example: "La récréation est amusante." }
    ],

    // Les verbes courants (常用动词)
    commonVerbs: [
      { word: "être", definition: "to be", example: "Je suis heureux." },
      { word: "avoir", definition: "to have", example: "J'ai un chat." },
      { word: "aller", definition: "to go", example: "Je vais au parc." },
      { word: "faire", definition: "to do/make", example: "Je fais mes devoirs." },
      { word: "dire", definition: "to say", example: "Je dis la vérité." },
      { word: "voir", definition: "to see", example: "Je vois le chat." },
      { word: "pouvoir", definition: "to be able to", example: "Je peux venir." },
      { word: "vouloir", definition: "to want", example: "Je veux jouer." },
      { word: "savoir", definition: "to know", example: "Je sais la réponse." },
      { word: "mettre", definition: "to put", example: "Je mets mon manteau." }
    ],

    // Les adjectifs (形容词)
    adjectives: [
      { word: "grand", definition: "big/tall", example: "Il est grand." },
      { word: "petit", definition: "small", example: "La maison est petite." },
      { word: "heureux", definition: "happy", example: "Je suis heureux." },
      { word: "content", definition: "happy/pleased", example: "Elle est contente." },
      { word: "triste", definition: "sad", example: "Il est triste." },
      { word: "fatigué", definition: "tired", example: "Je suis fatigué." },
      { word: "malade", definition: "sick", example: "Elle est malade." },
      { word: "beau", definition: "beautiful", example: "C'est très beau." },
      { word: "facile", definition: "easy", example: "C'est facile!" },
      { word: "difficile", definition: "difficult", example: "C'est difficile." }
    ],

    // La nature (自然)
    nature: [
      { word: "arbre", definition: "tree", example: "L'arbre est grand." },
      { word: "fleur", definition: "flower", example: "La fleur est rouge." },
      { word: "soleil", definition: "sun", example: "Le soleil brille." },
      { word: "lune", definition: "moon", example: "La lune est belle." },
      { word: "étoile", definition: "star", example: "Je vois une étoile." },
      { word: "nuage", definition: "cloud", example: "Le nuage est blanc." },
      { word: "pluie", definition: "rain", example: "Il pleut (la pluie)." },
      { word: "neige", definition: "snow", example: "Il neige (la neige)." },
      { word: "vent", definition: "wind", example: "Le vent souffle." },
      { word: "montagne", definition: "mountain", example: "La montagne est haute." }
    ],

    // Les jours et mois (日期时间)
    time: [
      { word: "lundi", definition: "Monday", example: "Aujourd'hui, c'est lundi." },
      { word: "mardi", definition: "Tuesday", example: "Demain, c'est mardi." },
      { word: "mercredi", definition: "Wednesday", example: "Le mercredi, j'ai natation." },
      { word: "jeudi", definition: "Thursday", example: "Jeudi, je vais à l'école." },
      { word: "vendredi", definition: "Friday", example: "Vendredi, c'est le week-end!" },
      { word: "janvier", definition: "January", example: "En janvier, il neige." },
      { word: "février", definition: "February", example: "Février a 28 jours." },
      { word: "aujourd'hui", definition: "today", example: "Aujourd'hui, je joue." },
      { word: "demain", definition: "tomorrow", example: "Demain, j'étais malade." },
      { word: "maintenant", definition: "now", example: "Je veux manger maintenant." }
    ]
  },

  // Resolve the data key for a given grade and subject
  _resolveKey: function(grade, subject) {
    const key = `${grade}${subject}`;
    if (this[key]) return key;
    // French uses a shared key grade5_6French for both grades
    if (subject === 'French') return 'grade5_6French';
    return null;
  },

  // Get random words from a category
  getWords: function(grade, subject, category, count = 10) {
    const key = this._resolveKey(grade, subject);
    if (!key || !this[key] || !this[key][category]) return [];

    const words = [...this[key][category]];
    return this.shuffleArray(words).slice(0, count);
  },

  // Get all categories for a grade and subject
  getCategories: function(grade, subject) {
    const key = this._resolveKey(grade, subject);
    if (!key || !this[key]) return [];
    return Object.keys(this[key]);
  },

  // Shuffle array
  shuffleArray: function(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Get mixed words from multiple categories
  getMixedWords: function(grade, subject, count = 20) {
    const key = this._resolveKey(grade, subject);
    if (!key || !this[key]) return [];

    const allWords = [];
    Object.values(this[key]).forEach(category => {
      allWords.push(...category);
    });

    return this.shuffleArray(allWords).slice(0, count);
  }
};

// Export
if (typeof window !== 'undefined') {
  window.SpellingWords = SpellingWords;
}

export default SpellingWords;
