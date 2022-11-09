import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const Brand =sequelize.define('brand',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

})