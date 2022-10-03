const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const cita_detalle = sequelize.define('cita_detalle',{
    fecha: {
        type: DataTypes.DATE
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
})