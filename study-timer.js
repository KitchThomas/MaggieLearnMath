// ========================================
// 学习时间追踪模块 / Study Time Tracker
// ========================================

const StudyTimer = (() => {
  const STORAGE_KEY = 'studyTimeRecords';
  const TIMER_STATE_KEY = 'timerState';

  // State
  let records = {};        // { "2026-03-29": { minutes: 45, sessions: 3, topics: ["topic1"] } }
  let isRunning = false;
  let currentSessionStart = null;
  let currentSessionTopic = null;
  let idleTimeout = null;
  let idleAfter = 5 * 60 * 1000; // 5 minutes of inactivity = pause

  // Load records from localStorage
  function loadRecords() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        records = JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load study records:', e);
      records = {};
    }
  }

  // Save records to localStorage
  function saveRecords() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (e) {
      console.error('Failed to save study records:', e);
    }
  }

  // Get today's date string
  function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  }

  // Get date key from Date object
  function getDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  // Ensure today's record exists
  function ensureTodayRecord() {
    const key = getTodayKey();
    if (!records[key]) {
      records[key] = { minutes: 0, sessions: 0, topics: [], manualMinutes: 0 };
    }
    return records[key];
  }

  // Start tracking a session
  function startSession(topicId) {
    if (isRunning) {
      // Finish current session first
      endSession();
    }

    isRunning = true;
    currentSessionStart = Date.now();
    currentSessionTopic = topicId || null;

    // Save timer state for recovery
    localStorage.setItem(TIMER_STATE_KEY, JSON.stringify({
      startTime: currentSessionStart,
      topic: currentSessionTopic
    }));

    resetIdleTimer();
    console.log('⏱️ Study session started');
  }

  // End current session
  function endSession() {
    if (!isRunning || !currentSessionStart) return;

    const elapsedMs = Date.now() - currentSessionStart;
    const elapsedMinutes = Math.round(elapsedMs / 60000);

    if (elapsedMinutes >= 1) {
      const today = ensureTodayRecord();
      today.minutes += elapsedMinutes;
      today.sessions += 1;
      if (currentSessionTopic && !today.topics.includes(currentSessionTopic)) {
        today.topics.push(currentSessionTopic);
      }
      saveRecords();
    }

    isRunning = false;
    currentSessionStart = null;
    currentSessionTopic = null;

    localStorage.removeItem(TIMER_STATE_KEY);
    clearIdleTimer();

    console.log('⏱️ Study session ended');
  }

  // Add manual time entry
  function addManualTime(dateKey, minutes, note) {
    if (!records[dateKey]) {
      records[dateKey] = { minutes: 0, sessions: 0, topics: [], manualMinutes: 0 };
    }
    records[dateKey].manualMinutes = (records[dateKey].manualMinutes || 0) + minutes;
    if (note) {
      if (!records[dateKey].notes) records[dateKey].notes = [];
      records[dateKey].notes.push({ minutes, note, time: new Date().toISOString() });
    }
    saveRecords();
  }

  // Get today's total study time
  function getTodayTime() {
    const today = records[getTodayKey()];
    if (!today) return { minutes: 0, sessions: 0, manualMinutes: 0 };
    return today;
  }

  // Get current session elapsed time in minutes
  function getCurrentSessionMinutes() {
    if (!isRunning || !currentSessionStart) return 0;
    return Math.round((Date.now() - currentSessionStart) / 60000);
  }

  // Get current session elapsed time formatted
  function getCurrentSessionFormatted() {
    if (!isRunning || !currentSessionStart) return '00:00';
    const elapsed = Math.floor((Date.now() - currentSessionStart) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Get stats for a date range
  function getStats(days = 7) {
    const stats = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const key = getDateKey(date);
      const record = records[key] || { minutes: 0, manualMinutes: 0 };

      stats.push({
        date: key,
        dayLabel: i === 0 ? 'Today' : i === 1 ? 'Yesterday' : date.toLocaleDateString('en-US', { weekday: 'short' }),
        dayLabelZh: i === 0 ? '今天' : i === 1 ? '昨天' : date.toLocaleDateString('zh-CN', { weekday: 'short' }),
        minutes: record.minutes + (record.manualMinutes || 0),
        autoMinutes: record.minutes,
        manualMinutes: record.manualMinutes || 0,
        sessions: record.sessions || 0
      });
    }

    return stats;
  }

  // Get weekly total
  function getWeeklyTotal() {
    const stats = getStats(7);
    return stats.reduce((sum, s) => sum + s.minutes, 0);
  }

  // Get streak (consecutive days with study time)
  function getStreak() {
    let streak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const key = getDateKey(date);
      const record = records[key];

      if (record && (record.minutes + (record.manualMinutes || 0)) > 0) {
        streak++;
      } else if (i === 0) {
        // Today might not have record yet, skip
        continue;
      } else {
        break;
      }
    }

    return streak;
  }

  // Idle timer management
  function resetIdleTimer() {
    clearIdleTimer();
    if (isRunning) {
      idleTimeout = setTimeout(() => {
        console.log('⏱️ Idle detected, pausing session');
        endSession();
        if (typeof window.updateStudyTimerUI === 'function') {
          window.updateStudyTimerUI();
        }
      }, idleAfter);
    }
  }

  function clearIdleTimer() {
    if (idleTimeout) {
      clearTimeout(idleTimeout);
      idleTimeout = null;
    }
  }

  // Recover session from page reload
  function recoverSession() {
    try {
      const saved = localStorage.getItem(TIMER_STATE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        // Only recover if less than 30 minutes old
        if (Date.now() - state.startTime < 30 * 60 * 1000) {
          currentSessionStart = state.startTime;
          currentSessionTopic = state.topic;
          isRunning = true;
          resetIdleTimer();
          console.log('⏱️ Recovered study session');
        } else {
          localStorage.removeItem(TIMER_STATE_KEY);
        }
      }
    } catch (e) {
      console.error('Failed to recover session:', e);
    }
  }

  // Auto-start session when page loads
  function autoStart() {
    loadRecords();
    recoverSession();

    // Auto-start if not already running
    if (!isRunning) {
      startSession();
    }

    // Listen for user activity to reset idle timer
    const events = ['mousedown', 'keydown', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, () => {
        if (isRunning) {
          resetIdleTimer();
        } else {
          // Auto-resume on activity
          startSession();
          if (typeof window.updateStudyTimerUI === 'function') {
            window.updateStudyTimerUI();
          }
        }
      }, { passive: true });
    });

    // End session before page unload
    window.addEventListener('beforeunload', () => {
      endSession();
    });
  }

  // Get all records for cloud sync
  function getAllRecords() {
    return records;
  }

  // Load records from cloud
  function loadRecordsFromCloud(cloudRecords) {
    if (cloudRecords) {
      // Merge: cloud records + local records, take max for each day
      for (const [dateKey, cloudRecord] of Object.entries(cloudRecords)) {
        const localRecord = records[dateKey];
        if (!localRecord) {
          records[dateKey] = cloudRecord;
        } else {
          // Merge: take the higher values
          records[dateKey] = {
            minutes: Math.max(localRecord.minutes || 0, cloudRecord.minutes || 0),
            sessions: Math.max(localRecord.sessions || 0, cloudRecord.sessions || 0),
            manualMinutes: Math.max(localRecord.manualMinutes || 0, cloudRecord.manualMinutes || 0),
            topics: [...new Set([...(localRecord.topics || []), ...(cloudRecord.topics || [])])],
          };
        }
      }
      saveRecords();
    }
  }

  // Public API
  return {
    autoStart,
    startSession,
    endSession,
    addManualTime,
    getTodayTime,
    getCurrentSessionMinutes,
    getCurrentSessionFormatted,
    getStats,
    getWeeklyTotal,
    getStreak,
    isRunning: () => isRunning,
    getAllRecords,
    loadRecordsFromCloud,
    loadRecords
  };
})();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StudyTimer;
}
