const input = document.querySelector("#textInput");
const preview = document.querySelector("#previewText");

input.addEventListener("input", () => {
    if (input.value.trim() === ""){
        preview.textContent = "Type something...";
    } else {
        preview.textContent = input.value;
    }
});