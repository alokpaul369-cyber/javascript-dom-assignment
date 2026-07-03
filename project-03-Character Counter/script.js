const textInput = document.querySelector("#textinput");
const charCount = document.querySelector("#charcount");
const wordCount = document.querySelector("#wordcount");

textInput.addEventListener("input", () =>{
            const text = textInput.value;
            charCount.textContent = text.length;
            const words = text.trim().split(/\s+/);
            if (text.trim() === "")
            {
                wordCount.textContent = 0;
            } else {
                wordCount.textContent = words.length;
            }
            
});
