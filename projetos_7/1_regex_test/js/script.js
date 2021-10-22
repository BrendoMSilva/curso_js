const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola?'));
console.log(reg1.test('não tem'));

const reg2 = /bola/;

let text = 'tem bola na cesta';

console.log(reg2.test('tem bola na cesta?'));
console.log(reg2.test('acho que nao tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test('onde tem um quadrado na rua'));
console.log(/quadrado/.test('23468dsd732687quadrado87348238974nkvnk'));

// Depois de definição do padrão por meio de regex;
// Utilizamos o método test() para verificar se o padrão é retornado;
// Com isso vamos receber de resposta true or false; 