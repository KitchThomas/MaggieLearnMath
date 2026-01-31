#!/usr/bin/env node

/**
 * GitHub 自动同步脚本
 * 定时检测文件变化并自动 commit 和 push 到 GitHub
 */

const simpleGit = require('simple-git');
const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

// 配置
const CONFIG = {
  // 同步间隔（毫秒），默认 5 分钟
  syncInterval: parseInt(process.env.SYNC_INTERVAL) || 5 * 60 * 1000,
  // 监控的目录，默认当前目录
  watchDir: process.env.WATCH_DIR || process.cwd(),
  // 远程仓库名称
  remoteName: process.env.REMOTE_NAME || 'origin',
  // 分支名称
  branchName: process.env.BRANCH_NAME || 'main',
  // 忽略的文件/目录模式
  ignorePatterns: [
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/.DS_Store',
    '**/package-lock.json',
    '**/*.log'
  ]
};

// 状态追踪
let hasChanges = false;
let lastSyncTime = null;
let syncTimer = null;

const git = simpleGit(CONFIG.watchDir);

/**
 * 检查是否是 Git 仓库
 */
async function checkGitRepo() {
  try {
    const isRepo = await git.checkIsRepo();
    if (!isRepo) {
      console.error('错误: 当前目录不是 Git 仓库');
      console.log('请先运行: git init && git remote add origin <你的GitHub仓库URL>');
      process.exit(1);
    }
    return true;
  } catch (error) {
    console.error('检查 Git 仓库失败:', error.message);
    process.exit(1);
  }
}

/**
 * 检查远程仓库配置
 */
async function checkRemote() {
  try {
    const remotes = await git.getRemotes(true);
    const remote = remotes.find(r => r.name === CONFIG.remoteName);
    if (!remote) {
      console.error(`错误: 未找到远程仓库 '${CONFIG.remoteName}'`);
      console.log('请先运行: git remote add origin <你的GitHub仓库URL>');
      process.exit(1);
    }
    console.log(`远程仓库: ${remote.refs.push || remote.refs.fetch}`);
    return true;
  } catch (error) {
    console.error('检查远程仓库失败:', error.message);
    process.exit(1);
  }
}

/**
 * 执行同步操作
 */
async function syncToGitHub() {
  if (!hasChanges) {
    console.log(`[${new Date().toLocaleTimeString()}] 没有检测到变化，跳过同步`);
    return;
  }

  console.log(`\n[${new Date().toLocaleTimeString()}] 开始同步到 GitHub...`);

  try {
    // 获取状态
    const status = await git.status();

    if (status.files.length === 0) {
      console.log('没有需要提交的文件');
      hasChanges = false;
      return;
    }

    // 显示变化的文件
    console.log(`检测到 ${status.files.length} 个文件变化:`);
    status.files.slice(0, 10).forEach(file => {
      const indicator = file.index === '?' ? '新增' :
                       file.index === 'M' ? '修改' :
                       file.index === 'D' ? '删除' : '变化';
      console.log(`  [${indicator}] ${file.path}`);
    });
    if (status.files.length > 10) {
      console.log(`  ... 还有 ${status.files.length - 10} 个文件`);
    }

    // 添加所有更改
    await git.add('.');
    console.log('已添加所有更改到暂存区');

    // 创建 commit
    const timestamp = new Date().toLocaleString('zh-CN');
    const commitMessage = `自动同步: ${timestamp}`;
    await git.commit(commitMessage);
    console.log(`已创建 commit: ${commitMessage}`);

    // Push 到远程
    await git.push(CONFIG.remoteName, CONFIG.branchName);
    console.log(`已推送到 ${CONFIG.remoteName}/${CONFIG.branchName}`);

    hasChanges = false;
    lastSyncTime = new Date();
    console.log('同步完成!\n');

  } catch (error) {
    console.error('同步失败:', error.message);

    // 如果是因为没有 upstream，尝试设置
    if (error.message.includes('no upstream')) {
      try {
        console.log('尝试设置 upstream...');
        await git.push(['-u', CONFIG.remoteName, CONFIG.branchName]);
        console.log('设置 upstream 成功并已推送');
        hasChanges = false;
        lastSyncTime = new Date();
      } catch (e) {
        console.error('设置 upstream 失败:', e.message);
      }
    }
  }
}

/**
 * 设置文件监控
 */
function setupWatcher() {
  console.log(`开始监控目录: ${CONFIG.watchDir}`);
  console.log(`忽略模式: ${CONFIG.ignorePatterns.join(', ')}`);

  const watcher = chokidar.watch(CONFIG.watchDir, {
    ignored: CONFIG.ignorePatterns,
    persistent: true,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 2000,
      pollInterval: 100
    }
  });

  watcher
    .on('add', path => {
      console.log(`[新增] ${path}`);
      hasChanges = true;
    })
    .on('change', path => {
      console.log(`[修改] ${path}`);
      hasChanges = true;
    })
    .on('unlink', path => {
      console.log(`[删除] ${path}`);
      hasChanges = true;
    })
    .on('error', error => {
      console.error('监控错误:', error);
    });

  return watcher;
}

/**
 * 启动定时同步
 */
function startSyncScheduler() {
  const intervalMinutes = CONFIG.syncInterval / 1000 / 60;
  console.log(`定时同步已启动，每 ${intervalMinutes} 分钟检查一次\n`);

  // 立即执行一次
  syncToGitHub();

  // 设置定时器
  syncTimer = setInterval(syncToGitHub, CONFIG.syncInterval);
}

/**
 * 显示使用说明
 */
function showUsage() {
  console.log(`
╔════════════════════════════════════════════════════╗
║          GitHub 自动同步工具 v1.0                  ║
╠════════════════════════════════════════════════════╣
║  监控本地文件变化，定时自动同步到 GitHub           ║
╚════════════════════════════════════════════════════╝

环境变量配置:
  SYNC_INTERVAL  - 同步间隔（毫秒），默认 300000 (5分钟)
  WATCH_DIR      - 监控目录，默认当前目录
  REMOTE_NAME    - 远程仓库名，默认 origin
  BRANCH_NAME    - 分支名，默认 main

使用示例:
  node auto-sync.js                    # 使用默认配置
  SYNC_INTERVAL=60000 node auto-sync.js # 每分钟同步一次

按 Ctrl+C 停止同步
`);
}

/**
 * 优雅退出
 */
function gracefulShutdown() {
  console.log('\n正在停止同步服务...');

  if (syncTimer) {
    clearInterval(syncTimer);
  }

  // 退出前执行最后一次同步
  if (hasChanges) {
    console.log('检测到未同步的更改，正在执行最后一次同步...');
    syncToGitHub().then(() => {
      console.log('同步服务已停止');
      process.exit(0);
    });
  } else {
    console.log('同步服务已停止');
    process.exit(0);
  }
}

/**
 * 主函数
 */
async function main() {
  showUsage();

  // 检查 Git 配置
  await checkGitRepo();
  await checkRemote();

  // 设置文件监控
  setupWatcher();

  // 启动定时同步
  startSyncScheduler();

  // 处理退出信号
  process.on('SIGINT', gracefulShutdown);
  process.on('SIGTERM', gracefulShutdown);
}

// 启动
main().catch(error => {
  console.error('启动失败:', error);
  process.exit(1);
});
