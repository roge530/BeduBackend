const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const subespecie = require('./subespecie');

const especie = sequelize.define('especie',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    especie: {
        type: DataTypes.STRING
    }
})

//Añadimos la relación 1 a muchos
especie.hasMany(subespecie);
subespecie.belongsTo(especie);

module.exports = especie;