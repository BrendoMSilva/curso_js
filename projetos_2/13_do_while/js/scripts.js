let x = 100;

do {
    console.log(x / 2);
    x = x - 5;
} while(x >= 10);

/*

 não é ultilizado
 é praticamente indêntico ao while, porém, a condição só é testada depois da ação do laço ser executada, assim,
 se a condição falhar, o laço será executado pelo menos uma vez

*/