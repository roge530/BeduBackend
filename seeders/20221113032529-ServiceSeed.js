'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('service', [{
      type:'Bath',
      price:10.50
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('service', null, {});
  }
};
