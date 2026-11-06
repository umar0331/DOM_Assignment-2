let heading = document.getElementById("heading");
heading.innerText = "DOM Element Selected by ID";

let allp = document.getElementsByTagName("p");
allp[0].innerText = "first one is update";

let btns = document.getElementsByClassName("btn");
btns[1].innerText = "Click me";

let ement = document.querySelector("h2");
ement.style.color = "blue";

let listt = document.querySelectorAll("li");
for (let i = 0; i < listt.length; i++) {
  listt[i].style.color = "green";
}

let lastp = document.getElementsByClassName("lastpra");
lastp[0].style.fontSize = "30px";
lastp[0].style.color = "white";
lastp[0].style.backgroundColor = "black";
