function multiplicarTresNumeros(x, y, z) {
    return x * y * z; 
}

console.log(multiplicarTresNumeros(2 , 3, 4));

const mult = multiplicarTresNumeros(2, 3, 5);

console.log('O valor de mult é ' + mult); // console.log(`O valor de mult é ${mult}`);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('pode dirigir!')
    } else {
        console.log('Não pode dirigir')
    }
}

podeDirigir(18, true);
podeDirigir(25, true);
podeDirigir(15, false);
podeDirigir(55, 0); // 0 é false 
podeDirigir(29, 1); // 1 é true