'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HelpMember extends Model {

    static associate(models) {
      HelpMember.belongsTo(models.MemberHousehold,{foreignKey:'member_house_id'})
    }
  }
  HelpMember.init({
    capital: DataTypes.STRING,
    components: DataTypes.STRING,
    help_name: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    agency: DataTypes.STRING,
    member_house_id: DataTypes.INTEGER,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HelpMember',
  });
  return HelpMember;
};