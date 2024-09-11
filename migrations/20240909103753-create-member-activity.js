'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberActivitie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity_name: {
        type: Sequelize.STRING
      },activity_type:{
        type: Sequelize.STRING
      },
      achievement:{
        type: Sequelize.STRING
      },
      start_date:{
        type: Sequelize.DATE
      },
      operator:{
        type: Sequelize.STRING
      },
      is_poor_households_TPMAP:{
        type: Sequelize.BOOLEAN, // Set as a boolean
        defaultValue: false      // Optional: set a default value
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
    await queryInterface.dropTable('MemberActivitie');
  }
};