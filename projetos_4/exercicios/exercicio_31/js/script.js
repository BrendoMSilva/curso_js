let nomes = ['Brendo', 'CR7', 'Neymar', 'Messi', 'Kaka', 'Adriano'];

let num = [true, false, true, true];

function verificarElemento(arr) {

    if(arr.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

verificarElemento(nomes);
verificarElemento(num);
