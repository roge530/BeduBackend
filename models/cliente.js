const{Sequelize,DataTypes}= require ('sequelize');
const sequelize = require ('../config/db');
const crypto=require('crypto');
const cita = require('./cita');
const mascota = require('./mascota');

const Cliente= sequelize.define('cliente',{
    nombre:{
        type:DataTypes.CHAR(64),
        allowNull: false,

    },

    apellido_paterno:{
        type:DataTypes.CHAR(64),
        allowNull: false,
    },

    apellido_materno:{
        type:DataTypes.CHAR(64),
        allowNull: false,
    },

    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },

    direccion:{
        type:DataTypes.TEXT,
        allowNull: true,
    },

    email:{
        type:DataTypes.STRING(100),
        validate:{
            isEmail:true
        }
    },

    telefono:{
        type:DataTypes.CHAR(64),
        validate: {
            is:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*/
        }

    },

    password_hash: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    password_salt:{
        type:DataTypes.TEXT,
        allowNull:true,
    },

})

Cliente.createPassword =function(plainText){
    const salt=crypto.randomBytes(16).toString('hex');
    const hash=crypto
       .pbkdf2Sync(plainText, salt, 10000,512, "sha512")
       .toString("hex");

   return {salt:salt , hash:hash}
}

Cliente.validatePassword = function (password, cliente_salt, cliente_hash){
   const hash=crypto
       .pbkdf2Sync(password,cliente_salt,10000,512,"sha512")
       .toString("hex");

    return cliente_hash === hash;

}

 Cliente.hasMany(cita);
 cita.belongsTo(Cliente);

 Cliente.hasMany(mascota);
 mascota.belongsTo(Cliente);

module.exports = Cliente;
