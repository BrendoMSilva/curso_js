let validandoDominio = /[?www.]\w+\.com|com.br/;

console.log(validandoDominio.test('www.google.com'));
console.log(validandoDominio.test('www.teste'));
console.log(validandoDominio.test('google.com'));
console.log(validandoDominio.test('www.futebolamerican.com.br'));
console.log(validandoDominio.test('google.com.br'));