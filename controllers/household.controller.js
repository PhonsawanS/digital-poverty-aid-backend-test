const householdService = require('../services/household.services')
const Joi = require('joi');

//Create Validators
const CreateHouseholdSchema = Joi.object({
    house_code: Joi.string().required(),
    host_title: Joi.string().required(),
    host_fname: Joi.string().required(),
    host_lname: Joi.string().required(),
    host_national_id: Joi.string().length(13).required(), // 13 characters validation
    green_book_id: Joi.string().optional(),
    postcode: Joi.string().required(),
    subdistrict: Joi.string().required(),
    district: Joi.string().required(),
    province: Joi.string().required(),
    house_number: Joi.string().required(),
    village: Joi.string().optional(),
    alley: Joi.string().optional(),
    road: Joi.string().optional(),
    total_house_member: Joi.number().integer().required(),
    total_house_activity: Joi.number().integer().required()
});

//Update Validators
const UpdateHouseholdSchema = Joi.object({
    house_code: Joi.string().optional(),
    host_title: Joi.string().optional(),
    host_fname: Joi.string().optional(),
    host_lname: Joi.string().optional(),
    host_national_id: Joi.string().length(13).optional(), // 13 characters validation
    green_book_id: Joi.string().optional(),
    postcode: Joi.string().optional(),
    subdistrict: Joi.string().optional(),
    district: Joi.string().optional(),
    province: Joi.string().optional(),
    house_number: Joi.string().optional(),
    village: Joi.string().optional(),
    alley: Joi.string().optional(),
    road: Joi.string().optional(),
    total_house_member: Joi.number().integer().optional(),
    total_house_activity: Joi.number().integer().optional()
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
     green_book_id: value.green_book_id,
     postcode: value.postcode,
     subdistrict: value.subdistrict,
     district: value.district,
     province: value.province,
     house_number: value.house_number,
     village: value.village,
     alley: value.alley,
     road: value.road,
     total_house_member: value.total_house_member,
     total_house_activity: value.total_house_activity
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
     green_book_id: value.green_book_id,
     postcode: value.postcode,
     subdistrict: value.subdistrict,
     district: value.district,
     province: value.province,
     house_number: value.house_number,
     village: value.village,
     alley: value.alley,
     road: value.road,
     total_house_member: value.total_house_member,
     total_house_activity: value.total_house_activity
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


module.exports = {
    houseList,
    findOneHouse,
    create,
    updateHouse,
    deleteHouse
};