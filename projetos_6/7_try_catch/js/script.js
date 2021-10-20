// resolver o problema: let c = 3;

try {
    let c = a + b;
} catch(error) {
    console.log('Algo deu errado: ' + error);
}

console.log('teste')

// O bloco try catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou;
// Muito útil para debug;
// ele nao trava o programa, so se o erro estiver dentro do try catch