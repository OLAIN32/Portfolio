document.addEventListener("DOMContentLoaded", function() {
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  sendBtn.addEventListener("click", function() {
      sendMessage();
  });

  userInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
          sendMessage();
      }
  });

  function sendMessage() {
      const message = userInput.value.trim();
      if (message !== "") {
          const sender = "You"; // You can replace this with actual username
          const timestamp = new Date().toLocaleTimeString();
          const messageElement = document.createElement("div");
          messageElement.classList.add("message");
          messageElement.innerHTML = `<div class="info"><span class="sender">${sender}<span class="timestamp">${timestamp}</div></span><br> </span><span class="msgContent">${message}</span>`;
          chatBox.appendChild(messageElement);

          // Check if the chat box has reached its maximum height
          if (chatBox.scrollHeight > chatBox.clientHeight) {
              // Remove the first child (oldest message)
              chatBox.removeChild(chatBox.firstElementChild);
          }

          // Scroll to the bottom
          chatBox.scrollTop = chatBox.scrollHeight;
          userInput.value = "";
      }
  }
});
