const openNav = document.getElementById("btn")
const nav = document.getElementById("nav")
const html = document.body

openNav.addEventListener("click" , () => {

    nav.classList.toggle("navMobile")

    if (nav.className == "navMobile") {
        html.style.overflow = "hidden"
    } else {
        html.style.overflow = "scroll"
    }
})

function navegacion(){

    nav.classList.remove("navMobile");
    html.style.overflow = "scroll";

    // Obtiene el atributo href del elemento y extrae el ID del destino
    const targetId = item.getAttribute("href").substring(1);

    // Obtén el elemento objetivo por su ID
    const targetElement = document.getElementById(targetId);

    // Desplázate suavemente hasta el elemento objetivo
    targetElement.scrollIntoView({ behavior: "smooth" });
}