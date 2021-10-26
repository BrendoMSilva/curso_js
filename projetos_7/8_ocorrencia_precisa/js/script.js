// telefone

let telefone = /\(\d{2}\) \d{4,5}-\d{4}/;

console.log(telefone.test('(61) 4002-8922'));
console.log(telefone.test('4002-8922'));
console.log(telefone.test('94002-8922'));


// Cep

const cep = /\d{5}-\d{3}/;

console.log(cep.test('72236-800'));
console.log(cep.test('72236800'));
console.log(cep.test('72236-80'));


