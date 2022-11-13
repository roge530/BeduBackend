import {DataTypes} from 'sequelize'
import { sequelize } from '../config/db.js'
import {cita_detalle} from './cita_detalle.js'

export const prescriptions = sequelize.define('presciptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Prescription identification'
    }
})

cita_detalle.hasOne(prescriptions)
prescriptions.belongsTo(cita_detalle)
