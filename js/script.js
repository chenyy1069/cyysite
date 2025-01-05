// 获取元素
const contactBtn = document.getElementById('contact-btn');
const contactInfo = document.getElementById('contact-info');

// 按钮点击事件 - 显示/隐藏联系信息并切换按钮文本
contactBtn.onclick = function() {
    if (contactInfo.classList.contains('show')) {
        contactInfo.classList.remove('show');  // 移除类，隐藏
        contactBtn.textContent = 'Show Contact Info';
    } else {
        contactInfo.classList.add('show');  // 添加类，显示
        contactBtn.textContent = 'Hide Contact Info';
    }
};

// 初始化时隐藏联系信息
contactInfo.classList.remove('show');

// 打字机效果
const text = "Welcome to ChenYongyu's Page!";
let index = 0;
const titleElement = document.getElementById('title');

function typeText() {
    if (index < text.length) {
        titleElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);  // 每100ms打印一个字符
    }
}

// 页面加载完成后启动打字机效果
window.onload = function () {
    setTimeout(typeText, 500);  // 延迟500ms后开始打字机效果
};
