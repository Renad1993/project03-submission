const title = document.getElementById("title");
title.textContent = "Welcome to JavaScript DOM!";


const message = document.querySelector(".message");
message.textContent = "This text was changed using JavaScript.";


const box = document.getElementById("box");
box.style.backgroundColor = "pink";
box.style.color = "black";
box.classList.add("active");

