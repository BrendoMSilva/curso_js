let botao = document.querySelector('#btn');
let botaoRemover = document.querySelector('#btn2');

function msg(e) {
    console.log(e);
}

botao.addEventListener('click', msg);

botaoRemover.addEventListener('click', function(event) {
    console.log(event);
});