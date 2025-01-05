const text = "Welcome to ChenYongyu's Page!";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById('title').textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100);  // 打字速度
    }
}

window.onload = typeText;
