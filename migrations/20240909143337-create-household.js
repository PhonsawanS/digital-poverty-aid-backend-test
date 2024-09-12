"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Household", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      house_code: {
        type: Sequelize.STRING,
      },
      host_title: {
        type: Sequelize.STRING,
      },
      host_fname: {
        type: Sequelize.STRING,
      },
      host_lname: {
        type: Sequelize.STRING,
      },
      host_national_id: {
        type: Sequelize.STRING,
      },
      green_book_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      postcode: {
        type: Sequelize.INTEGER,
      },
      subdistrict: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      house_number: {
        type: Sequelize.STRING,
      },
      village: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      alley: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      road: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_house_member: {
        type: Sequelize.INTEGER,
      },
      total_house_activity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      formId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Form", // อ้างอิงไปยังตาราง Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", // ถ้า Form ถูกลบ Household จะไม่ถูกลบ แต่ formId จะถูกตั้งค่าเป็น NULL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Household");
  },
};
