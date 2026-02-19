# Maggie's Math Learning Application

> 五年级数学学习应用 | Grade 5 Math Learning Application

## 项目简介

这是一个专为五年级学生设计的在线数学学习平台，包含：
- 中英文双语界面
- 加拿大安大略省五年级数学课程
- 集成 Khan Academy、YouTube、IXL 等学习资源

---

## 快速开始

### 前置要求

- **Node.js** (推荐 v18 或更高版本)
- **Git** (用于版本控制和同步)
- **npm** (随 Node.js 一起安装)

### 安装步骤

1. **进入项目目录**
   ```bash
   cd /Users/tdong/Documents/thomas/project/MaggieMathLearnApplicaiton
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```

4. **打开浏览器访问**
   ```
   http://localhost:3000
   ```

---

## 运行命令说明

| 命令 | 功能 |
|------|------|
| `npm start` | 启动开发服务器（端口 3000） |
| `npm run dev` | 同 `npm start` |
| `npm run sync` | 启动 GitHub 自动同步（默认每 5 分钟） |
| `npm run sync:fast` | 启动快速同步（每 1 分钟） |
| `npm run deploy` | 部署到 Firebase Hosting |

---

## GitHub 同步配置

### 首次配置

1. **确认 Git 仓库已初始化**
   ```bash
   git status
   ```
   如果显示 `fatal: not a git repository`，则运行：
   ```bash
   git init
   ```

2. **添加远程仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   ```
   或者使用 SSH：
   ```bash
   git remote add origin git@github.com:你的用户名/你的仓库名.git
   ```

3. **验证远程仓库**
   ```bash
   git remote -v
   ```

### 启动自动同步

**方式一：使用默认配置（每 5 分钟同步一次）**
```bash
npm run sync
```

**方式二：快速同步（每 1 分钟）**
```bash
npm run sync:fast
```

**方式三：自定义同步间隔**
```bash
# 每 30 秒同步一次
SYNC_INTERVAL=30000 node auto-sync.js

# 每 10 分钟同步一次
SYNC_INTERVAL=600000 node auto-sync.js
```

### 自动同步功能

- 自动监控文件变化（新增、修改、删除）
- 定时将更改提交到 Git
- 自动推送到 GitHub 远程仓库
- 按 `Ctrl+C` 停止时会执行最后一次同步

---

## 手动同步到 GitHub

如果不想使用自动同步，可以手动执行：

```bash
# 查看文件状态
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "你的提交信息"

# 推送到 GitHub
git push origin main
```

---

## 部署到 Firebase

### 首次部署配置

1. **安装 Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **登录 Firebase**
   ```bash
   firebase login
   ```

3. **初始化 Firebase 项目**（如果还未配置）
   ```bash
   firebase init hosting
   ```

4. **部署**
   ```bash
   npm run deploy
   # 或
   firebase deploy --only hosting
   ```

---

## 项目结构

```
MaggieMathLearnApplicaiton/
├── index.html                  # 主应用页面
├── server.js                   # 本地开发服务器
├── curriculum.js               # 五年级课程大纲
├── curriculum.json             # 课程数据（JSON）
├── curriculum-grade6.json      # 六年级课程数据
├── auto-sync.js                # GitHub 自动同步脚本
├── firebase.json               # Firebase 配置
├── package.json                # 项目依赖配置
└── README.md                   # 本说明文档
```

---

## 课程内容

| 单元 | 内容 |
|------|------|
| 数感 - 整数 | 数字识别、位值、整数运算 |
| 数感 - 分数 | 分数概念、等值分数、分数运算 |
| 运算 | 加减乘除、运算顺序、心算技巧 |
| 数据管理 | 数据收集、图表分析、概率入门 |
| 几何 | 图形识别、角度、对称、坐标 |
| 测量 | 长度、面积、体积、时间、温度 |
| 模式与代数 | 模式识别、变量、简单方程 |

---

## 常见问题

### Q: 修改端口？
**A:** 设置环境变量 `PORT`:
```bash
PORT=8080 npm start
```

### Q: 自动同步失败？
**A:** 检查以下几点：
- 确认已配置 Git 远程仓库 (`git remote -v`)
- 确认有推送权限
- 检查网络连接

### Q: 如何停止服务器？
**A:** 在终端按 `Ctrl + C`

---

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **后端**: Node.js
- **部署**: Firebase Hosting
- **版本控制**: Git
- **依赖管理**: npm

---

## 许可证

ISC
