// Get references to DOM elements
const timeSlider = document.getElementById("timeSlider");
const secondsDisplay = document.getElementById("seconds");
const minutesDisplay = document.getElementById("minutes");
const startTimerButton = document.getElementById("startTimer");

// Update the seconds and minutes display dynamically
timeSlider.addEventListener("input", () => {
    const seconds = timeSlider.value;
    const minutes = (seconds / 60).toFixed(2);
    secondsDisplay.textContent = seconds;
    minutesDisplay.textContent = minutes;
});

// Start the timer
startTimerButton.addEventListener("click", () => {
    const seconds = parseInt(timeSlider.value, 10);
    alert(`Timer set for ${seconds} seconds. Starting now!`);

    // Start the countdown
    setTimeout(() => {
        // Redirect to the Mission Impossible theme song
        window.location.href = "https://www.youtube.com/watch?v=yLo9k8Gifb0";
    }, seconds * 1000); // Convert seconds to milliseconds
});
