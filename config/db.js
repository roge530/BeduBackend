import {Sequelize} from 'sequelize'

export const sequelize = new Sequelize('postgres', 'postgres', 'password', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false
  })


// import * as dotenv from 'dotenv-safe'
// dotenv.config()
// let uri = process.env.DATABASE_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` 
// export const sequelize = new Sequelize(uri, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   }
// })

  //module.exports = sequelize;
  
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sqlite://db.sqlite');

// module.exports = sequelize;
