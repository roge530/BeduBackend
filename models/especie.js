import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

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
