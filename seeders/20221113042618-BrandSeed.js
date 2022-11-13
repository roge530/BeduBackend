'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('brand', [{
       name:'Royal Cannin',
       brandId:'1',
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brand', null, {});
  }
};
