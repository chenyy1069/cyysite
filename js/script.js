// 打字效果
const text = "Hi there! Welcome to Chenyy1069's Site!";
let index = 0;
const titleElement = document.getElementById("title");

function typeText() {
  if (index < text.length) {
    titleElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}
window.onload = function () {
  setTimeout(typeText, 300);
};

// 联系方式弹窗
const contactBtn = document.getElementById("contact-btn");
const contactModal = document.getElementById("contact-modal");
const closeContact = document.getElementById("close-contact");

contactBtn.onclick = () => {
  contactModal.style.display = "block";
};
closeContact.onclick = () => {
  contactModal.style.display = "none";
};

// Cryptos弹窗
const cryptosBtn = document.getElementById("cryptos-btn");
const cryptosModal = document.getElementById("cryptos-modal");
const closeCryptos = document.getElementById("close-cryptos");

cryptosBtn.onclick = () => {
  cryptosModal.style.display = "block";
};
closeCryptos.onclick = () => {
  cryptosModal.style.display = "none";
};

// 关闭所有弹窗当点击外部
window.onclick = function(event) {
  if (event.target === contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target === cryptosModal) {
    cryptosModal.style.display = "none";
  }
};

// 支付页面
const moneyBtn = document.getElementById("money-btn");
const paymentPage = document.getElementById("payment-page");
const backPayment = document.getElementById("back-payment");
const showmethodBtn = document.getElementById("showmethod");
const paymentOptions = document.getElementById("payment-options");

moneyBtn.onclick = () => {
  paymentPage.style.display = "flex";
};
backPayment.onclick = () => {
  paymentPage.style.display = "none";
  paymentOptions.style.display = "none";
};

// Toggle payment options visibility
showmethodBtn.onclick = () => {
  if (paymentOptions.style.display === "flex") {
    paymentOptions.style.display = "none";
  } else {
    paymentOptions.style.display = "flex";
  }
};

// 显示支付二维码
const imageContainer = document.getElementById("image-container");
const paymentImg = document.getElementById("payment-img");
const closeImage = document.getElementById("close-image");

function showPaymentImage(url) {
  paymentImg.src = url;
  imageContainer.style.display = "flex";
}

closeImage.onclick = () => {
  imageContainer.style.display = "none";
};
