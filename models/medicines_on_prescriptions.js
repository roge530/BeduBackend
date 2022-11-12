import {DataTypes} from 'sequelize'
import { sequelize } from '../config/db.js'
import {prescriptions} from './prescriptions.js'
import {medicines} from './medicines.js'

export const medicines_on_presciptions = sequelize.define('medicines_on_presciptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Prescription-Medicine relation identification'
    }
})

prescriptions.hasMany(medicines_on_presciptions)
medicines_on_presciptions.belongsTo(prescriptions)

medicines.hasMany(medicines_on_presciptions)
medicines_on_presciptions.belongsTo(medicines)