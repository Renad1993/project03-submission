const parent= document.getElementById("myTaskList");
const addTaskButton= document.getElementById("addTask");
const task= document.getElementById("task");
const taskCount= document.getElementById("taskCount");

let count=0;

function addTask(){
   const taskInput= task.value.trim();
   if(taskInput === ""){
               return;
   }
   const li= document.createElement('li');
   li.textContent= taskInput;
   parent.appendChild(li);
   count = count + 1;
   taskCount.textContent = count;
   task.value = "";
   const deleteButton = document.createElement("button");
   deleteButton.textContent = "Delete";
   li.appendChild(deleteButton);
   li.addEventListener("click", function(event){
      if(event.target !== deleteButton) {
           li.classList.toggle("completed");
      }
   });

   deleteButton.addEventListener('click', function(event){
         li.remove();
         count = count - 1;
         taskCount.textContent = count;

   });
}

addTaskButton.addEventListener('click', addTask);

task.addEventListener("keydown", function(event){
      if(event.key === "Enter") {
          addTask();
      }
});


