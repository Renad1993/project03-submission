let count = 0;
const counter = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");


function updateColor(count){
      if(count > 0){
           counter.style.color= "green";
      } else if(count < 0){
             counter.style.color= "red";
      } else {
             counter.style.color= "black";
      }
} 

incrementButton.addEventListener('click', function(event){
     count = count + 1;
     counter.textContent = count;
     updateColor(count);
     
});

decrementButton.addEventListener('click', function(event){
       count = count - 1 ;
       counter.textContent = count;
       updateColor(count);
});  

resetButton.addEventListener('click', function(event){

         count = 0;
         counter.textContent = count;
         updateColor(count);
}); 
