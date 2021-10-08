const person = {
    name: 'jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);


let obj = {
    marca: 'Ferrari',
    cor: 'Red',
    portas: 2,
    speed: true
}

const {marca: vMarca, cor: vCor, portas: vPortas, speed: vSpeed} = obj;

console.log(vMarca);
console.log(vCor);
console.log(vPortas);
console.log(vSpeed);


// podemos definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring