'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('service', {
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
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('service');
  }
};
