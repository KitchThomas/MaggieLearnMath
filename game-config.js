/**
 * 游戏化配置
 * 等级、徽章、奖励等配置
 */

export const GameConfig = {
  // 等级系统
  levels: [
    { level: 1, name: "数学新手", expRequired: 0, icon: "🌱" },
    { level: 2, name: "数学学徒", expRequired: 100, icon: "📚" },
    { level: 3, name: "数学达人", expRequired: 300, icon: "⭐" },
    { level: 4, name: "数学高手", expRequired: 600, icon: "🌟" },
    { level: 5, name: "数学专家", expRequired: 1000, icon: "💫" },
    { level: 6, name: "数学大师", expRequired: 1500, icon: "👑" },
    { level: 7, name: "数学天才", expRequired: 2200, icon: "🦄" },
    { level: 8, name: "数学传奇", expRequired: 3000, icon: "🏆" },
    { level: 9, name: "数学神话", expRequired: 4000, icon: "🔥" },
    { level: 10, name: "数学之神", expRequired: 5500, icon: "⚡" }
  ],

  // 徽章系统
  badges: [
    {
      id: "first_correct",
      name: "初试身手",
      description: "第一次答对题目",
      icon: "🎯",
      requirement: { type: "correct_answers", value: 1 }
    },
    {
      id: "ten_correct",
      name: "初露锋芒",
      description: "累计答对10道题",
      icon: "🌟",
      requirement: { type: "correct_answers", value: 10 }
    },
    {
      id: "hundred_correct",
      name: "数学小达人",
      description: "累计答对100道题",
      icon: "🏆",
      requirement: { type: "correct_answers", value: 100 }
    },
    {
      id: "speed_demon",
      name: "速度之星",
      description: "10秒内答对题目",
      icon: "⚡",
      requirement: { type: "speed_answer", value: 10 }
    },
    {
      id: "streak_5",
      name: "连胜新秀",
      description: "连续答对5题",
      icon: "🔥",
      requirement: { type: "streak", value: 5 }
    },
    {
      id: "streak_10",
      name: "连胜高手",
      description: "连续答对10题",
      icon: "💫",
      requirement: { type: "streak", value: 10 }
    },
    {
      id: "streak_20",
      name: "不可阻挡",
      description: "连续答对20题",
      icon: "👑",
      requirement: { type: "streak", value: 20 }
    },
    {
      id: "daily_streak_3",
      name: "勤奋学习者",
      description: "连续3天学习",
      icon: "📅",
      requirement: { type: "daily_streak", value: 3 }
    },
    {
      id: "daily_streak_7",
      name: "学习之星",
      description: "连续7天学习",
      icon: "⭐",
      requirement: { type: "daily_streak", value: 7 }
    },
    {
      id: "daily_streak_30",
      name: "学习大师",
      description: "连续30天学习",
      icon: "🌟",
      requirement: { type: "daily_streak", value: 30 }
    },
    {
      id: "perfect_quiz",
      name: "完美表现",
      description: "一次测验全对",
      icon: "💯",
      requirement: { type: "perfect_quiz", value: 1 }
    },
    {
      id: "millionaire",
      name: "小富翁",
      description: "累计获得1000金币",
      icon: "💰",
      requirement: { type: "total_coins", value: 1000 }
    }
  ],

  // 奖励配置
  rewards: {
    correctAnswer: {
      coins: 10,
      exp: 15
    },
    wrongAnswer: {
      coins: 0,
      exp: 5
    },
    perfectQuiz: {
      coins: 50,
      exp: 100
    },
    sentenceDictation: {
      perfect: { coins: 20, exp: 25 },
      nearPerfect: { coins: 15, exp: 20 },
      good: { coins: 10, exp: 15 },
      needsWork: { coins: 5, exp: 5 }
    },
    dailyLogin: {
      coins: 20,
      exp: 30
    },
    streakBonus: {
      base: 5,
      multiplier: 0.5 // 每连续一天额外 +50%
    }
  },

  // 宠物系统
  pets: [
    { id: "cat", name: "小猫咪", emoji: "🐱", price: 100, hunger: 100, happiness: 100 },
    { id: "dog", name: "小狗狗", emoji: "🐶", price: 150, hunger: 120, happiness: 110 },
    { id: "rabbit", name: "小白兔", emoji: "🐰", price: 120, hunger: 80, happiness: 130 },
    { id: "panda", name: "大熊猫", emoji: "🐼", price: 300, hunger: 150, happiness: 150 },
    { id: "unicorn", name: "独角兽", emoji: "🦄", price: 500, hunger: 200, happiness: 200 }
  ],

  // 商店物品
  shopItems: [
    { id: "theme_princess", name: "公主主题", type: "theme", price: 200, icon: "👸" },
    { id: "theme_dinosaur", name: "恐龙主题", type: "theme", price: 200, icon: "🦖" },
    { id: "theme_space", name: "太空主题", type: "theme", price: 250, icon: "🚀" },
    { id: "theme_ocean", name: "海洋主题", type: "theme", price: 200, icon: "🌊" },
    { id: "pet_food", name: "宠物粮食", type: "consumable", price: 20, icon: "🍖", effect: "feed_pet" },
    { id: "pet_toy", name: "宠物玩具", type: "consumable", price: 30, icon: "🎾", effect: "play_pet" }
  ]
};

// 根据经验值计算等级
export function calculateLevel(exp) {
  const levels = GameConfig.levels;
  for (let i = levels.length - 1; i >= 0; i--) {
    if (exp >= levels[i].expRequired) {
      return {
        level: levels[i].level,
        name: levels[i].name,
        icon: levels[i].icon,
        currentExp: exp,
        nextLevelExp: levels[i + 1]?.expRequired || exp,
        progress: levels[i + 1] 
          ? ((exp - levels[i].expRequired) / (levels[i + 1].expRequired - levels[i].expRequired)) * 100
          : 100
      };
    }
  }
  return levels[0];
}

// 检查徽章是否解锁
export function checkBadgeUnlock(badgeId, stats) {
  const badge = GameConfig.badges.find(b => b.id === badgeId);
  if (!badge) return false;

  const req = badge.requirement;
  switch (req.type) {
    case "correct_answers":
      return stats.correctAnswers >= req.value;
    case "speed_answer":
      return stats.fastestAnswer <= req.value;
    case "streak":
      return stats.maxStreak >= req.value;
    case "daily_streak":
      return stats.dailyStreak >= req.value;
    case "perfect_quiz":
      return stats.perfectQuizzes >= req.value;
    case "total_coins":
      return stats.totalCoinsEarned >= req.value;
    default:
      return false;
  }
}
