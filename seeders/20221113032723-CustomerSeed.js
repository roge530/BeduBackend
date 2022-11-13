'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('customer', [{
      name:'Ana',

      firstSurname:'Rodriguez',

      secondSurname:'Bruno',

      birthdate:'1989-01-01',

      address:'Av. Siempre viva, 321',

      email:'ana.example@test.com',

      phone_number:'123 456 7899',

      password:'pass' ,
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('customer', null, {});
     
  }
};
