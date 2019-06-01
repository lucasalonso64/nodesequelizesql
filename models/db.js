const Sequelize = require("sequelize");

const sequelize = new Sequelize('bancodedados', 'usuario', 'senha', {
    dialect: 'mssql',
    host: 'CSK-PC',
    dialectOptions: {
        encrypt: true
    }
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//https://coredump.pt/questions/45903574/connect-to-a-local-sql-server-db-with-sequelize


