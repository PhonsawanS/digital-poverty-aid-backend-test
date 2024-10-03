'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Informant', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      national_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number_total_fam: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_live_fam: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_not_live_fam: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      formId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Form', // ชื่อของตารางที่ถูกอ้างอิง
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
    await queryInterface.dropTable('Informant');
  }
};
