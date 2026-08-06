let title =document.getElementById("title");
let taskInp = document.getElementById("taskInp");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

let count= 0;

addBtn.addEventListener("click",function(){
    let taskText = taskInp.value;
    message.textContent="New Task : " + taskText;
    count++;
    taskCount.textContent= count;

    taskInp.value = "";
});
