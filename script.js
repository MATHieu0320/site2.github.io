const NavUl = document.querySelector("nav ul");

const NavLi = document.querySelectorAll("nav ul li");
const Hamburger = document.getElementById("hamburger");
const Cercles = document.querySelectorAll(".circle1");
const ChangementImg = document.querySelector(".img2 ");

Hamburger.addEventListener("click", () => {
  NavUl.classList.toggle("NavUl");

  NavLi.forEach((li) => {
    li.classList.toggle("NavLi");
  });
});

let count = -1;
let count2 = -1;
console.log(Cercles);
function apres(number) {
  setTimeout(() => {
    Cercles[number].classList.remove("CircleStyle");

    ChangementImg.innerHTML = `   <img src="./assets/images/avatar-${number}.png" alt="avatar-Ali" id="img2" />`;
  }, 2000);
}
setInterval(() => {
  if (count == 3) {
    count = -1;
  }
  count = count + 1;
  if (count == 0) {
    Cercles[count].classList.add("CircleStyle");
    apres(0);
  }
  if (count == 1) {
    Cercles[count].classList.add("CircleStyle");
    apres(1);
  }
  if (count == 2) {
    Cercles[count].classList.add("CircleStyle");
    apres(2);
  }
  if (count == 3) {
    Cercles[count].classList.add("CircleStyle");
    apres(3);
  }

  console.log(count);
}, 2000);
// setInterval(() => {
//   count2++;
//   console.log(count);
//   Cercles[count].classList.remove("CircleStyle");
// }, 2600);d
