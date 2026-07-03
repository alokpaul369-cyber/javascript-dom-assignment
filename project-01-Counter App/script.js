let count = 0;

const countDisplay = document.getElementById("count");

const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateCounter() {
    countDisplay.textContent = count;

    // Change color based on value
    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

// Initialize
updateCounter();