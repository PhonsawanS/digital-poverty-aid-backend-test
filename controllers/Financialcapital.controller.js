const financialcapitalService = require('../services/Financialcapital.service');
const savingService = require('../services/Saving.service');
const Joi = require('joi');
const { sequelize } = require('../models'); // ต้อง import sequelize เพื่อใช้ transaction

// Create Validators
const CreateFinancialCapitalSchema = Joi.object({
    formId: Joi.number().integer().required()
});

// Update Validators
const UpdateFinancialCapitalSchema = Joi.object({
    formId: Joi.number().integer().optional()
});

// กำหนด schema สำหรับการ validate ข้อมูลที่ส่งมาเพื่อสร้าง FinancialCapital พร้อมกับรายการ savings หลายรายการ
const CreateWithSchema = Joi.object({
    formId: Joi.number().integer().required(), // formId ต้องเป็นเลขจำนวนเต็มและเป็นค่าที่จำเป็น
    savings: Joi.array().items( // savings เป็น array ที่ต้องมีอย่างน้อยหนึ่งรายการ
        Joi.object({
            is_has_saving: Joi.boolean().required(), // is_has_saving ต้องเป็น boolean และเป็นค่าที่จำเป็น
            saving_type: Joi.string().required(), // saving_type ต้องเป็น string และเป็นค่าที่จำเป็น
            amount: Joi.number().precision(2).required(), // amount ต้องเป็นตัวเลขที่มีทศนิยมไม่เกิน 2 ตำแหน่ง และเป็นค่าที่จำเป็น
        })
    ).min(1).required(), // ต้องมีข้อมูล savings อย่างน้อย 1 รายการใน array และเป็นค่าที่จำเป็น

    // investments: Joi.array().items(
    //     Joi.object({
    //         investment_type: Joi.string().required(), 
    //         amount: Joi.number().precision(2).required(), 
    //     })
    // ).min(1).required() 
});


// กำหนด schema สำหรับการ validate ข้อมูลที่ส่งมาเพื่ออัปเดต FinancialCapital พร้อมกับ Savings หลายรายการ
const UpdateWithSchema = Joi.object({
    formId: Joi.number().integer().optional(), // formId เป็นค่า optional
    savings: Joi.array().items( // savings เป็น array ที่ต้องมีอย่างน้อยหนึ่งรายการ
        Joi.object({
            id: Joi.number().integer().required(), // ID ของ saving ต้องมีเสมอ
            is_has_saving: Joi.boolean().optional(), // is_has_saving สามารถเป็น optional ได้
            saving_type: Joi.string().optional(), // saving_type สามารถเป็น optional ได้
            amount: Joi.number().precision(2).optional(), // amount สามารถเป็น optional ได้
        })
    ).min(1).optional() // savings array สามารถเป็น optional ได้
});


const FinancialCapitalList = async (req, res) => {
    await financialcapitalService.getFinalcapital()
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const findOneFinancialCapital = async (req, res) => {
    await financialcapitalService.findOneById(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const createFinancialCapital = async (req, res) => {
    // Validate request body
    const { error, value } = CreateFinancialCapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const financialcapitalObj = {
        formId: value.formId
    };
    await financialcapitalService.create(financialcapitalObj)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const updateFinancialCapital = async (req, res) => {
    const id = req.params.id;

    // Validate request body
    const { error, value } = UpdateFinancialCapitalSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const financialcapitalObj = {
        formId: value.formId
    };
    await financialcapitalService.update(financialcapitalObj, id)
        .then(data => {
            res.send({
                data: data,
                msg: "Update success",
                status: 200,
                err: '',
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const deleteFinancialCapital = async (req, res) => {
    await financialcapitalService.deleted(req.params.id)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

// ฟังก์ชันสำหรับการสร้าง FinancialCapital พร้อมกับ Savings หลายรายการ
const createFinancialCapitalWithSavings = async (req, res) => {
    // Validate request body ข้อมูลที่ถูกส่งมาจะถูกตรวจสอบตาม schema ที่ได้กำหนดไว้ด้านบน
    const { error, value } = CreateWithSchema.validate(req.body); // validate ข้อมูลจาก request body

    if (error) { // ถ้ามี error ในการ validate ให้ส่ง error response กลับไปที่ client
        return res.status(400).send({
            msg: "Validation error", // แจ้งว่าเกิด validation error
            error: error.details // รายละเอียดของ error
        });
    }

    // Start transaction เริ่มต้นการ transaction ใหม่เพื่อให้มั่นใจว่าข้อมูลทั้งสองส่วน (FinancialCapital และ Savings) จะถูก insert พร้อมกัน
    const transaction = await sequelize.transaction(); // transaction จะช่วยให้ข้อมูลถูกจัดการเป็นกลุ่ม
    try {
        // สร้าง FinancialCapital ก่อน (ในฐานข้อมูล) โดยใช้ข้อมูลจาก request body ที่ผ่านการ validate แล้ว
        const financialcapitalObj = {
            formId: value.formId // สร้าง object สำหรับเก็บข้อมูล formId
        };

        const financialCapital = await financialcapitalService.create(financialcapitalObj, { transaction });
        // เรียกใช้ service เพื่อสร้าง FinancialCapital ใหม่และส่ง object พร้อม transaction

        // Loop ผ่าน savings array เพื่อสร้างแต่ละ saving ที่เกี่ยวข้องกับ FinancialCapital ที่สร้างไว้
        // การ loop จะนำข้อมูลใน array ของ savings มาสร้างแต่ละรายการ Saving ในฐานข้อมูล
        const savingsPromises = value.savings.map(saving => {
            const savingObj = {
                finan_capital_id: financialCapital.id, // ใช้ id ของ financialCapital ที่เพิ่งสร้างเพื่อเชื่อมต่อกับ Saving
                is_has_saving: saving.is_has_saving, // คัดลอกค่า is_has_saving จาก request body
                saving_type: saving.saving_type, // คัดลอกค่า saving_type จาก request body
                amount: saving.amount, // คัดลอกค่า amount จาก request body
            };
            return savingService.create(savingObj, { transaction });
            // เรียกใช้ service เพื่อสร้าง Saving ใหม่แต่ละรายการพร้อมกับใช้ transaction เพื่อความปลอดภัย
        });

        // รอจนทุก saving ถูกสร้างสำเร็จ (รอให้ทุก promise สำเร็จ)
        const savings = await Promise.all(savingsPromises);
        // ใช้ Promise.all เพื่อให้แน่ใจว่าทุกรายการ Saving ถูก insert สำเร็จทั้งหมด


        // // Loop ผ่าน investments array เพื่อสร้างแต่ละ investment
        // const investmentsPromises = value.investments.map(investment => {
        //     const investmentObj = {
        //         finan_capital_id: financialCapital.id, // ใช้ id ของ financialCapital ที่เพิ่งสร้าง
        //         investment_type: investment.investment_type,
        //         amount: investment.amount,
        //     };
        //     return investmentService.create(investmentObj, { transaction });
        // });
        // const investments = await Promise.all(investmentsPromises);
        

        // Commit transaction ถ้าขั้นตอนทั้งหมดผ่านไปได้ด้วยดี
        await transaction.commit();
        // commit จะยืนยันการบันทึกข้อมูลลงในฐานข้อมูล

        res.send({
            data: { financialCapital, savings}, // ส่งข้อมูลของ FinancialCapital และ Savings กลับไปที่ client
            msg: "success", // แจ้งว่าสำเร็จ
            status: 200, // สถานะ HTTP 200 หมายถึงการทำงานสำเร็จ
            err: '' // ไม่มี error
        });
    } catch (err) { // ถ้ามี error เกิดขึ้นในกระบวนการใด ๆ
        // Rollback transaction เพื่อยกเลิกการบันทึกทั้งหมด
        await transaction.rollback(); // rollback จะยกเลิกการเปลี่ยนแปลงในฐานข้อมูลทั้งหมด

        res.send({
            data: null, // ไม่มีข้อมูลที่จะส่งกลับเพราะเกิด error
            msg: "error", // แจ้งว่าเกิดข้อผิดพลาด
            status: 500, // สถานะ HTTP 500 หมายถึงมีข้อผิดพลาดที่ฝั่งเซิร์ฟเวอร์
            err: err // ส่งรายละเอียดของ error กลับไปที่ client
        });
    }
};


// ฟังก์ชันสำหรับการอัปเดต FinancialCapital พร้อมกับ Savings หลายรายการ
const updateFinancialCapitalWithSavings = async (req, res) => {
    const id = req.params.id;

    // Validate request body ข้อมูลที่ถูกส่งมาจะถูกตรวจสอบตาม schema ที่ได้กำหนดไว้ด้านบน
    const { error, value } = UpdateWithSchema.validate(req.body);

    if (error) { // ถ้ามี error ในการ validate ให้ส่ง error response กลับไปที่ client
        return res.status(400).send({
            msg: "Validation error", // แจ้งว่าเกิด validation error
            error: error.details // รายละเอียดของ error
        });
    }

    // Start transaction เพื่อให้มั่นใจว่าการอัปเดตทั้งสองส่วนจะถูกต้อง
    const transaction = await sequelize.transaction();
    try {
        // อัปเดต FinancialCapital ก่อน ถ้ามีการส่ง formId มา
        const financialcapitalObj = {
            formId: value.formId
        };

        if (value.formId) { // เช็คว่ามี formId ที่จะอัปเดตหรือไม่
            await financialcapitalService.update(financialcapitalObj, id, { transaction });
        }

        // Loop ผ่าน savings array เพื่ออัปเดตแต่ละ saving ที่เกี่ยวข้องกับ FinancialCapital
        const savingsPromises = value.savings.map(saving => {
            const savingObj = {
                is_has_saving: saving.is_has_saving, // คัดลอกค่า is_has_saving จาก request body
                saving_type: saving.saving_type, // คัดลอกค่า saving_type จาก request body
                amount: saving.amount, // คัดลอกค่า amount จาก request body
            };
            return savingService.update(savingObj, saving.id, { transaction });
            // เรียกใช้ service เพื่ออัปเดต Saving ที่มี id ตรงกับที่ส่งมา
        });

        // รอจนทุก saving ถูกอัปเดตสำเร็จ
        await Promise.all(savingsPromises);

        // Commit transaction ถ้าทุกขั้นตอนสำเร็จ
        await transaction.commit();

        res.send({
            msg: "Update success", // แจ้งว่าสำเร็จ
            status: 200, // สถานะ HTTP 200 หมายถึงการทำงานสำเร็จ
            err: '' // ไม่มี error
        });
    } catch (err) { // ถ้ามี error เกิดขึ้นในกระบวนการใด ๆ
        // Rollback transaction เพื่อยกเลิกการอัปเดตทั้งหมด
        await transaction.rollback();

        res.send({
            msg: "error", // แจ้งว่าเกิดข้อผิดพลาด
            status: 500, // สถานะ HTTP 500 หมายถึงมีข้อผิดพลาดที่ฝั่งเซิร์ฟเวอร์
            err: err // ส่งรายละเอียดของ error กลับไปที่ client
        });
    }
};

module.exports = {
    FinancialCapitalList,
    findOneFinancialCapital,
    createFinancialCapital,
    updateFinancialCapital,
    deleteFinancialCapital,
    createFinancialCapitalWithSavings,
    updateFinancialCapitalWithSavings,
};
