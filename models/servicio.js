import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import {Cita_detalle} from './cita_detalle'
import {Cita} from './cita'


export const Servicio=sequelize.define('servicio',{
    tipo:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    precio:{
        type:DataTypes.FLOAT,

    }

})

Cita.belongsToMany(Servicio,{through:Cita_detalle, foreignKey: 'citaId'});