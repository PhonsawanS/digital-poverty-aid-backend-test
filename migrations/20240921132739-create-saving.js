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
        type: Sequelize.BOOLEAN,  // เปลี่ยนจาก STRING เป็น BOOLEAN
      },
      saving_type: {
        type: Sequelize.STRING,    // เพิ่มฟิลด์ saving_type เป็น STRING
      },
      amount: {
        type: Sequelize.FLOAT,     // เพิ่มฟิลด์ amount เป็น float
      },
      finan_capital_id:{
        type: Sequelize.INTEGER
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