const express = require('express');
const app = express();

// 模拟大模型生成文本的流式返回
app.get('/events', (req, res) => {
    // 设置 SSE 相关的响应头
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // 模拟生成文本的过程
    const textChunks = [
        "Hello, ",
        "this is a ",
        "streaming response ",
        "from the server."
    ];

    // 每隔 1 秒发送一个文本块
    let index = 0;
    const intervalId = setInterval(() => {
        if (index < textChunks.length) {
            const chunk = textChunks[index];
            res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`); // SSE 格式
            index++;
        } else {
            clearInterval(intervalId);
            res.write(`data: ${JSON.stringify({ done: true })}\n\n`); // 结束标志
            res.end();
        }
    }, 1000);

    // 客户端断开连接时清理资源
    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});