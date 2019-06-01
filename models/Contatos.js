const db = require('./db')

const Contatos = db.sequelize.define('contatosejs',{
    timestamps: false,
    
    Nome: {
        type: db.Sequelize.STRING
    },
    Setor: {
        type: db.Sequelize.STRING
    },
    Cargo: {
        type: db.Sequelize.STRING
    },

    Ramal: {
        type: db.Sequelize.STRING
    },

    Email: {
        type: db.Sequelize.STRING
    },



});

module.exports = Contatos