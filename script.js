let title =document.getElementById("title");
let taskInp = document.getElementById("taskInp");
let button = document.getElementById("addBtn");
let message = dochment.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count= 0;

addBtn.addEventListener("click",function(){

   count++;
    taskCount.textContent= count;
    let taskText = taskInp.value;
message.textContent= taskText;
});
