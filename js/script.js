// 定义要显示的文本
const text = "Welcome to ChenYongyu's Page!";
let index = 0;

// 获取标题元素
const titleElement = document.getElementById('title');

// 打字机效果函数
function typeText() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);  // 逐个字符添加到标题
        index++;
        setTimeout(typeText, 100);  // 每100ms添加一个字符
    }
}

// 页面加载完成后启动打字机效果
window.onload = function () {
    setTimeout(typeText, 500);  // 延迟500ms开始打字机效果
};
