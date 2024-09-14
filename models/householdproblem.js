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
    name_problem: DataTypes.STRING,
    details_problem: DataTypes.STRING,
    type_problem: DataTypes.STRING,
    indicators:DataTypes.STRING,
    type_household: DataTypes.STRING,
    details_household: DataTypes.STRING,
    survey_data: DataTypes.DATE,
    problem_solving: DataTypes.STRING,
    details_solving: DataTypes.STRING,
    desire: DataTypes.STRING,
    houseId: DataTypes.INTEGER,
    teamServeyId: DataTypes.INTEGER,
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HouseHoldProblem',
    tableName:'HouseHoldProblem'
  });
  return HouseHoldProblem;
};