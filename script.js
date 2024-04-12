const NavUl = document.querySelector("nav ul");

const NavLi = document.querySelectorAll("nav ul li");
const Hamburger = document.getElementById("hamburger");
const Cercles = document.querySelectorAll(".circle1");
const ChangementImg = document.querySelector(".img2 ");
const p = document.querySelector("#p-js");
console.log(p);
console.log(Cercles);
Hamburger.addEventListener("click", () => {
  NavUl.classList.toggle("NavUl");

  NavLi.forEach((li) => {
    li.classList.toggle("NavLi");
  });
});

let tableauTexte = [
  ` "ge has supercharged our team s workflow. The <br>
    naintain visibility on larger milestones at all times<br>
    keeps everyone motivated."`,
  ` "We have been able to cancel so many other subscriptions
    since using Manahe. There is no more cross-channel
    confusion and everyone is much more focused."`,
  ` "Manage ailows us to provide structure and pro <br />
    keeps us organized and focused.I can't stop recording <br />
    them toeveryone i talk to! "`,
  `"Their sofware allows us to track, manage and colloborate<br>
    on our projects from anywhere. it keeps the whole team in-<br>
    sync without being intrusive"`,
];

function apres(number) {
  setTimeout(() => {
    ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${number}.png" alt="avatar-Ali"  />`;
    p.innerHTML = `<p>${tableauTexte[count]}</p>`;
  }, 2000);
}
function add(nombre) {
  Cercles[nombre].classList.add("CircleStyle");
  p.innerHTML = `<p>${tableauTexte[nombre]}</p>`;
}

function remove(number) {
  setTimeout(() => {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}
let count = -1;

setInterval(() => {
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
}, 2000);

// setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d
