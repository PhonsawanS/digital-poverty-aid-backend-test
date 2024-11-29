'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Socialcapital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Socialcapital.belongsTo(models.Form, { foreignKey: 'formId' });
      Socialcapital.hasOne(models.Activitygrouptype,{foreignKey:'social_cap_id'})
      Socialcapital.hasOne(models.Activitytype,{foreignKey:'social_cap_id'})

    }
  }
  Socialcapital.init({
    formId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Socialcapital',
    tableName: 'Socialcapital'
  });
  return Socialcapital;
};