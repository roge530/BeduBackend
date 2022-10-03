const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const mascota = sequelize.define('mascota',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especieId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subespecieId: {
        type: DataTypes.INTEGER
    },
    tamanio: {
        type: DataTypes.STRING
    },
    peso: {
        type: DataTypes.DOUBLE
    }
})

module.exports = mascota;