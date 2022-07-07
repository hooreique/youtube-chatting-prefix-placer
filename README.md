# Youtube chatting (floating window only) prefix placer

It automatically places the prefix based on previous chat you submitted.

# 유튜브 채팅 (새 창 전용) 말머리 자동 삽입기

이전 채팅의 첫 마디를 자동으로 다시 입력합니다.

## Usage

1. Open Youtube live video
1. Open chatting to new floating window
1. F12 (open developer tool)
1. Open console tab
1. Input the [script](./script.js)
1. Type the first chat manually
1. Done

## 사용법

1. 유튜브 라이브 영상을 엽니다
1. 채팅을 새 창으로 엽니다
1. F12 (개발자 도구)
1. 콘솔 탭을 엽니다
1. [스크립트](./script.js)를 입력합니다
1. 첫 채팅을 수동으로 입력합니다
1. 끝

## Script

```javascript
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
```
