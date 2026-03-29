# 听写练习功能 (Dictation Practice)

## 功能概述 (Overview)

这是一个为加拿大5、6年级学生设计的互动听写练习模块，支持英语和法语两种语言。

This is an interactive dictation practice module designed for Canadian Grade 5-6 students, supporting both English and French.

## 功能特点 (Features)

### 📚 丰富的单词库 (Rich Word Library)
- **英语单词 (English Words)**:
  - 同音词 (Homophones): their/there/they're, your/you're
  - 多音节词 (Multisyllabic): beautiful, adventure, important
  - 学术词汇 (Academic): analyze, compare, evaluate
  - 科学词汇 (Science): experiment, hypothesis, ecosystem
  - 前缀后缀 (Prefixes/Suffixes): unhappy, careful, teacher
  - 词根 (Word Roots): inspect, transport, structure
  - 社会研究 (Social Studies): democracy, citizenship, multicultural
  - 文学词汇 (Literature): protagonist, metaphor, simile
  - 数学词汇 (Mathematics): numerator, equation, probability

- **法语单词 (French Words)**:
  - 同音词 (Homophones): leur/leurs, mais/mes
  - 食物 (Alimentation): pomme, fromage, pain
  - 学校 (École): école, professeur, cahier
  - 常用动词 (Verbes courants): être, avoir, aller, faire
  - 形容词 (Adjectifs): grand, heureux, beau
  - 自然 (Nature): arbre, fleur, soleil
  - 时间 (Temps): lundi, mardi, janvier

### 🎮 游戏化元素 (Gamification)
- 金币奖励系统
- 连胜统计
- 等级进度
- 徽章收集
- 宠物系统

### 🔊 语音朗读 (Text-to-Speech)
- 支持英语和法语发音
- 可调节语速
- 多种语音选择

### 💡 智能提示 (Smart Hints)
- 定义提示
- 例句展示
- 法语翻译
- 拼写错误定位

### ⏱️ 练习模式 (Practice Modes)
- 标准模式 (Normal)
- 游戏模式 (Game Mode) - 带积分和连胜
- 计时模式 (Timed Mode) - 限时挑战

## 文件结构 (File Structure)

```
MaggieLearnMath/
├── spelling-words.js        # 单词数据文件
├── dictation-practice.js    # 听写练习主模块
├── dictation-styles.css     # 听写练习样式
├── test-dictation.html      # 测试页面
└── DICTATION_README.md      # 本说明文档
```

## 使用方法 (How to Use)

### 方式一：通过主界面 (Via Main Interface)
1. 打开 `index.html`
2. 在主页面找到 "听写练习 / Dictation Practice" 按钮
3. 点击进入听写练习

### 方式二：直接测试 (Direct Test)
1. 打开 `test-dictation.html`
2. 选择测试功能:
   - 🎯 打开听写练习
   - 📚 测试单词列表
   - 🔊 测试语音合成

## 配置选项 (Configuration Options)

### 选择年级 (Select Grade)
- Grade 5 (五年级)
- Grade 6 (六年级)

### 选择语言 (Select Language)
- English (英语)
- French (法语)

### 选择类别 (Select Category)
- Mixed (混合所有类别)
- Homophones (同音词)
- Multisyllabic (多音节词)
- Academic (学术词汇)
- Science (科学词汇)
- 等等...

### 难度设置 (Difficulty)
- Easy (简单) - 较慢语速
- Normal (普通) - 正常语速
- Hard (困难) - 较快语速

### 练习模式 (Practice Mode)
- Game Mode (游戏模式) - 启用金币和连胜系统
- Timed Mode (计时模式) - 每个单词限时30秒

### 单词数量 (Word Count)
- 10 words
- 20 words
- 30 words

## 界面语言 (Interface Language)

听写练习支持三种界面语言:
- English (英语)
- 中文 (简体)
- Français (法语)

## 浏览器兼容性 (Browser Compatibility)

推荐使用现代浏览器:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

需要支持:
- Web Speech API (用于语音朗读)
- ES6+ JavaScript
- CSS Grid & Flexbox

## 技术实现 (Technical Implementation)

### 单词数据结构
```javascript
{
  word: "example",        // 单词
  definition: "meaning",  // 定义
  example: "sentence"     // 例句
}
```

### 核心类和方法
```javascript
class DictationPractice {
  init()                    // 初始化
  createMainUI()            // 创建主界面
  startPractice()           // 开始练习
  speakWord()               // 朗读单词
  checkAnswer()             // 检查答案
  nextWord()                // 下一个单词
  showResults()             // 显示结果
}
```

## 自定义和扩展 (Customization)

### 添加新的单词类别
编辑 `spelling-words.js`:
```javascript
grade5English: {
  newCategory: [
    { word: "新单词", definition: "定义", example: "例句" },
    // 添加更多单词...
  ]
}
```

### 修改语音设置
在 `dictation-practice.js` 中:
```javascript
this.speechRate = 0.8;  // 语速 (0.1 - 2.0)
```

## 已知问题 (Known Issues)

1. **语音支持**: 某些浏览器可能不支持法语语音
2. **发音准确性**: 机器发音可能与真人发音有差异
3. **移动端**: 在某些移动设备上语音功能可能不稳定

## 未来改进 (Future Improvements)

- [ ] 添加真人录音
- [ ] 支持更多语言
- [ ] 添加手写识别
- [ ] 添加单词游戏（填字游戏、单词搜索）
- [ ] 添加学习进度报告
- [ ] 支持自定义单词列表

## 许可证 (License)

与主项目相同

## 贡献 (Contributing)

欢迎提交问题报告和改进建议！

---

**Sources:**
- [K5 Learning - Fifth Grade Spelling Worksheets](https://www.k5learning.com/spelling-worksheets/fifth-grade-5)
- Canadian Curriculum standards for Grade 5-6
- Quebec Education Program (Progression of Learning)
