// 获取元素
const contactBtn = document.getElementById('contact-btn');
const contactInfo = document.getElementById('contact-info');

// 切换显示/隐藏联系信息
contactBtn.onclick = function() {
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';  // 显示联系信息
    } else {
        contactInfo.style.display = 'none';   // 隐藏联系信息
    }
};

// 初始化时隐藏联系信息
contactInfo.style.display = 'none';

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
