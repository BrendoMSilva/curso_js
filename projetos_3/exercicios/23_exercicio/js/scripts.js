function limiteDeCaracteres(texto) {

    if(texto.length >= 10) {
        console.log('Texto muito grande!');
    } else {
        console.log('Texto dentro do limite!');
    }

    console.log(texto.length);
}

limiteDeCaracteres('Teste');
limiteDeCaracteres('Teste Teste Teste Teste');