document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id.slice(-1);
    const isActive = button.classList.contains('active');
    
    document.querySelectorAll('.firstBlock').forEach(block => {
      block.style.display = 'none';
    });
    
    if (!isActive) {
      document.querySelectorAll('.button').forEach(btn => {
        btn.classList.remove('active');
        btn.querySelector('img').src = btn.querySelector('img').src.replace('_active.svg', '.svg');
      });
      button.classList.add('active');
      button.querySelector('img').src = button.querySelector('img').src.replace('.svg', '_active.svg');
      document.getElementById(`block${buttonId}`).style.display = 'block';
    } else {
      document.getElementById('block1').style.display = 'block'; // Показываем первый блок при повторном нажатии на кнопку
    }
  });
  
  button.addEventListener('mouseenter', () => {
    const svg = button.querySelector('img');
    if (!button.classList.contains('active') && !svg.classList.contains('active')) {
      svg.src = svg.src.replace('.svg', '_active.svg');
    }
  });
  
  button.addEventListener('mouseleave', () => {
    const svg = button.querySelector('img');
    if (!button.classList.contains('active') && !svg.classList.contains('active')) {
      svg.src = svg.src.replace('_active.svg', '.svg');
    }
  });
});