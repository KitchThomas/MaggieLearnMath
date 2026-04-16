/**
 * Sentence Dictation Practice Module
 * Listen to sentences and type them out with progressive hints and character-level diff
 */

class SentenceDictationPractice {
  constructor() {
    this.currentSentences = [];
    this.currentIndex = 0;
    this.results = [];
    this.grade = 'grade5';
    this.subject = 'English';
    this.category = 'mixed';
    this.difficulty = 'normal';
    this.sentenceCount = 5;
    this.gameMode = false;
    this.timeLimit = 0;
    this.hintLevel = 0;
    this.replayCount = 0;
    this.speechRate = 0.7;
    this.speedMode = 'slow';

    this.synth = window.speechSynthesis;
    this.voices = [];
    this.loadVoices();
    this.loadVoices = this.loadVoices.bind(this);
  }

  loadVoices() {
    this.voices = this.synth.getVoices();
  }

  init() {
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = this.loadVoices;
    }
    this.createMainUI();
  }

  // ========== Selection UI ==========

  createMainUI() {
    const existing = document.getElementById('sentence-dictation-container');
    if (existing) existing.remove();

    // Reset state to match default UI selections
    this.subject = 'English';

    const container = document.createElement('div');
    container.id = 'sentence-dictation-container';
    container.className = 'sentence-dictation-container';

    container.innerHTML = `
      <div class="sd-header">
        <button class="sd-back-btn" onclick="SentenceDictationPractice.hide()">
          <span class="sd-back-icon">←</span>
          <span>${i18n.t('back')}</span>
        </button>
        <h2 class="sd-title">📝 ${i18n.t('sentenceDictationTitle')}</h2>
      </div>

      <div class="sd-content">
        <div class="sd-selection-panel">
          <div class="sd-selection-section">
            <label>${i18n.t('selectGrade')}</label>
            <div class="sd-grade-selector">
              <button class="sd-grade-btn active" data-grade="grade5" onclick="sentenceDictation.selectGrade('grade5')">
                <span class="sd-grade-number">5</span>
                <span>${i18n.t('grade5')}</span>
              </button>
              <button class="sd-grade-btn" data-grade="grade6" onclick="sentenceDictation.selectGrade('grade6')">
                <span class="sd-grade-number">6</span>
                <span>${i18n.t('grade6')}</span>
              </button>
            </div>
          </div>

          <div class="sd-selection-section">
            <label>${i18n.t('selectSubject')}</label>
            <div class="sd-subject-selector">
              <button class="sd-subject-btn active" data-subject="English" onclick="sentenceDictation.selectSubject('English')">
                <span>🇬🇧</span> <span>${i18n.t('english')}</span>
              </button>
              <button class="sd-subject-btn" data-subject="French" onclick="sentenceDictation.selectSubject('French')">
                <span>🇫🇷</span> <span>${i18n.t('french')}</span>
              </button>
            </div>
          </div>

          <div class="sd-selection-section">
            <label>${i18n.t('selectCategory')}</label>
            <select id="sd-category-select" class="sd-category-select" onchange="sentenceDictation.selectCategory(this.value)">
              <option value="mixed">${i18n.t('mixedCategory')}</option>
            </select>
          </div>

          <div class="sd-selection-section">
            <label>${i18n.t('difficulty')}</label>
            <div class="sd-difficulty-selector">
              <button class="sd-diff-btn active" data-difficulty="easy" onclick="sentenceDictation.selectDifficulty('easy')">${i18n.t('easy')}</button>
              <button class="sd-diff-btn" data-difficulty="normal" onclick="sentenceDictation.selectDifficulty('normal')">${i18n.t('normal')}</button>
              <button class="sd-diff-btn" data-difficulty="hard" onclick="sentenceDictation.selectDifficulty('hard')">${i18n.t('hard')}</button>
            </div>
          </div>

          <div class="sd-selection-section">
            <label>${i18n.t('sentenceCount')}</label>
            <div class="sd-count-selector">
              <button class="sd-count-btn active" data-count="3" onclick="sentenceDictation.selectSentenceCount(3)">3</button>
              <button class="sd-count-btn" data-count="5" onclick="sentenceDictation.selectSentenceCount(5)">5</button>
              <button class="sd-count-btn" data-count="10" onclick="sentenceDictation.selectSentenceCount(10)">10</button>
            </div>
          </div>

          <div class="sd-selection-section">
            <label>${i18n.t('practiceMode')}</label>
            <div class="sd-mode-selector">
              <label class="sd-mode-option">
                <input type="checkbox" id="sd-game-mode" onchange="sentenceDictation.toggleGameMode(this.checked)">
                <span>${i18n.t('gameMode')}</span> <span class="sd-mode-badge">🎮</span>
              </label>
              <label class="sd-mode-option">
                <input type="checkbox" id="sd-timed-mode" onchange="sentenceDictation.toggleTimedMode(this.checked)">
                <span>${i18n.t('timedMode')}</span> <span class="sd-mode-badge">⏱️</span>
              </label>
            </div>
          </div>

          <button class="sd-start-btn" onclick="sentenceDictation.startPractice()">
            <span>▶</span> <span>${i18n.t('startPractice')}</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(container);
    this.updateCategories();
    setTimeout(() => container.classList.add('active'), 10);
  }

  // ========== Selection handlers ==========

  selectGrade(grade) {
    this.grade = grade;
    document.querySelectorAll('.sd-grade-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.grade === grade);
    });
    this.updateCategories();
  }

  selectSubject(subject) {
    this.subject = subject;
    document.querySelectorAll('.sd-subject-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subject === subject);
    });
    this.updateCategories();
  }

  selectCategory(category) {
    this.category = category;
  }

  selectDifficulty(difficulty) {
    this.difficulty = difficulty;
    document.querySelectorAll('.sd-diff-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
    });
  }

  selectSentenceCount(count) {
    this.sentenceCount = count;
    document.querySelectorAll('.sd-count-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.count) === count);
    });
  }

  toggleGameMode(enabled) {
    this.gameMode = enabled;
  }

  toggleTimedMode(enabled) {
    this.timeLimit = enabled ? 60 : 0;
  }

  updateCategories() {
    const select = document.getElementById('sd-category-select');
    if (!select) return;

    const subjectKey = this.subject === 'French' ? 'french' : this.subject.toLowerCase();
    const categories = SentenceData.getCategories(this.grade, subjectKey);
    select.innerHTML = `<option value="mixed">${i18n.t('mixedCategory')}</option>`;
    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = i18n.t(cat) || cat.charAt(0).toUpperCase() + cat.slice(1);
      select.appendChild(option);
    });
  }

  // ========== Practice flow ==========

  startPractice() {
    const subjectKey = this.subject === 'French' ? 'french' : this.subject.toLowerCase();
    const maxDifficulty = this.difficulty === 'easy' ? 1 : this.difficulty === 'normal' ? 2 : 3;

    let sentences;
    if (this.category === 'mixed') {
      sentences = SentenceData.getMixedSentences(this.grade, subjectKey, this.sentenceCount, maxDifficulty);
    } else {
      sentences = SentenceData.getSentences(this.grade, subjectKey, this.category, this.sentenceCount, maxDifficulty);
    }

    // Also pull from spelling-words examples
    const spellingSentences = SentenceData.extractFromSpellingWords(this.grade, subjectKey);
    if (spellingSentences.length > 0 && sentences.length < this.sentenceCount) {
      const extra = SentenceData._shuffleArray(spellingSentences)
        .filter(s => s.difficulty <= maxDifficulty)
        .slice(0, this.sentenceCount - sentences.length);
      sentences = sentences.concat(extra);
    }

    if (sentences.length === 0) {
      alert(i18n.t('noWordsAvailable') || 'No sentences available');
      return;
    }

    this.currentSentences = sentences;
    this.currentIndex = 0;
    this.results = [];
    this.hintLevel = 0;
    this.replayCount = 0;

    this.createPracticeUI();
  }

  createPracticeUI() {
    const container = document.getElementById('sentence-dictation-container');
    container.classList.add('practice-mode');

    const sentence = this.currentSentences[this.currentIndex];
    this.hintLevel = 0;
    this.replayCount = 0;

    container.innerHTML = `
      <div class="sd-header practice">
        <button class="sd-back-btn" onclick="sentenceDictation.createMainUI()">
          <span class="sd-back-icon">←</span>
          <span>${i18n.t('back')}</span>
        </button>
        <div class="sd-progress-info">
          <span class="sd-progress-text">
            <span id="sd-current-num">${this.currentIndex + 1}</span> / ${this.currentSentences.length}
          </span>
          <div class="sd-progress-bar">
            <div class="sd-progress-fill" id="sd-progress-fill" style="width: ${(this.currentIndex / this.currentSentences.length) * 100}%"></div>
          </div>
        </div>
        <div class="sd-score-info">
          <span>✓</span>
          <span id="sd-correct-count">${this.results.filter(r => r.accuracy >= 95).length}</span>
        </div>
      </div>

      <div class="sd-practice-area">
        ${this.gameMode ? `
          <div class="sd-game-status">
            <div class="sd-game-coins"><span>💰</span> <span id="sd-coins">0</span></div>
            <div class="sd-game-streak"><span>🔥</span> <span id="sd-streak">0</span></div>
            ${this.timeLimit > 0 ? `
              <div class="sd-timer"><span>⏱️</span> <span id="sd-time">${this.timeLimit}</span>s</div>
            ` : ''}
          </div>
        ` : ''}

        <div class="sd-sentence-display">
          <div class="sd-sentence-label">${i18n.t('sentence')} ${this.currentIndex + 1}</div>

          <div class="sd-audio-controls">
            <button class="sd-play-btn" onclick="sentenceDictation.speakSentence()">
              <span>🔊</span> <span>${i18n.t('hearSentence')}</span>
            </button>
            <button class="sd-speed-btn" onclick="sentenceDictation.toggleSpeed()">
              <span>${i18n.t('playSpeed')}:</span> <span id="sd-speed-label">${i18n.t(this.speedMode)}</span>
            </button>
            <button class="sd-hint-btn" onclick="sentenceDictation.showHint()">
              <span>💡</span> <span>${i18n.t('hint')}</span>
              <span class="sd-hint-level" id="sd-hint-level">0/3</span>
            </button>
          </div>

          <div class="sd-hint-display" id="sd-hint-display" style="display: none;">
            <div class="sd-hint-content" id="sd-hint-content"></div>
          </div>
        </div>

        <div class="sd-input-area">
          <textarea
            id="sd-sentence-input"
            class="sd-sentence-input"
            placeholder="${i18n.t('typeSentence')}"
            rows="3"
            oninput="sentenceDictation.autoResize(this)"
            onkeydown="if(event.key === 'Enter' && event.ctrlKey) { event.preventDefault(); sentenceDictation.checkAnswer(); }"
          ></textarea>
          <div class="sd-char-counter">
            <span id="sd-char-count">0</span> ${i18n.t('characters')}
          </div>
          <button class="sd-submit-btn" onclick="sentenceDictation.checkAnswer()">
            ${i18n.t('check')}
          </button>
        </div>

        <div class="sd-feedback-area" id="sd-feedback-area"></div>

        <div class="sd-action-buttons" id="sd-action-buttons" style="display: none;">
          <button class="sd-next-btn" onclick="sentenceDictation.nextSentence()">
            ${i18n.t('nextWord')} <span>→</span>
          </button>
        </div>
      </div>
    `;

    // Track character count
    const textarea = document.getElementById('sd-sentence-input');
    textarea.addEventListener('input', () => {
      document.getElementById('sd-char-count').textContent = textarea.value.length;
    });

    // Speak the sentence after a short delay
    setTimeout(() => this.speakSentence(), 500);
    this.startTimer();
  }

  // ========== TTS ==========

  speakSentence() {
    if (!this.synth) return;
    this.synth.cancel();

    const sentence = this.currentSentences[this.currentIndex];
    const utterance = new SpeechSynthesisUtterance(sentence.sentence);

    const isFrench = this.subject === 'French';
    utterance.lang = isFrench ? 'fr-FR' : 'en-US';
    utterance.rate = this.speedMode === 'slow' ? 0.6 : 0.85;
    utterance.pitch = 1;

    const langCode = isFrench ? 'fr' : 'en';
    const matchingVoice = this.voices.find(v => v.lang.startsWith(langCode));
    if (matchingVoice) utterance.voice = matchingVoice;

    this.synth.speak(utterance);
    this.replayCount++;

    const playBtn = document.querySelector('.sd-play-btn');
    if (playBtn) {
      playBtn.classList.add('playing');
      utterance.onend = () => playBtn.classList.remove('playing');
    }
  }

  toggleSpeed() {
    this.speedMode = this.speedMode === 'slow' ? 'normal' : 'slow';
    const label = document.getElementById('sd-speed-label');
    if (label) label.textContent = i18n.t(this.speedMode);
  }

  // ========== Progressive hints ==========

  showHint() {
    this.hintLevel = Math.min(this.hintLevel + 1, 3);
    const display = document.getElementById('sd-hint-display');
    const content = document.getElementById('sd-hint-content');
    const levelEl = document.getElementById('sd-hint-level');

    if (levelEl) levelEl.textContent = `${this.hintLevel}/3`;
    display.style.display = 'block';

    const sentence = this.currentSentences[this.currentIndex].sentence;
    content.innerHTML = this.renderHint(sentence, this.hintLevel);

    const hintBtn = document.querySelector('.sd-hint-btn');
    if (hintBtn && this.hintLevel >= 3) hintBtn.classList.add('maxed');
  }

  renderHint(sentence, level) {
    const words = sentence.split(' ');

    if (level === 1) {
      const blanks = words.map(w => '_'.repeat(w.length)).join('  ');
      return `
        <div class="sd-hint-level-badge">${i18n.t('hintLevel')} 1</div>
        <div class="sd-hint-word-count">${i18n.t('hintLevel1').replace('{count}', words.length)}</div>
        <div class="sd-hint-blanks">${blanks}</div>
      `;
    }

    if (level === 2) {
      const partial = words.map(w => {
        if (w.length <= 1) return w;
        return w[0] + '_'.repeat(w.length - 1);
      }).join('  ');
      return `
        <div class="sd-hint-level-badge">${i18n.t('hintLevel')} 2</div>
        <div class="sd-hint-blanks">${partial}</div>
      `;
    }

    if (level === 3) {
      const partial = words.map(w => {
        if (w.length <= 2) return w;
        let result = '';
        for (let i = 0; i < w.length; i++) {
          result += (i % 2 === 0) ? w[i] : '_';
        }
        return result;
      }).join('  ');
      return `
        <div class="sd-hint-level-badge">${i18n.t('hintLevel')} 3</div>
        <div class="sd-hint-blanks">${partial}</div>
      `;
    }

    return '';
  }

  // ========== Answer checking ==========

  checkAnswer() {
    const textarea = document.getElementById('sd-sentence-input');
    const userAnswer = textarea.value.trim();
    if (!userAnswer) return;

    this.stopTimer();

    const correctSentence = this.currentSentences[this.currentIndex].sentence;
    const diff = this.compareAnswers(userAnswer, correctSentence);

    const feedbackArea = document.getElementById('sd-feedback-area');
    this.renderDiff(feedbackArea, diff);

    // Record result
    this.results.push({
      sentence: correctSentence,
      userAnswer: userAnswer,
      accuracy: diff.accuracy,
      hintLevel: this.hintLevel,
      replays: this.replayCount
    });

    // Game integration
    if (this.gameMode && window.gameManager) {
      if (diff.accuracy >= 95) {
        window.gameManager.answerCorrect();
      } else {
        window.gameManager.answerWrong();
      }
      this.updateGameUI();
    }

    // Update progress
    document.getElementById('sd-correct-count').textContent =
      this.results.filter(r => r.accuracy >= 95).length;

    document.getElementById('sd-action-buttons').style.display = 'block';
    textarea.disabled = true;
  }

  compareAnswers(userAnswer, correctAnswer) {
    const normalize = (s) => s.replace(/\s+/g, ' ').trim();

    const userWords = normalize(userAnswer).split(' ');
    const correctWords = normalize(correctAnswer).split(' ');

    const maxLen = Math.max(userWords.length, correctWords.length);
    const wordResults = [];
    let correctChars = 0;
    let totalChars = 0;

    for (let i = 0; i < maxLen; i++) {
      const expected = correctWords[i] || '';
      const actual = userWords[i] || '';

      if (i >= correctWords.length) {
        // Extra word
        wordResults.push({ expected: '', actual, isCorrect: false, charDiffs: actual.split('').map(c => ({ char: c, status: 'extra' })) });
        totalChars += actual.length;
      } else if (i >= userWords.length) {
        // Missing word
        wordResults.push({ expected, actual: '', isCorrect: false, charDiffs: expected.split('').map(c => ({ char: c, status: 'missing' })) });
        correctChars += 0;
        totalChars += expected.length;
      } else {
        const maxChars = Math.max(expected.length, actual.length);
        const charDiffs = [];
        let wordCorrect = true;

        for (let j = 0; j < maxChars; j++) {
          const expChar = expected[j] || '';
          const actChar = actual[j] || '';

          if (!expChar) {
            charDiffs.push({ char: actChar, status: 'extra' });
            wordCorrect = false;
            totalChars++;
          } else if (!actChar) {
            charDiffs.push({ char: expChar, status: 'missing' });
            wordCorrect = false;
            correctChars++;
            totalChars++;
          } else if (expChar.toLowerCase() === actChar.toLowerCase()) {
            charDiffs.push({ char: actChar, status: 'correct' });
            correctChars++;
            totalChars++;
          } else {
            charDiffs.push({ char: actChar, expected: expChar, status: 'wrong' });
            wordCorrect = false;
            totalChars++;
          }
        }

        wordResults.push({ expected, actual, isCorrect: wordCorrect, charDiffs });
      }
    }

    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;
    const correctWordsCount = wordResults.filter(w => w.isCorrect).length;

    return {
      words: wordResults,
      accuracy,
      wordAccuracy: Math.round((correctWordsCount / correctWords.length) * 100),
      correctChars,
      totalChars
    };
  }

  renderDiff(feedbackArea, diff) {
    let message = '';
    if (diff.accuracy >= 95) {
      message = `<div class="sd-feedback-perfect">🌟 ${i18n.t('perfect')}! ${diff.accuracy}%</div>`;
    } else if (diff.accuracy >= 80) {
      message = `<div class="sd-feedback-partial">👍 ${i18n.t('partialCredit').replace('{accuracy}', diff.accuracy)}</div>`;
    } else {
      message = `<div class="sd-feedback-wrong-msg">💪 ${i18n.t('keepPracticing')} ${diff.accuracy}%</div>`;
    }

    const diffHtml = diff.words.map(w => {
      const chars = w.charDiffs.map(c => {
        const cls = c.status === 'correct' ? 'sd-diff-correct' :
                    c.status === 'wrong' ? 'sd-diff-wrong' :
                    c.status === 'missing' ? 'sd-diff-missing' : 'sd-diff-extra';
        const title = c.expected ? `title="${i18n.t('correctAnswer')}: ${c.expected}"` : '';
        return `<span class="${cls}" ${title}>${c.char || '·'}</span>`;
      }).join('');
      return `<span class="sd-diff-word${w.isCorrect ? ' sd-word-correct' : ''}">${chars}</span>`;
    }).join(' ');

    feedbackArea.innerHTML = `
      ${message}
      <div class="sd-diff-result">
        <div class="sd-diff-label">${i18n.t('yourAnswer')}:</div>
        <div class="sd-diff-text">${diffHtml}</div>
      </div>
      <div class="sd-diff-stats">
        <span class="sd-stat-badge sd-stat-accuracy">${diff.accuracy}% ${i18n.t('accuracyScore')}</span>
        <span class="sd-stat-badge sd-stat-words">${diff.wordAccuracy}% ${i18n.t('wordsCorrect')}</span>
        <span class="sd-stat-badge sd-stat-chars">${diff.correctChars}/${diff.totalChars} ${i18n.t('charactersCorrect')}</span>
      </div>
    `;
  }

  // ========== Game integration ==========

  updateGameUI() {
    if (!this.gameMode || !window.gameManager) return;
    const state = window.gameManager.getDisplayState();
    const coinsEl = document.getElementById('sd-coins');
    const streakEl = document.getElementById('sd-streak');
    if (coinsEl) coinsEl.textContent = state.coins;
    if (streakEl) streakEl.textContent = state.streak;

    if (window.updateGameUI) {
      window.updateGameUI(state);
    }
  }

  // ========== Navigation ==========

  nextSentence() {
    this.currentIndex++;
    if (this.currentIndex >= this.currentSentences.length) {
      this.showResults();
    } else {
      this.createPracticeUI();
    }
  }

  showResults() {
    const container = document.getElementById('sentence-dictation-container');
    const avgAccuracy = Math.round(
      this.results.reduce((sum, r) => sum + r.accuracy, 0) / this.results.length
    );
    const perfectCount = this.results.filter(r => r.accuracy >= 95).length;

    let message = '';
    if (avgAccuracy >= 95) {
      message = `<span class="sd-result-perfect">🌟 ${i18n.t('perfectScore')}</span>`;
    } else if (avgAccuracy >= 80) {
      message = `<span class="sd-result-great">🎉 ${i18n.t('greatJob')}</span>`;
    } else if (avgAccuracy >= 60) {
      message = `<span class="sd-result-good">👍 ${i18n.t('goodEffort')}</span>`;
    } else {
      message = `<span class="sd-result-keep">💪 ${i18n.t('keepPracticing')}</span>`;
    }

    const reviewList = this.results.map((r, i) => {
      const accClass = r.accuracy >= 95 ? 'sd-review-perfect' :
                       r.accuracy >= 80 ? 'sd-review-good' : 'sd-review-needs-work';
      return `
        <div class="sd-review-item ${accClass}">
          <div class="sd-review-num">${i + 1}</div>
          <div class="sd-review-sentence">${r.sentence}</div>
          <div class="sd-review-accuracy">${r.accuracy}%</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="sd-header">
        <button class="sd-back-btn" onclick="SentenceDictationPractice.hide()">
          <span class="sd-back-icon">←</span> <span>${i18n.t('back')}</span>
        </button>
        <h2 class="sd-title">${i18n.t('practiceComplete')}</h2>
      </div>

      <div class="sd-results">
        <div class="sd-result-message">${message}</div>

        <div class="sd-result-stats">
          <div class="sd-stat-circle">
            <div class="sd-stat-value">${avgAccuracy}%</div>
            <div class="sd-stat-label">${i18n.t('averageAccuracy')}</div>
          </div>
          <div class="sd-stat-details">
            <div class="sd-stat-row">
              <span>${i18n.t('accuracyScore')}</span>
              <span>${avgAccuracy}%</span>
            </div>
            <div class="sd-stat-row">
              <span>${i18n.t('correct')}</span>
              <span>${perfectCount}</span>
            </div>
            <div class="sd-stat-row">
              <span>${i18n.t('totalSentences') || i18n.t('totalWords')}</span>
              <span>${this.results.length}</span>
            </div>
          </div>
        </div>

        <div class="sd-review-section">
          <h3>${i18n.t('sentenceReview')}</h3>
          <div class="sd-review-list">${reviewList}</div>
        </div>

        <div class="sd-result-actions">
          <button class="sd-retry-btn" onclick="sentenceDictation.startPractice()">
            <span>🔄</span> ${i18n.t('tryAgain')}
          </button>
          <button class="sd-new-btn" onclick="sentenceDictation.createMainUI()">
            <span>✨</span> ${i18n.t('newPractice')}
          </button>
        </div>
      </div>
    `;
  }

  // ========== Timer ==========

  startTimer() {
    if (this.timeLimit === 0) return;
    this.timeLeft = this.timeLimit;
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const el = document.getElementById('sd-time');
      if (el) {
        el.textContent = this.timeLeft;
        if (this.timeLeft <= 10) el.parentElement.classList.add('urgent');
      }
      if (this.timeLeft <= 0) {
        this.stopTimer();
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

  // ========== Utilities ==========

  autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
  }

  // ========== Static methods ==========

  static hide() {
    const container = document.getElementById('sentence-dictation-container');
    if (container) {
      container.classList.remove('active');
      setTimeout(() => container.remove(), 300);
    }
  }

  static show() {
    if (!window.sentenceDictation) {
      window.sentenceDictation = new SentenceDictationPractice();
    }
    window.sentenceDictation.init();
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.SentenceDictationPractice = SentenceDictationPractice;
  window.sentenceDictation = new SentenceDictationPractice();
}

export default SentenceDictationPractice;
