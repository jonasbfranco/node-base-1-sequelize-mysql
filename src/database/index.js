const Sequelize = require('sequelize')
const configDB = require('../config/database')

const connection = new Sequelize(configDB)

const resultado = await configDB.sync()
console.log(resultado)

module.exports = connection