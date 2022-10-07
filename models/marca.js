import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const Marca=sequelize.define('marca',{
    nombre:{
        type:DataTypes.CHAR(64),
        allowNull:false,
        unique:true
    }

})