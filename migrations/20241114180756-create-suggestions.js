'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Suggestion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      suggest_informer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      suggest_surway_team: {  
        allowNull: false,
        type: Sequelize.STRING
      },
      resource: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)  //เก็บเป็น ARREY
      },
      form_id: {
        allowNull: false,
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
    await queryInterface.dropTable('Suggestion');
  }
};