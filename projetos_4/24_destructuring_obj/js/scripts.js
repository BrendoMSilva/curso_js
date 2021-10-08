const person = {
    name: 'jhon',
    lastname: 'Doe'
}

const {name: fname, lastname: lname} = person;

console.log(fname);
console.log(lname);

// podemos definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring