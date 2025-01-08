const card = document.querySelector('.card');
let isFlipped = false;

// Toggle card rotation and handle video
card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    card.classList.toggle('flipped');
});