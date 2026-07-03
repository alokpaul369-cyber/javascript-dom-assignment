function calculateResult(){
    const bangla = Number(document.querySelector("#bangla").value);
    const english = Number(document.querySelector("#english").value);
    const math = Number(document.querySelector("#math").value);
    const result = document.querySelector("#result");

if (document.querySelector("#bangla").value === ""||
    document.querySelector("#english").value === ""||
    document.querySelector("#math").value === ""
){
    result.innerHTML = "⚠️ Please enter all subject marks.";
    result.style.color = "red";
    return;
}
if(bangla < 0 || bangla > 100 || english < 0 || english > 100 || math < 0 || math > 100)
{
    result.innerHTML = "⚠️ Marks must be between 0 and 100.";
    result.style.color = "red";
    return;
}
const total = bangla + english + math;
const average = total/3;
let grade = "";
let status = "";
 if(bangla < 33 || english < 33 || math < 33){
    grade = "F";
    status = "Fail";
    result.style.color = "red";
 } else {
    if (average >= 80) grade = "A+";
    else if (average >= 70) grade = "A";
    else if (average >= 60) grade = "A-";
    else if (average >= 50) grade = "B";
    else if (average >= 40) grade = "C";
    else if (average >= 33) grade = "D";
    else {
        grade = "F";
        result.style.color = "red"
    }
    status = "Pass";
 }
 result.style.color = "green";
 result.innerHTML = `Total Marks : ${total} / 300 <br>
 Average Marks : ${average.toFixed(2)}<br>
 Grade : ${grade} <br>
 Result : ${status}`;
}
 function resetData(){
    document.querySelector("#bangla").value = "";
    document.querySelector("#english").value = "";
    document.querySelector("#math").value = "";
    document.querySelector("#result").innerHTML = "";
 }