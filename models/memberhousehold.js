'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class MemberHousehold extends Model {

    static associate(models) {
      MemberHousehold.belongsTo(models.Household,{foreignKey:'houseId'})
    }

  }
  MemberHousehold.init({
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    fname: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    national_id: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    age:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY, // ใช้ DATEONLY สำหรับการเก็บวันเกิด
      allowNull: false, // หรือ false ถ้าต้องการให้วันเกิดเป็นข้อมูลที่ต้องกรอก
    },
    status_in_house: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    career: {
      type: DataTypes.ARRAY(DataTypes.STRING), // ARRAY(Str)
      allowNull: false,
    },
    houseId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'MemberHousehold',
  });
  return MemberHousehold;
};