function calculate(operator){
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);
    const result = document.querySelector("#result")

    if ( document.querySelector("#num1").value === "" ||
         document.querySelector("#num2").value === ""
){
        result.innerHTML = "Result: Please enter both numbers.";
        return;
}
let answer;
if (operator === "+"){
    answer = num1 + num2;
}
else if (operator === "-"){
    answer = num1 - num2;
}
else if (operator === "*"){
    answer = num1 * num2;
}
else if (operator === "/"){
    if (num2 === 0){
        result.innerHTML = "Result: Cannot divide by zero."
        return;
    }

    answer = num1 / num2;
}
result.innerHTML = "Result: " + answer;
}