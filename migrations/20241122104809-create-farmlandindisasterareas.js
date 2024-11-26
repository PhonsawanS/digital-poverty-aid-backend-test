'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Farmlandindisasterareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_in_disaster: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      disaster_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      frequncy_disaster: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      disaster_response: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      national_res_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Farmlandindisasterareas');
  }
};