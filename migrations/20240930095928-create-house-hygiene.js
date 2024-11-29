'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HouseHygiene', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_storage: {
        type: Sequelize.STRING
      },
      drainage_system: {
        type: Sequelize.STRING
      },
      toilet: {
        type: Sequelize.STRING
      },
      garbage: {
        type: Sequelize.STRING
      },
      phy_capital_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "PhysicalCapital", 
          key: "id",
        },
        onDelete:'CASCADE'
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
    await queryInterface.dropTable('HouseHygiene');
  }
};