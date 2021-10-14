let pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = novoNome;    
    },
    getNome: function() {
        return this.nome;
    }
}

pessoa.setNome('Brendo');
console.log(pessoa.getNome());


let cachorro = {
    raca: 'SRD',
    latir: function() {
        console.log('Au Au');
    },
    rosnar: function() {
        console.log('Grrrrrrrrrr');
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return 'A raça é ' + this.raca;
    }
}

console.log(cachorro.raca);
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
console.log(cachorro.getRaca());



// normalmente os metodos interagem com os objetos;
// ate mudando os valores das suas propriedades para corresponder a logica do programa desenvolvido