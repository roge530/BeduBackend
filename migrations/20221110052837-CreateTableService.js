'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      type:{
        type:Sequelize.TEXT,
        allowNull:false
      },
      price:{
        type:Sequelize.FLOAT,
      }

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('services');
  }
};
