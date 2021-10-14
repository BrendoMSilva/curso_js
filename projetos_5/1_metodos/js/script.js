let cachorro = {
    latir: function() {
        console.log('Au Au');
    },
    rosnar: function() {
        console.log('Grrrrrrrrrr');
    }
}

cachorro.latir();
cachorro.rosnar();

let pessoa = {
    pergunta: function() {
        console.log('ola, tudo bem?');
    },
    resposta: function() {
        console.log('ola, tudo bem. obrigado por perguntar');
    }
}

pessoa.pergunta();
pessoa.resposta();

// Propriedadess que servem como funcoes
// Ou seja, as acoes dos objetos
// Invocamos os metodos da mesma maneira que as funcoes