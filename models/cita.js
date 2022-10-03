const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const cita = sequelize.define('cita',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE
    }
})