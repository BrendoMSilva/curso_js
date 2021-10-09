let pessoa = {
    "nome": "Brendo",
    "idade": 20,
    "profissao": "programador",
    "hobbies": ["video game", "leitura", "correr", "futebol"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);

// podemos converter o JSON para uma string de forma facil;
// ou tambem uma string para JSON;