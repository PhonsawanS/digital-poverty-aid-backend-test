'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PhysicalCapital', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pin_latitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pin_longitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      is_has_house: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      house_rent: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      house_status_law: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      house_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      electricity_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alternative_energy: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      has_home_phone: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      water_for_agriculture: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      house_access_road: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      workplace_access_road: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      use_tech_get_benrfit_gov: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      benefit_form_tech : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      news: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      agricultural_land:{
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      land_use_issuse :{
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      formId: {
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
    await queryInterface.dropTable('PhysicalCapital');
  }
};