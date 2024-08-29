const validarImagen = (img,lista)=>{
    
    if((img.endsWith('jpg')) || (img.endsWith('jpeg')) || (img.endsWith('png'))){
        const itemLista = document.createElement("li");
        const foto = document.createElement('img');

        foto.setAttribute('src',img);
        foto.classList.add("fotosPerfil");

        itemLista.appendChild(foto);
        lista.appendChild(itemLista);
    }else{
        alert(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;