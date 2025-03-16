


export async function fetchSSE(url, callback) {
    const response = await fetch(url);

    // 检查响应是否成功
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 获取响应的 ReadableStream
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        // 读取流数据
        const { done, value } = await reader.read();

        // 如果流结束，退出循环
        if (done) {
            console.log('Stream complete');
            break;
        }

        // 解码数据并处理
        const chunk = decoder.decode(value, { stream: true });
        console.log('Received chunk:', chunk);

        // 解析 SSE 格式的数据
        chunk.split('\n\n').forEach(event => {
            if (event.trim()) {
                const data = event.replace(/^data: /, '').trim();
                if (data) {
                    console.log('Parsed data:', data);
                    callback(data)
                }
            }
        });
    }
}