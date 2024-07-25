# 使用官方 Node.js 映像作為基礎映像
FROM node:14

# 設置工作目錄
WORKDIR /app

# 複製 server.js 文件到工作目錄
COPY server.js ./

# 複製 dist 文件夾到工作目錄
COPY dist ./dist

# 安裝 express（如果未安裝）
RUN npm install express

# 暴露端口
EXPOSE 3000

# 運行 Express 應用
CMD ["node", "server.js"]
