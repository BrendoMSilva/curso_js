const letrasMaiuscula = /\w[A-Z]/;

console.log(letrasMaiuscula.test('MAIOR'));
console.log(letrasMaiuscula.test('gato'));
console.log(letrasMaiuscula.test('Tva'));
console.log(letrasMaiuscula.test('index32'));
