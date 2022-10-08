import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import {cita_detalle} from './cita_detalle.js'
import {cita} from './cita.js'
import { Marca } from './marca.js'


export const Servicio=sequelize.define('servicio',{
    tipo:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    precio:{
        type:DataTypes.FLOAT,

    }

})

cita.belongsToMany(Servicio,{through:cita_detalle, foreignKey: 'citaId'});
Servicio.hasOne(Marca,{
    foreignKey: {
        name: "marcaId",
        allowNull: true
    }
    });