const{Sequelize,DataTypes}= require ('sequelize');
const sequelize = require ('../config/db');

const Servicio=sequelize.define('servicio',{
    tipo:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    precio:{
        type:DataTypes.FLOAT,

    }

})

module.exports=Servicio;