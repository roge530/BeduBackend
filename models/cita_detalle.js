const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const cita_detalle = sequelize.define('cita_detalle',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1
        }
    }
});

module.exports = cita_detalle;