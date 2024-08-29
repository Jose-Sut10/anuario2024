import validarImagen from "./validarImg.js";

const lecturaDatos = (datos)=>{
    const contenedor = document.querySelector('[data-containerEst]');
    const listaEst = document.createElement('ul');
    listaEst.classList.add("contenido__lista");

    const estudiantes = datos.forEach((perfil)=>{
        validarImagen(perfil.img, listaEst)
    });

    contenedor.appendChild(listaEst);
}

export default lecturaDatos;