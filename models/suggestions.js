'use strict';
const { Model, DataTypes } = require('sequelize'); // เพิ่ม DataTypes ที่นี่

module.exports = (sequelize) => {
  class Suggestion extends Model {
    static associate(models) {
      Suggestion.belongsTo(models.Form, {foreignKey: 'form_id'});
      
    }
  }
  Suggestion.init({
    suggest_informer:{type: DataTypes.STRING},
    suggest_surway_team: {type:DataTypes.STRING},
    resource: {type:DataTypes.ARRAY(DataTypes.STRING)},
    form_id: { type: DataTypes.INTEGER }

  }, {
    sequelize,
    modelName: 'Suggestion',
    freezeTableName: true,
  });
  return Suggestion;
};