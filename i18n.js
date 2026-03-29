/**
 * Internationalization (i18n) Module for Maggie School
 * Supports English, Chinese, and French
 */

const i18n = {
  currentLang: 'en', // Default language
  supportedLangs: ['en', 'zh', 'fr'], // Supported languages

  translations: {
    en: {
      // Header
      title: 'Maggie School - Math Learning',
      subtitle: 'Grade 5 & 6 Math Curriculum',

      // Auth
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',

      // Grade selection
      grade5: 'Grade 5',
      grade6: 'Grade 6',

      // Topics
      topics: 'Topics',
      progress: 'Progress',
      completed: 'Completed',
      notStarted: 'Not Started',
      inProgress: 'In Progress',

      // Resources
      khanAcademy: 'Khan Academy',
      youtubeVideos: 'YouTube Videos',
      interactiveExamples: 'Interactive Examples',
      practiceQuestion: 'Answer the questions to practice',

      // Quiz
      correct: 'Correct!',
      wrong: 'Wrong, try again!',
      perfect: 'Perfect! First try!',
      gotIt: 'Got it in {attempts} attempts!',

      // Buttons
      markComplete: 'Mark as Complete',
      completedBtn: 'Completed! All answers correct!',
      completeAllExamples: 'Complete all examples correctly to finish',
      submit: 'Submit',
      nextQuestion: 'Next Question',
      showHint: 'Show Hint',
      hideHint: 'Hide Hint',

      // Game
      coins: 'Coins',
      streak: 'Streak',
      level: 'Level',
      badges: 'Badges',
      pets: 'Pets',

      // Messages
      signInToSync: 'Sign in to sync your progress across devices',
      emailAlreadyRegistered: 'This email is already registered',
      invalidEmail: 'Please enter a valid email address',
      weakPassword: 'Password should be at least 6 characters',
      wrongPassword: 'Incorrect password',
      userNotFound: 'No account found with this email',
      loginSuccess: 'Login successful!',
      registerSuccess: 'Account created successfully!',

      // Footer
      copyright: '© 2026 Maggie School. All rights reserved.',

      // Progress
      progressSaved: 'Progress saved automatically',
      topicComplete: 'Topic completed!',
      topicIncomplete: 'Complete all exercises to finish this topic',

      // Navigation
      home: 'Home',
      myProgress: 'My Progress',
      settings: 'Settings',
      language: 'Language',

      // Misc
      video: 'video',
      article: 'article',
      exercise: 'exercise',
      quiz: 'quiz',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',

      // Additional
      welcome: 'Welcome',
      or: 'OR',
      name: 'Name',
      continueWithGoogle: 'Continue with Google',
      progressSavedLocally: 'Progress saved locally',
      topicsCompleted: '{count} / {total} topics completed',

      // Dictation Practice
      dictationTitle: 'Dictation Practice',
      back: 'Back',
      selectGrade: 'Select Grade',
      selectSubject: 'Select Subject',
      selectCategory: 'Select Category',
      difficulty: 'Difficulty',
      practiceMode: 'Practice Mode',
      wordCount: 'Number of Words',
      startPractice: 'Start Practice',
      mixedCategory: 'Mixed (All Categories)',
      english: 'English',
      french: 'French',
      easy: 'Easy',
      normal: 'Normal',
      hard: 'Hard',
      gameMode: 'Game Mode',
      timedMode: 'Timed Mode',
      word: 'Word',
      hearWord: 'Hear Word',
      hint: 'Hint',
      definition: 'Definition',
      translation: 'Translation',
      example: 'Example',
      typeWord: 'Type the word here...',
      check: 'Check',
      nextWord: 'Next Word',
      yourAnswer: 'Your answer',
      correctAnswer: 'Correct answer',
      checkPosition: 'Check position',
      missingLetters: 'Missing letters',
      spellingHint: 'Spelling hint',
      practiceComplete: 'Practice Complete!',
      perfectScore: 'Perfect Score!',
      greatJob: 'Great Job!',
      goodEffort: 'Good Effort!',
      keepPracticing: 'Keep Practicing!',
      accuracy: 'Accuracy',
      incorrect: 'Incorrect',
      totalWords: 'Total Words',
      coinsEarned: 'Coins Earned',
      bestStreak: 'Best Streak',
      tryAgain: 'Try Again',
      newPractice: 'New Practice',
      homophones: 'Homophones',
      multisyllabic: 'Multisyllabic Words',
      academic: 'Academic Vocabulary',
      science: 'Science Words',
      prefixesSuffixes: 'Prefixes & Suffixes',
      roots: 'Word Roots',
      socialStudies: 'Social Studies',
      literature: 'Literature',
      mathematics: 'Mathematics',
      food: 'Food',
      school: 'School',
      commonVerbs: 'Common Verbs',
      adjectives: 'Adjectives',
      nature: 'Nature',
      time: 'Days & Months',
      noWordsAvailable: 'No words available for this selection.',

      // Word Import
      importWords: 'Import Words',
      manualInput: 'Manual Input',
      listName: 'List Name',
      selectLanguage: 'Language',
      wordInput: 'Add Words',
      enterWord: 'Enter word',
      enterDefinition: 'Enter definition',
      enterExample: 'Enter example sentence',
      wordList: 'Word List',
      words: 'words',
      noWordsYet: 'No words added yet',
      foundWords: 'Found',
      invalidJSON: 'Invalid JSON format',
      enterListName: 'Please enter a list name',
      addWords: 'Please add at least one word',
      previewFirst: 'Please preview the data first',
      listExists: 'A list with this name already exists. Overwrite?',
      listSaved: 'List saved successfully!',
      noCustomLists: 'No custom lists yet. Import your first word list!',
      practice: 'Practice',
      export: 'Export',
      delete: 'Delete',
      confirmDelete: 'Are you sure you want to delete this list?',
      listDeleted: 'List deleted',
      myCustomLists: 'My Custom Lists',
      importCustomList: 'Import Custom List',
      manageLists: 'Manage Lists',
    },

    zh: {
      // Header
      title: 'Maggie School - 数学学习',
      subtitle: '五年级和六年级数学课程',

      // Auth
      login: '登录',
      register: '注册',
      logout: '退出',
      email: '邮箱',
      password: '密码',
      confirmPassword: '确认密码',

      // Grade selection
      grade5: '五年级',
      grade6: '六年级',

      // Topics
      topics: '主题',
      progress: '进度',
      completed: '已完成',
      notStarted: '未开始',
      inProgress: '进行中',

      // Resources
      khanAcademy: 'Khan Academy',
      youtubeVideos: 'YouTube 视频',
      interactiveExamples: '互动练习',
      practiceQuestion: '完成以下问题来练习',

      // Quiz
      correct: '答对了！',
      wrong: '答错了，再试一次！',
      perfect: '完美！一次就对！',
      gotIt: '答对了！用了 {attempts} 次尝试！',

      // Buttons
      markComplete: '标记完成',
      completedBtn: '已完成！全部答对！',
      completeAllExamples: '正确完成所有练习题后自动完成',
      submit: '提交',
      nextQuestion: '下一题',
      showHint: '显示提示',
      hideHint: '隐藏提示',

      // Game
      coins: '金币',
      streak: '连胜',
      level: '等级',
      badges: '徽章',
      pets: '宠物',

      // Messages
      signInToSync: '登录以同步学习进度',
      emailAlreadyRegistered: '此邮箱已注册',
      invalidEmail: '请输入有效的邮箱地址',
      weakPassword: '密码至少需要6个字符',
      wrongPassword: '密码错误',
      userNotFound: '未找到此邮箱的账户',
      loginSuccess: '登录成功！',
      registerSuccess: '账户创建成功！',

      // Footer
      copyright: '© 2026 Maggie School. 保留所有权利。',

      // Progress
      progressSaved: '进度已自动保存',
      topicComplete: '主题已完成！',
      topicIncomplete: '完成所有练习后即可完成此主题',

      // Navigation
      home: '首页',
      myProgress: '我的进度',
      settings: '设置',
      language: '语言',

      // Misc
      video: '视频',
      article: '文章',
      exercise: '练习',
      quiz: '测验',
      loading: '加载中...',
      error: '错误',
      success: '成功',
      cancel: '取消',
      confirm: '确认',
      yes: '是',
      no: '否',

      // Additional
      welcome: '欢迎',
      or: '或者',
      name: '姓名',
      continueWithGoogle: '使用 Google 登录',
      progressSavedLocally: '进度已保存在本地',
      topicsCompleted: '已完成 {count} / {total} 个主题',

      // Dictation Practice
      dictationTitle: '听写练习',
      back: '返回',
      selectGrade: '选择年级',
      selectSubject: '选择科目',
      selectCategory: '选择类别',
      difficulty: '难度',
      practiceMode: '练习模式',
      wordCount: '单词数量',
      startPractice: '开始练习',
      mixedCategory: '混合（所有类别）',
      english: '英语',
      french: '法语',
      easy: '简单',
      normal: '普通',
      hard: '困难',
      gameMode: '游戏模式',
      timedMode: '计时模式',
      word: '单词',
      hearWord: '听单词',
      hint: '提示',
      definition: '定义',
      translation: '翻译',
      example: '例句',
      typeWord: '在此输入单词...',
      check: '检查',
      nextWord: '下一个',
      yourAnswer: '你的答案',
      correctAnswer: '正确答案',
      checkPosition: '检查第',
      missingLetters: '缺少字母',
      spellingHint: '拼写提示',
      practiceComplete: '练习完成！',
      perfectScore: '满分！',
      greatJob: '太棒了！',
      goodEffort: '做得不错！',
      keepPracticing: '继续加油！',
      accuracy: '准确率',
      incorrect: '错误',
      totalWords: '总词数',
      coinsEarned: '获得金币',
      bestStreak: '最佳连胜',
      tryAgain: '再试一次',
      newPractice: '新练习',
      homophones: '同音词',
      multisyllabic: '多音节词',
      academic: '学术词汇',
      science: '科学词汇',
      prefixesSuffixes: '前缀后缀',
      roots: '词根',
      socialStudies: '社会研究',
      literature: '文学',
      mathematics: '数学',
      food: '食物',
      school: '学校',
      commonVerbs: '常用动词',
      adjectives: '形容词',
      nature: '自然',
      time: '日期时间',
      noWordsAvailable: '此选择没有可用的单词。',

      // Word Import
      importWords: '导入单词',
      manualInput: '手动输入',
      listName: '列表名称',
      selectLanguage: '语言',
      wordInput: '添加单词',
      enterWord: '输入单词',
      enterDefinition: '输入定义',
      enterExample: '输入例句',
      wordList: '单词列表',
      words: '个单词',
      noWordsYet: '还没有添加单词',
      foundWords: '找到',
      invalidJSON: 'JSON格式无效',
      enterListName: '请输入列表名称',
      addWords: '请至少添加一个单词',
      previewFirst: '请先预览数据',
      listExists: '此名称的列表已存在。是否覆盖？',
      listSaved: '列表保存成功！',
      noCustomLists: '还没有自定义列表。导入你的第一个单词列表吧！',
      practice: '练习',
      export: '导出',
      delete: '删除',
      confirmDelete: '确定要删除这个列表吗？',
      listDeleted: '列表已删除',
      myCustomLists: '我的自定义列表',
      importCustomList: '导入自定义列表',
      manageLists: '管理列表',
    },

    fr: {
      // Header
      title: 'Maggie School - Apprendre les mathématiques',
      subtitle: 'Programme de mathématiques 5e et 6e année',

      // Auth
      login: 'Connexion',
      register: 'S\'inscrire',
      logout: 'Déconnexion',
      email: 'Courriel',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',

      // Grade selection
      grade5: '5e année',
      grade6: '6e année',

      // Topics
      topics: 'Sujets',
      progress: 'Progrès',
      completed: 'Terminé',
      notStarted: 'Non commencé',
      inProgress: 'En cours',

      // Resources
      khanAcademy: 'Khan Academy',
      youtubeVideos: 'Vidéos YouTube',
      interactiveExamples: 'Exemples interactifs',
      practiceQuestion: 'Répondez aux questions pour pratiquer',

      // Quiz
      correct: 'Correct!',
      wrong: 'Faux, essayez encore!',
      perfect: 'Parfait! Premier essai!',
      gotIt: 'Bien! {attempts} essais!',

      // Buttons
      markComplete: 'Marquer comme terminé',
      completedBtn: 'Terminé! Toutes les réponses sont correctes!',
      completeAllExamples: 'Complétez tous les exemples correctement pour terminer',
      submit: 'Soumettre',
      nextQuestion: 'Question suivante',
      showHint: 'Montrer l\'indice',
      hideHint: 'Cacher l\'indice',

      // Game
      coins: 'Pièces',
      streak: 'Série',
      level: 'Niveau',
      badges: 'Badges',
      pets: 'Animaux',

      // Messages
      signInToSync: 'Connectez-vous pour synchroniser vos progrès',
      emailAlreadyRegistered: 'Ce courriel est déjà enregistré',
      invalidEmail: 'Veuillez entrer une adresse courriel valide',
      weakPassword: 'Le mot de passe doit contenir au moins 6 caractères',
      wrongPassword: 'Mot de passe incorrect',
      userNotFound: 'Aucun compte trouvé avec ce courriel',
      loginSuccess: 'Connexion réussie!',
      registerSuccess: 'Compte créé avec succès!',

      // Footer
      copyright: '© 2026 Maggie School. Tous droits réservés.',

      // Progress
      progressSaved: 'Progrès enregistré automatiquement',
      topicComplete: 'Sujet terminé!',
      topicIncomplete: 'Complétez tous les exercices pour terminer ce sujet',

      // Navigation
      home: 'Accueil',
      myProgress: 'Mes progrès',
      settings: 'Paramètres',
      language: 'Langue',

      // Misc
      video: 'vidéo',
      article: 'article',
      exercise: 'exercice',
      quiz: 'quiz',
      loading: 'Chargement...',
      error: 'Erreur',
      success: 'Succès',
      cancel: 'Annuler',
      confirm: 'Confirmer',
      yes: 'Oui',
      no: 'Non',

      // Additional
      welcome: 'Bienvenue',
      or: 'OU',
      name: 'Nom',
      continueWithGoogle: 'Continuer avec Google',
      progressSavedLocally: 'Progrès enregistré localement',
      topicsCompleted: '{count} / {total} sujets terminés',

      // Dictation Practice
      dictationTitle: 'Dictée',
      back: 'Retour',
      selectGrade: 'Choisir le niveau',
      selectSubject: 'Choisir la matière',
      selectCategory: 'Choisir la catégorie',
      difficulty: 'Difficulté',
      practiceMode: 'Mode de pratique',
      wordCount: 'Nombre de mots',
      startPractice: 'Commencer',
      mixedCategory: 'Mixte (toutes catégories)',
      english: 'Anglais',
      french: 'Français',
      easy: 'Facile',
      normal: 'Normal',
      hard: 'Difficile',
      gameMode: 'Mode jeu',
      timedMode: 'Mode chronométré',
      word: 'Mot',
      hearWord: 'Écouter',
      hint: 'Indice',
      definition: 'Définition',
      translation: 'Traduction',
      example: 'Exemple',
      typeWord: 'Écrivez le mot ici...',
      check: 'Vérifier',
      nextWord: 'Mot suivant',
      yourAnswer: 'Votre réponse',
      correctAnswer: 'Réponse correcte',
      checkPosition: 'Vérifiez la position',
      missingLetters: 'Lettres manquantes',
      spellingHint: 'Indice d\'orthographe',
      practiceComplete: 'Dictée terminée!',
      perfectScore: 'Score parfait!',
      greatJob: 'Excellent travail!',
      goodEffort: 'Bon effort!',
      keepPracticing: 'Continuez à pratiquer!',
      accuracy: 'Précision',
      incorrect: 'Incorrect',
      totalWords: 'Mots au total',
      coinsEarned: 'Pièces gagnées',
      bestStreak: 'Meilleure série',
      tryAgain: 'Réessayer',
      newPractice: 'Nouvelle dictée',
      homophones: 'Homophones',
      multisyllabic: 'Mots multisyllabiques',
      academic: 'Vocabulaire académique',
      science: 'Mots scientifiques',
      prefixesSuffixes: 'Préfixes et suffixes',
      roots: 'Racines de mots',
      socialStudies: 'Sciences humaines',
      literature: 'Littérature',
      mathematics: 'Mathématiques',
      food: 'Alimentation',
      school: 'École',
      commonVerbs: 'Verbes courants',
      adjectives: 'Adjectifs',
      nature: 'Nature',
      time: 'Jours et mois',
      noWordsAvailable: 'Aucun mot disponible pour cette sélection.',
    }
  },

  // Get current language
  getLang() {
    return this.currentLang;
  },

  // Set language
  setLang(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('maggie-lang', lang);
      this.updateAllText();
      return true;
    }
    return false;
  },

  // Toggle language
  toggleLang() {
    const newLang = this.currentLang === 'en' ? 'zh' : 'en';
    this.setLang(newLang);
    return newLang;
  },

  // Get translation
  t(key, params = {}) {
    const text = this.translations[this.currentLang]?.[key] ||
                 this.translations['en']?.[key] ||
                 key;

    // Replace placeholders like {attempts}
    return Object.entries(params).reduce(
      (str, [k, v]) => str.replace(new RegExp(`\\{${k}\\}`, 'g'), v),
      text
    );
  },

  // Initialize from localStorage
  init() {
    const saved = localStorage.getItem('maggie-lang');
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
    } else {
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        this.currentLang = 'zh';
      } else if (browserLang.startsWith('fr')) {
        this.currentLang = 'fr';
      } else {
        this.currentLang = 'en';
      }
    }
    this.updateAllText();
  },

  // Get available languages
  getSupportedLanguages() {
    return this.supportedLangs;
  },

  // Get language display name
  getLanguageName(lang) {
    const names = {
      en: 'English',
      zh: '中文',
      fr: 'Français'
    };
    return names[lang] || lang;
  },

  // Update all elements with data-i18n attribute
  updateAllText() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Update elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    // Update elements with data-i18n-title attribute
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = this.t(key);
    });

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : this.currentLang;

    // Dispatch event for custom handlers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
  }
};

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.i18n = i18n;
}

export default i18n;
