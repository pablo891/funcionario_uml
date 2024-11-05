const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'empresa', // O nome do Banco de Dados
    'root', // Nome do Usuário do banco
    '', // senha do Banco de Dados

    {
        dialect: 'sqlite',
        storage: './empresa.sqlite'
    }

    )

    module.exports ={sequelizeDb, sequelizeConfig}