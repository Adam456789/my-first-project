const story = document.getElementById("story");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultText = document.getElementById("resultText");

analyzeBtn.addEventListener("click", () => {
  const text = story.value.trim();

  if (!text) {
    resultText.textContent = "你还没有输入情况。先把聊天背景、对方说了什么、你想达到什么效果写清楚。";
    return;
  }

  resultText.textContent =
`关系判断：
对方突然联系你，不一定代表想复合，也可能只是试探、怀旧、无聊或想确认你是否还在意。

风险提醒：
不要立刻暴露强烈情绪，也不要连续追问。越急越容易失去主动权。

推荐回复：
“最近还可以，谢谢关心。你呢？”

为什么这样回：
这句话礼貌、稳定、不卑微，也不会把话题一下子推得太重。先观察对方下一句，再决定要不要继续聊。

下一步建议：
如果对方认真展开话题，可以慢慢聊；如果只是敷衍一句，就不要主动加码。`;
});
