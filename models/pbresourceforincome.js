'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PBresourceforincome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PBresourceforincome.belongsTo(models.Naturalresourcecapital, { foreignKey: 'national_res_id' });
    }
  }
  PBresourceforincome.init({
    is_use_PB_resoc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    rescource: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    distanceKM: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    description: {
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
    modelName: 'PBresourceforincome',
  });
  return PBresourceforincome;
};