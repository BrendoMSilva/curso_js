function saudacao(nome) {
    if(typeof nome != 'string') {
        throw new Error('O parâmetro nome precisa ser string');
    } else {
        console.log(`Oi, ${nome}.`)
    }
}

saudacao('Brendo');
saudacao(2);

console.log('teste');

// Podemos criar erros no programa, caso alguma condição não seja atendida;
// Porém as exceptions abortam o programa, só geram erro;