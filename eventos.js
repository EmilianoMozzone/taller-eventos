document.addEventListener('DOMContentLoaded', function(){
let botonDiv = document.getElementById('divboton');
let boton= document.getElementById('saludarboton');


    boton.addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        alert('Hola!');
    });

    botonDiv.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});