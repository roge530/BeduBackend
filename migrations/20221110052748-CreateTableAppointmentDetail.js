'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('appoinment_details', {
    id: { 
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
     },
    date: {
      type: Sequelize.DATE
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
          min: 1
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('appoinment_details')
  }
};
