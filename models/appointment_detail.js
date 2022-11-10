import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'

export const appointment_detail = sequelize.define('appointment_detail',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1
        }
    }
});
