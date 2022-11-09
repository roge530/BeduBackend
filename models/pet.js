import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { appointment } from './appointment.js'
import { species } from './species.js'
import { subspecies } from './subspecies.js'

export const pet = sequelize.define('pet',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.DOUBLE
    }
})

pet.hasMany(appointment, {foreignKey: 'petId'});
species.hasMany(pet, {foreignKey: 'speciesId'});
subspecies.hasMany(pet, {foreignKey: 'subspeciesId'});




