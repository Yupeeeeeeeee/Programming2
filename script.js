let birthYearInp = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let error = document.getElementById("error");
button.addEventListener("click",function(){
    let birthYear= birthYearInp.value;
    let age = 2026 - birthYear ;
    if(birthYear === ""){
        error.textContent = "Please Enter Your Birth Year"
        result.textContent = ""
        return;
    }
    if (age >= 100){
        result.textContent = "Bro you must be dead LOL :)"
    }
    else if (age < 100 && age > 0){
    result.textContent = "You Age is" + "age" ;
    }
    else if (age <= 0){
        result.textContent= "How did you exist then , huh ???"
    }
})