'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {

    static associate(models) {
      Token.belongsTo(models.User,{foreignKey:'user_id'})
    }
  }
  Token.init({
    user_id: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    expiresAt: DataTypes.DATE,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Token',
  });
  return Token;
};