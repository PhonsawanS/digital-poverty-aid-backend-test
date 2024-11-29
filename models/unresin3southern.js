'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class UnresIn3Southern extends Model {

    static associate(models) {
      UnresIn3Southern.belongsTo(models.Form,{foreignKey:'form_id'})
    }
  }
  UnresIn3Southern.init({
    effect: DataTypes.STRING,
    form_id: DataTypes.INTEGER,
    effect_in_life: DataTypes.ARRAY((DataTypes.STRING))
  }, {
    sequelize,
    modelName: 'UnresIn3Southern',
  });
  return UnresIn3Southern;
};