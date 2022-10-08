import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

import {cita} from './cita.js'
import {mascota} from './mascota.js'

export const Cliente= sequelize.define('cliente',{
    nombre:{
        type:DataTypes.STRING,
        allowNull: false,

    },

    apellido_paterno:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    apellido_materno:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    direccion:{
        type:DataTypes.TEXT,
        allowNull: true,
    },

    email:{
        type:DataTypes.TEXT,
        allowNull: false,
        validate:{
            isEmail:true
        }
    },

    telefono:{
        type:DataTypes.STRING,
        validate: {
            is:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*/
        }

    },

    password_hash: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    password_salt:{
        type:DataTypes.TEXT,
        allowNull:true,
    },

})

 Cliente.hasMany(cita);
 cita.belongsTo(Cliente);

 Cliente.hasMany(mascota);
 mascota.belongsTo(Cliente);