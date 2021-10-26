const ano = /\d\d\d\d/;

console.log(ano.test('05'));
console.log(ano.test('2021'));
console.log(ano.test('opa'));

const palavrasTresLetras = /\w\w\w/; 

console.log(palavrasTresLetras.test('dia'));
console.log(palavrasTresLetras.test('ano'));
console.log(palavrasTresLetras.test('oi'));
console.log(palavrasTresLetras.test('teste') && 'teste'.length == 3);