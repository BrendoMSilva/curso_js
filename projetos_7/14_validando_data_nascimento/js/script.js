let validandoDataDeNasc = /^[0-31]{2}[/][0-12]{2}[/][19020-2021]{4}/;

console.log(validandoDataDeNasc.test('24/01/2010'));
console.log(validandoDataDeNasc.test('25/12/15'));
console.log(validandoDataDeNasc.test('2/2/2020'));
console.log(validandoDataDeNasc.test('35/10/2001')); 
