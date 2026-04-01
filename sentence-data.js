/**
 * Sentence Dictation Data
 * Organized by grade/subject/category for English and French
 */

const SentenceData = {
  // ========== English - Grade 5 ==========
  grade5English: {
    everyday: [
      { sentence: "The cat sat on the mat.", difficulty: 1 },
      { sentence: "She walked to school today.", difficulty: 1 },
      { sentence: "We had pizza for dinner last night.", difficulty: 1 },
      { sentence: "My friend lives on Maple Street.", difficulty: 1 },
      { sentence: "The children played in the park.", difficulty: 1 },
      { sentence: "I read a book before bedtime.", difficulty: 1 },
      { sentence: "Mom drove us to the library.", difficulty: 1 },
      { sentence: "The dog chased the ball across the yard.", difficulty: 1 },
      { sentence: "We need to buy milk and bread.", difficulty: 1 },
      { sentence: "My teacher gave us homework.", difficulty: 1 }
    ],
    descriptive: [
      { sentence: "The beautiful sunset painted the sky orange.", difficulty: 2 },
      { sentence: "A tiny bird sang a lovely song.", difficulty: 2 },
      { sentence: "The old house had a green door.", difficulty: 1 },
      { sentence: "Cold wind blew through the open window.", difficulty: 2 },
      { sentence: "The tall tree provided welcome shade.", difficulty: 2 },
      { sentence: "Bright flowers grew along the fence.", difficulty: 2 },
      { sentence: "The noisy river rushed over the rocks.", difficulty: 2 },
      { sentence: "Soft clouds floated in the blue sky.", difficulty: 1 },
      { sentence: "The little puppy had floppy ears.", difficulty: 1 },
      { sentence: "A gentle rain fell on the garden.", difficulty: 2 }
    ],
    academic: [
      { sentence: "Scientists analyze data carefully.", difficulty: 2 },
      { sentence: "We compared the two experiments.", difficulty: 2 },
      { sentence: "The evidence showed a clear result.", difficulty: 2 },
      { sentence: "Can you summarize the main idea?", difficulty: 2 },
      { sentence: "The solution was found by teamwork.", difficulty: 2 },
      { sentence: "We evaluated the project together.", difficulty: 2 },
      { sentence: "The government makes important laws.", difficulty: 2 },
      { sentence: "Our community celebrated Canada Day.", difficulty: 2 },
      { sentence: "The environment needs our protection.", difficulty: 3 },
      { sentence: "Everyone has a different perspective.", difficulty: 3 }
    ],
    narrative: [
      { sentence: "Once upon a time there was a brave girl.", difficulty: 1 },
      { sentence: "She opened the door and stepped inside.", difficulty: 1 },
      { sentence: "The treasure was hidden under the old bridge.", difficulty: 2 },
      { sentence: "They climbed the mountain before sunrise.", difficulty: 2 },
      { sentence: "The adventure began on a rainy Monday.", difficulty: 2 },
      { sentence: "He found a map in the dusty attic.", difficulty: 2 },
      { sentence: "The journey took three long days.", difficulty: 1 },
      { sentence: "She solved the puzzle just in time.", difficulty: 2 },
      { sentence: "The hero saved the village from danger.", difficulty: 2 },
      { sentence: "They celebrated with a big feast.", difficulty: 1 }
    ]
  },

  // ========== English - Grade 6 ==========
  grade6English: {
    complex: [
      { sentence: "Although it was raining we decided to go hiking.", difficulty: 2 },
      { sentence: "The experiment demonstrated an important scientific principle.", difficulty: 3 },
      { sentence: "She carefully considered all the options before deciding.", difficulty: 2 },
      { sentence: "The documentary explored life in ancient civilizations.", difficulty: 3 },
      { sentence: "We participated in a fascinating discussion about climate change.", difficulty: 3 },
      { sentence: "The orchestra performed a magnificent symphony.", difficulty: 3 },
      { sentence: "Understanding different cultures helps us build empathy.", difficulty: 3 },
      { sentence: "The invention revolutionized communication around the world.", difficulty: 3 },
      { sentence: "Responsibility and respect are important values in our community.", difficulty: 3 },
      { sentence: "The astronaut described the incredible view from space.", difficulty: 3 }
    ],
    literature: [
      { sentence: "The character faced a difficult moral choice.", difficulty: 2 },
      { sentence: "The author used vivid imagery to create atmosphere.", difficulty: 3 },
      { sentence: "The plot twisted unexpectedly at the end of the chapter.", difficulty: 3 },
      { sentence: "The theme of courage runs throughout the novel.", difficulty: 3 },
      { sentence: "She expressed her feelings through powerful poetry.", difficulty: 2 },
      { sentence: "The setting influenced the mood of the entire story.", difficulty: 3 },
      { sentence: "Dialogue reveals important information about each character.", difficulty: 3 },
      { sentence: "The metaphor compared life to a winding river.", difficulty: 2 },
      { sentence: "Suspense kept the readers guessing until the last page.", difficulty: 3 },
      { sentence: "The protagonist learned a valuable lesson about friendship.", difficulty: 2 }
    ],
    science: [
      { sentence: "Photosynthesis converts sunlight into chemical energy.", difficulty: 3 },
      { sentence: "The water cycle includes evaporation and precipitation.", difficulty: 2 },
      { sentence: "Gravity pulls objects toward the centre of the Earth.", difficulty: 2 },
      { sentence: "Cells are the basic building blocks of all living things.", difficulty: 2 },
      { sentence: "The ecosystem depends on a delicate balance.", difficulty: 3 },
      { sentence: "Magnetism is an invisible force that attracts certain metals.", difficulty: 3 },
      { sentence: "The periodic table organizes all known elements.", difficulty: 3 },
      { sentence: "Energy can be transformed from one form to another.", difficulty: 2 },
      { sentence: "Adaptation helps organisms survive in their environment.", difficulty: 3 },
      { sentence: "The microscope revealed details invisible to the naked eye.", difficulty: 3 }
    ],
    social: [
      { sentence: "Canada has ten provinces and three territories.", difficulty: 1 },
      { sentence: "The Charter of Rights protects our fundamental freedoms.", difficulty: 3 },
      { sentence: "Democracy allows citizens to vote for their leaders.", difficulty: 2 },
      { sentence: "Indigenous peoples have lived here for thousands of years.", difficulty: 2 },
      { sentence: "Immigration has shaped the cultural diversity of Canada.", difficulty: 3 },
      { sentence: "Parliament consists of the House of Commons and the Senate.", difficulty: 3 },
      { sentence: "Trade connects countries around the world.", difficulty: 2 },
      { sentence: "Geography influences how and where people live.", difficulty: 2 },
      { sentence: "Historical sources help us understand the past.", difficulty: 2 },
      { sentence: "Global citizenship means caring about people everywhere.", difficulty: 2 }
    ]
  },

  // ========== French - Grades 5-6 ==========
  grade5_6French: {
    everyday: [
      { sentence: "Le chat est sur la table.", difficulty: 1 },
      { sentence: "Je mange une pomme rouge.", difficulty: 1 },
      { sentence: "Nous allons à l'école.", difficulty: 1 },
      { sentence: "Il fait beau aujourd'hui.", difficulty: 1 },
      { sentence: "Ma famille est grande.", difficulty: 1 },
      { sentence: "Le soleil brille dans le ciel.", difficulty: 1 },
      { sentence: "J'aime jouer avec mes amis.", difficulty: 1 },
      { sentence: "Elle chante une belle chanson.", difficulty: 2 },
      { sentence: "Nous mangeons ensemble le midi.", difficulty: 2 },
      { sentence: "Le matin je bois du lait.", difficulty: 1 }
    ],
    school: [
      { sentence: "Le professeur explique la leçon.", difficulty: 1 },
      { sentence: "Les élèves étudient pour l'examen.", difficulty: 2 },
      { sentence: "La bibliothèque est grande et silencieuse.", difficulty: 2 },
      { sentence: "J'écris mes devoirs dans un cahier.", difficulty: 2 },
      { sentence: "La récréation est à dix heures.", difficulty: 1 },
      { sentence: "Nous apprenons l'histoire du Canada.", difficulty: 2 },
      { sentence: "Le cours de sciences est intéressant.", difficulty: 2 },
      { sentence: "Elle lit un livre en français.", difficulty: 2 },
      { sentence: "Les étudiants travaillent en groupes.", difficulty: 2 },
      { sentence: "Le directeur parle avec les parents.", difficulty: 2 }
    ],
    nature: [
      { sentence: "Les arbres perdent leurs feuilles en automne.", difficulty: 2 },
      { sentence: "La rivière coule dans la forêt.", difficulty: 2 },
      { sentence: "Les oiseaux chantent le matin.", difficulty: 1 },
      { sentence: "La montagne est couverte de neige.", difficulty: 2 },
      { sentence: "Les fleurs poussent au printemps.", difficulty: 2 },
      { sentence: "Le lac est bleu et profond.", difficulty: 1 },
      { sentence: "Le vent souffle fort aujourd'hui.", difficulty: 2 },
      { sentence: "Les étoiles brillent dans la nuit.", difficulty: 2 },
      { sentence: "La pluie tombe sur le jardin.", difficulty: 1 },
      { sentence: "Les papillons volent parmi les fleurs.", difficulty: 2 }
    ],
    food: [
      { sentence: "Je voudrais un croissant s'il vous plaît.", difficulty: 2 },
      { sentence: "La soupe est chaude et délicieuse.", difficulty: 2 },
      { sentence: "Nous achetons du pain à la boulangerie.", difficulty: 2 },
      { sentence: "Les fruits sont bons pour la santé.", difficulty: 1 },
      { sentence: "Le fromage français est très connu.", difficulty: 2 },
      { sentence: "Elle prépare un gâteau au chocolat.", difficulty: 2 },
      { sentence: "Le petit déjeuner est à sept heures.", difficulty: 1 },
      { sentence: "Nous buvons de l'eau avec le repas.", difficulty: 2 },
      { sentence: "Le restaurant est près de la place.", difficulty: 2 },
      { sentence: "J'aime les légumes du marché.", difficulty: 1 }
    ]
  },

  // ========== Utility Methods ==========

  _resolveKey(grade, subject) {
    const subjectLower = subject.toLowerCase();
    if (subjectLower === 'french') return 'grade5_6French';
    return `grade${grade}${subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase()}`;
  },

  getSentences(grade, subject, category, count, difficulty) {
    const key = this._resolveKey(grade, subject);
    const group = this[key];
    if (!group || !group[category]) return [];

    let sentences = [...group[category]];
    if (difficulty) {
      sentences = sentences.filter(s => s.difficulty <= difficulty);
    }
    return this._shuffleArray(sentences).slice(0, count || sentences.length);
  },

  getMixedSentences(grade, subject, count, difficulty) {
    const key = this._resolveKey(grade, subject);
    const group = this[key];
    if (!group) return [];

    let allSentences = [];
    Object.values(group).forEach(category => {
      allSentences = allSentences.concat(category);
    });

    if (difficulty) {
      allSentences = allSentences.filter(s => s.difficulty <= difficulty);
    }
    return this._shuffleArray(allSentences).slice(0, count || allSentences.length);
  },

  getCategories(grade, subject) {
    const key = this._resolveKey(grade, subject);
    const group = this[key];
    if (!group) return [];
    return Object.keys(group);
  },

  extractFromSpellingWords(grade, subject) {
    if (typeof SpellingWords === 'undefined') return [];

    let key;
    if (subject === 'french') {
      key = 'grade5_6French';
    } else {
      key = `grade${grade}${subject.charAt(0).toUpperCase() + subject.slice(1)}`;
    }

    const group = SpellingWords[key];
    if (!group) return [];

    let sentences = [];
    Object.values(group).forEach(category => {
      category.forEach(item => {
        if (item.example && item.example.trim().length > 10) {
          sentences.push({
            sentence: item.example.trim(),
            difficulty: item.example.split(' ').length > 5 ? 2 : 1,
            source: 'spelling-words'
          });
        }
      });
    });
    return sentences;
  },

  _shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SentenceData;
} else if (typeof window !== 'undefined') {
  window.SentenceData = SentenceData;
}

export default SentenceData;
