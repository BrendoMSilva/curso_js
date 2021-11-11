let botao = document.querySelector('#btn');
let botaoRemover = document.querySelector('#btn2');
let p = document.querySelector('p');
let a = document.querySelector('a');

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

a.addEventListener('click', function(e) {
    e.preventDefault();

    console.log('Não vai mudar de link')
});