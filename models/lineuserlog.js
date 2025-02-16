'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LineUserLog extends Model {

    static associate(models) {
      LineUserLog.belongsTo(models.LineOA, {
        foreignKey: 'userId',
        targetKey: 'userId'  // เพิ่ม targetKey
      })
    }
  }
  LineUserLog.init({
    userId: DataTypes.STRING,
    action: DataTypes.STRING,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'LineUserLog',
  });
  return LineUserLog;
};