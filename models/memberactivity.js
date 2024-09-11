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
    }
  }
  MemberActivity.init({
    activity_name: DataTypes.STRING,
    activity_type: DataTypes.STRING,
    achievement: DataTypes.STRING,
    start_date: DataTypes.DATE,
    operator: DataTypes.STRING,
    is_poor_households_TPMAP: DataTypes.BOOLEAN
  }, {

    sequelize,
    freezeTableName: true,
    modelName: 'MemberActivity',
    tableName: 'MemberActivitie'
  });
  return MemberActivity;
};



//house_code              fk ยังไม่ได้เพิ่ม
