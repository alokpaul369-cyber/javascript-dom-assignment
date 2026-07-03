let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attemps = 0;
function checkGuess(){
    const input = document.querySelector("#guessInput");
    const guess = Number(input.value);
    const message = document.querySelector("#message");
    if (guess < 1 || guess > 100 || isNaN(guess)){
        message.innerHTML = "⚠️ Enter a number between 1 and 100."
        return;
    }
    attemps++;
    document.querySelector("#attempts").innerHTML = attemps;
    if (guess > randomNumber){
        message.innerHTML = "📈 Too High!";
    }
    else if (guess < randomNumber){
        message.innerHTML = "📉 Too Low!";
    }
    else{
        message.innerHTML = `🎉 Correct Answer!<br>The number was <b>${randomNumber}</b>.`;
    }
    input.value = "";
    input.focus()
}
function newGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemps = 0;
    console.log(randomNumber)
    document.querySelector("#attempts").innerHTML = 0;
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#guessInput").value = "";
}