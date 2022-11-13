import {DataTypes} from 'sequelize'
import {sequelize} from '../config/db.js'

export const medicines = sequelize.define('medicines', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: 'Medicine identification'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Medicine name'
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        comment: 'Medicine value on mexican pesos'
    }
})