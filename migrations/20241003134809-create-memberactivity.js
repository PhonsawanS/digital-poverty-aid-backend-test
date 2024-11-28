'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberActivity', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity_name: {
        allowNull: false,
        type: Sequelize.STRING
      },activity_type:{
        allowNull: false,
        type: Sequelize.STRING
      },
      achievement:{
        allowNull: false,
        type: Sequelize.STRING
      },
      start_date:{
        allowNull: false,
        type: Sequelize.DATE
      },
      operator:{
        allowNull: false,
        type: Sequelize.STRING
      },
      is_poor_households_TPMAP:{
        allowNull: false,
        type: Sequelize.BOOLEAN, // Set as a boolean     
      },
      houseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Household', // ชื่อของตารางที่ถูกอ้างอิง
          key: 'id' // ชื่อคีย์ที่ถูกอ้างอิง
        },
        onDelete: 'CASCADE', // ตั้งค่าเป็น NULL หากบันทึกใน Household ถูกลบ
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
    await queryInterface.dropTable('MemberActivity');
  }
};