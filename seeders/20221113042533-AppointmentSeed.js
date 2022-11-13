'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('appointment', [{
      date:'2023-01-01',
      petId:1,
      userId:1,
      customerId:1,
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('appointment', null, {});
     
  }
};
