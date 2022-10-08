import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import {cita} from './cita.js'
import {especie} from './especie.js'
import { subespecie } from './subespecie.js'

export const mascota = sequelize.define('mascota',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // especieId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // },
    // subespecieId: {
    //     type: DataTypes.INTEGER
    // },
    tamanio: {
        type: DataTypes.STRING
    },
    peso: {
        type: DataTypes.DOUBLE
    }
})

mascota.hasMany(cita, {foreignKey: 'mascotaId'});
mascota.hasOne(especie, {foreignKey: 'especieId'});

mascota.hasOne(subespecie, {foreignKey: 'subespecieId'});

especie.belongsTo(mascota)


