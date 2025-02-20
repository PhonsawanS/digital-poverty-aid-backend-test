'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HelpMember', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      capital: {
        type: Sequelize.STRING
      },
      components: {
        type: Sequelize.STRING
      },
      help_name: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
      },
      agency: {
        type: Sequelize.STRING
      },
      help_date: {
        type: Sequelize.DATE
      },
      member_house_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('HelpMember');
  }
};