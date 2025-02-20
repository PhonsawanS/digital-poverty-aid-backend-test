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
      lat: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      lon: {
        type: Sequelize.DECIMAL,
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
        allowNull: true,
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
        type: Sequelize.STRING, //change type
        allowNull: true,
      },
      has_home_phone: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      water_for_agriculture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      house_access_road: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      workplace_access_road: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      use_tech_get_benefit_gov: {  //bene*
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      benefit_form_tech: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      news: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      agricultural_land: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      land_use_issuse: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      form_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Form",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      houseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Household",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      editBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'User',
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
    await queryInterface.dropTable('PhysicalCapital');
  }
};