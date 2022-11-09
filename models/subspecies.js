import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const subspecies = sequelize.define('subspecies',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subspecies: {
        type: DataTypes.STRING,
        
    }
})