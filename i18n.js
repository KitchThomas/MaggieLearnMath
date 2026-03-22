/**
 * Internationalization (i18n) Module for Maggie School
 * Supports English and Chinese
 */

const i18n = {
  currentLang: 'en', // Default language

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
      } else {
        this.currentLang = 'en';
      }
    }
    this.updateAllText();
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
    document.documentElement.lang = this.currentLang === 'zh' ? 'zh-CN' : 'en';

    // Dispatch event for custom handlers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
  }
};

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.i18n = i18n;
}

export default i18n;
