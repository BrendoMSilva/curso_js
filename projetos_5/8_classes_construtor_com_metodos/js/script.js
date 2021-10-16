function Cachorro(raca, patas, cor, olhos, nome) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.olhos = olhos;
    this.nome = nome;
}

Cachorro.prototype.uivar = function() {
    console.log('Aaaauuuuuuuuuuu');
}

let pug = new Cachorro('pug', 4, 'preto', 'preto', 'kevin');


console.log(pug.nome);
console.log(pug);
pug.uivar();

// alem de propriedades, podemos criar a classe base ja com metodos;
// basta definir ao prototype o metodo desejado;