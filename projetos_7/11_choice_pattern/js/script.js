let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test('10 bananas'));
console.log(frutas.test('25 limão'));
console.log(frutas.test('8 laranjas'));

let nome = /\w+: (Brendo|Neymar|Messi|CR7)/;

console.log(nome.test('Nome: Brendo'));
console.log(nome.test('Nome: Neymar'));
console.log(nome.test('Nome: Messi'));
console.log(nome.test('Nome: CR7'));
console.log(nome.test('Nome: Drogba'));