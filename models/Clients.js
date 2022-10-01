import { DataTypes } from 'sequelize'
import { sequelize } from './index.js'

import { Pets } from './Pets.js'

export const Clients = sequelize.define('Clients', {
  id_client: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  } 
})

Clients.hasMany(Pets, {
  foreignKey: 'owner',
  sourceKey: 'id_client'
})
