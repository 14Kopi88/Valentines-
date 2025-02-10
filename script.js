document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.buttons').classList.add('hidden');
    document.querySelector('.images').classList.add('hidden');
    document.getElementById('heartMessage').classList.remove('hidden');
    startFireworks();
});

document.getElementById('noButton').addEventListener('click', function() {
    moveButton();
});

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function startFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f'];

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworksContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}
