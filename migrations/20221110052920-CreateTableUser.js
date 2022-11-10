'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name_1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name_2: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    cellphone: {
        type: Sequelize.STRING
    },
    professional_id: {
        type: Sequelize.STRING
    },
    user_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 2
        }
    }, //0 = asistente, 1 = veterinario, 2 = admin
    password: {
        type: Sequelize.TEXT,
        allowNull: true
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
