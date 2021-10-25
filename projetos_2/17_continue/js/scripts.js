for(let i = 10; i > 0; i = i - 1) {

    if(i % 2 == 0) {
        console.log('Caiu no continue');
        continue
    }

    console.log(i);
}

for(let par = 14; par > 0; par = par -2) {

    if(par % 2 == 0) {
        console.log('continue');
    }

    console.log(par);
}

/**
 
continue: termina a atual iteração do laço em que ele se encontra 
ou de um laço rotulado, e continua a execução deste laço com a proxima iteração

 */