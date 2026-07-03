#!/bin/bash
# 本地预览首页（避免 file:// 协议导致样式/图片加载失败）
cd "$(dirname "$0")"
PORT=5173

if lsof -i :$PORT >/dev/null 2>&1; then
  echo "服务器已在运行 → http://localhost:$PORT"
else
  echo "启动本地服务器 → http://localhost:$PORT"
  python3 -m http.server $PORT &
  sleep 1
fi

open "http://localhost:$PORT/"
