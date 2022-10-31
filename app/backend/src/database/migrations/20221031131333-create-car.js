'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      urlImage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('cars');
  }
};
