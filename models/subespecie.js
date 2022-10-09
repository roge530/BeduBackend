import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const subespecie = sequelize.define('subespecie',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subespecie: {
        type: DataTypes.STRING,
        
    }
})