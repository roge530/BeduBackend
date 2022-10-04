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
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
})

Clients.hasMany(Pets, {
  foreignKey: {
    name:'id_client',
    allowNull: false
  }
})

Pets.belongsTo(Clients, {
  foreignKey: {
    name: 'id_client',
    allowNull: false
  }
})
