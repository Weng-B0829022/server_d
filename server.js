// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 提供靜態文件
app.use(express.static(path.join(__dirname, 'dist')));

// 所有路由都返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
