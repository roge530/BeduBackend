'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name:{
          type:Sequelize.STRING,
          allowNull: false,

      },

      firstSurname:{
          type:Sequelize.STRING,
          allowNull: false,
      },

      secondSurname:{
          type:Sequelize.STRING,
          allowNull: false,
      },

      birthdate:{
          type: Sequelize.DATEONLY,
          allowNull: true,
      },

      address:{
          type:Sequelize.TEXT,
          allowNull: true,
      },

      email:{
          type:Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate:{
              isEmail:true
          }

      },

      phone_number:{
          type:Sequelize.STRING,
          allowNull: true

      },

      password: {
          type: Sequelize.TEXT,
          allowNull: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('customer')
  }
};
