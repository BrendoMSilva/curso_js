let idade = 19;

if(idade == 19) {
    console.log('a sua idade é 19 anos');
}

if(idade > 25) {
    console.log('A idade é maior que 25');
}

let nome = 'Brendo';

if(nome == 'Brendo' && idade > 10) {
    console.log('Liberado!');
}

let passaporte = true;

if((nome == 'Brendo' && idade > 30) || passaporte == true) {
    console.log('Liberado 2!');
}
