const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO A TABELA
const departamento = sequelizeConfig.define(
    'departamento',
    {
        nome:{type:sequelizeDb.STRING},
        descricao:{type:sequelizeDb.TEXT}
    }
)

departamento.sync()
module.exports = departamento 