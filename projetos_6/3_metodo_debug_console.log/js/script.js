let a = 1;
let b = 2;
let c = 3;

if(a < 2) {
    a = b;
    console.log(a);
}

for(let i = 2; i < 3; i++) {
    b++
    a = b + 2
    c += 3;
    console.log(a);
}

if(b > a) {
    a = c + 4
    c += 5;
} else {
    a = a + b + c;
}

console.log(a);

a = a + c;

console.log(a);



// Um método bastante ultilizado para debug, é o console.log;
// Função que estávamos ultilizados para mostrar os valores no console;

// cuidado com esse metodo pra nao vazar algo importante;