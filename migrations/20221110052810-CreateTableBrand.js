'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('brand', {
     name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      brandId:{
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
    await queryInterface.dropTable('brand')
  }
};
