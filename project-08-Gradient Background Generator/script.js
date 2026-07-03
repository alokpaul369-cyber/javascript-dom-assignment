const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");
const cssCode = document.querySelector("#cssCode");

function randomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
function generateGradient(){
    const color1 = randomColor();
    const color2 = randomColor();
    const angle = Math.floor(Math.random() * 360);
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    document.body.style.background = gradient;
    cssCode.textContent = `Background: ${gradient};`;
}
generateBtn.addEventListener("click", generateGradient);
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssCode.textContent);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy CSS";
    }, 1500);
});
generateGradient();