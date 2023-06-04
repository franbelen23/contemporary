const btnVolver = document.getElementById("volver")
const openNav = document.getElementById("btn")
const nav = document.getElementById("nav")
const html = document.body


// DESPLEGAR NAV MOBILE
openNav.addEventListener("click" , () => {
    nav.classList.toggle("navMobile")
    if (nav.className == "navMobile") {
        html.style.overflowX = "hidden"
        html.style.overflowY = "hidden"
        btnVolver.style.display = "none"
    } else {
        html.style.overflowX = "hidden"
        html.style.overflowY = "scroll"
        btnVolver.style.display = "grid"
    }
})


// CERRAR NAV AL CLICKEAR LOS ENLACES 
function navegacion(){
    nav.classList.remove("navMobile");
    html.style.overflowY = "scroll";
    html.style.overflowX = "hidden";
    btnVolver.style.display = "grid"
    // Obtiene el atributo href del elemento y extrae el ID del destino
    const targetId = item.getAttribute("href").substring(1);
    // Obtén el elemento objetivo por su ID
    const targetElement = document.getElementById(targetId);
    // Desplázate suavemente hasta el elemento objetivo
    targetElement.scrollIntoView({ behavior: "smooth" });
}


