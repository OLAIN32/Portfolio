
var chatContainer = document.querySelector('.chat');
var fullscreenButton = document.querySelector('.fullscreen-button');
function toggleChatContainer() {
  chatContainer.classList.toggle('hidden');
}
function checkScreenSize() {
  if (window.innerWidth <= 1600) {
    toggleChatContainer();
  }
}
fullscreenButton.addEventListener('click', toggleChatContainer);

window.addEventListener('resize', checkScreenSize);
checkScreenSize();
