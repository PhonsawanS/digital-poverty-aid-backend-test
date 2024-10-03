'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('creditsources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      form: {
        type: Sequelize.STRING,
        allowNull: false // ฟิลด์นี้จะต้องมีค่า
      },
      outstanding_amount: {
        type: Sequelize.FLOAT,
        allowNull: false, // ฟิลด์นี้จะต้องมีค่า
      },
      debt_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Debt', // ชื่อของโมเดลที่เชื่อมโยง
          key: 'id' // ชื่อของฟิลด์ที่เชื่อมโยงในโมเดล Debt
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
    await queryInterface.dropTable('creditsources');
  }
};