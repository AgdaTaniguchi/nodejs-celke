const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciador financeiro");
});
app.get("/contato", function(req, res){
    res.send("Página de contato");
});

app.listen(8080);