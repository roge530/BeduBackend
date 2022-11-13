'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('appointment', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATE
     },
     petId:{
      type:Sequelize.INTEGER,
      references:{
        model:'pet',
        key:'id'
      },
      onDelete:'CASCADE'
    },
      userId:{
       type:Sequelize.INTEGER,
       references:{
           model:'user',
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
    await queryInterface.dropTable('appointment')
  }
};
