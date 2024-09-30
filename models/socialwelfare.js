'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialWelfare extends Model {
   
    static associate(models) {
      SocialWelfare.belongsTo(models.HumanCapital,{foreignKey:'human_capital_id'})
    }
  }
  SocialWelfare.init({
    welfare: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: { 
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    frequency: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    human_capital_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'SocialWelfare',
  });
  return SocialWelfare;
};