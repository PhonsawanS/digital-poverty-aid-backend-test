const householdService = require('../services/household.services')
const db = require('../models')
const household_model = db.Household
const { Op } = require("sequelize");
const Joi = require('joi');

//Create Validators
const CreateHouseholdSchema = Joi.object({
    house_code: Joi.string().required(),
    host_title: Joi.string().required(),
    host_fname: Joi.string().required(),
    host_lname: Joi.string().required(),
    host_national_id: Joi.string().length(13).required(), // 13 characters validation
    has_greenBook: Joi.boolean().required(),
    green_book_id: Joi.string().optional(),
    postcode: Joi.string().required(),
    subdistrict: Joi.string().required(),
    district: Joi.string().required(),
    province: Joi.string().required(),
    house_number: Joi.string().required(),
    village: Joi.string().optional(),
    alley: Joi.string().optional(),
    road: Joi.string().optional(),
    form_id: Joi.number().optional()
});

//Update Validators
const UpdateHouseholdSchema = Joi.object({
    house_code: Joi.string().optional(),
    host_title: Joi.string().optional(),
    host_fname: Joi.string().optional(),
    host_lname: Joi.string().optional(),
    host_national_id: Joi.string()
        .pattern(/^\d{13}$/) // Validate as a 13-digit number
        .messages({
            "string.pattern.base": "หมายเลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก",
        })
        .optional(),
    has_greenBook: Joi.boolean().optional(),
    green_book_id: Joi.string()
        .pattern(/^\d{12}$/) // Validate as a 12-digit number
        .when('has_greenBook', {
            is: true,
            then: Joi.required().messages({
                "any.required": "กรุณากรอกหมายเลขสมุดเกษตรเมื่อเลือกมีสมุดเกษตร",
                "string.pattern.base": "หมายเลขสมุดเกษตรต้องเป็นตัวเลข 12 หลัก",
            }),
            otherwise: Joi.allow("").optional()
        }),
    postcode: Joi.number().integer().optional(),
    subdistrict: Joi.string().optional(),
    district: Joi.string().optional(),
    province: Joi.string().optional(),
    house_number: Joi.string().optional(),
    village: Joi.string().optional(),
    alley: Joi.string().optional(),
    road: Joi.string().optional(),
    form_id: Joi.number().optional()
});

const List = async (req, res) => {
    try {
        const data = await householdService.getCapital();

        return res.status(200).json({
            data: data,
            msg: "success",
            status: 200
        });
    } catch (err) {
        console.error("Error in List controller:", err);
        return res.status(500).json({
            data: null,
            msg: "error",
            status: 500,
            error: err.message
        });
    }
};


const houseList = async (req, res) => {
    await householdService.getHouse()
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
const findOneHouse = async (req, res) => {
    await householdService.findOneById(req.params.id)
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

const create = async (req, res) => {
    // Validate request body
    const { error, value } = CreateHouseholdSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }
    const houseObj = {
        house_code: value.house_code,
        host_title: value.host_title,
        host_fname: value.host_fname,
        host_lname: value.host_lname,
        host_national_id: value.host_national_id,
        has_greenBook: value.has_greenBook,
        green_book_id: value.green_book_id,
        postcode: value.postcode,
        subdistrict: value.subdistrict,
        district: value.district,
        province: value.province,
        house_number: value.house_number,
        village: value.village,
        alley: value.alley,
        road: value.road,
        form_id: value.form_id,
    };
    await householdService.create(houseObj)
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

const updateHouse = async (req, res) => {
    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateHouseholdSchema.validate(req.body);

    if (error) {
        return res.status(400).send({
            msg: "Validation error",
            error: error.details
        });
    }

    const houseObj = {
        house_code: value.house_code,
        host_title: value.host_title,
        host_fname: value.host_fname,
        host_lname: value.host_lname,
        host_national_id: value.host_national_id,
        has_greenBook: value.has_greenBook,
        green_book_id: value.green_book_id,
        postcode: value.postcode,
        subdistrict: value.subdistrict,
        district: value.district,
        province: value.province,
        house_number: value.house_number,
        village: value.village,
        alley: value.alley,
        road: value.road,
        form_id: value.form_id,
    };
    await householdService.update(houseObj, id)
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

const deleteHouse = async (req, res) => {
    await householdService.deleted(req.params.id)
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

// Controller function: ส่งผลลัพธ์การนับจำนวนข้อมูลกลับไปยัง client
const countHouseholds = async (req, res) => {
    // เรียกใช้ฟังก์ชัน countHouseholds() จาก service layer
    await householdService.countHouseholds()
        .then(data => {
            // หากการนับสำเร็จ ส่งผลลัพธ์กลับไปยัง client ในรูป JSON
            res.send({
                count: data,       // จำนวนข้อมูลที่ได้จากการนับ
                msg: "success",    // สถานะข้อความ "success"
                status: 200,       // HTTP status code 200 หมายถึงการทำงานสำเร็จ
                err: ''            // ไม่มีข้อผิดพลาด
            });
        })
        .catch(err => {
            // หากเกิดข้อผิดพลาด ส่งข้อความและ error กลับไปยัง client
            res.send({
                count: null,       // ไม่มีข้อมูลการนับ (null)
                msg: "error",      // สถานะข้อความ "error"
                status: 500,       // HTTP status code 500 หมายถึงเกิดข้อผิดพลาดในเซิร์ฟเวอร์
                err: err           // รายละเอียดข้อผิดพลาด
            });
        });
};

// Controller Layer
const countHouseholdsByDistrict = async (req, res) => {
    try {
        const data = await householdService.countHouseholdsByDistrict();
        res.status(200).json({
            data: data,
            msg: "success",
            status: 200,
            err: ''
        });
    } catch (err) {
        res.status(500).json({
            data: null,
            msg: "error",
            status: 500,
            err: err.message
        });
    }
};

const searchByHouseCode = async (req, res) => {
    try {
        const { search } = req.query;

        let { page = 1, limit = 30 } = req.query
        page = parseInt(page)
        limit = parseInt(limit)
        const offset = (page - 1) * limit;

        if (!search) {
            return res.status(200).send({
                message: 'success',
                currentPage: page,
                totalItems: 0,
                totalPages: 0,
                results: []
            })
        }

        const { count, rows } = await household_model.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        house_code: {
                            [Op.iLike]: `%${search}%`
                        }
                    },
                    {
                        host_fname: {
                            [Op.iLike]: `%${search}%`
                        }
                    }
                ]

            },
            limit,
            offset,
            order: [['house_code', 'ASC']]
        })

        const totalPages = Math.ceil(count / limit);

        return res.status(200).send({
            message: 'success',
            currentPage: page,
            totalPages,
            totalItems: count,
            results: rows
        })

    } catch (error) {
        return res.status(500).send({
            message: 'Sever errors',
            error: error.message
        })
    }
}

const createNonAgiIncome = async (req, res) => {
    const { householdId } = req.params; // Get householdId from the route parameter
    const nonAgiIncomeData = req.body; // Data for NonAGIincome from the request body

    try {
        const result = await householdService.createNonAgiIncome(householdId, nonAgiIncomeData);

        if (result.success) {
            res.status(201).send({
                data: result.data,
                message: result.message,
                status: 201,
            });
        } else {
            res.status(400).send({
                data: null,
                message: result.error,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).send({
            data: null,
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
};

const createHouseholdExpenses = async (req, res) => {
    const { householdId } = req.params; // Get householdId from the route parameter
    const householdExpensesData = req.body; // Data for HouseholdExpenses from the request body

    try {
        const result = await householdService.createHouseholdExpenses(householdId, householdExpensesData);

        if (result.success) {
            res.status(201).send({
                data: result.data,
                message: result.message,
                status: 201,
            });
        } else {
            res.status(400).send({
                data: null,
                message: result.error,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).send({
            data: null,
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
};

const createSaving = async (req, res) => {
    const { householdId } = req.params; // Get householdId from the route parameter
    const savingData = req.body; // Data for Saving from the request body

    try {
        const result = await householdService.createSaving(householdId, savingData);

        if (result.success) {
            res.status(201).send({
                data: result.data,
                message: result.message,
                status: 201,
            });
        } else {
            res.status(400).send({
                data: null,
                message: result.error,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).send({
            data: null,
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
};

const createCreditsource = async (req, res) => {
    const { householdId } = req.params; // Get householdId from the route parameter
    const creditsourceData = req.body; // Data for Creditsource from the request body

    try {
        const result = await householdService.createCreditsource(householdId, creditsourceData);

        if (result.success) {
            res.status(201).send({
                data: result.data,
                message: result.message,
                status: 201,
            });
        } else {
            res.status(400).send({
                data: null,
                message: result.error,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).send({
            data: null,
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
}

const createMember = async (req, res) => {
    const { householdId } = req.params; // Get householdId from the route parameter
    const memberData = req.body; // Data for Member from the request body

    try {
        const result = await householdService.createMember(householdId, memberData);

        if (result.success) {
            res.status(201).send({
                data: result.data,
                message: result.message,
                status: 201,
            });
        } else {
            res.status(400).send({
                data: null,
                message: result.error,
                status: 400,
            });
        }
    } catch (error) {
        res.status(500).send({
            data: null,
            message: "Internal server error",
            status: 500,
            error: error.message,
        });
    }
}

const createPin = async (req, res) => {
    try {
        // Extract householdId from URL parameters
        const { householdId } = req.params;
        const { lat, lon } = req.body; // lat and lon are still received from request body

        if (!lat || !lon) {
            return res.status(400).json({ message: "Latitude (lat) and Longitude (lon) are required" });
        }

        const updatedPhysicalCapital = await householdService.createPin(householdId, lat, lon);

        return res.status(200).json({
            message: "Pin created/updated successfully",
            data: updatedPhysicalCapital
        });
    } catch (error) {
        console.error("Error in createPin controller:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};



module.exports = {
    List,
    houseList,
    findOneHouse,
    create,
    updateHouse,
    deleteHouse,
    countHouseholds,
    countHouseholdsByDistrict,
    searchByHouseCode,
    createNonAgiIncome,
    createHouseholdExpenses,
    createSaving,
    createCreditsource,
    createMember,
    createPin,
};