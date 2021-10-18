class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }

    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let end = new Endereco(25, 'QNQ', 'Ceilândia', 'Brasilia')

console.log(end);

end.novaRua = 'Rua Gavia';
console.log(end);

end.novoBairro = 'Bairro Viloes';
console.log(end);

end.novaCidade = 'Florianopolis';
console.log(end);

end.novoEstado = 'Santa Cataria';
console.log(end);
