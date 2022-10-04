const{Sequelize,DataTypes}= require ('sequelize');
const sequelize = require ('../config/db');

const Marca=sequelize.define('marca',{
    nombre:{
        type:DataTypes.CHAR(64),
        allowNull:false,
        unique:true
    }

})

module.exports=Marca;