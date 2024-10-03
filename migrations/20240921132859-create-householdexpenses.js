'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Householdexpenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      expenses_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount_per_month:{
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      finan_capital_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Financialcapital', 
          key: 'id' 
        },
        onUpdate: 'CASCADE', // เมื่ออัปเดตจะทำการอัปเดตที่เชื่อมโยงด้วย
        onDelete: 'SET NULL' // เมื่อถูกลบจะตั้งค่าเป็น NULL
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
    await queryInterface.dropTable('Householdexpenses');
  }
};