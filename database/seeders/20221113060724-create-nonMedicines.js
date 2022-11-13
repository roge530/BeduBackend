'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let medicines = [
      {name: 'ivugrafeno', price: 200},
      {name: 'nonproxeno', price: 430},
      {name: 'sierralucas', price: 670},
    ]
    await queryInterface.bulkInsert('nonMedicines', medicines, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('nonMedicines', null, {});
  }
};
