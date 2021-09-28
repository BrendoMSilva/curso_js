function imprimirTipoDeDadoString(dado) {

    if(typeof dado == 'string') {
        console.log('Esse dados é uma String');
    } else if(typeof dado == 'number') {
        console.log('Esse dados é um tipo number');
    } else {
        console.log('Esse dados é uma tipo boolean');
    }
}

imprimirTipoDeDadoString('brendo');
imprimirTipoDeDadoString(20);
imprimirTipoDeDadoString(true);
imprimirTipoDeDadoString(false);

