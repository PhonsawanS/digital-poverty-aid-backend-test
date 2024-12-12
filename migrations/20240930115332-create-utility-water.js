'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UtilityWater', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plumbing_water: {
        type: Sequelize.STRING, //change type
        allowNull: false,
      },
      water_other_sources: {  //เปลี่ยนชื่อ field
        type: Sequelize.STRING,
        allowNull: false,
      },
      water_purchase: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('UtilityWater');
  }
};