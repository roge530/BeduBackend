import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const Marca=sequelize.define('marca',{
    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

})