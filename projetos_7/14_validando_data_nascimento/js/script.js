let validandoDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validandoDataDeNasc.test('24/01/2010'));
console.log(validandoDataDeNasc.test('25/12/15'));
console.log(validandoDataDeNasc.test('2/2/2020'));
console.log(validandoDataDeNasc.test('30/02/1999'));
console.log(validandoDataDeNasc.test('35/10/2001')); // um erro com o dia, mas deu true;
