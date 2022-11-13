'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('subspecies', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      subspecies: {
        type: Sequelize.STRING,
      },
      speciesId:{
        type:Sequelize.INTEGER,
        references:{
          model:'species',
          key:'id'
        },
        onDelete:'CASCADE'
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('subspecies');
  }
};
