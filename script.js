let birthYearInp = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let error = document.getElementById("error");
button.addEventListener("click",function(){
    let birthYear= birthYearInp.value;
    if(birthYear === ""){
        error.textContent = "Please Enter Your Birth Year"
        return;
    }
    let age = 2026 - birthYear;
    if (age >= 100){
        error.textContent = "The entered birth year seems invalid"
    }
    else if (age < 100 && age > 0){
    result.textContent = "You Age is " + age ;
    }
    else if (age <= 0){
        error.textContent= "Please enter a valid birth year"
    }
})