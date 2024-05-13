const express = require('express');

const app = express();

// Conexão com BD MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'bot_discord',
    port: 3307
});

connection.connect(function (err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }

    console.log("Connected as id " + connection.threadId);
});

connection.query('SELECT * FROM administrador', function(err, rows, fields){
    if(err){
        console.log("Erro ao realizar a consulta");
        return;
    }

    console.log("Resultado: ", rows);   
})

// Rotas
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