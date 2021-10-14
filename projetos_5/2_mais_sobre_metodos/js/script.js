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

// normalmente os metodos interagem com os objetos;
// ate mudando os valores das suas propriedades para corresponder a logica do programa desenvolvido