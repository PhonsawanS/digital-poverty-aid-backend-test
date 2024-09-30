'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HumanCapital', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      max_education: {
        allowNull: false,
        type: Sequelize.STRING
      },
      current_edu_level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      edu_status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      work_status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      work_can_made_income: {
        type: Sequelize.ARRAY(Sequelize.STRING), // ใช้ ARRAY ของ STRING
        allowNull: false,
      },
      agv_income: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      can_write_TH: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      can_read_TH: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      can_speak_TH: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      member_house_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'MemberHousehold',
          key: 'id'
        },
        onDelete:'CASCADE'
      },
      form_id:{
        type: Sequelize.INTEGER,
        references: {
          model: "Form", 
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", 
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
    await queryInterface.dropTable('HumanCapital');
  }
};