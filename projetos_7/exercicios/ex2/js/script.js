const validarId = /\d+ID\b/;

console.log(validarId.test('32424324ID'));
console.log(validarId.test('234'));
console.log(validarId.test('.ID'));
console.log(validarId.test('234ID'));
console.log(validarId.test('safa.ID'));
