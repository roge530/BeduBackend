import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { appointment } from './appointment.js';

export const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstSurname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondSurname: {
        type: DataTypes.STRING
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cellphone: {
        type: DataTypes.STRING
    },
    professional_id: {
        type: DataTypes.STRING
    },
    user_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 2
        }
    }, //0 = asistente, 1 = veterinario, 2 = admin
    password: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

user.hasMany(appointment);
appointment.belongsTo(user);