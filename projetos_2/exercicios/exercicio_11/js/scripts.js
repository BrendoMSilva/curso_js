let cnh = true;
let idade = 20;

if(idade >= 18 && cnh == false) {
    console.log(`Você tem ${idade} anos, mas não possui CNH.`);
} else if(idade >= 18 && cnh == true){
    console.log(`Voce tem ${idade} anos e CNH, parabens`);
} else {
    console.log('Voce não tem a idade minina e CNH');
}