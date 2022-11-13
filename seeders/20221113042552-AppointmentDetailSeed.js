'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('appointment_detail', [{
      date:'2023-01-01' ,
      quantity: 1,
      appointmentId:1,
      serviceId:1,
     }], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('appointment_detail', null, {});
     
  }
};
