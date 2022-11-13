'use strict';
const bcrypt=require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('user', [{
    
    name:'Omar',
    firstSurname: 'Ontiveros',
    secondSurname: 'Rios',
    user: '1',
    email: 'omar.ontiveros@test.com',
    cellphone: '222 222 2222',
    professional_id: '12345678',
    user_type:2, //0 = asistente, 1 = veterinario, 2 = admin
    password:bcrypt.hashSync('123tamarido', bcrypt.genSaltSync(10)),
    
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user', null, {});
  }
};
