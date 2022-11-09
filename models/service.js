import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { appointment_detail } from './appointment_detail.js'
import { appointment } from './appointment.js'
import { Brand } from './brand.js'


export const service=sequelize.define('service',{
    type:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    price:{
        type:DataTypes.FLOAT,

    }

})

appointment.belongsToMany(service,{through:appointment_detail, foreignKey: 'appointmentId'});
service.hasOne(Brand,{
    foreignKey: {
        name: "brandId",
        allowNull: true
    }
    });