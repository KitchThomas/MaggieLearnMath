/**
 * 游戏化UI组件
 * 显示金币、等级、徽章、动画等
 */

class GameUI {
  constructor() {
    this.createGameHeader();
    this.createAnimations();
  }

  // 创建游戏化头部
  createGameHeader() {
    const header = document.createElement('div');
    header.id = 'game-header';
    header.innerHTML = `
      <div class="game-stats">
        <div class="stat-item coins">
          <span class="stat-icon">💰</span>
          <span class="stat-value" id="coins-display">0</span>
        </div>
        <div class="stat-item level">
          <span class="stat-icon" id="level-icon">🌱</span>
          <span class="stat-value" id="level-display">Lv.1</span>
          <div class="exp-bar">
            <div class="exp-fill" id="exp-fill" style="width: 0%"></div>
          </div>
        </div>
        <div class="stat-item streak">
          <span class="stat-icon">🔥</span>
          <span class="stat-value" id="streak-display">0</span>
        </div>
        <div class="stat-item badges" onclick="gameUI.showBadgesModal()">
          <span class="stat-icon">🏆</span>
          <span class="stat-value" id="badges-display">0</span>
        </div>
        <div class="stat-item pet" onclick="gameUI.showPetModal()">
          <span class="stat-icon" id="pet-icon">🐱</span>
        </div>
      </div>
    `;

    // 插入到页面顶部
    document.body.insertBefore(header, document.body.firstChild);
  }

  // 更新UI显示
  update(gameState) {
    document.getElementById('coins-display').textContent = gameState.coins;
    document.getElementById('level-icon').textContent = gameState.level.icon;
    document.getElementById('level-display').textContent = `Lv.${gameState.level.level}`;
    document.getElementById('exp-fill').style.width = `${gameState.level.progress}%`;
    document.getElementById('streak-display').textContent = gameState.streak;
    document.getElementById('badges-display').textContent = gameState.badges;

    if (gameState.activePet) {
      document.getElementById('pet-icon').textContent = gameState.activePet.emoji;
    }
  }

  // 显示徽章模态框
  showBadgesModal() {
    const badges = window.gameManager.gameState.unlockedBadges;
    const allBadges = window.GameConfig.badges;

    const modal = document.createElement('div');
    modal.className = 'modal badges-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>🏆 我的徽章</h2>
          <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="badges-grid">
          ${allBadges.map(badge => `
            <div class="badge-item ${badges.includes(badge.id) ? 'unlocked' : 'locked'}">
              <div class="badge-icon">${badge.icon}</div>
              <div class="badge-name">${badge.name}</div>
              <div class="badge-desc">${badge.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  // 显示宠物模态框
  showPetModal() {
    const pets = window.GameConfig.pets;
    const ownedPets = window.gameManager.gameState.ownedPets;
    const activePet = window.gameManager.gameState.activePet;

    const modal = document.createElement('div');
    modal.className = 'modal pet-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h2>🐱 我的宠物</h2>
          <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="pets-grid">
          ${pets.map(pet => `
            <div class="pet-item ${ownedPets.includes(pet.id) ? 'owned' : ''} ${activePet === pet.id ? 'active' : ''}">
              <div class="pet-emoji">${pet.emoji}</div>
              <div class="pet-name">${pet.name}</div>
              ${ownedPets.includes(pet.id) 
                ? `<button class="pet-btn" onclick="gameManager.activatePet('${pet.id}')">选择</button>`
                : `<button class="pet-btn buy" onclick="gameManager.buyPet('${pet.id}')">💰 ${pet.price}</button>`
              }
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  // 创建动画容器
  createAnimations() {
    const container = document.createElement('div');
    container.id = 'animations-container';
    document.body.appendChild(container);
  }

  // 显示金币动画
  showCoinsAnimation(amount, x, y) {
    const coin = document.createElement('div');
    coin.className = 'coin-animation';
    coin.textContent = `+${amount}💰`;
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;

    document.getElementById('animations-container').appendChild(coin);

    setTimeout(() => coin.remove(), 1500);
  }

  // 显示连胜动画
  showStreakAnimation(streak) {
    if (streak >= 5) {
      const fire = document.createElement('div');
      fire.className = 'streak-animation';
      fire.innerHTML = `🔥 ${streak} 连胜！`;
      document.getElementById('animations-container').appendChild(fire);

      setTimeout(() => fire.remove(), 2000);
    }
  }

  // 显示升级动画
  showLevelUpAnimation(level, bonus) {
    const overlay = document.createElement('div');
    overlay.className = 'level-up-overlay';
    overlay.innerHTML = `
      <div class="level-up-content">
        <div class="level-up-icon">${level.icon}</div>
        <div class="level-up-text">
          <h2>🎉 升级啦！</h2>
          <p class="level-name">${level.name}</p>
          <p class="level-number">Level ${level.level}</p>
          <p class="level-bonus">+${bonus} 💰</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()">太棒了！</button>
      </div>
    `;

    document.body.appendChild(overlay);
  }

  // 显示徽章解锁动画
  showBadgeUnlockAnimation(badge) {
    const notification = document.createElement('div');
    notification.className = 'badge-unlock-notification';
    notification.innerHTML = `
      <div class="badge-unlock-content">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-info">
          <h3>🏆 解锁新徽章！</h3>
          <p class="badge-name">${badge.name}</p>
          <p class="badge-desc">${badge.description}</p>
        </div>
      </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 500);
    }, 3000);
  }

  // 显示答对动画
  showCorrectAnimation(x, y) {
    const particles = ['⭐', '✨', '🌟', '💫', '🎉'];
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'correct-particle';
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.style.left = `${x + (Math.random() - 0.5) * 100}px`;
      particle.style.top = `${y}px`;

      document.getElementById('animations-container').appendChild(particle);

      setTimeout(() => particle.remove(), 1000);
    }
  }

  // 显示答错动画
  showWrongAnimation(x, y) {
    const wrong = document.createElement('div');
    wrong.className = 'wrong-animation';
    wrong.textContent = '💪 加油！';
    wrong.style.left = `${x}px`;
    wrong.style.top = `${y}px`;

    document.getElementById('animations-container').appendChild(wrong);

    setTimeout(() => wrong.remove(), 1500);
  }
}

// 创建全局实例
window.gameUI = new GameUI();
window.updateGameUI = (state) => window.gameUI.update(state);

// 显示升级动画的全局函数
window.showLevelUpAnimation = (level, bonus) => {
  window.gameUI.showLevelUpAnimation(level, bonus);
};

export default GameUI;
