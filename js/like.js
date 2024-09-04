const like = ()=>{

    const icono = document.querySelectorAll('.fav');

    icono.forEach((icon) => {
        icon.addEventListener('dblclick', (e)=>{
            const iconoClickado = e.target;

            iconoClickado.classList.toggle('like');
        });
    });
}
window.addEventListener('DOMContentLoaded', like);
export default like;