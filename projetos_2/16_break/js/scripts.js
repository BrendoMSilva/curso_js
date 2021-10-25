let nome = 'Brendo';

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = 'João';
    }

    if(i == 5 && nome == 'João') {
        console.log('O nome é João, pode parar');

        break;
    }

    console.log(i);
} 


/*

break: encerra o loop atual, ou o loop que foi informado no label e transfere o controle da 
execução do programa para o comando seguinte

*/