let num = 1;
let num2 = 25;
let num3 = 6;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num2, num3);
console.log('Pause');
imprimirNumeros(num, num3);
console.log('Pause');
imprimirNumeros(2, 4, 6, 7, 10);

// Uma forma de um função receber indefinidos paramentros.
// O operador rest vai virar uma array.
// O parametro é definido por: ...nome