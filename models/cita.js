import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const cita = sequelize.define('cita',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE
    }
})
