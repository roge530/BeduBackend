'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('species', [{
      species:'Canis'
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('species', null, {});
  }
};
