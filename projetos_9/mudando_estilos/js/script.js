let elemento = document.querySelector('#titulo-principal');

setTimeout(function() {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'green';
    elemento.style.width = '400px';
}, 2000);