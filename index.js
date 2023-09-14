const nav = document.getElementById("nav")
const btnNav = document.getElementById("btnNav")
const prueba = document.getElementById("prueba")
const loader = document.getElementById("loader")
const volver = document.getElementById("volver")
// OPEN AND CLOSE NAVBAR
btnNav.addEventListener("click", () => {
  nav.classList.toggle("navMobile")

  if (nav.className === "navMobile") {
    document.body.style.overflow = "hidden"
    btnNav.src = "https://cdn1.iconfinder.com/data/icons/ui-set-6/100/Close-256.png"
    volver.style.display = "none"
  } else {
    document.body.style.overflowY = "scroll"
    btnNav.src = "./assets/menu.png"
    volver.style.display = "flex"
  }
})
// CLOSE NAVBAR WHEN THE USER CLICK A LINK
const navegacion = () => {
  nav.classList.remove("navMobile");
  document.body.style.overflowY = "scroll";
  btnNav.src = "./assets/menu.png"
  volver.style.display = "flex"

  const links = document.querySelectorAll(".links");

  links.forEach(function (link) {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  
  });
};
// CREATE OBSERVER TO SEE IF THE ELEMENT IS IN THE VIEWPORT
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // if the element is in the viewport
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    } else {
      entry.target.style.opacity = "0";
    }
  });
});
// CREATE ELEMENTS TO OBSERVE
const elemento = document.querySelector(".card-1");
const elemento2 = document.querySelector(".card-2");
const elemento3 = document.querySelector(".card-3");
const elemento4 = document.querySelector(".card-4");
const elemento5 = document.querySelector(".card-5");
const elemento6 = document.querySelector(".card-6");
const elemento7 = document.querySelector(".card-7");
const elemento8 = document.querySelector(".card-8");
const elemento9 = document.querySelector(".card-9");
const elemento10 = document.querySelector(".card-10");
// OBSERVED ELEMENTS:
observer.observe(elemento);
observer.observe(elemento2);
observer.observe(elemento3);
observer.observe(elemento4);
observer.observe(elemento5);
observer.observe(elemento6);
observer.observe(elemento7);
observer.observe(elemento8);
observer.observe(elemento9);
observer.observe(elemento10);



