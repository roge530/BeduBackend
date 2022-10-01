import { DataTypes } from 'sequelize'
import { sequelize } from './index.js'

import { Appointments } from './Appointments.js'

export const Pets = sequelize.define('Pets', {
  id_pet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pet_name: {
    type: DataTypes.STRING
  },
  race: {
    type: DataTypes.STRING
  }
})

Pets.hasMany(Appointments, {
  foreignKey: 'arrival',
  sourceKey: 'id_pet'
})
