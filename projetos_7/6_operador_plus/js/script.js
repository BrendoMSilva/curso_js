let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test('123'));
console.log(muitosOuPoucosDigitos.test(''));
console.log(muitosOuPoucosDigitos.test('12314232'));
console.log(muitosOuPoucosDigitos.test('dssdfs'));
