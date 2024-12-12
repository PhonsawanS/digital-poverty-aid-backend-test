'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Occupationalproperty', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_has_property:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      property_type: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      finan_capital_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Occupationalproperty');
  }
};