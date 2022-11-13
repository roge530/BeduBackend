'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('appointment_detail', {
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
      },
      appointmentId:{
        type:Sequelize.INTEGER,
        references:{
          model:'appointment',
          key:'id'
        },
        onDelete:'CASCADE'
    },
    serviceId:{
      type:Sequelize.INTEGER,
      references:{
        model:'service',
        key:'id'
      },
      onDelete:'CASCADE'
  },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('appointment_detail')
  }
};
