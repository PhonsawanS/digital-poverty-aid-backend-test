'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SocialWelfare', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      welfare: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      frequency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      member_house_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'MemberHousehold',
          key: 'id'
        },
        onDelete:'CASCADE'  //โดนลบตามหากทุน 1 โดนลบ
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
    await queryInterface.dropTable('SocialWelfare');
  }
};