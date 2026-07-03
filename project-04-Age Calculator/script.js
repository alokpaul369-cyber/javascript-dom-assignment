function calculateAge(){
    const dob = document.querySelector("#dob").value;
    const result = document.querySelector("#result");
    if (dob === "")
    {
        result.innerHTML = "⚠️ Please select your date of birth.";
        return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
if (birthDate > today){
    result.innerHTML = "⚠️ Date of birth cannot be in the future.";
    return;
}
let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();
if (days < 0)
{
    months--;
    const lastMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
    ).getDate();
    days += lastMonth;
}
if (months < 0)
{
    years--;
    months += 12;
}
result.innerHTML =
`🎊<br>
<strong>${years}</strong> Years<br>
<strong>${months}</strong> Months<br>
<strong>${days}</strong> Days
`;
}


