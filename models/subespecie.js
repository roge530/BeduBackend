import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { especie } from './especie.js'

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

especie.hasMany(subespecie, {foreignKey: 'especieId'});