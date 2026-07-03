const passwordField = document.querySelector("#password");
const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/";

const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword(length = 8){
    let password = "";
    
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = 4; i < length; i++)
    {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
    passwordField.value = password;
}
generateBtn.addEventListener("click", () => {
    generatePassword();
});
copyBtn.addEventListener("click", () => {
     if (passwordField.value === ""){
        alert("Generate a password first!");
        return;
     }
     navigator.clipboard.writeText(passwordField.value);
     copyBtn.textContent = "Copied!";

     setTimeout(() => {
        copyBtn.textContent = "Copy";
     }, 1500);
});
generatePassword();