let botao = document.querySelector('#btn');
let botaoRemover = document.querySelector('#btn2');

function msg() {
    console.log('Clicou em mim!');
}

botao.addEventListener('click', msg);

botaoRemover.addEventListener('click', function() {
    botao.removeEventListener('click', msg);
});