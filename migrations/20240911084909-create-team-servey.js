'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeamServey', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      agency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      job_position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      formId:{
        type: Sequelize.INTEGER,
        references: {
          model: "Form", 
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", 
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
    await queryInterface.dropTable('TeamServey');
  }
};