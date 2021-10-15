let cachorro = {
    raca: 'SRD',
    cor: 'caramelo',
    latir: function() {
        console.log('Au Au');
    }
}

let pastorAlemao = Object.create(cachorro);
let corPele = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';
corPele.cor = 'Black';

console.log(pastorAlemao.raca);
console.log(corPele.cor);

pastorAlemao.latir();

// O prototype do JavaScript pode ser chamado de classe;
// pois nas outras linguagens uma Class é um molde de um objeto;
// ou seja, podemos criar diversoso objetos em cima de um prototype;