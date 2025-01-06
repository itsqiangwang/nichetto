// Select the body and card elements
const body = document.body;
const card = document.querySelector('.card');

// Function to toggle the rotation state
function toggleCardFlip() {
    card.classList.toggle('flipped'); // Toggle the flipped state on the card

    // Update the background color based on the card's state
    if (card.classList.contains('flipped')) {
        body.classList.add('back-view'); // Back view
    } else {
        body.classList.remove('back-view'); // Front view
    }
}

// Add click and touch event listeners to toggle the flip
body.addEventListener('click', toggleCardFlip);
body.addEventListener('touchstart', toggleCardFlip);
