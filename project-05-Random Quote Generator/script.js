const quotes = [
    "The future depends on what you do today. – Mahatma Gandhi",
    "Success is not final; failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Dream big and dare to fail. – Norman Vaughan",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Do something today that your future self will thank you for.",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Push yourself because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Stay positive, work hard, and make it happen."
];
const quote = document.querySelector("#quote");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
       const randomIndex = Math.floor(Math.random() * quotes.length);
       quote.textContent = quotes[randomIndex];
});
