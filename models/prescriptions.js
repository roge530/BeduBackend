import {DataTypes} from 'sequelize'
import { sequelize } from '../config/db.js'
import {appointment_detail} from './appointment_detail.js'

export const prescriptions = sequelize.define('presciptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Prescription identification'
    }
})

appointment_detail.hasOne(prescriptions)
prescriptions.belongsTo(appointment_detail)
