'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UnrestIn3Southerns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      effect: {
        type: Sequelize.STRING,
        allowNull: false
      },
      form_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      urgent_to_do: {
        type: Sequelize.STRING,
        allowNull: false
      },
      effect_in_life: {
        type: Sequelize.ARRAY(Sequelize.STRING), // ใช้ ARRAY ของ STRING  //ในวงเล็บต้องการเก็บ STRING ไว้
        allowNull: false
      },
      effect_in_work: {
        type: Sequelize.ARRAY(Sequelize.STRING), // ใช้ ARRAY ของ STRING  //ในวงเล็บต้องการเก็บ STRING ไว้
        allowNull: false
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
    await queryInterface.dropTable('UnrestIn3Southerns');
  }
};