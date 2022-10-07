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

Cita.belongsToMany(Servicio,{through:Cita_detalle, foreignKey: 'citaId'});

module.exports=Servicio;
