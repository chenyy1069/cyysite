const text = "Welcome to ChenYongyu's Page!";
let index = 0;

// 获取标题元素
const titleElement = document.getElementById('title');

// 初始化时清空标题文本，确保打字机效果能正常工作
titleElement.textContent = "";

// 打字机效果函数
function typeText() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);  // 逐个字符添加到标题
        index++;
        setTimeout(typeText, 100);  // 每100ms添加一个字符
    } else {
        // 打字完成后显示标题（显示 class）
        titleElement.classList.add('visible');
        console.log("Typing effect finished.");  // 打印调试信息
    }
}

// 页面加载完成后启动打字机效果
window.onload = function () {
    console.log("Starting typing effect...");  // 打印调试信息
    typeText();  // 启动打字效果
};
