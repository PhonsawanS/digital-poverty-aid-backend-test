'use strict';
const { Model, DataTypes } = require('sequelize'); // เพิ่ม DataTypes ที่นี่

module.exports = (sequelize) => {
  class Suggestions extends Model {
    static associate(models) {
      Suggestions.belongsTo(models.Form, {foreignKey: 'form_id'});
      
    }
  }
  Suggestions.init({
    suggest_informer:{type: DataTypes.STRING},
    suggest_surway_team: {type:DataTypes.STRING},
    resource: {type:DataTypes.ARRAY(DataTypes.STRING)},
    form_id: { type: DataTypes.INTEGER }

  }, {
    sequelize,
    modelName: 'Suggestions',
  });
  return Suggestions;
};