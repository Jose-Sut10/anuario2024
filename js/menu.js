const iconMenu = ()=>{
    const icono = document.querySelector("[data-iconMenu]");
    const menu = document.querySelector("[data-menuDesplegable]");

    icono.addEventListener('click', ()=>{
        menu.classList.toggle("active");
    });
}

export default iconMenu;