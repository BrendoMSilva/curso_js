let botao = document.querySelector('#btn');
let botaoRemover = document.querySelector('#btn2');
let p = document.querySelector('p');

function msg(e) {
    console.log('Clicou no button');
    e.stopPropagation();
}

botao.addEventListener('click', msg);

botaoRemover.addEventListener('click', function(event) {
    console.log(event);
});

p.addEventListener('click', function() {
    console.log('clicou no paragrafo');
});