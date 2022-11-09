import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const appointment = sequelize.define('appointment',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE
    }
})