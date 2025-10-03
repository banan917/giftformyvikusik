document.getElementById('giftButton').addEventListener('click', () => {
    const box = document.getElementById('messageBox');
    box.classList.remove('hidden');
  
    const messages = box.querySelectorAll('.message');
    messages.forEach((msg, i) => {
      msg.style.animationDelay = `${i * 0.8}s`;
      msg.classList.add('wave');
    });
  
    createHearts();
  });
  
  function createHearts() {
    const container = document.getElementById('heartsContainer');
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  }
  
