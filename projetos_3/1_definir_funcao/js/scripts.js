function imprimirNoConsole() {
    console.log('ola, mundo');
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log('O numero é: ' + num);
} 

imprimirUmNumero(34);
imprimirUmNumero(3);
imprimirUmNumero(34);
imprimirUmNumero(55);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

function imprimirNome() {
    console.log('Megatron');
}

imprimirNome();

//Treinando com if
function imprimirIdade(idade) {
    if(idade >= 18) {
        console.log(`Voce tem ${idade} anos!`);
    }
}

imprimirIdade(19);

const nome = function(nome) {
    console.log('foguetão ' + nome)
}

nome('de navão');