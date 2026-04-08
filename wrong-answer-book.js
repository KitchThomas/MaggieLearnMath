/**
 * 错题本模块 / Wrong Answer Book Module
 * 自动收集错题、管理复习、统计数据
 * Auto-collect wrong answers, manage review, track statistics
 */

class WrongAnswerBook {
  constructor() {
    // 错题数据列表 / Wrong answer data list
    this.wrongAnswers = [];
    // localStorage 存储键名 / localStorage key name
    this.storageKey = 'wrongAnswerBook';
    // 加载本地数据 / Load local data
    this.loadFromLocalStorage();
  }

  // ========================================
  // UUID 生成 / UUID Generation
  // ========================================

  generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    // 降级方案：时间戳 + 随机数 / Fallback: timestamp + random
    return 'wab-' + Date.now() + '-' + Math.random().toString(36).substring(2, 11);
  }

  // ========================================
  // 添加错题 / Add Wrong Answer
  // ========================================

  /**
   * 记录一道错题 / Record a wrong answer
   * @param {Object} data - 错题数据
   * @returns {string} 新错题的 ID
   */
  addWrongAnswer(data) {
    // 输入验证 / Input validation
    const str = (v, max) => typeof v === 'string' ? v.slice(0, max) : String(v || '').slice(0, max);
    const entry = {
      id: this.generateId(),
      topicId: str(data.topicId, 100),
      unitId: str(data.unitId, 100),
      grade: typeof data.grade === 'number' ? data.grade : 5,
      question: str(data.question, 1000),
      questionEn: str(data.questionEn || data.question, 1000),
      userAnswer: str(data.userAnswer, 500),
      correctAnswer: str(data.correctAnswer, 500),
      options: Array.isArray(data.options) ? data.options.slice(0, 10).map(o => str(o, 500)) : null,
      hint: str(data.hint, 500),
      type: data.type === 'input' ? 'input' : 'choice',
      attempts: typeof data.attempts === 'number' ? data.attempts : 1,
      timestamp: new Date().toISOString(),
      mastered: false,
      dynamicTemplate: data.dynamicTemplate || null,
      reviewCount: 0
    };

    // 检查是否已存在相同错题（同一题 + 相同用户答案）
    // Check if same wrong answer already exists (same question + same user answer)
    const existingIndex = this.wrongAnswers.findIndex(item =>
      item.topicId === entry.topicId &&
      item.question === entry.question &&
      item.userAnswer === entry.userAnswer &&
      !item.mastered
    );

    if (existingIndex >= 0) {
      // 更新已存在的错题：增加复习次数和尝试次数
      // Update existing: increment review count and attempts
      const existing = { ...this.wrongAnswers[existingIndex] };
      existing.attempts = Math.max(existing.attempts, entry.attempts);
      existing.reviewCount = (existing.reviewCount || 0) + 1;
      existing.timestamp = entry.timestamp;
      existing.hint = entry.hint || existing.hint;
      this.wrongAnswers = [
        ...this.wrongAnswers.slice(0, existingIndex),
        existing,
        ...this.wrongAnswers.slice(existingIndex + 1)
      ];
      this.saveToLocalStorage();
      return existing.id;
    }

    // 新增错题 / Add new wrong answer
    this.wrongAnswers = [...this.wrongAnswers, entry];
    this.saveToLocalStorage();
    return entry.id;
  }

  // ========================================
  // 移除/标记已掌握 / Remove/Mark as Mastered
  // ========================================

  /**
   * 标记错题为已掌握 / Mark wrong answer as mastered
   * @param {string} id - 错题 ID
   * @returns {boolean} 是否成功标记
   */
  removeWrongAnswer(id) {
    const index = this.wrongAnswers.findIndex(item => item.id === id);
    if (index === -1) return false;

    // 标记为已掌握 / Mark as mastered
    const updated = {
      ...this.wrongAnswers[index],
      mastered: true,
      masteredAt: new Date().toISOString()
    };
    this.wrongAnswers = [
      ...this.wrongAnswers.slice(0, index),
      updated,
      ...this.wrongAnswers.slice(index + 1)
    ];
    this.saveToLocalStorage();
    return true;
  }

  /**
   * 彻底删除一道错题 / Permanently delete a wrong answer
   * @param {string} id - 错题 ID
   * @returns {boolean} 是否成功删除
   */
  deleteWrongAnswer(id) {
    const index = this.wrongAnswers.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.wrongAnswers = [
      ...this.wrongAnswers.slice(0, index),
      ...this.wrongAnswers.slice(index + 1)
    ];
    this.saveToLocalStorage();
    return true;
  }

  /**
   * 清除所有已掌握的错题 / Clear all mastered items
   * @returns {number} 清除的数量
   */
  clearMastered() {
    const beforeCount = this.wrongAnswers.length;
    this.wrongAnswers = this.wrongAnswers.filter(item => !item.mastered);
    const cleared = beforeCount - this.wrongAnswers.length;
    if (cleared > 0) {
      this.saveToLocalStorage();
    }
    return cleared;
  }

  // ========================================
  // 查询错题 / Query Wrong Answers
  // ========================================

  /**
   * 获取错题列表（支持筛选）/ Get wrong answers with filters
   * @param {Object} filters - 筛选条件 {grade, unitId, topicId, mastered}
   * @returns {Array} 筛选后的错题列表
   */
  getWrongAnswers(filters = {}) {
    let results = [...this.wrongAnswers];

    if (filters.grade !== null && filters.grade !== undefined) {
      results = results.filter(item => item.grade === filters.grade);
    }
    if (filters.unitId) {
      results = results.filter(item => item.unitId === filters.unitId);
    }
    if (filters.topicId) {
      results = results.filter(item => item.topicId === filters.topicId);
    }
    if (filters.mastered !== undefined) {
      results = results.filter(item => item.mastered === filters.mastered);
    }

    // 按时间倒序排列 / Sort by timestamp descending
    results.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    return results;
  }

  /**
   * 根据 ID 获取单条错题 / Get a single wrong answer by ID
   * @param {string} id - 错题 ID
   * @returns {Object|null} 错题数据或 null
   */
  getById(id) {
    return this.wrongAnswers.find(item => item.id === id) || null;
  }

  // ========================================
  // 统计数据 / Statistics
  // ========================================

  /**
   * 获取统计数据 / Get statistics
   * @returns {Object} 统计信息
   */
  getStatistics() {
    const total = this.wrongAnswers.length;
    const mastered = this.wrongAnswers.filter(item => item.mastered).length;
    const unmastered = total - mastered;
    const masteryRate = total > 0 ? Math.round((mastered / total) * 100) : 0;

    // 按主题分布 / Distribution by topic
    const byTopic = {};
    this.wrongAnswers.forEach(item => {
      if (!byTopic[item.topicId]) {
        byTopic[item.topicId] = { total: 0, mastered: 0, unmastered: 0 };
      }
      byTopic[item.topicId].total++;
      if (item.mastered) {
        byTopic[item.topicId].mastered++;
      } else {
        byTopic[item.topicId].unmastered++;
      }
    });

    // 按年级分布 / Distribution by grade
    const byGrade = {};
    this.wrongAnswers.forEach(item => {
      if (!byGrade[item.grade]) {
        byGrade[item.grade] = { total: 0, mastered: 0, unmastered: 0 };
      }
      byGrade[item.grade].total++;
      if (item.mastered) {
        byGrade[item.grade].mastered++;
      } else {
        byGrade[item.grade].unmastered++;
      }
    });

    // 按题型分布 / Distribution by question type
    const byType = { choice: 0, input: 0 };
    this.wrongAnswers.forEach(item => {
      if (item.type === 'input') {
        byType.input++;
      } else {
        byType.choice++;
      }
    });

    // 最近7天趋势 / Last 7 days trend
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = date.toLocaleDateString('en', { weekday: 'short' });

      const dayItems = this.wrongAnswers.filter(item =>
        item.timestamp && item.timestamp.startsWith(dateStr)
      );
      const dayMastered = dayItems.filter(item => item.mastered).length;

      last7Days.push({
        date: dateStr,
        day: dayName,
        added: dayItems.length,
        mastered: dayMastered
      });
    }

    return {
      total,
      mastered,
      unmastered,
      masteryRate,
      byTopic,
      byGrade,
      byType,
      last7Days
    };
  }

  // ========================================
  // 本地存储 / Local Storage
  // ========================================

  /**
   * 保存到 localStorage / Save to localStorage
   */
  saveToLocalStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.wrongAnswers));
    } catch (e) {
      console.error('错题本保存失败 / Failed to save wrong answer book:', e);
    }
  }

  /**
   * 从 localStorage 加载 / Load from localStorage
   */
  loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          this.wrongAnswers = parsed;
        }
      }
    } catch (e) {
      console.error('错题本加载失败 / Failed to load wrong answer book:', e);
      this.wrongAnswers = [];
    }
  }

  // ========================================
  // 云端同步 / Cloud Sync
  // ========================================

  /**
   * 获取用于云端同步的数据 / Get data for cloud sync
   * @returns {Array} 错题数据数组
   */
  getData() {
    return [...this.wrongAnswers];
  }

  /**
   * 从云端数据合并加载 / Merge cloud data with local
   * 合并策略：
   * - 保留本地独有的错题（离线新增）
   * - 以云端版本为准更新已存在的错题
   * - mastered 状态取乐观值（任一来源为 true 则为 true）
   * @param {Array} cloudData - 云端错题数据
   */
  loadFromCloudData(cloudData) {
    if (!Array.isArray(cloudData)) return;

    // 验证并规范化单条数据 / Validate and normalize a single item
    const str = (v, max) => typeof v === 'string' ? v.slice(0, max) : String(v || '').slice(0, max);
    const normalize = (item) => ({
      id: str(item.id, 50),
      topicId: str(item.topicId, 100),
      unitId: str(item.unitId, 100),
      grade: typeof item.grade === 'number' ? item.grade : 5,
      question: str(item.question, 1000),
      questionEn: str(item.questionEn, 1000),
      userAnswer: str(item.userAnswer, 500),
      correctAnswer: str(item.correctAnswer, 500),
      options: Array.isArray(item.options) ? item.options.slice(0, 10) : null,
      hint: str(item.hint, 500),
      type: item.type === 'input' ? 'input' : 'choice',
      attempts: typeof item.attempts === 'number' ? item.attempts : 1,
      timestamp: item.timestamp || new Date().toISOString(),
      mastered: item.mastered === true,
      dynamicTemplate: item.dynamicTemplate || null,
      reviewCount: typeof item.reviewCount === 'number' ? item.reviewCount : 0
    });

    // 构建 ID 映射 / Build ID map
    const cloudMap = {};
    cloudData.forEach(item => {
      if (item && item.id) {
        cloudMap[item.id] = normalize(item);
      }
    });

    const localMap = {};
    this.wrongAnswers.forEach(item => {
      localMap[item.id] = item;
    });

    // 合并 / Merge
    const merged = [];

    // 加入云端数据 / Add cloud data
    cloudData.forEach(cloudItem => {
      if (!cloudItem || !cloudItem.id) return;
      const normalized = cloudMap[cloudItem.id];
      const localItem = localMap[cloudItem.id];

      if (localItem) {
        const localTime = new Date(localItem.timestamp || 0).getTime();
        const cloudTime = new Date(normalized.timestamp || 0).getTime();
        const newer = cloudTime >= localTime ? normalized : localItem;

        merged.push({
          ...newer,
          mastered: localItem.mastered || normalized.mastered,
          reviewCount: Math.max(localItem.reviewCount || 0, normalized.reviewCount || 0)
        });
      } else {
        merged.push(normalized);
      }
    });

    // 加入仅本地存在的错题 / Add local-only items
    this.wrongAnswers.forEach(localItem => {
      if (!cloudMap[localItem.id]) {
        merged.push({ ...localItem });
      }
    });

    this.wrongAnswers = merged;
    this.saveToLocalStorage();
  }

  /**
   * 获取精简版数据（仅未掌握的，用于节省 Firestore 存储）
   * Get compact data (unmastered only, to save Firestore storage)
   * @param {number} maxItems - 最大条目数
   * @returns {Array} 精简后的错题数据
   */
  getCompactData(maxItems = 500) {
    const all = [...this.wrongAnswers];

    // 优先保留未掌握的 / Prioritize unmastered
    const unmastered = all.filter(item => !item.mastered);
    const mastered = all.filter(item => item.mastered);

    if (unmastered.length >= maxItems) {
      return unmastered.slice(0, maxItems);
    }

    const remaining = maxItems - unmastered.length;
    return [...unmastered, ...mastered.slice(0, remaining)];
  }
}

// 创建全局实例 / Create global instance
window.wrongAnswerBook = new WrongAnswerBook();

export default WrongAnswerBook;
