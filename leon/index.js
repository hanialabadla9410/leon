let k = document.querySelector(".up");
window.onscroll = function () {
  window.scrollY >= 500
    ? k.classList.add("active")
    : k.classList.remove("active");
};

k.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

/* ------------------------ */

let date = new Date();
document.querySelector(".footer .year").textContent = date.getFullYear();

/* ---------------------- */

let bars = document.querySelector(".bars");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".nav");
console.log(nav);
let links = document.querySelectorAll(".nav li");

const mediaQuery = window.matchMedia("(max-width: 767px)");
const mediaQueryLarge = window.matchMedia("(min-width: 767px)");

if (mediaQuery.matches) {
  bars.addEventListener("click", () => {
    xmark.style.display = "flex";
    bars.style.display = "none";
    nav.style.display = "flex";
  });

  xmark.addEventListener("click", () => {
    bars.style.display = "flex";
    xmark.style.display = "none";
    nav.style.display = "none";
  });

  links.forEach((e) => {
    e.addEventListener("click", () => {
      nav.style.display = "none";
      bars.style.display = "flex";
      xmark.style.display = "none";
    });
  });
}
mediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    bars.style.display = "none";
    xmark.style.display = "none";
    nav.style.display = "flex";
  }
});
