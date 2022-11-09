import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { subspecies } from './subspecies.js'

export const species = sequelize.define('species',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    species: {
        type: DataTypes.STRING
    }
})

//Añadimos la relación 1 a muchos

subspecies.belongsTo(species, {foreignkey:'speciesId'});