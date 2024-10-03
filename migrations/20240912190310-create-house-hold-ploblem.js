'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HouseHoldProblem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_problem: { 
        type: Sequelize.STRING,
        allowNull: false // ควรกำหนดเป็น false หากต้องการให้ต้องระบุข้อมูลนี้
      },
      details_problem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_problem: {
        type: Sequelize.STRING,
        allowNull: false
      },
      indicators: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type_household: {
        type: Sequelize.STRING,
        allowNull: false
      },
      details_household: {
        type: Sequelize.STRING,
        allowNull: false
      },
      survey_data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      problem_solving: {
        type: Sequelize.STRING,
        allowNull: false
      },
      details_solving: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desire: {
        type: Sequelize.STRING,
        allowNull: false
      },
      houseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Household', // ชื่อของตารางที่ถูกอ้างอิง
          key: 'id' // ชื่อคีย์ที่ถูกอ้างอิง
        },
        onUpdate: 'CASCADE', // อัปเดตเมื่อมีการเปลี่ยนแปลง
        onDelete: 'SET NULL', // ตั้งค่าเป็น NULL หากบันทึกใน Household ถูกลบ
      },
      teamServeyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TeamServey', // ชื่อของตารางที่ถูกอ้างอิง
          key: 'id' // ชื่อคีย์ที่ถูกอ้างอิง
        },
        onUpdate: 'CASCADE', // อัปเดตเมื่อมีการเปลี่ยนแปลง
        onDelete: 'SET NULL', // ตั้งค่าเป็น NULL หากบันทึกใน TeamServey ถูกลบ
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
    await queryInterface.dropTable('HouseHoldProblem');
  }
};
