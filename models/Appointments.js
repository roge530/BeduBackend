import { DataTypes } from 'sequelize'
import { sequelize } from './index.js'


export const Appointments = sequelize.define('Appointments', {
  id_appoint: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  day: {
    type: DataTypes.STRING
  },
  time: {
    type: DataTypes.STRING
  }
})


