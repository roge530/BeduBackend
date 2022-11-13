'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('nonMedicines', { 
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'Medicine identification'
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: 'Medicine name'
      },
      price: {
          type: Sequelize.FLOAT,
          allowNull: false,
          comment: 'Medicine value on mexican pesos'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('nonMedicines');
  }
};
