'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let medicines = [
      {name: 'ibuprofeno', price: 200, createdAt: new Date(), updatedAt: new Date()},
      {name: 'naproxeno', price: 430, createdAt: new Date(), updatedAt: new Date()},
      {name: 'montelucas', price: 670, createdAt: new Date(), updatedAt: new Date()},
    ]
    await queryInterface.bulkInsert('medicines', medicines, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('medicines', null, {});
  }
};
