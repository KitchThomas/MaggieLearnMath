#!/usr/bin/env node

/**
 * 简单的本地服务器，用于运行 Maggie's Math Learning 应用
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // 默认请求 index.html
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // 防止路径遍历攻击：确保解析后的路径在项目目录内
  filePath = path.resolve(filePath);
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>');
    return;
  }

  // 禁止访问敏感文件
  const basename = path.basename(filePath);
  const sensitiveFiles = ['firebase-config.js', 'package.json', 'package-lock.json', '.env'];
  if (sensitiveFiles.includes(basename) || filePath.includes('node_modules') || filePath.includes('git-autosync-tool')) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>');
    return;
  }

  // 获取文件扩展名
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // 读取并返回文件
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Server Error</h1>');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🌟 Maggie's Math Learning Server Started! 🌟            ║
║                                                           ║
║   Open your browser and visit:                            ║
║   http://localhost:${PORT}                                    ║
║                                                           ║
║   Press Ctrl+C to stop the server                         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});
