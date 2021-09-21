let cnh = true;
let idade = 20;

if(idade >= 18 && cnh == false) {
    console.log(`Você tem ${idade} anos, mas não possui CNH, não pode dirigir.`);
} else if(idade >= 18 && cnh == true){
    console.log(`Voce tem ${idade} anos e CNH, pode dirigir`);
} else {
    console.log('Voce não tem a idade minina e CNH, para poder dirigir');
}