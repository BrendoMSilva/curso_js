function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log('Esta função precisa ter os dois argumentos');
    } else {
        return a + b;
    }
} 

console.log(soma(1));

console.log(soma(1, 3));

function saudacao(nome, idade) {
    
    if(idade === undefined) {
        console.log('Ola ' + nome);
    } else {
        console.log('Ola ' + nome + ' voce tem ' + idade + ' anos ');
    }
}

saudacao('Brendo');
saudacao('Davi', 20)