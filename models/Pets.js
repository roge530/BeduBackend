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
}, { 
  timestamps: false
})

Pets.hasMany(Appointments, {
  foreignKey: {
    name: 'id_pet',
    allowNull: false
  }
})

Appointments.belongsTo(Pets, {
  foreignKey:{
    name: 'id_pet',
    allowNull: false
  }
})
