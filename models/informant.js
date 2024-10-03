'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Informant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Informant.belongsTo(models.Form, { foreignKey: 'formId' });
    }
  }

  Informant.init({
    fname: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    national_id: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },
    number_total_fam: {
      type: DataTypes.INTEGER,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },  
    total_live_fam: {
      type: DataTypes.INTEGER,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },    
    total_not_live_fam: {
      type: DataTypes.INTEGER,
      allowNull: false // ไม่อนุญาตให้เป็น null
    }, 
    formId: {
      type: DataTypes.INTEGER,
      allowNull: false // ไม่อนุญาตให้เป็น null
    },            
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Informant',
    tableName: 'Informant'
  });
  
  return Informant;
};
