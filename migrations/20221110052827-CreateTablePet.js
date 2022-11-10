'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pets', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      size: {
          type: Sequelize.STRING
      },
      weight: {
          type: Sequelize.DOUBLE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pets');
  }
};
