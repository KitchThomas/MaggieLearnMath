/**
 * Dictation Practice Module
 * Interactive spelling practice with audio, game elements, and progress tracking
 */

class DictationPractice {
  constructor() {
    this.currentWords = [];
    this.currentIndex = 0;
    this.correctCount = 0;
    this.attempts = 0;
    this.grade = 'grade5';
    this.subject = 'English';
    this.category = 'mixed';
    this.difficulty = 'normal';
    this.wordCount = 20;
    this.speechEnabled = true;
    this.speechRate = 0.8;
    this.gameMode = false;
    this.timeLimit = 0; // 0 means no time limit

    // Audio context for text-to-speech
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.loadVoices();

    // Bind methods
    this.loadVoices = this.loadVoices.bind(this);
  }

  // Load available voices
  loadVoices() {
    this.voices = this.synth.getVoices();
  }

  // Initialize the practice module
  init() {
    // Wait for voices to load
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.loadVoices;
    }

    // Create main UI
    this.createMainUI();
  }

  // Create main selection UI
  createMainUI() {
    // Remove existing dictation container if any
    const existing = document.getElementById('dictation-container');
    if (existing) existing.remove();

    // Reset state to match default UI selections
    this.subject = 'English';
    this.selectedCustomList = null;

    const container = document.createElement('div');
    container.id = 'dictation-container';
    container.className = 'dictation-container';

    // Get current language
    const currentLang = i18n.getLang();

    // Get custom lists
    const customLists = window.wordImport ? window.wordImport.getCustomLists() : [];
    const hasCustomLists = customLists.length > 0;

    container.innerHTML = `
      <div class="dictation-header">
        <button class="back-btn" onclick="DictationPractice.hide()">
          <span class="back-icon">←</span>
          <span data-i18n="back">${i18n.t('back')}</span>
        </button>
        <h2 class="dictation-title" data-i18n="dictationTitle">${i18n.t('dictationTitle')}</h2>
      </div>

      <div class="dictation-content">
        <!-- Import Button -->
        <div class="import-action-section">
          <button class="import-action-btn" onclick="wordImport.createImportUI()">
            <span class="import-icon">📥</span>
            <span class="import-text">
              <span class="import-title" data-i18n="importCustomList">${i18n.t('importCustomList')}</span>
              <span class="import-desc" data-i18n="manageLists">${i18n.t('manageLists')}</span>
            </span>
          </button>
        </div>

        <!-- Selection Panel -->
        <div class="selection-panel">
          <div class="selection-section">
            <label data-i18n="selectGrade">${i18n.t('selectGrade')}</label>
            <div class="grade-selector">
              <button class="grade-btn active" data-grade="grade5" onclick="dictationPractice.selectGrade('grade5')">
                <span class="grade-number">5</span>
                <span class="grade-label" data-i18n="grade5">${i18n.t('grade5')}</span>
              </button>
              <button class="grade-btn" data-grade="grade6" onclick="dictationPractice.selectGrade('grade6')">
                <span class="grade-number">6</span>
                <span class="grade-label" data-i18n="grade6">${i18n.t('grade6')}</span>
              </button>
            </div>
          </div>

          ${hasCustomLists ? `
            <div class="selection-section">
              <label data-i18n="myCustomLists">${i18n.t('myCustomLists')}</label>
              <div class="custom-lists-selector">
                ${customLists.map(list => `
                  <button class="custom-list-btn" data-list="${list.name}" onclick="dictationPractice.selectCustomList('${list.name}')">
                    <span class="list-icon">${list.language === 'English' ? '🇬🇧' : '🇫🇷'}</span>
                    <span class="list-name">${list.name}</span>
                    <span class="list-count">${list.wordCount} words</span>
                  </button>
                `).join('')}
              </div>
            </div>

            <div class="selection-divider">
              <span data-i18n="or">${i18n.t('or')}</span>
            </div>
          ` : ''}

          <div class="selection-section">
            <label data-i18n="selectSubject">${i18n.t('selectSubject')}</label>
            <div class="subject-selector">
              <button class="subject-btn active" data-subject="English" onclick="dictationPractice.selectSubject('English')">
                <span class="subject-icon">🇬🇧</span>
                <span data-i18n="english">${i18n.t('english')}</span>
              </button>
              <button class="subject-btn" data-subject="French" onclick="dictationPractice.selectSubject('French')">
                <span class="subject-icon">🇫🇷</span>
                <span data-i18n="french">${i18n.t('french')}</span>
              </button>
            </div>
          </div>

          <div class="selection-section">
            <label data-i18n="selectCategory">${i18n.t('selectCategory')}</label>
            <select id="category-select" class="category-select" onchange="dictationPractice.selectCategory(this.value)">
              <option value="mixed" data-i18n="mixedCategory">${i18n.t('mixedCategory')}</option>
            </select>
          </div>

          <div class="selection-section">
            <label data-i18n="difficulty">${i18n.t('difficulty')}</label>
            <div class="difficulty-selector">
              <button class="difficulty-btn active" data-difficulty="easy" onclick="dictationPractice.selectDifficulty('easy')">
                <span data-i18n="easy">${i18n.t('easy')}</span>
              </button>
              <button class="difficulty-btn" data-difficulty="normal" onclick="dictationPractice.selectDifficulty('normal')">
                <span data-i18n="normal">${i18n.t('normal')}</span>
              </button>
              <button class="difficulty-btn" data-difficulty="hard" onclick="dictationPractice.selectDifficulty('hard')">
                <span data-i18n="hard">${i18n.t('hard')}</span>
              </button>
            </div>
          </div>

          <div class="selection-section">
            <label data-i18n="practiceMode">${i18n.t('practiceMode')}</label>
            <div class="mode-selector">
              <label class="mode-option">
                <input type="checkbox" id="game-mode" onchange="dictationPractice.toggleGameMode(this.checked)">
                <span data-i18n="gameMode">${i18n.t('gameMode')}</span>
                <span class="mode-badge">🎮</span>
              </label>
              <label class="mode-option">
                <input type="checkbox" id="timed-mode" onchange="dictationPractice.toggleTimedMode(this.checked)">
                <span data-i18n="timedMode">${i18n.t('timedMode')}</span>
                <span class="mode-badge">⏱️</span>
              </label>
            </div>
          </div>

          <div class="selection-section">
            <label data-i18n="wordCount">${i18n.t('wordCount')}</label>
            <div class="count-selector">
              <button class="count-btn ${this.wordCount === 10 ? 'active' : ''}" data-count="10" onclick="dictationPractice.selectWordCount(10)">10</button>
              <button class="count-btn ${this.wordCount === 20 ? 'active' : ''}" data-count="20" onclick="dictationPractice.selectWordCount(20)">20</button>
              <button class="count-btn ${this.wordCount === 30 ? 'active' : ''}" data-count="30" onclick="dictationPractice.selectWordCount(30)">30</button>
            </div>
          </div>

          <button class="start-btn" onclick="dictationPractice.startPractice()">
            <span class="start-icon">▶</span>
            <span data-i18n="startPractice">${i18n.t('startPractice')}</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(container);

    // Populate categories based on selection
    this.updateCategories();

    // Animate in
    setTimeout(() => container.classList.add('active'), 10);
  }

  // Update category options
  updateCategories() {
    const select = document.getElementById('category-select');
    if (!select) return;

    const categories = SpellingWords.getCategories(this.grade, this.subject);
    select.innerHTML = `<option value="mixed">${i18n.t('mixedCategory')}</option>`;

    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = i18n.t(cat) || cat;
      select.appendChild(option);
    });
  }

  // Select grade
  selectGrade(grade) {
    this.grade = grade;
    this.selectedCustomList = null;
    document.querySelectorAll('.grade-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.grade === grade);
    });
    document.querySelectorAll('.custom-list-btn')?.forEach(btn => {
      btn.classList.remove('selected');
    });
    this.updateCategories();
  }

  // Select custom list
  selectCustomList(listName) {
    this.selectedCustomList = listName;

    // Update UI
    document.querySelectorAll('.custom-list-btn')?.forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.list === listName);
    });

    // Get the list
    const customList = window.wordImport?.getCustomList(listName);
    if (customList) {
      this.currentWords = customList.words;
      this.subject = customList.language;
    }
  }

  // Select subject
  selectSubject(subject) {
    this.selectedCustomList = null;
    this.subject = subject;
    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subject === subject);
    });
    this.updateCategories();
  }

  // Select category
  selectCategory(category) {
    this.category = category;
  }

  // Select difficulty
  selectDifficulty(difficulty) {
    this.difficulty = difficulty;
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
    });
  }

  // Toggle game mode
  toggleGameMode(enabled) {
    this.gameMode = enabled;
  }

  // Toggle timed mode
  toggleTimedMode(enabled) {
    if (enabled) {
      this.timeLimit = 30; // 30 seconds per word
    } else {
      this.timeLimit = 0;
    }
  }

  // Select word count
  selectWordCount(count) {
    this.wordCount = count;
    document.querySelectorAll('.count-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.count) === count);
    });
  }

  // Start practice
  startPractice() {
    // Check if using custom list
    if (this.selectedCustomList) {
      const customList = window.wordImport?.getCustomList(this.selectedCustomList);
      if (customList) {
        this.currentWords = [...customList.words];
      }
    } else {
      // Get words from predefined lists
      if (this.category === 'mixed') {
        this.currentWords = SpellingWords.getMixedWords(this.grade, this.subject, this.wordCount || 20);
      } else {
        this.currentWords = SpellingWords.getWords(this.grade, this.subject, this.category, this.wordCount || 20);
      }
    }

    if (this.currentWords.length === 0) {
      alert(i18n.t('noWordsAvailable') || 'No words available');
      return;
    }

    // Reset state
    this.currentIndex = 0;
    this.correctCount = 0;
    this.attempts = 0;

    // Create practice UI
    this.createPracticeUI();
  }

  // Create practice UI
  createPracticeUI() {
    const container = document.getElementById('dictation-container');
    container.classList.add('practice-mode');

    const isFrench = this.subject === 'French';

    container.innerHTML = `
      <div class="dictation-header practice">
        <button class="back-btn" onclick="dictationPractice.createMainUI()">
          <span class="back-icon">←</span>
          <span data-i18n="back">${i18n.t('back')}</span>
        </button>
        <div class="progress-info">
          <span class="progress-text">
            <span id="current-word-num">1</span> / ${this.currentWords.length}
          </span>
          <div class="progress-bar">
            <div class="progress-fill" id="progress-fill" style="width: 0%"></div>
          </div>
        </div>
        <div class="score-info">
          <span class="score-icon">✓</span>
          <span id="correct-count">0</span>
        </div>
      </div>

      <div class="dictation-practice-area">
        ${this.gameMode ? `
          <div class="game-status">
            <div class="game-coins">
              <span class="coins-icon">💰</span>
              <span id="practice-coins">0</span>
            </div>
            <div class="game-streak">
              <span class="streak-icon">🔥</span>
              <span id="practice-streak">0</span>
            </div>
            ${this.timeLimit > 0 ? `
              <div class="timer">
                <span class="timer-icon">⏱️</span>
                <span id="time-remaining">${this.timeLimit}</span>s
              </div>
            ` : ''}
          </div>
        ` : ''}

        <div class="word-display-area">
          <div class="word-number" data-i18n="word">${i18n.t('word')} ${this.currentIndex + 1}</div>

          <div class="audio-controls">
            <button class="play-btn" onclick="dictationPractice.speakWord()">
              <span class="play-icon">🔊</span>
              <span data-i18n="hearWord">${i18n.t('hearWord')}</span>
            </button>
            <button class="hint-btn" onclick="dictationPractice.showHint()">
              <span class="hint-icon">💡</span>
              <span data-i18n="hint">${i18n.t('hint')}</span>
            </button>
          </div>

          <div class="hint-area" id="hint-area" style="display: none;">
            <span class="hint-label">${i18n.t('definition')}: </span>
            <span id="hint-text"></span>
            ${isFrench ? `<br><span class="hint-label">${i18n.t('translation')}: </span><span id="translation-text"></span>` : ''}
          </div>

          <div class="example-area" id="example-area" style="display: none;">
            <span class="example-label">${i18n.t('example')}: </span>
            <span id="example-text"></span>
          </div>
        </div>

        <div class="input-area">
          <input
            type="text"
            id="word-input"
            class="word-input"
            placeholder="${i18n.t('typeWord')}"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            onkeypress="if(event.key === 'Enter') dictationPractice.checkAnswer()"
          >
          <button class="submit-btn" onclick="dictationPractice.checkAnswer()">
            <span data-i18n="check">${i18n.t('check')}</span>
          </button>
        </div>

        <div class="feedback-area" id="feedback-area"></div>

        <div class="action-buttons" id="action-buttons" style="display: none;">
          <button class="next-btn" onclick="dictationPractice.nextWord()">
            <span data-i18n="nextWord">${i18n.t('nextWord')}</span>
            <span class="next-icon">→</span>
          </button>
        </div>
      </div>
    `;

    // Speak the first word
    setTimeout(() => this.speakWord(), 500);
    this.startTimer();
  }

  // Speak the current word
  speakWord() {
    if (!this.synth) return;

    const word = this.currentWords[this.currentIndex];
    const utterance = new SpeechSynthesisUtterance(word.word.trim());

    // Set language
    if (this.subject === 'French') {
      utterance.lang = 'fr-FR';
      utterance.rate = this.speechRate * 0.9;
    } else {
      utterance.lang = 'en-US';
      utterance.rate = this.speechRate;
    }

    // Try to find a matching voice
    const langCode = this.subject === 'French' ? 'fr' : 'en';
    const matchingVoice = this.voices.find(v => v.lang.startsWith(langCode));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    this.synth.speak(utterance);

    // Visual feedback
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
      playBtn.classList.add('playing');
      setTimeout(() => playBtn.classList.remove('playing'), 1000);
    }
  }

  // Show hint
  showHint() {
    const word = this.currentWords[this.currentIndex];
    const hintArea = document.getElementById('hint-area');
    const hintText = document.getElementById('hint-text');
    const translationText = document.getElementById('translation-text');
    const exampleArea = document.getElementById('example-area');
    const exampleText = document.getElementById('example-text');

    hintText.textContent = word.definition;
    if (translationText) {
      translationText.textContent = word.word;
    }
    exampleText.textContent = word.example;

    hintArea.style.display = 'block';
    exampleArea.style.display = 'block';

    // Update button state
    const hintBtn = document.querySelector('.hint-btn');
    hintBtn.classList.add('used');
  }

  // Check answer
  checkAnswer() {
    const input = document.getElementById('word-input');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = this.currentWords[this.currentIndex].word.trim().toLowerCase();

    if (!userAnswer) return;

    this.attempts++;
    const feedbackArea = document.getElementById('feedback-area');
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      this.correctCount++;
      this.handleCorrectAnswer(feedbackArea);
    } else {
      this.handleWrongAnswer(feedbackArea, correctAnswer, userAnswer);
    }

    // Show next button
    document.getElementById('action-buttons').style.display = 'block';
    this.stopTimer();
  }

  // Handle correct answer
  handleCorrectAnswer(feedbackArea) {
    const attempts = this.attempts;
    let message = '';

    if (attempts === 1) {
      message = `<span class="feedback-perfect">${i18n.t('perfect')}</span>`;
      if (this.gameMode && window.gameManager) {
        window.gameManager.addCoins(10);
        window.gameManager.addStreak();
      }
    } else {
      message = `<span class="feedback-correct">${i18n.t('gotIt').replace('{attempts}', attempts)}</span>`;
      if (this.gameMode && window.gameManager) {
        window.gameManager.addCoins(5);
      }
    }

    feedbackArea.innerHTML = message;

    // Update UI
    document.getElementById('correct-count').textContent = this.correctCount;
    if (this.gameMode && window.gameManager) {
      const state = window.gameManager.gameState;
      document.getElementById('practice-coins').textContent = state.coins;
      document.getElementById('practice-streak').textContent = state.streak;
    }

    // Disable input
    document.getElementById('word-input').disabled = true;
  }

  // Handle wrong answer
  handleWrongAnswer(feedbackArea, correctAnswer, userAnswer) {
    const word = this.currentWords[this.currentIndex];

    feedbackArea.innerHTML = `
      <div class="feedback-wrong">
        <div class="wrong-message">${i18n.t('wrong')}</div>
        <div class="answer-comparison">
          <div class="your-answer">
            <span class="label">${i18n.t('yourAnswer')}:</span>
            <span class="answer-text wrong-text">${userAnswer}</span>
          </div>
          <div class="correct-answer">
            <span class="label">${i18n.t('correctAnswer')}:</span>
            <span class="answer-text correct-text">${correctAnswer}</span>
          </div>
        </div>
        ${this.getSpellingHint(correctAnswer, userAnswer)}
      </div>
    `;

    if (this.gameMode && window.gameManager) {
      window.gameManager.resetStreak();
    }
  }

  // Get spelling hint
  getSpellingHint(correct, user) {
    const diff = this.getDifference(correct, user);
    if (!diff) return '';

    return `<div class="spelling-hint">${i18n.t('spellingHint')}: ${diff}</div>`;
  }

  // Get difference between strings
  getDifference(correct, user) {
    if (correct === user) return '';

    // Find first difference
    for (let i = 0; i < Math.min(correct.length, user.length); i++) {
      if (correct[i] !== user[i]) {
        return `${i18n.t('checkPosition')} ${i + 1}: "${user[i]}" → "${correct[i]}"`;
      }
    }

    if (correct.length > user.length) {
      return `${i18n.t('missingLetters')}: ${correct.slice(user.length)}`;
    }

    return '';
  }

  // Next word
  nextWord() {
    this.currentIndex++;
    this.attempts = 0;

    if (this.currentIndex >= this.currentWords.length) {
      this.showResults();
    } else {
      this.createPracticeUI();
    }
  }

  // Show results
  showResults() {
    const container = document.getElementById('dictation-container');
    const accuracy = Math.round((this.correctCount / this.currentWords.length) * 100);

    let message = '';
    if (accuracy === 100) {
      message = `<span class="result-perfect">🌟 ${i18n.t('perfectScore')}</span>`;
    } else if (accuracy >= 80) {
      message = `<span class="result-great">🎉 ${i18n.t('greatJob')}</span>`;
    } else if (accuracy >= 60) {
      message = `<span class="result-good">👍 ${i18n.t('goodEffort')}</span>`;
    } else {
      message = `<span class="result-keep">💪 ${i18n.t('keepPracticing')}</span>`;
    }

    // Get wrong words for review
    const wrongWords = this.currentWords.filter((word, index) => {
      // This is simplified - in practice, you'd track which words were wrong
      return false;
    });

    container.innerHTML = `
      <div class="dictation-header">
        <button class="back-btn" onclick="DictationPractice.hide()">
          <span class="back-icon">←</span>
          <span data-i18n="back">${i18n.t('back')}</span>
        </button>
        <h2 class="dictation-title" data-i18n="practiceComplete">${i18n.t('practiceComplete')}</h2>
      </div>

      <div class="dictation-results">
        <div class="result-message">${message}</div>

        <div class="result-stats">
          <div class="stat-circle">
            <div class="stat-value">${accuracy}%</div>
            <div class="stat-label">${i18n.t('accuracy')}</div>
          </div>
          <div class="stat-details">
            <div class="stat-row">
              <span class="stat-label">${i18n.t('correct')}</span>
              <span class="stat-value correct">${this.correctCount}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">${i18n.t('incorrect')}</span>
              <span class="stat-value wrong">${this.currentWords.length - this.correctCount}</span>
            </div>
            <div class="stat-row">
              <span class="stat-label">${i18n.t('totalWords')}</span>
              <span class="stat-value">${this.currentWords.length}</span>
            </div>
          </div>
        </div>

        ${this.gameMode && window.gameManager ? `
          <div class="game-rewards">
            <div class="reward-item">
              <span class="reward-icon">💰</span>
              <span class="reward-label">${i18n.t('coinsEarned')}</span>
              <span class="reward-value">+${window.gameManager.gameState.coins}</span>
            </div>
            <div class="reward-item">
              <span class="reward-icon">🔥</span>
              <span class="reward-label">${i18n.t('bestStreak')}</span>
              <span class="reward-value">${window.gameManager.gameState.streak}</span>
            </div>
          </div>
        ` : ''}

        <div class="result-actions">
          <button class="retry-btn" onclick="dictationPractice.startPractice()">
            <span class="retry-icon">🔄</span>
            <span data-i18n="tryAgain">${i18n.t('tryAgain')}</span>
          </button>
          <button class="new-btn" onclick="dictationPractice.createMainUI()">
            <span class="new-icon">✨</span>
            <span data-i18n="newPractice">${i18n.t('newPractice')}</span>
          </button>
        </div>
      </div>
    `;
  }

  // Timer functions
  startTimer() {
    if (this.timeLimit === 0) return;

    this.timeLeft = this.timeLimit;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerDisplay = document.getElementById('time-remaining');
      if (timerDisplay) {
        timerDisplay.textContent = this.timeLeft;
        if (this.timeLeft <= 5) {
          timerDisplay.parentElement.classList.add('urgent');
        }
      }

      if (this.timeLeft <= 0) {
        this.stopTimer();
        // Auto-submit or show time's up
        this.checkAnswer();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // Hide dictation module
  static hide() {
    const container = document.getElementById('dictation-container');
    if (container) {
      container.classList.remove('active');
      setTimeout(() => container.remove(), 300);
    }
  }

  // Show dictation module
  static show() {
    if (!window.dictationPractice) {
      window.dictationPractice = new DictationPractice();
    }
    window.dictationPractice.init();
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.DictationPractice = DictationPractice;
  window.dictationPractice = new DictationPractice();
}

export default DictationPractice;
