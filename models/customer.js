import { DataTypes, UniqueConstraintError } from 'sequelize'
import { sequelize } from '../config/db.js'
import bcrypt from 'bcryptjs';

import {appointment} from './appointment.js'
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

    direccion:{
        type:DataTypes.STRING,
        allowNull: true,
    },

    email:{
        type:DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    hooks: {
      beforeCreate: (Customer) => {
        Customer.createdAt = new Date();
        Customer.updatedAt = new Date();
        const salt = bcrypt.genSaltSync()
        Customer.password = bcrypt.hashSync(Customer.password, salt)
      },
      beforeUpdate: function (Customer, options) {
        Customer.updatedAt = new Date();
      },
    }
  });

Customer.hasMany(appointment);
 appointment.belongsTo(Customer);

 Customer.hasMany(pet);
 pet.belongsTo(Customer);