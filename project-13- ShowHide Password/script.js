const password = document.querySelector("#password");
const checkbox = document.querySelector("#showPassword");

checkbox.addEventListener("change", () => {
    if (checkbox.checked){
        password.type = "text";
    } else { password.type = "password"

    }
});
   