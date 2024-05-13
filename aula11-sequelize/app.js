const Sequelize = require('sequelize');

const sequelize = new Sequelize('bot_discord', 'root', '1234', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!");
    })
    .catch((err) => {
        console.log("Erro ao realizar a conexão com BD: " + err);
    });

// Exemplo de como criar a tabela com sequelize
const Administrador = sequelize.define('administradores', {
    // Atributos
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
});

// Criar tabela com Sequelize
// Administrador.sync({force: true});

Administrador.create({
    nome: "Agda Taniguchi",
    email: "agdatany@gmail.com",
    username: "adjasente",
    senha: "Sasa3345"
});