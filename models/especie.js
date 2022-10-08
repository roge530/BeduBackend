import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import {subespecie} from './subespecie.js'

export const especie = sequelize.define('especie',{
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