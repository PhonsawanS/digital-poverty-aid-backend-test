'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MemberActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MemberActivity.belongsTo(models.Household, { foreignKey: 'houseId' });
    }
  }

  MemberActivity.init({
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    achievement: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    operator: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    is_poor_households_TPMAP: {
      type: DataTypes.BOOLEAN,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    houseId: {
      type: DataTypes.INTEGER,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },      
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'MemberActivity',
  });
  
  return MemberActivity;
};
