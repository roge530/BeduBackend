import {DataTypes} from 'sequelize'
import { sequelize } from '../config/db.js'
import {mascota} from './mascota.js'
import { Cliente } from './cliente.js'
import {usuario} from './usuario.js'


export const prescriptions = sequelize.define('presciptions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Prescription identification'
    }
})

Cliente.hasMany(prescriptions)
prescriptions.belongsTo(Cliente)

usuario.hasMany(prescriptions)
prescriptions.belongsTo(usuario)

mascota.hasMany(prescriptions)
prescriptions.belongsTo(mascota)
