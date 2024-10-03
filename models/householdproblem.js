'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HouseHoldProblem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HouseHoldProblem.belongsTo(models.Household, { foreignKey: 'houseId' });
      HouseHoldProblem.belongsTo(models.TeamServey, { foreignKey: 'teamServeyId' });
    }
  }
  HouseHoldProblem.init({
    name_problem:{
      type:DataTypes.STRING
    },
    details_problem:{
      type:DataTypes.STRING
    },
    type_problem:{
      type:DataTypes.STRING
    } ,
    indicators:{
      type:DataTypes.STRING
    },
    type_household:{
      type:DataTypes.STRING
    } ,
    details_household:{
      type:DataTypes.STRING
    } ,
    survey_data:{
      type:DataTypes.DATE,
    },
    problem_solving:{
      type: DataTypes.STRING
    },
    details_solving:{
      type:DataTypes.STRING
    },
    desire:{
      type:DataTypes.STRING
    },
    houseId:{
      type: DataTypes.INTEGER
    },
    teamServeyId:{
      type:DataTypes.INTEGER
    } ,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HouseHoldProblem',
    tableName:'HouseHoldProblem'
  });
  return HouseHoldProblem;
};