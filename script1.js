const image = document.getElementById('scaling-image');
const container = document.getElementById('image-container');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const timerInput = document.getElementById('timer-input');
const countdownDisplay = document.getElementById('countdown');

let timer; // A variable to hold the timer
let remainingTime = 0; // Track the remaining time in seconds
let timerDuration = 0; // The total duration of the timer in minutes

function scaleImage() {
    const currentScale = parseFloat(image.style.transform.replace('scale(', '').replace(')', '')) || 0;

    if (remainingTime <= 0) {
        // If the timer has reached 0 or gone negative, set the image to full scale
        image.style.transform = `scale(1)`;
        clearInterval(timer);
    } else if (currentScale < 1) {
        // If we haven't reached full scale yet, scale proportionally
        const newScale = 1 - (remainingTime / (timerDuration * 60));
        image.style.transform = `scale(${newScale})`;
    }
}

startButton.addEventListener('click', () => {
    // Start the timer when the "Start Scaling" button is clicked
    timerDuration = parseInt(timerInput.value);
    remainingTime = timerDuration * 60; // Convert minutes to seconds
    updateCountdownDisplay();

    timer = setInterval(() => {
        scaleImage();
        remainingTime -= 1;
        updateCountdownDisplay();

        if (remainingTime <= 0) {
            clearInterval(timer);
        }
    }, 1000); // Run the timer every 1 second
});

stopButton.addEventListener('click', () => {
    // Stop the timer when the "Stop Scaling" button is clicked
    clearInterval(timer);
});

function updateCountdownDisplay() {
    countdownDisplay.textContent = `Time Remaining: ${remainingTime} seconds`;
}
