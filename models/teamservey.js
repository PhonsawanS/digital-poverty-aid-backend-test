'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamServey extends Model {
   
    static associate(models) {
      TeamServey.belongsTo(models.Form,{foreignKey:'formId'})
    }
  }
  TeamServey.init({
    fname: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    agency: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    job_position: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    formId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'TeamServey',
  });
  return TeamServey;
};