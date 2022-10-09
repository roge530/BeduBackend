import { DataTypes, UniqueConstraintError } from 'sequelize'
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
        unique: true,
        allowNull: false,
        validate:{
            isEmail:true
        }
        
    },

    telefono:{
        type:DataTypes.STRING,
        allowNull: true

    },

    password: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

 Cliente.hasMany(cita);
 cita.belongsTo(Cliente);

 Cliente.hasMany(mascota);
 mascota.belongsTo(Cliente);