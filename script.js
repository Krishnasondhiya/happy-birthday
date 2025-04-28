document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bgMusic');
  document.body.addEventListener('click', ()=> {
    audio.play();
  },{once: true});
  
    
  });
 
/*document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bgMusic');
  
  // Play music on user click (for mobile browsers blocking autoplay)
  document.body.addEventListener('click', () => {
    audio.play();
  }, {once: true});
});*/
