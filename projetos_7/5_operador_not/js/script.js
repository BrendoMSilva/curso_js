let palavrasSemAeB = /[^123]/;

console.log(palavrasSemAeB.test('1122'));
console.log(palavrasSemAeB.test('14'));
console.log(palavrasSemAeB.test('1'));


const az = /[^a-z]/;

console.log(az.test('123as'));
console.log(az.test('sddsfdsfazasde'));

const aZ = /[a-z]/;

console.log(aZ.test('123as'));
console.log(aZ.test('sddsfdsfazasde'));

