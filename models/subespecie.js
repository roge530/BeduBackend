const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const subespecie = sequelize.define('subespecie',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subespecie: {
        type: DataTypes.STRING
    }
})



module.exports = subespecie;

//Verificar que exista especieId