const ul = document.querySelector(".nav-ul");
const bars = document.querySelector(".bars");
const liEl = document.querySelectorAll(".nav-ul li");

bars.addEventListener("click", () => {
  ul.classList.toggle("on");
  liEl.forEach((li) => {
    li.classList.toggle("see");
  });
});
