const { create } = require('domain');
const {createServer} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<h1>Hello Word</h1><p>Primeira página com Nodes.js</p>');
    response.end();


});

server.listen(8000);

console.log('Ouvindo a porta 8000');