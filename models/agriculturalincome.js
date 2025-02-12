'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agriculturalincome extends Model {
    static associate(models) {
      // define association here
      Agriculturalincome.belongsTo(models.Financialcapital, { foreignKey: 'finan_capital_id' });
    }
  }
  Agriculturalincome.init({
    plants: {               
      type: DataTypes.ARRAY(DataTypes.STRING), 
      allowNull: false,  
    },
    livestock: {               
      type: DataTypes.ARRAY(DataTypes.STRING),  
      allowNull: false,
    },
    fishing: {                 
      type: DataTypes.ARRAY(DataTypes.STRING),  
      allowNull: false,
    },
    finan_capital_id: {         // เชื่อมโยงกับ Financialcapital
      type: DataTypes.INTEGER,
      allowNull: false,  // ต้องมีการเชื่อมโยง
    },

  }, {
    freezeTableName: true,
    sequelize,
    modelName: 'Agriculturalincome',
  });
  return Agriculturalincome;
};