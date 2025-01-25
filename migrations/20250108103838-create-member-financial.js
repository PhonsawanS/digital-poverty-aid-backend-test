'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberFinancial', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agv_income : {
        type: Sequelize.FLOAT
      },
      avg_expenses : {
        type: Sequelize.FLOAT
      },
      inflation : {
        type: Sequelize.FLOAT
      },
      member_house_id : {
        type: Sequelize.FLOAT
      },
      editBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'User',      
          key: 'id'           
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    await queryInterface.dropTable('MemberFinancial');
  }
};