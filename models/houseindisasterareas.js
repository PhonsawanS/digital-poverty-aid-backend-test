'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HouseInDisasterAreas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HouseInDisasterAreas.belongsTo(models.Naturalresourcecapital, { foreignKey: 'national_res_id' });
    }
  }
  HouseInDisasterAreas.init({
    is_in_disaster: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    disaster_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    frequncy_disaster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disaster_response: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    national_res_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HouseInDisasterAreas',
  });
  return HouseInDisasterAreas;
};