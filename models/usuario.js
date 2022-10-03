const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_paterno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_materno: {
        type: DataTypes.STRING
    },
    usuario: {
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
    celular: {
        type: DataTypes.STRING
    },
    cedula_prof: {
        type: DataTypes.STRING
    },
    tipo_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }, //0 = asistente, 1 = veterinario, 2 = admin
    password_hash: {
        type: DataTypes.CHAR(64),
        allowNull: true
    },
    password_salt: {
        type: DataTypes.CHAR(64),
        allowNull: true
    }
});

module.exports = usuario;