function handleAnswer(answer) {
  const responseDiv = document.getElementById('response');
  const noButton = document.querySelector('.no');
  
  if (answer === 'yes') {
    responseDiv.innerHTML = 'Yay! I’m so happy! 💖';
    responseDiv.style.color = '#ff69b4';
    playHeartAnimation();
  } else if (answer === 'no') {
    responseDiv.innerHTML = 'Oh no! 💔 Maybe next time?';
    responseDiv.style.color = '#ff0000';
    makeNoBounce(noButton);
  }
}

function playHeartAnimation() {
  const heartGif = document.querySelector('.heart-gif');
  heartGif.style.animation = 'heart-beat 1.5s infinite';
}

function makeNoBounce(button) {
  button.classList.add('no-bounce');
}
