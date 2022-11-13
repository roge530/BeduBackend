'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert('subspecies', [{
      subspecies:'German Shepard',
      speciesId:'1'
      
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('subspecies', null, {});
    
  }
};
