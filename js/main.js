import {deployAside} from "./modules/sidebar.js"
import {mostrarEjercicio} from "./modules/mostrarEjercicio.js"

document.getElementById("btnHome").addEventListener("click" , ()=>{
    window.location.reload()
})

document.getElementById("sidebarButton").addEventListener("click", deployAside)

document.querySelector(".sidebar__ejercicios").addEventListener("click", e=>{
    mostrarEjercicio(e.target)
})



