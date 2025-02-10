document.getElementById('yesButton').addEventListener('click', function() {
    document.querySelector('.buttons').classList.add('hidden');
    document.querySelector('.images').classList.add('hidden');
    document.getElementById('heartMessage').classList.remove('hidden');
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
