# 单词导入功能使用指南 (Word Import Guide)

## 功能概述 (Overview)

单词导入功能让你可以创建自定义单词列表，用于个性化的听写练习。

This feature allows you to create custom word lists for personalized dictation practice.

---

## 快速开始 (Quick Start)

### 方式一：快速测试

1. 打开测试页面: **http://localhost:8080/test-dictation.html**
2. 点击 **"⚡ Quick Test Import"** 按钮
3. 这会创建一个示例单词列表 "Test Words"
4. 然后点击 **"🎯 Open Dictation Practice"** 即可看到自定义列表

### 方式二：手动导入

1. 打开测试页面
2. 点击 **"📥 Word Import / 单词导入"**
3. 选择导入方式（手动输入、CSV、JSON）

---

## 导入方式详解

### ✏️ 手动输入 (Manual Input)

1. 点击 "Manual Input" 标签
2. 输入列表名称，例如：`My Science Words`
3. 选择语言（English 或 Français）
4. 添加单词：
   - **Word**: 单词（必填）
   - **Definition**: 定义/解释
   - **Example**: 例句
5. 点击 "+" 按钮添加
6. 继续添加更多单词
7. 点击 "Save List" 保存

### 📄 CSV 导入

**格式**: `word,definition,example`

```
algorithm,a step-by-step procedure,"The algorithm solves the problem efficiently"
database,organized collection of data,"We store user information in the database"
function,reusable block of code,"This function calculates the sum"
```

**步骤**:
1. 点击 "CSV Import" 标签
2. 输入列表名称
3. 选择语言
4. 粘贴 CSV 数据
5. 点击 "Preview" 预览
6. 点击 "Save List" 保存

### { } JSON 导入

**格式**:
```json
[
  {
    "word": "algorithm",
    "definition": "a step-by-step procedure",
    "example": "The algorithm solves the problem efficiently."
  },
  {
    "word": "database",
    "definition": "organized collection of data",
    "example": "We store user information in the database."
  }
]
```

**步骤**:
1. 点击 "JSON Import" 标签
2. 输入列表名称
3. 粘贴 JSON 数据
4. 点击 "Preview" 预览
5. 点击 "Save List" 保存

---

## 管理自定义列表

在单词导入界面底部可以看到所有已保存的自定义列表：

- **▶️ Practice** - 直接开始练习该列表
- **📤 Export** - 导出为 JSON 文件
- **🗑️ Delete** - 删除列表

---

## 在听写练习中使用

1. 打开听写练习 (Dictation Practice)
2. 如果有自定义列表，会显示在顶部
3. 点击选择自定义列表
4. 点击 "Start Practice" 开始练习

---

## 示例单词列表

### 英语科学词汇
```csv
photosynthesis,process plants make food,"Plants use photosynthesis to create energy"
ecosystem,community of living things,"The forest ecosystem is diverse"
molecule,tiny particle of matter,"A water molecule has two hydrogen atoms"
```

### 法语学校词汇
```csv
échafaudage,construction provisoire,"Les ouvriers montent l'échafaudage"
ordinateur,machine électronique,"J'utilise mon ordinateur pour les devoirs"
bibliothèque,lieu avec des livres,"La bibliothèque est fermée le dimanche"
```

### 编程词汇
```json
[
  {"word": "algorithm", "definition": "step-by-step procedure", "example": "The algorithm sorts the array."},
  {"word": "variable", "definition": "storage location", "example": "Declare a variable to store data."},
  {"word": "function", "definition": "reusable code block", "example": "Call the function with parameters."}
]
```

---

## 导出和分享

导出的 JSON 文件可以分享给其他人，他们可以通过 JSON 导入功能使用你的单词列表。

---

## 文件存储

自定义列表保存在浏览器的 localStorage 中，所以：
- ✅ 数据保存在本地，不需要网络
- ✅ 数据永久保存（除非清除浏览器缓存）
- ⚠️ 换浏览器或设备后需要重新导入

建议定期使用 Export 功能备份重要的单词列表。

---

## 故障排除

### Q: 点击保存后找不到列表？
A: 刷新页面后重新打开听写练习

### Q: 预览时显示错误？
A: 检查 CSV/JSON 格式是否正确，确保：
- CSV: 使用逗号分隔，例句用引号包围
- JSON: 有效的 JSON 格式

### Q: 语音不发音？
A: 某些单词可能不被浏览器识别，尝试使用常见单词

---

## 测试地址

http://localhost:8080/test-dictation.html
