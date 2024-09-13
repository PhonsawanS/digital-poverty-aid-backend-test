'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HouseHoldProblem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_problem: { 
        type: Sequelize.STRING
      },
      details_problem: {
        type: Sequelize.STRING
      },
      type_problem: {
        type: Sequelize.STRING
      },
      indicators: {
        type: Sequelize.STRING
      },
      type_household: {
        type: Sequelize.STRING
      },
      details_household: {
        type: Sequelize.STRING
      },
      survey_data: {
        type: Sequelize.DATE
      },
      problem_solving: {
        type: Sequelize.STRING
      },
      details_solving: {
        type: Sequelize.STRING
      },
      desire: {
        type: Sequelize.STRING
      },
      houseId: {
        type: Sequelize.INTEGER
      },
      teamServeyId: {
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
    await queryInterface.dropTable('HouseHoldProblem');
  }
};
