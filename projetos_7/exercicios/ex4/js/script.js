const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test('127.0.0.1'));
console.log(validarIp.test('127.450.0.1'));
console.log(validarIp.test('127.046.022.1'));
console.log(validarIp.test('127.240.044.124'));
console.log(validarIp.test('1.0.0.1'));
console.log(validarIp.test('127.0.20.'));
