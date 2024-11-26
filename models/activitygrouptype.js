'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activitygrouptype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activitygrouptype.belongsTo(models.Socialcapital, { foreignKey: 'social_cap_id' });
    }
  }
  Activitygrouptype.init({
    activity_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_member: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    dependency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    social_cap_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    freezeTableName: true,
    tableName: 'Activitygrouptype',
    modelName: 'Activitygrouptype',
  });
  return Activitygrouptype;
};