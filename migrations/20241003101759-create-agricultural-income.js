'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Agriculturalincome', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plants: {
        type: Sequelize.ARRAY(Sequelize.STRING),  // เก็บข้อมูล array ของพืชเกษตร
        allowNull: false
      },
      livestock: {
        type: Sequelize.ARRAY(Sequelize.STRING),  // เก็บข้อมูล array ของปศุสัตว์
        allowNull: false
      },
      fishing: {
        type: Sequelize.ARRAY(Sequelize.STRING),  // เก็บข้อมูล array ของการจับปลา
        allowNull: false
      },
      work: {
        type: Sequelize.TEXT,  // ข้อมูลเกี่ยวกับงาน
        allowNull: false
      },
      work_area: {
        type: Sequelize.TEXT,  // ข้อมูลเกี่ยวกับพื้นที่การทำงาน
        allowNull: false
      },
      rent: {
        type: Sequelize.FLOAT,  // ค่าเช่า
        allowNull: false
      },
      finan_capital_id: {
        type: Sequelize.INTEGER,  // foreign key เชื่อมโยงกับ Financialcapital
        allowNull: false,
        references: {
          model: 'Financialcapital',  // ชื่อของตารางที่เชื่อมโยง
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
    await queryInterface.dropTable('Agriculturalincome');
  }
};
