const text = "Welcome to ChenYongyu's Page!";
let index = 0;

// 在页面加载时清空标题文本，避免打字机效果覆盖已存在文本
document.getElementById('title').textContent = "";

function typeText() {
    if (index < text.length) {
        document.getElementById('title').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);  // 每100ms显示一个字
    } else {
        // 完成打字后，显示标题
        document.getElementById('title').classList.add('visible');
    }
}

// 页面加载完成后启动打字机效果
window.onload = function () {
    typeText();
};
