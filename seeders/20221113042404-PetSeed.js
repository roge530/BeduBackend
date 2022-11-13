'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pet', [{
      name:'Tomasa',
      size:'Medium' ,
      weight:19.5 ,
      speciesId:1,
      subspeciesId:1,
      customerId:1,
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pet', null, {});
  }
};
