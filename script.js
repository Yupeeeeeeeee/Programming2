let title =document.getElementById("title");
let taskInp = document.getElementById("taskInp");
let button = document.getElementById("addBtn");
let message = dochment.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click",function(){
let taskText = taskInp.value;
message.textContent= taskText;
});
