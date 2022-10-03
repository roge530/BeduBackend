const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('test','postgres','password',{
    host:'localhost',
    port:5432,
    dialect:'postgres'
})

module.exports = sequelize;