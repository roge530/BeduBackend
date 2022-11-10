import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const Brand =sequelize.define('brand',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

})