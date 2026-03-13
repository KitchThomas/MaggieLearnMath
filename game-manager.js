/**
 * 游戏化管理器
 * 处理金币、经验值、等级、徽章等游戏逻辑
 */

import { GameConfig, calculateLevel, checkBadgeUnlock } from './game-config.js';

class GameManager {
  constructor() {
    this.gameState = {
      coins: 0,
      exp: 0,
      level: 1,
      correctAnswers: 0,
      wrongAnswers: 0,
      currentStreak: 0,
      maxStreak: 0,
      dailyStreak: 0,
      lastLoginDate: null,
      unlockedBadges: [],
      ownedPets: [],
      activePet: null,
      inventory: [],
      selectedTheme: 'default'
    };

    this.loadGameState();
    this.checkDailyLogin();
  }

  // 加载游戏状态
  loadGameState() {
    const saved = localStorage.getItem('maggieGameState');
    if (saved) {
      this.gameState = { ...this.gameState, ...JSON.parse(saved) };
    }
  }

  // 保存游戏状态
  saveGameState() {
    localStorage.setItem('maggieGameState', JSON.stringify(this.gameState));
  }

  // 检查每日登录
  checkDailyLogin() {
    const today = new Date().toDateString();
    const lastLogin = this.gameState.lastLoginDate;

    if (lastLogin !== today) {
      // 新的一天
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastLogin === yesterday.toDateString()) {
        // 连续登录
        this.gameState.dailyStreak++;
      } else if (lastLogin !== null) {
        // 断签
        this.gameState.dailyStreak = 1;
      } else {
        // 首次登录
        this.gameState.dailyStreak = 1;
      }

      // 发放每日登录奖励
      this.giveDailyLoginReward();
      this.gameState.lastLoginDate = today;
      this.saveGameState();
    }
  }

  // 每日登录奖励
  giveDailyLoginReward() {
    const { coins, exp } = GameConfig.rewards.dailyLogin;
    const streakBonus = Math.floor(
      coins * (1 + GameConfig.rewards.streakBonus.multiplier * (this.gameState.dailyStreak - 1))
    );

    this.addCoins(coins + streakBonus);
    this.addExp(exp);

    return {
      coins: coins + streakBonus,
      exp: exp,
      streak: this.gameState.dailyStreak
    };
  }

  // 答对题目
  answerCorrect(timeSpent = 0) {
    const rewards = GameConfig.rewards.correctAnswer;

    // 基础奖励
    this.addCoins(rewards.coins);
    this.addExp(rewards.exp);

    // 更新统计
    this.gameState.correctAnswers++;
    this.gameState.currentStreak++;
    if (this.gameState.currentStreak > this.gameState.maxStreak) {
      this.gameState.maxStreak = this.gameState.currentStreak;
    }

    // 连胜奖励
    if (this.gameState.currentStreak > 0 && this.gameState.currentStreak % 5 === 0) {
      const streakBonus = this.gameState.currentStreak * 5;
      this.addCoins(streakBonus);
    }

    // 检查徽章
    const newBadges = this.checkAndUnlockBadges(timeSpent);

    this.saveGameState();

    return {
      coins: rewards.coins,
      exp: rewards.exp,
      streak: this.gameState.currentStreak,
      newBadges: newBadges
    };
  }

  // 答错题目
  answerWrong() {
    const rewards = GameConfig.rewards.wrongAnswer;

    this.addExp(rewards.exp);
    this.gameState.wrongAnswers++;
    this.gameState.currentStreak = 0; // 重置连胜

    this.saveGameState();

    return {
      coins: 0,
      exp: rewards.exp,
      streak: 0
    };
  }

  // 添加金币
  addCoins(amount) {
    this.gameState.coins += amount;
    this.updateUI();
  }

  // 花费金币
  spendCoins(amount) {
    if (this.gameState.coins >= amount) {
      this.gameState.coins -= amount;
      this.updateUI();
      return true;
    }
    return false;
  }

  // 添加经验值
  addExp(amount) {
    const oldLevel = calculateLevel(this.gameState.exp);
    this.gameState.exp += amount;
    const newLevel = calculateLevel(this.gameState.exp);

    if (newLevel.level > oldLevel.level) {
      // 升级了！
      this.onLevelUp(newLevel);
    }

    this.updateUI();
  }

  // 升级处理
  onLevelUp(newLevel) {
    // 升级奖励
    const levelUpBonus = newLevel.level * 50;
    this.gameState.coins += levelUpBonus;

    // 触发升级动画
    if (window.showLevelUpAnimation) {
      window.showLevelUpAnimation(newLevel, levelUpBonus);
    }
  }

  // 检查并解锁徽章
  checkAndUnlockBadges(timeSpent = 0) {
    const stats = {
      correctAnswers: this.gameState.correctAnswers,
      fastestAnswer: timeSpent,
      maxStreak: this.gameState.maxStreak,
      dailyStreak: this.gameState.dailyStreak,
      perfectQuizzes: 0, // TODO: 从测验结果中获取
      totalCoinsEarned: this.gameState.coins
    };

    const newBadges = [];

    GameConfig.badges.forEach(badge => {
      if (!this.gameState.unlockedBadges.includes(badge.id) && 
          checkBadgeUnlock(badge.id, stats)) {
        this.gameState.unlockedBadges.push(badge.id);
        newBadges.push(badge);
      }
    });

    return newBadges;
  }

  // 购买宠物
  buyPet(petId) {
    const pet = GameConfig.pets.find(p => p.id === petId);
    if (!pet) return { success: false, message: "宠物不存在" };

    if (this.gameState.ownedPets.includes(petId)) {
      return { success: false, message: "你已经拥有这个宠物了" };
    }

    if (this.spendCoins(pet.price)) {
      this.gameState.ownedPets.push(petId);
      this.saveGameState();
      return { success: true, message: `成功购买 ${pet.name}！` };
    }

    return { success: false, message: "金币不足" };
  }

  // 激活宠物
  activatePet(petId) {
    if (this.gameState.ownedPets.includes(petId)) {
      this.gameState.activePet = petId;
      this.saveGameState();
      return true;
    }
    return false;
  }

  // 喂养宠物
  feedPet() {
    if (!this.gameState.activePet) return false;

    const foodItem = this.gameState.inventory.find(item => item.id === 'pet_food');
    if (!foodItem || foodItem.count <= 0) return false;

    foodItem.count--;
    // TODO: 增加宠物饱食度
    this.saveGameState();
    return true;
  }

  // 购买商店物品
  buyShopItem(itemId) {
    const item = GameConfig.shopItems.find(i => i.id === itemId);
    if (!item) return { success: false, message: "物品不存在" };

    if (this.spendCoins(item.price)) {
      if (item.type === 'theme') {
        this.gameState.unlockedThemes = this.gameState.unlockedThemes || [];
        this.gameState.unlockedThemes.push(itemId);
      } else if (item.type === 'consumable') {
        const inventoryItem = this.gameState.inventory.find(i => i.id === itemId);
        if (inventoryItem) {
          inventoryItem.count++;
        } else {
          this.gameState.inventory.push({ id: itemId, count: 1 });
        }
      } else if (item.type === 'pet') {
        return this.buyPet(itemId);
      }
      this.saveGameState();
      return { success: true, message: `成功购买 ${item.name}！` };
    }

    return { success: false, message: "金币不足" };
  }

  // 切换主题
  setTheme(themeId) {
    if (themeId === 'default' || 
        (this.gameState.unlockedThemes && this.gameState.unlockedThemes.includes(themeId))) {
      this.gameState.selectedTheme = themeId;
      this.saveGameState();
      this.applyTheme(themeId);
      return true;
    }
    return false;
  }

  // 应用主题
  applyTheme(themeId) {
    document.body.className = `theme-${themeId}`;
  }

  // 更新UI显示
  updateUI() {
    if (window.updateGameUI) {
      const levelInfo = calculateLevel(this.gameState.exp);
      window.updateGameUI({
        coins: this.gameState.coins,
        level: levelInfo,
        streak: this.gameState.currentStreak,
        badges: this.gameState.unlockedBadges.length
      });
    }
  }

  // 获取游戏状态（用于显示）
  getDisplayState() {
    const levelInfo = calculateLevel(this.gameState.exp);
    const activePet = this.gameState.activePet 
      ? GameConfig.pets.find(p => p.id === this.gameState.activePet)
      : null;

    return {
      coins: this.gameState.coins,
      level: levelInfo,
      streak: this.gameState.currentStreak,
      dailyStreak: this.gameState.dailyStreak,
      badges: this.gameState.unlockedBadges.map(id => 
        GameConfig.badges.find(b => b.id === id)
      ),
      activePet: activePet,
      ownedPets: this.gameState.ownedPets.map(id =>
        GameConfig.pets.find(p => p.id === id)
      ),
      stats: {
        correctAnswers: this.gameState.correctAnswers,
        wrongAnswers: this.gameState.wrongAnswers,
        maxStreak: this.gameState.maxStreak
      }
    };
  }
}

// 创建全局实例
window.gameManager = new GameManager();

export default GameManager;
