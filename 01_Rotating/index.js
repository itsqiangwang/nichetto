const card = document.querySelector('.card');
const video = document.querySelector('.front-video');
let isFlipped = false;

// Ensure autoplay compatibility for mobile
document.addEventListener('DOMContentLoaded', () => {
    if (video.paused) {
        video.muted = true; // Ensure muted is set
        video.playsInline = true;
        video.autoplay = true;
        video.loop = true;
        video.play().catch((error) => {
            console.error("Autoplay failed:", error);
        });
    }
});

// Toggle card rotation and handle video
card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    card.classList.toggle('flipped');

    if (isFlipped) {
        video.pause(); // Pause when rotating to the back
    } else {
        video.play().catch((error) => {
            console.error("Video play error:", error);
        });
    }
});