function toggleMenu(){
    const menu = document.querySelector(".movilLinks");
    const icono = document.querySelector(".movilIcono");
    menu.classList.toggle("open");
    icono.classList.toggle("open");
    

}


const bgAnimacion = document.getElementById('bgAnimacion');
const numberColores = 400;
for (let i = 0; i < numberColores; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimacion.append(colorBox)
}

document.addEventListener('DOMContentLoaded', function() {
    const copyEmailBtn = document.getElementById('copiarEmail');
    const emailLink = document.querySelector('.correo-info a');

    copiarEmail.addEventListener('click', function() {
        const email = emailLink.textContent;
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Correo copiado al portapapeles: ' + email);
    });
});

