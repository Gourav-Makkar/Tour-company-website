// setting date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setting nav toggle
const navbtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navbtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// nav fixed
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 62) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
