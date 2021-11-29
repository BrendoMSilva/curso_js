// o var ira fazer a variavel que esta fora do if ser 5 e a de dentro do if tambem ser 5
var x = 10;
var y = 15;

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x);

// com o let e const podemos mudar isso com ES6

let a = 10;
let b = 15;

if(b > 10) {
    let a = 4
    console.log(a)
}

console.log(a);

let i = 100;

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i);

function logName() {
    const name = 'Doritos'
    console.log(name)
}

const name = 'Salgadinho';

logName();

console.log(name);