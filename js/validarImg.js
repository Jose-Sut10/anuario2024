const validarImagen = (img,lista)=>{
    
    if((img.endsWith('jpg')) || (img.endsWith('jpeg')) || (img.endsWith('png'))){
        const foto = document.createElement('img');
        foto.setAttribute('src',img);
        foto.classList.add("fotosPerfil");

        lista.appendChild(foto);
    }else{
        alert(`La imagen no se leyó porque no es un archivo .jpg o .jpeg`);
    }
}

export default validarImagen;