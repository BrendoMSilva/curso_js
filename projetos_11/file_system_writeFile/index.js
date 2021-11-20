let {readFile, writeFile} = require('fs');

readFile("arquivo.txt", "utf8", (error, texto) => {

    if(error) {
        throw error;
    } else {
        console.log(texto);
    }
});

writeFile("arquivo.txt", " Hello brother", (error) => {

    if(error) {
        throw error;
    } else {
        console.log("Escrevemos com sucesso");
    }
});