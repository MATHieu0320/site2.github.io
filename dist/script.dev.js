"use strict";

var NavUl = document.querySelector("nav ul");
var NavLi = document.querySelectorAll("nav ul li");
var Hamburger = document.getElementById("hamburger");
var Cercles = document.querySelectorAll(".circle1");
var ChangementImg = document.querySelector(".img2 ");
var p = document.querySelector("#p-js");
console.log(p);
console.log(Cercles);
Hamburger.addEventListener("click", function () {
  NavUl.classList.toggle("NavUl");
  NavLi.forEach(function (li) {
    li.classList.toggle("NavLi");
  });
});
var tableauTexte = [" \"ge has supercharged our team s workflow. The <br>\n    naintain visibility on larger milestones at all times<br>\n    keeps everyone motivated.\"", " \"We have been able to cancel so many other subscriptions\n    since using Manahe. There is no more cross-channel\n    confusion and everyone is much more focused.\"", " \"Manage ailows us to provide structure and pro <br />\n    keeps us organized and focused.I can't stop recording <br />\n    them toeveryone i talk to! \"", "\"Their sofware allows us to track, manage and colloborate<br>\n    on our projects from anywhere. it keeps the whole team in-<br>\n    sync without being intrusive\""];

function apres(number) {
  setTimeout(function () {
    ChangementImg.innerHTML = "   <img src=\"./assets/images/avatar-".concat(number, ".png\" alt=\"avatar-Ali\"  />");
    p.innerHTML = "<p>".concat(tableauTexte[count], "</p>");
  }, 2000);
}

function add(nombre) {
  Cercles[nombre].classList.add("CircleStyle");
  p.innerHTML = "<p>".concat(tableauTexte[nombre], "</p>");
}

function remove(number) {
  setTimeout(function () {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}

var count = -1;
setInterval(function () {
  if (count == 3) {
    count = -1;
  }

  count = count + 1;

  if (count == 0) {
    add(0);
    remove(0);
    apres(1);
  }

  if (count == 1) {
    add(1);
    remove(1);
    apres(2);
  }

  if (count == 2) {
    add(2);
    remove(2);
    apres(3);
  }

  if (count == 3) {
    add(3);
    remove(3);
    apres(0);
  }

  console.log(count);
}, 2000); // setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d