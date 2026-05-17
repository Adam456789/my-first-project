const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", () => {
  message.textContent = "你好，GitHub！这是我的第一个网页交互。";
});
