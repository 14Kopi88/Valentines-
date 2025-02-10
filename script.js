function handleAnswer(answer) {
  const responseDiv = document.getElementById('response');
  const noButton = document.querySelector('.no');
  const catImage = document.getElementById('catImage');
  const fireworks = document.getElementById('fireworks');
  
  if (answer === 'yes') {
    responseDiv.innerHTML = 'Yay! I’m so happy! 💖';
    responseDiv.style.color = '#ff69b4';
    playHeartAnimation();
    displayFireworks(fireworks);
    catImage.style.display = 'none'; // Elrejtjük a cicás képet
  } else if (answer === 'no') {
    responseDiv.innerHTML = 'Oh no! 💔 Maybe next time?';
    responseDiv.style.color = '#ff0000';
    makeNoBounce(noButton);
    displayCatImage(catImage); // Megjelenítjük a cicás képet
    fireworks.style.display = 'none'; // Elrejtjük a tűzijátékot
  }
}

function playHeartAnimation() {
  const heartGif = document.querySelector('.heart-gif');
  heartGif.style.animation = 'heart-beat 1.5s infinite';
}

function makeNoBounce(button) {
  button.classList.add('no-bounce');
}

function displayFireworks(fireworks) {
  fireworks.style.display = 'block'; // Megjelenítjük a tűzijátékot
}

function displayCatImage(catImage) {
  catImage.style.display = 'block'; // Megjelenítjük a cicás képet
  catImage.src = 'https://media.giphy.com/media/11s7Ke7jcNxCH6/giphy.gif'; // Macskás szív GIF
}
