const { where } = require("sequelize");
const db = require("../models");
const financialcapital_model = db.Financialcapital;
const form_model = db.Form;
const saving_model = db.Saving


exports.getFinalcapital = () => {
    try {
        return financialcapital_model.findAll({ include: form_model });
      } catch (err) {
        return err;
      }
};

exports.findOneById = async (id) => {
  return financialcapital_model.findOne({
    where: { id: id },
    include: form_model 
  });
};

exports.create = async (financialcapitalObj) => {
  try{
    return await financialcapital_model.create(financialcapitalObj);
  }catch (err) {
    return err;
  }
}

exports.update = async (financialcapitalObj, id) => {
  return await financialcapital_model
    .update(financialcapitalObj, {
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.deleted = async (id) => {
  await financialcapital_model
  .destroy({
    where:{id:id},
  })
  .then((data) => {
    return data;
  })
  .catch((err) => {
    return err;
  })
};


exports.createCombined = async (data) => {
  try {
    // เริ่ม transaction เพื่อให้แน่ใจว่าข้อมูลทุกส่วนถูกบันทึกพร้อมกัน
    const result = await db.sequelize.transaction(async (t) => {

      // สร้างข้อมูลในตาราง financialcapita
      const financialcapital = await  financialcapital_model.create(
        {
          formId: data.formId,                 
        },
        { transaction: t }  // ใช้ transaction เพื่อทำให้แน่ใจว่าการบันทึกข้อมูลนี้จะถูกม้วนกลับหากเกิดปัญหา
      );

      // สร้างข้อมูลในตาราง Saving (หลายรายการ)
      const savingPromises = data.Saving.map(async (savingData) => {
        return await saving_model.create(
          {
            is_has_saving: savingData.is_has_saving,   // บันทึกว่ามีการออมเงินหรือไม่
            saving_type: savingData.saving_type,       // ประเภทการออม
            amount: savingData.amount,                 // จำนวนเงินออม
            finan_capital_id: financialcapital.id,    
          },
          { transaction: t }  // ใช้ transaction
        );
      });

      // รอให้คำสั่ง create ทั้งหมดใน Saving สำเร็จ
      const savingArray = await Promise.all(savingPromises);

      // ส่งผลลัพธ์ที่รวมกันของข้อมูลทั้งหมดกลับไป
      return {
        financialcapital,
        savingArray,
      };
    });

    return result;  // ส่งผลลัพธ์สุดท้ายกลับไป
  } catch (err) {
    throw new Error(err.message);  // ถ้ามีข้อผิดพลาดเกิดขึ้น ให้โยนข้อผิดพลาดนั้น
  }
};
