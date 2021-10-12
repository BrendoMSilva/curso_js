const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
} 

console.log(calculadora.soma(5, 5));
console.log(calculadora.subtrair(30,13));
console.log(calculadora.multiplicar(5,3));
console.log(calculadora.dividir(100, 4));