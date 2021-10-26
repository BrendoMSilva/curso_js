let opcional = /Prova\s?\d?/;

console.log(opcional.test('Prova'));
console.log(opcional.test('Prova 1'));
console.log(opcional.test('Prova 2'));

const padrao = /abacax?i/;

console.log(padrao.test('abacaxi'));
console.log(padrao.test('abacai'));


const padrao2 = /\d+\w?/;

console.log(padrao2.test('123 '));
console.log(padrao2.test('32e'));
console.log(padrao2.test('123'));
