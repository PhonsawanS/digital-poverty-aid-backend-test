'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Debt', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstis_has_debt: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      finan_capital_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Financialcapital', // ชื่อของตารางที่ถูกอ้างอิง
          key: 'id' // ชื่อคีย์ที่ถูกอ้างอิง
        },
        onUpdate: 'CASCADE', // อัปเดตเมื่อมีการเปลี่ยนแปลง
        onDelete: 'SET NULL', // ตั้งค่าเป็น NULL หากบันทึกใน Financialcapital ถูกลบ
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
    await queryInterface.dropTable('Debt');
  }
};