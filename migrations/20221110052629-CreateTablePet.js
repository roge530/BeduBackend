'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pet', {
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
      },
      speciesId:{
        type:Sequelize.INTEGER,
        references:{
          model:'species',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      subspeciesId:{
        type:Sequelize.INTEGER,
        references:{
          model:'subspecies',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      customerId:{
        type:Sequelize.INTEGER,
        references:{
          model:'customer',
          key:'id'
        },
        onDelete:'CASCADE'
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pet');
  }
};
