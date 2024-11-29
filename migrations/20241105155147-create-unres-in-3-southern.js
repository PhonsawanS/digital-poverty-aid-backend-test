'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UnresIn3Southerns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      effect: {
        type: Sequelize.STRING
      },
      form_id: {
        type: Sequelize.INTEGER
      },
      effect_in_life:{
        type: Sequelize.ARRAY(Sequelize.STRING) // ใช้ ARRAY ของ STRING
        
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
    await queryInterface.dropTable('UnresIn3Southerns');
  }
};