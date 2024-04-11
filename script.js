const NavUl = document.querySelector("nav ul");

const NavLi = document.querySelectorAll("nav ul li");
const Hamburger = document.getElementById("hamburger");
const Cercles = document.querySelectorAll(".circle1");
const ChangementImg = document.querySelector(".img2 ");
const p = document.querySelector("p-js");
Hamburger.addEventListener("click", () => {
  NavUl.classList.toggle("NavUl");

  NavLi.forEach((li) => {
    li.classList.toggle("NavLi");
  });
});

let count = -1;
let tableauTexte = [
  ` "ge has supercharged our team s workflow. The 
    naintain visibility on larger milestones at all times
    keeps everyone motivated."`,
  ` "We have been able to cancel so many other subscriptions
    since using Manahe. There is no more cross-channel
    confusion and everyone is much more focused."`,
  ` "Manage ailows us to provide structure and pro <br />
    keeps us organized and focused.I can't stop recording <br />
    them toeveryone i talk to! "`,
];

function remove(number) {
  setTimeout(() => {
    Cercles[number].classList.remove("CircleStyle");
  }, 2000);
}
console.log(tableauTexte[1]);
function apres(number) {
  setTimeout(() => {
    Cercles[number].classList.add("CircleStyle");
    ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${number}.png" alt="avatar-Ali"  />`;
    p.innerHTML = `<p>${tableauTexte[count]}</p>`;
  }, 2000);
}
setInterval(() => {
  if (count == 3) {
    count = -1;
  }
  count = count + 1;

  remove(count);
  if (count == 0) {
    apres(1);
  }
  if (count == 1) {
    apres(2);
  }
  if (count == 2) {
    apres(3);
  }
  if (count == 3) {
    apres(0);
  }

  console.log(count);
}, 2000);

// setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d
