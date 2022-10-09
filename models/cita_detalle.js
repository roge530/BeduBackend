import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const cita_detalle = sequelize.define('cita_detalle',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1
        }
    }
});
