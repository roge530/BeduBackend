const{Sequelize,DataTypes}= require ('sequelize');
const sequelize = require ('../config/db');
const Cita_detalle = require('./cita_detalle');
const Cita = require('./cita');


const Servicio=sequelize.define('servicio',{
    tipo:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    precio:{
        type:DataTypes.FLOAT,

    }

})

Servicio.belongsToMany(Cita,{through:Cita_detalle});
Cita.belongsToMany(Servicio,{through:Cita_detalle});

module.exports=Servicio;
