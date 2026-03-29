/**
 * Local Test Server for Dictation Practice
 * 本地测试服务器
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  // 获取请求的文件路径
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './test-dictation.html';
  }

  // 获取文件扩展名
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  // 读取文件
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // 文件不存在
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>', 'utf-8');
      } else {
        // 服务器错误
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      // 成功返回文件
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    🎯 Dictation Practice Test Portal          ║
║                                                              ║
║  Server running at:                                          ║
║  → http://localhost:${PORT}                                  ║
║  → http://127.0.0.1:${PORT}                                  ║
║                                                              ║
║  Press Ctrl+C to stop                                        ║
╚══════════════════════════════════════════════════════════════╝
  `);
  console.log('\n📝 Test Pages Available:');
  console.log(`   → Dictation Test:   http://localhost:${PORT}/test-dictation.html`);
  console.log(`   → Main Page:        http://localhost:${PORT}/index.html`);
  console.log(`   → Game Test:        http://localhost:${PORT}/test-game.html`);
  console.log('\n');
});
