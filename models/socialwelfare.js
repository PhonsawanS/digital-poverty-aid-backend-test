'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialWelfare extends Model {
   
    static associate(models) {
      SocialWelfare.belongsTo(models.MemberHousehold,{foreignKey:'member_house_id'})
      SocialWelfare.belongsTo(models.User,{
        foreignKey: 'editBy',
        onDelete: 'SET NULL',     
        onUpdate: 'CASCADE',      
      })
      SocialWelfare.hasMany(models.Log, { foreignKey: 'record_id' })
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
    member_house_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    editBy: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'SocialWelfare',
  });
  return SocialWelfare;
};