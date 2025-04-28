document.addEventListener('DOMContentLoaded', () => {
  const playBtn      = document.getElementById('playSongBtn');
  const birthdaySong = document.getElementById('birthdaySong');
  const thankButton    = document.querySelector('.thank-button');
  const container      = document.getElementById('cake-container');
  const welcomeSection = document.getElementById('welcomeSection');
  const cake           = document.getElementById('cake');
  const cuttedCake     = document.getElementById('cuttedCake');
  const knife          = document.getElementById('knife');
  const celebration    = document.getElementById('celebrationText');
  const fireworks      = document.getElementById('fireworks');
  const nextBtn        = document.getElementById('nextBtn');

  let isCut = false;

  playBtn.addEventListener('click', () => {
    birthdaySong.currentTime = 0;
    birthdaySong.play().then(() => {
      console.log('Birthday song started.');
    }).catch((error) => {
      console.error('Play error:', error);
      alert('Click again to allow sound!');
    });
                
    playBtn.style.animation = 'zoomOutFade 0.6s forwards';
    setTimeout(() => {
    playBtn.style.display = 'none'; // Hide play button
    cakeContainer.style.display = 'block'; // Show cake area
    }, 600); // Wait for animation to finish
  });
  
  // Move from welcome to cake section
  thankButton.addEventListener('click', () => {
    welcomeSection.style.display = 'none';
    container.style.display = 'block';
  });

  // Now bind click to KNIFE only
  knife.addEventListener('click', cutCake);

  function cutCake() {cuttedCake
    if (isCut) return; // Stop if already cut
  

    // Animate cake fade out
    cake.style.transition = 'opacity 1.2s ease';
    cake.style.opacity = '0';
    cake.style.pointerEvents = 'none'; // prevent clicking again

    // Animate knife moving away and fading
    knife.style.transition = 'transform 1.5s ease, opacity 1.5s ease';
    knife.style.transform = 'translate(-150px, 300px) rotate(-90deg)';
    knife.style.opacity = '0';
    knife.style.pointerEvents = 'none';

    // After cake faded out, swap to cutted cake with bounce
    setTimeout(() => {
      cake.style.display = 'none';              // Fully hide full cake
      cuttedCake.style.display = 'block';        // Show cutted cake
      cuttedCake.style.opacity = '0';            // Start hidden
      cuttedCake.style.transform = 'scale(0.8)'; // Start slightly small
      cuttedCake.style.transition = 'opacity 1.2s ease, transform 0.8s ease';
      
      setTimeout(() => {
        cuttedCake.style.opacity = '1';          // Fade in
        cuttedCake.style.transform = 'scale(1)'; // Bounce back to normal size
      }, 50);
    }, 1200); // Wait for cake fade out

    // Play birthday song after knife moved
   

   // Show celebration text after cutted cake fully visible
setTimeout(() => {
  celebration.style.display = 'block';
  celebration.style.opacity = '1';
}, 1500);

// Fireworks animation
setTimeout(() => {
  fireworks.style.display = 'block';
  fireworks.style.opacity = '1';

  setTimeout(() => {
    fireworks.style.opacity = '0';
    setTimeout(() => {
      fireworks.style.display = 'none'; // also hide after fading out
    }, 1000);
  }, 2000); // fireworks stay visible for 2 seconds
}, 2000);

// Show "Next" button nicely
setTimeout(() => {
  nextBtn.style.display = 'block';
  nextBtn.style.opacity = '0';
  nextBtn.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    nextBtn.style.opacity = '1';
  }, 100); // give it a nice fade
}, 4000);
    isCut = true; // Lock further clicks after one time
  }

  // Navigate to gift page
  nextBtn.addEventListener('click', () => {
    window.location.href = 'page3.html';
  });
});
