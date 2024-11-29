'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Activitytype', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      participation_level: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      frequncy: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      social_cap_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Socialcapital',
          key: 'id'
        },
        onUpdate: 'CASCADE', // เมื่ออัปเดตจะทำการอัปเดตที่เชื่อมโยงด้วย
        onDelete: 'SET NULL' // เมื่อถูกลบจะตั้งค่าเป็น NULL
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
    await queryInterface.dropTable('Activitytype');
  }
};