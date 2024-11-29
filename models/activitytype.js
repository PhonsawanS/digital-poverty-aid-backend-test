'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activitytype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activitytype.belongsTo(models.Socialcapital, { foreignKey: 'social_cap_id' });
    }
  }
  Activitytype.init({
    activity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    participation_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frequncy: {
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
    tableName: 'Activitytype',
    modelName: 'Activitytype',
  });
  return Activitytype;
};