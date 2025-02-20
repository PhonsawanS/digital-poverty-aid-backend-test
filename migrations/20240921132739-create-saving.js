'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Saving', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_has_saving: {
        allowNull: false,
        type: Sequelize.BOOLEAN,  // เปลี่ยนจาก STRING เป็น BOOLEAN
      },
      saving_type: {
        allowNull: false,
        type: Sequelize.STRING,    // เพิ่มฟิลด์ saving_type เป็น STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT,     // เพิ่มฟิลด์ amount เป็น float
      },
      finan_capital_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Financialcapital', // ชื่อของตารางที่ถูกอ้างอิง
          key: 'id' // ชื่อคีย์ที่ถูกอ้างอิง
        },
        onUpdate: 'CASCADE', // อัปเดตเมื่อมีการเปลี่ยนแปลง
        onDelete: 'SET NULL', // ตั้งค่าเป็น NULL หากบันทึกใน Financialcapital ถูกลบ
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
    await queryInterface.dropTable('Saving');
  }
};