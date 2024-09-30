'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HumanCapital extends Model {
    
    static associate(models) {
      HumanCapital.belongsTo(models.MemberHousehold,{foreignKey:'member_house_id'}),
      HumanCapital.belongsTo(models.Form,{foreignKey:'form_id'}),
      HumanCapital.hasMany(models.SocialWelfare,{foreignKey:'human_capital_id'})
    }
  }
  HumanCapital.init({
    max_education: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_edu_level:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    edu_status:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_status:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    work_can_made_income: {
      type: DataTypes.ARRAY(DataTypes.STRING), // ARRAY(Str)
      allowNull: false,
    },
    agv_income:{ 
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    can_write_TH:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    can_read_TH:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    can_speak_TH:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_house_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    form_id:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'HumanCapital',
  });
  return HumanCapital;
};