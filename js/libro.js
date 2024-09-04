import validarImagen from "./validarImg.js";

const lecturaDatos = (datos)=>{
    const contenedor = document.querySelector('[data-containerEst]');
    const listaEst = document.createElement('ul');
    const fragmento = document.createDocumentFragment();

    listaEst.classList.add("contenido__lista");

    try{
        datos.forEach((perfil)=>{
            validarImagen(perfil.img, listaEst, perfil);
        });
    }catch(error){
        console.error('Error al procesar los datos:', error);
    }

    fragmento.appendChild(listaEst);
    contenedor.appendChild(fragmento);
}

export default lecturaDatos;