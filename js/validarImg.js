import corazon from "./corazon.js";
const validarImagen = (img,lista, perfil)=>{
    const validExtensions = /\.(jpg|jpeg|png)$/i;
    
    if(validExtensions.test(img)){
        const itemLista = document.createElement("li");
        const caja1 = document.createElement('div');
        const divInfo = document.createElement("div");
        const foto = document.createElement('img');
        const nombre = document.createElement('h3');
        const frase = document.createElement("h4");

        foto.setAttribute('src',img);
        foto.classList.add("fotosPerfil");
        nombre.innerHTML = perfil.name;
        frase.innerHTML = perfil.frase;

        caja1.classList.add("div1");
        caja1.appendChild(foto);

        divInfo.classList.add('container__info');
        divInfo.append(nombre, frase, corazon());

        itemLista.append(caja1, divInfo);
        itemLista.classList.add("itemLista");
        lista.appendChild(itemLista);
    }else{
        console.error(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;