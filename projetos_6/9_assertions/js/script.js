let arr = [1, 2, 3, 4, 5];
let arr2 = []; // coloque elementos dento do [] pra resolver o erro da interarArray(arr2);

function interarArray(arr) {
    if(arr.length == 0) {
       throw new error('O array precisa ter pelo menos um elemento');
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
        }
    }
}


function arrayVazia(arr) {
    if(arr.length > 0) {
        throw error('O array não pode ter elementos');
    } else {
        console.log('Agora deu certo');
    }
}

interarArray(arr);
interarArray(arr2);

// Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada;