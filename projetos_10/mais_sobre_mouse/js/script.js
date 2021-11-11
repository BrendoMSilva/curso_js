let botao = document.querySelector('#btn');
let botao2 = document.querySelector('#btn2');

botao.addEventListener('mousedown', function() {
    console.log('Aperto o botão');
});

botao.addEventListener('mouseup', function() {
    console.log('Soltou o botão');
});

botao2.addEventListener('dblclick', function() {
    console.log('Clicou duas vezes');
});

botao2.addEventListener('contextmenu', function(e) {
    
    e.preventDefault();
    console.log('botão direito');
});