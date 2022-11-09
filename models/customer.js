import { DataTypes, UniqueConstraintError } from 'sequelize'
import { sequelize } from '../config/db.js'

import {appointment, cita} from './appointment.js'
import {pet} from './pet.js'

export const Customer= sequelize.define('customer',{
    name:{
        type:DataTypes.STRING,
        allowNull: false,

    },

    firstSurname:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    secondSurname:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    birthdate:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    address:{
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

    phone_number:{
        type:DataTypes.STRING,
        allowNull: true

    },

    password: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

Customer.hasMany(appointment);
 appointment.belongsTo(Customer);

 Customer.hasMany(pet);
 pet.belongsTo(Customer);