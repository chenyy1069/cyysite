const text = "Welcome to ChenYongyu's Page!";
let index = 0;

const titleElement = document.getElementById('title');
titleElement.textContent = "";

function typeText() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);  // 每100ms添加一个字符
    } else {
        titleElement.classList.add('visible');
    }
}

window.onload = function () {
    setTimeout(typeText, 500);  // 延迟500ms开始打字机效果
};
