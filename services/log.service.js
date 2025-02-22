const { where } = require("sequelize");
const db = require("../models");
const log_model = db.Log
const nonAgiIncome_model = db.NonAGIincome
const user_model = db.User
const householdexpenses_model = db.Householdexpenses
const saving_model = db.Saving
const creditsources_model = db.Creditsources
const memberHouse_model = db.MemberHousehold;
const physical_model = db.PhysicalCapital;
const agi_financial_model = db.AGIFinancial;
const household_model = db.Household;
const member_finan_model = db.MemberFinancial;
const socialWelfare_model = db.SocialWelfare;
const career_model = db.Career;
const help_member_model = db.HelpMember;

exports.getLog = () => {
  try {
    return log_model.findAll();
  } catch (err) {
    return err;
  }
};

exports.createLog = async (userId, action, tableName, recordId) => {
  try {
    await log_model.create({
      user_id: userId,
      action: action,
      table_name: tableName,
      record_id: recordId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  } catch (error) {
    console.error("Error logging action:", error);
  }
};

exports.listLog = async (userId) => {
  try {
    const lognonAgiIncome = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "NonAGIincome"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: nonAgiIncome_model,
          where: db.sequelize.where(
            db.sequelize.col("NonAGIincome.id"),
            "=",
            db.sequelize.col("Log.record_id")
          )
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logAGIFinancial = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "AgiFinancial"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: agi_financial_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logHouseholdexpenses = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "Householdexpenses"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: householdexpenses_model,
          as: "Householdexpense",
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logSaving = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "Saving"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: saving_model,
          where: db.sequelize.where(
            db.sequelize.col("Saving.id"),
            "=",
            db.sequelize.col("Log.record_id")
          )
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logCreditsources = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "Creditsources"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: creditsources_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logMember = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "MemberHousehold"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: memberHouse_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logPhysicalCapital = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "PhysicalCapital"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: physical_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logHousehold = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "Household"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: household_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logMemberFinancial = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "MemberFinancial"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: member_finan_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logSocialWelfare = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "SocialWelfare"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: socialWelfare_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logCarreer = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "Career"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: career_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    const logHelpMember = await log_model.findAll({
      where: {
        user_id: userId,
        table_name: "HelpMember"
      },
      include: [
        {
          model: user_model,
          attributes: ["fname", "lname"]
        },
        {
          model: help_member_model,
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    return {
      NonAGIincomeAction: lognonAgiIncome,
      HouseholdexpensesAction: logHouseholdexpenses,
      SavingAction: logSaving,
      CreditsourcesAction: logCreditsources,
      MemberAction: logMember,
      PhysicalCapitalAction: logPhysicalCapital,
      AGIFinancialAction: logAGIFinancial,
      HouseholdAction: logHousehold,
      MemberFinancialAction: logMemberFinancial,
      SocialWelfareAction: logSocialWelfare,
      CareerAction: logCarreer,
      HelpMemberAction: logHelpMember
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
