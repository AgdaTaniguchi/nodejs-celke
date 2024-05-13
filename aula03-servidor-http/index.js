var http = require('http');

const porta = 8080;

http.createServer(function(req, res){
    res.end("Gerenciador Financeiro");
}).listen(porta);