export const deployAside = () =>{
    const sidebar = document.querySelector(".main__sidebar")
    const content = document.querySelector(".main__content")
    if (sidebar.style.width === "0%" || !sidebar.style.width) {
        //Abrir sidebar
        sidebar.style.width = "20%"
        content.style.width = "80%"
    }
    else {
        //Cerrar sidebar
        sidebar.style.width = "0%"
        content.style.width = "100%"
    }
}