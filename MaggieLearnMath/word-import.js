/**
 * Word Import Module
 * 单词导入模块 - 支持自定义单词列表导入
 */

class WordImport {
  constructor() {
    this.customLists = this.loadCustomLists();
    this.currentImportFormat = 'manual'; // manual, csv, json
  }

  // Load custom lists from localStorage
  loadCustomLists() {
    const saved = localStorage.getItem('customWordLists');
    return saved ? JSON.parse(saved) : {};
  }

  // Save custom lists to localStorage
  saveCustomLists() {
    localStorage.setItem('customWordLists', JSON.stringify(this.customLists));
  }

  // Create main import UI
  createImportUI() {
    // Remove existing import modal if any
    const existing = document.getElementById('word-import-container');
    if (existing) existing.remove();

    const container = document.createElement('div');
    container.id = 'word-import-container';
    container.className = 'word-import-container';

    container.innerHTML = `
      <div class="import-modal">
        <div class="import-header">
          <h2 class="import-title" data-i18n="importWords">📥 Import Words / 导入单词</h2>
          <button class="close-import-btn" onclick="wordImport.close()">×</button>
        </div>

        <div class="import-content">
          <!-- Import Method Selection -->
          <div class="import-methods">
            <div class="method-tabs">
              <button class="method-tab active" data-method="manual" onclick="wordImport.switchMethod('manual')">
                <span class="method-icon">✏️</span>
                <span data-i18n="manualInput">Manual Input / 手动输入</span>
              </button>
              <button class="method-tab" data-method="csv" onclick="wordImport.switchMethod('csv')">
                <span class="method-icon">📄</span>
                <span>CSV Import / CSV导入</span>
              </button>
              <button class="method-tab" data-method="json" onclick="wordImport.switchMethod('json')">
                <span class="method-icon">{ }</span>
                <span>JSON Import / JSON导入</span>
              </button>
            </div>
          </div>

          <!-- Manual Input Panel -->
          <div class="import-panel active" id="manual-panel">
            <div class="form-group">
              <label data-i18n="listName">List Name / 列表名称</label>
              <input type="text" id="list-name" class="import-input" placeholder="My Custom List / 我的自定义列表">
            </div>

            <div class="form-group">
              <label data-i18n="selectLanguage">Language / 语言</label>
              <select id="list-language" class="import-select">
                <option value="English">English</option>
                <option value="French">Français</option>
              </select>
            </div>

            <div class="form-group">
              <label data-i18n="wordInput">Add Words / 添加单词</label>
              <div class="word-input-row">
                <input type="text" id="new-word" class="import-input" placeholder="Word / 单词" data-i18n-placeholder="enterWord">
                <input type="text" id="new-definition" class="import-input" placeholder="Definition / 定义" data-i18n-placeholder="enterDefinition">
                <input type="text" id="new-example" class="import-input" placeholder="Example / 例句" data-i18n-placeholder="enterExample">
                <button class="add-word-btn" onclick="wordImport.addWord()">+</button>
              </div>
            </div>

            <div class="word-list-preview">
              <div class="preview-header">
                <span data-i18n="wordList">Word List / 单词列表</span>
                <span class="word-count" id="preview-count">0 words</span>
              </div>
              <div class="preview-list" id="preview-list">
                <div class="empty-message" data-i18n="noWordsYet">No words added yet / 还没有添加单词</div>
              </div>
            </div>
          </div>

          <!-- CSV Import Panel -->
          <div class="import-panel" id="csv-panel">
            <div class="form-group">
              <label data-i18n="listName">List Name / 列表名称</label>
              <input type="text" id="csv-list-name" class="import-input" placeholder="My CSV List">
            </div>

            <div class="form-group">
              <label data-i18n="selectLanguage">Language / 语言</label>
              <select id="csv-language" class="import-select">
                <option value="English">English</option>
                <option value="French">Français</option>
              </select>
            </div>

            <div class="form-group">
              <label>CSV Format / CSV格式</label>
              <div class="csv-format-info">
                <code>word,definition,example</code>
                <p class="format-example">hello,a greeting,"Hello, how are you?"</p>
              </div>
            </div>

            <div class="form-group">
              <label>Paste CSV Data / 粘贴CSV数据</label>
              <textarea id="csv-data" class="import-textarea" rows="10" placeholder="hello,a greeting,&quot;Hello, world!&quot;
beautiful,very pretty,&quot;The sunset was beautiful&quot;
adventure,exciting experience,&quot;We went on an adventure&quot;"></textarea>
            </div>

            <button class="preview-csv-btn" onclick="wordImport.previewCSV()">
              <span data-i18n="preview">Preview / 预览</span>
            </button>

            <div class="csv-preview" id="csv-preview"></div>
          </div>

          <!-- JSON Import Panel -->
          <div class="import-panel" id="json-panel">
            <div class="form-group">
              <label data-i18n="listName">List Name / 列表名称</label>
              <input type="text" id="json-list-name" class="import-input" placeholder="My JSON List">
            </div>

            <div class="form-group">
              <label>JSON Format / JSON格式</label>
              <div class="json-format-info">
                <pre><code>[
  {
    "word": "hello",
    "definition": "a greeting",
    "example": "Hello, world!"
  },
  {
    "word": "beautiful",
    "definition": "very pretty",
    "example": "The sunset was beautiful"
  }
]</code></pre>
              </div>
            </div>

            <div class="form-group">
              <label>Paste JSON Data / 粘贴JSON数据</label>
              <textarea id="json-data" class="import-textarea code" rows="10" placeholder='[{"word":"hello","definition":"a greeting","example":"Hello, world!"}]'></textarea>
            </div>

            <button class="preview-json-btn" onclick="wordImport.previewJSON()">
              <span data-i18n="preview">Preview / 预览</span>
            </button>

            <div class="json-preview" id="json-preview"></div>
          </div>

          <!-- Custom Lists Management -->
          <div class="custom-lists-section">
            <h3 class="section-title" data-i18n="myCustomLists">My Custom Lists / 我的自定义列表</h3>
            <div class="custom-lists-grid" id="custom-lists-grid">
              ${this.renderCustomLists()}
            </div>
          </div>
        </div>

        <div class="import-footer">
          <button class="cancel-btn" onclick="wordImport.close()" data-i18n="cancel">Cancel / 取消</button>
          <button class="save-list-btn" onclick="wordImport.saveList()" data-i18n="saveList">Save List / 保存列表</button>
        </div>
      </div>
    `;

    document.body.appendChild(container);

    // Temp word storage for manual input
    this.tempWords = [];

    // Animate in
    setTimeout(() => container.classList.add('active'), 10);
  }

  // Switch import method
  switchMethod(method) {
    this.currentImportFormat = method;

    // Update tabs
    document.querySelectorAll('.method-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.method === method);
    });

    // Update panels
    document.querySelectorAll('.import-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    document.getElementById(`${method}-panel`).classList.add('active');
  }

  // Add word manually
  addWord() {
    const wordInput = document.getElementById('new-word');
    const definitionInput = document.getElementById('new-definition');
    const exampleInput = document.getElementById('new-example');

    const word = wordInput.value.trim();
    const definition = definitionInput.value.trim();
    const example = exampleInput.value.trim();

    if (!word) {
      this.showError(i18n.t('enterWord') || 'Please enter a word');
      return;
    }

    // Check for duplicates
    if (this.tempWords.some(w => w.word.toLowerCase() === word.toLowerCase())) {
      this.showError(i18n.t('wordExists') || 'Word already exists in list');
      return;
    }

    this.tempWords.push({
      word,
      definition: definition || '',
      example: example || ''
    });

    // Clear inputs
    wordInput.value = '';
    definitionInput.value = '';
    exampleInput.value = '';
    wordInput.focus();

    this.updatePreview();
  }

  // Update word preview
  updatePreview() {
    const previewList = document.getElementById('preview-list');
    const countEl = document.getElementById('preview-count');

    countEl.textContent = `${this.tempWords.length} ${i18n.t('words') || 'words'}`;

    if (this.tempWords.length === 0) {
      previewList.innerHTML = `<div class="empty-message">${i18n.t('noWordsYet') || 'No words added yet'}</div>`;
      return;
    }

    previewList.innerHTML = this.tempWords.map((item, index) => `
      <div class="preview-item">
        <span class="preview-word">${item.word}</span>
        <span class="preview-definition">${item.definition}</span>
        <button class="remove-word-btn" onclick="wordImport.removeWord(${index})">×</button>
      </div>
    `).join('');
  }

  // Remove word from temp list
  removeWord(index) {
    this.tempWords.splice(index, 1);
    this.updatePreview();
  }

  // Preview CSV import
  previewCSV() {
    const csvData = document.getElementById('csv-data').value.trim();
    const preview = document.getElementById('csv-preview');

    if (!csvData) {
      preview.innerHTML = '';
      return;
    }

    try {
      const words = this.parseCSV(csvData);
      preview.innerHTML = `
        <div class="import-preview-header">
          <span>${i18n.t('foundWords') || 'Found'} ${words.length} ${i18n.t('words') || 'words'}</span>
        </div>
        <div class="preview-list">
          ${words.slice(0, 10).map(w => `
            <div class="preview-item">
              <span class="preview-word">${w.word}</span>
              <span class="preview-definition">${w.definition}</span>
            </div>
          `).join('')}
          ${words.length > 10 ? `<div class="more-items">... and ${words.length - 10} more</div>` : ''}
        </div>
      `;

      // Store for saving
      this.tempWords = words;
    } catch (error) {
      preview.innerHTML = `<div class="import-error">${error.message}</div>`;
    }
  }

  // Parse CSV data
  parseCSV(csvData) {
    const lines = csvData.split('\n').filter(line => line.trim());
    const words = [];

    for (const line of lines) {
      // Handle quoted strings
      const matches = this.parseCSVLine(line);
      if (matches && matches[0]) {
        words.push({
          word: matches[0]?.trim() || '',
          definition: matches[1]?.trim() || '',
          example: matches[2]?.trim() || ''
        });
      }
    }

    return words;
  }

  // Parse a single CSV line handling quoted strings
  parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }

    result.push(current);
    return result;
  }

  // Preview JSON import
  previewJSON() {
    const jsonData = document.getElementById('json-data').value.trim();
    const preview = document.getElementById('json-preview');

    if (!jsonData) {
      preview.innerHTML = '';
      return;
    }

    try {
      const data = JSON.parse(jsonData);
      const words = Array.isArray(data) ? data : (data.words || []);

      // Validate structure
      const validWords = words.filter(w => w.word);

      preview.innerHTML = `
        <div class="import-preview-header">
          <span>${i18n.t('foundWords') || 'Found'} ${validWords.length} ${i18n.t('words') || 'words'}</span>
        </div>
        <div class="preview-list">
          ${validWords.slice(0, 10).map(w => `
            <div class="preview-item">
              <span class="preview-word">${w.word}</span>
              <span class="preview-definition">${w.definition || ''}</span>
            </div>
          `).join('')}
          ${validWords.length > 10 ? `<div class="more-items">... and ${validWords.length - 10} more</div>` : ''}
        </div>
      `;

      this.tempWords = validWords;
    } catch (error) {
      preview.innerHTML = `<div class="import-error">${i18n.t('invalidJSON') || 'Invalid JSON format'}: ${error.message}</div>`;
    }
  }

  // Save the word list
  saveList() {
    let listName, language;

    if (this.currentImportFormat === 'manual') {
      listName = document.getElementById('list-name').value.trim();
      language = document.getElementById('list-language').value;

      if (!listName) {
        this.showError(i18n.t('enterListName') || 'Please enter a list name');
        return;
      }

      if (this.tempWords.length === 0) {
        this.showError(i18n.t('addWords') || 'Please add at least one word');
        return;
      }
    } else if (this.currentImportFormat === 'csv') {
      listName = document.getElementById('csv-list-name').value.trim();
      language = document.getElementById('csv-language').value;

      if (!listName) {
        this.showError(i18n.t('enterListName') || 'Please enter a list name');
        return;
      }

      if (this.tempWords.length === 0) {
        this.showError(i18n.t('previewFirst') || 'Please preview the CSV first');
        return;
      }
    } else if (this.currentImportFormat === 'json') {
      listName = document.getElementById('json-list-name').value.trim();
      language = document.getElementById('json-language')?.value || 'English';

      if (!listName) {
        this.showError(i18n.t('enterListName') || 'Please enter a list name');
        return;
      }

      if (this.tempWords.length === 0) {
        this.showError(i18n.t('previewFirst') || 'Please preview the JSON first');
        return;
      }
    }

    // Check for duplicate list names
    if (this.customLists[listName]) {
      if (!confirm(i18n.t('listExists') || 'A list with this name already exists. Overwrite?')) {
        return;
      }
    }

    // Save the list
    const listId = this.generateId(listName);
    this.customLists[listName] = {
      id: listId,
      name: listName,
      language: language,
      words: this.tempWords,
      createdAt: new Date().toISOString(),
      wordCount: this.tempWords.length
    };

    this.saveCustomLists();
    this.showSuccess(i18n.t('listSaved') || 'List saved successfully!');

    // Clear temp words and refresh
    this.tempWords = [];
    this.updatePreview();
    this.refreshCustomListsGrid();

    // Clear inputs
    document.getElementById('list-name').value = '';
    document.getElementById('csv-data').value = '';
    document.getElementById('json-data').value = '';
    document.getElementById('csv-preview').innerHTML = '';
    document.getElementById('json-preview').innerHTML = '';
  }

  // Render custom lists
  renderCustomLists() {
    const lists = Object.values(this.customLists);

    if (lists.length === 0) {
      return `<div class="no-custom-lists">${i18n.t('noCustomLists') || 'No custom lists yet. Import your first word list!'}</div>`;
    }

    return lists.map(list => `
      <div class="custom-list-card">
        <div class="list-header">
          <span class="list-name">${list.name}</span>
          <span class="list-language">${list.language === 'English' ? '🇬🇧' : '🇫🇷'}</span>
        </div>
        <div class="list-info">
          <span class="list-count">${list.wordCount} words</span>
          <span class="list-date">${new Date(list.createdAt).toLocaleDateString()}</span>
        </div>
        <div class="list-actions">
          <button class="list-action-btn practice" onclick="wordImport.practiceList('${list.name}')">
            <span>▶️</span> ${i18n.t('practice') || 'Practice'}
          </button>
          <button class="list-action-btn export" onclick="wordImport.exportList('${list.name}')">
            <span>📤</span> ${i18n.t('export') || 'Export'}
          </button>
          <button class="list-action-btn delete" onclick="wordImport.deleteList('${list.name}')">
            <span>🗑️</span> ${i18n.t('delete') || 'Delete'}
          </button>
        </div>
      </div>
    `).join('');
  }

  // Refresh custom lists grid
  refreshCustomListsGrid() {
    const grid = document.getElementById('custom-lists-grid');
    if (grid) {
      grid.innerHTML = this.renderCustomLists();
    }
  }

  // Practice a custom list
  practiceList(listName) {
    const list = this.customLists[listName];
    if (!list) return;

    // Close import modal
    this.close();

    // Start practice with custom list
    setTimeout(() => {
      if (window.dictationPractice) {
        window.dictationPractice.currentWords = list.words;
        window.dictationPractice.subject = list.language;
        window.dictationPractice.createPracticeUI();
      }
    }, 300);
  }

  // Export a list
  exportList(listName) {
    const list = this.customLists[listName];
    if (!list) return;

    // Create JSON download
    const data = JSON.stringify(list, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${list.name.replace(/[^a-z0-9]/gi, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Delete a list
  deleteList(listName) {
    if (!confirm(i18n.t('confirmDelete') || 'Are you sure you want to delete this list?')) {
      return;
    }

    delete this.customLists[listName];
    this.saveCustomLists();
    this.refreshCustomListsGrid();
    this.showSuccess(i18n.t('listDeleted') || 'List deleted');
  }

  // Generate unique ID
  generateId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now();
  }

  // Show error message
  showError(message) {
    alert('⚠️ ' + message);
  }

  // Show success message
  showSuccess(message) {
    alert('✅ ' + message);
  }

  // Close import modal
  close() {
    const container = document.getElementById('word-import-container');
    if (container) {
      container.classList.remove('active');
      setTimeout(() => container.remove(), 300);
    }
  }

  // Get custom lists for practice module
  getCustomLists() {
    return Object.values(this.customLists);
  }

  // Get custom list by name
  getCustomList(name) {
    return this.customLists[name];
  }
}

// Create global instance
if (typeof window !== 'undefined') {
  window.WordImport = WordImport;
  window.wordImport = new WordImport();
}

export default WordImport;
