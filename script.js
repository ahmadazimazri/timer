// Get references to DOM elements
const timeSlider = document.getElementById("timeSlider");
const secondsDisplay = document.getElementById("seconds");
const minutesDisplay = document.getElementById("minutes");
const startTimerButton = document.getElementById("startTimer");
const countdownDisplay = document.getElementById("countdown");

let countdownInterval;

// Update the seconds and minutes display dynamically
timeSlider.addEventListener("input", () => {
    const seconds = timeSlider.value;
    const minutes = (seconds / 60).toFixed(2);
    secondsDisplay.textContent = seconds;
    minutesDisplay.textContent = minutes;
});

// Start the timer
startTimerButton.addEventListener("click", () => {
    let secondsRemaining = parseInt(timeSlider.value, 10);

    // Display countdown message
    countdownDisplay.style.display = "block";

    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Start countdown
    countdownInterval = setInterval(() => {
        if (secondsRemaining > 0) {
            secondsRemaining--;
            countdownDisplay.textContent = `Time Remaining: ${secondsRemaining} seconds`;
        } else {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "Time's up! Redirecting...";
            // Redirect to the Mission Impossible theme song
            window.location.href = "https://www.youtube.com/watch?v=c5xA8zU_jQ4";
        }
    }, 1000);
});
