const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
    res.send("Página do blog");
});

app.get("/contato", function(req, res){
    res.send("Página de contato");
});

app.listen(8080);