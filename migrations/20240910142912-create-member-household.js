'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberHousehold', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      national_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age_yaer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      age_month: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.DATEONLY, // ใช้ DATEONLY สำหรับการเก็บวันเกิด
        allowNull: false, // หรือ false ถ้าต้องการให้วันเกิดเป็นข้อมูลที่ต้องกรอก
      },
      status_in_house: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      health: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      career: {
        type: Sequelize.ARRAY(Sequelize.STRING), // ใช้ ARRAY ของ STRING
        allowNull: false,
      },
      work_can_made_income: {
        type: Sequelize.ARRAY(Sequelize.STRING), // ใช้ ARRAY ของ STRING
        allowNull: false,
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
      is_leader: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, 
      },
      still_poor: {
        type: Sequelize.BOOLEAN,
        defaultValue: true, 
      },
      houseId:{
        type: Sequelize.INTEGER,
        references: {
          model: "Household", // อ้างอิงไปยังตาราง Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
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
    await queryInterface.dropTable('MemberHousehold');
  }
};