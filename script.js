const YTChatTextArea = window.document.querySelector(
  "yt-live-chat-text-input-field-renderer.style-scope > div:nth-child(2)"
);
let chatText = "";
YTChatTextArea.addEventListener("compositionend", function () {
  chatText = this.innerText;
});
YTChatTextArea.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    this.innerText = chatText.split(" ")[0];
  }
});
