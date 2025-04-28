document.addEventListener('DOMContentLoaded', () => {
  const giftBox = document.getElementById('giftBox');
  const giftClosed = document.getElementById('giftClosed');
  const giftOpen = document.getElementById('giftOpen');
  const loveLetter = document.getElementById('loveLetter');
  const nextBtn = document.getElementById('nextBtn');
    
  const music = document.getElementById('backgroundMusic');
  const musicBtn = document.getElementById('musicBtn');
 
 

  giftBox.addEventListener('click', () => {
    // Hide closed gift, show opened gift
    giftClosed.style.display = 'none';
    giftOpen.style.display = 'block';

    // After short delay, show love letter
    setTimeout(() => {
      loveLetter.style.display = 'block';
      loveLetter.style.opacity = '0';
      loveLetter.style.transform = 'translateY(20px)';
      loveLetter.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      setTimeout(() => {
        loveLetter.style.opacity = '1';
        loveLetter.style.transform = 'translateY(0)';
      }, 50);

      // Show next button
      nextBtn.style.display = 'block';
      nextBtn.style.opacity = '0';
      nextBtn.style.transition = 'opacity 0.6s ease';
      setTimeout(() => {
        nextBtn.style.opacity = '1';
      }, 50);
    }, 500);
  });
  let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = '🎵'; // Music off symbol
    musicBtn.classList.remove('playing'); // 🛠️ Remove spin when paused
  } else {
    music.play();
    musicBtn.textContent = '🔊'; // Music on symbol
    musicBtn.classList.add('playing'); // 🛠️ Add spin when playing
  }
  isPlaying = !isPlaying;
});

  // When clicking next button
  nextBtn.addEventListener('click', () => {
    window.location.href = 'page4.html'; // or whatever your next page is
  });
});
