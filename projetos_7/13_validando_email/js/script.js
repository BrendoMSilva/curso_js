let validandoEmail = /\w+@\w+\.\w+/;

console.log(validandoEmail.test('Teste@email.com'));
console.log(validandoEmail.test('teste@gmail.com'));
console.log(validandoEmail.test('teste32#gmail.com'));
console.log(validandoEmail.test('teste32@gmail.com'));
console.log(validandoEmail.test('gmail.com'));
