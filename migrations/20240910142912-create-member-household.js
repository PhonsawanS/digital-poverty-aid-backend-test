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
      age: {
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
      houseId:{
        type: Sequelize.INTEGER,
        references: {
          model: "Household", // อ้างอิงไปยังตาราง Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", // ถ้า Form ถูกลบ Household จะไม่ถูกลบ แต่ formId จะถูกตั้งค่าเป็น NULL
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