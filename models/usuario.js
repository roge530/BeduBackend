import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { cita } from './cita.js';

export const usuario = sequelize.define('usuario', {
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
        defaultValue: 0,
        validate: {
            min: 0,
            max: 2
        }
    }, //0 = asistente, 1 = veterinario, 2 = admin
    password_hash: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

// usuario.generateJWT = function(user) {
//     const today = new Date();
//     const exp = new Date(today);
//     exp.setDate(today.getDate() + 60); // en dos meses expira
    
//     return jwt.sign({
//         uid: user.id,
//         up: user.tipo_usuario,
//         exp: parseInt(exp.getTime() / 1000) // se entrega en segundos
        
//     }, secret);
// }

usuario.hasMany(cita);
cita.belongsTo(usuario);