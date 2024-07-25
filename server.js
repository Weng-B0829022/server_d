const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

// 使用 JSON 解析中介軟體
app.use(express.json());

// 使用路由
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
