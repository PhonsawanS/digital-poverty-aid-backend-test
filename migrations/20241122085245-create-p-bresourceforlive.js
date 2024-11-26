'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PBresourceforlive', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_use_PB_resoc: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      rescource: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      distanceKM: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      national_res_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Naturalresourcecapital',
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
    await queryInterface.dropTable('PBresourceforlive');
  }
};