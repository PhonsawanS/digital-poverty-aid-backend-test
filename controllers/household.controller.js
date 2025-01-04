const householdService = require('../services/household.services')
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
    host_national_id: Joi.string().length(13).optional(), // 13 characters validation
    has_greenBook: Joi.boolean().optional(),
    green_book_id: Joi.string().optional(),
    postcode: Joi.string().optional(),
    subdistrict: Joi.string().optional(),
    district: Joi.string().optional(),
    province: Joi.string().optional(),
    house_number: Joi.string().optional(),
    village: Joi.string().optional(),
    alley: Joi.string().optional(),
    road: Joi.string().optional(),
    form_id: Joi.number().optional()
});


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







module.exports = {
    houseList,
    findOneHouse,
    create,
    updateHouse,
    deleteHouse,
    countHouseholds,
    countHouseholdsByDistrict
};