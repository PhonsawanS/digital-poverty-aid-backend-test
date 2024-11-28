const informantService = require('../services/Informant.service')
const Joi = require('joi');

//Create Validators
const CreateInformantSchema = Joi.object({
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    national_id: Joi.string().length(13).required(), 
    phone: Joi.string().pattern(/^\d{10}$/).required(),
    fam_total_member: Joi.number().integer().required(),  
    fam_total_live: Joi.number().integer().required(),    
    total_has_name_not_live: Joi.number().integer().required(),
    live_but_has_no_name_in_fam: Joi.number().integer().required(),
    form_id: Joi.number().integer().optional()
});


//Update Validators
const UpdateInformantSchema = Joi.object({
    title: Joi.string().optional(),
    fname: Joi.string().optional(),
    lname: Joi.string().optional(),
    national_id: Joi.string().length(13).optional(), 
    phone: Joi.string().pattern(/^\d{10}$/).optional(),
    fam_total_member: Joi.number().integer().optional(),  
    fam_total_live: Joi.number().integer().optional(),    
    total_has_name_not_live: Joi.number().integer().optional(),
    live_but_has_no_name_in_fam: Joi.number().integer().optional(),
    form_id: Joi.number().integer().optional()
});



const informantList = async (req, res) => {
    await informantService.getInformant()
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
const findOneinformant = async (req, res) => {
    await informantService.findOneById(req.params.id)
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

const createinformant = async (req, res) => {

     // Validate request body
 const { error, value } = CreateInformantSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const informantObj ={
        title: value.title,
        fname: value.fname,
        lname: value.lname,
        national_id: value.national_id,
        phone: value.phone,
        fam_total_member: value.fam_total_member,
        fam_total_live: value.fam_total_live,
        total_live_fam: value.total_live_fam,
        total_has_name_not_live: value.total_has_name_not_live,
        live_but_has_no_name_in_fam: value.live_but_has_no_name_in_fam,
        form_id: value.form_id
    };
    await informantService.create(informantObj)
    .then(data => {
        res.send({
            data: data,
            msg:"success",
            status: 200,
            err:''
        })
    })
    .catch(err => {
        res.send({
            data:null,
            msg:"error",
            status:500,
            err:err
        });
    });
}


const updateinformant  = async (req, res) => {

    const id = req.params.id

    // Validate request body
    const { error, value } = UpdateInformantSchema.validate(req.body);

 if (error) {
     return res.status(400).send({
         msg: "Validation error",
         error: error.details
     });
 }
    const informantObj ={
        title: value.title,
        fname: value.fname,
        lname: value.lname,
        national_id: value.national_id,
        phone: value.phone,
        fam_total_member: value.fam_total_member,
        fam_total_live: value.fam_total_live,
        total_live_fam: value.total_live_fam,
        total_has_name_not_live: value.total_has_name_not_live,
        live_but_has_no_name_in_fam: value.live_but_has_no_name_in_fam,
        form_id: value.form_id
    };
    await informantService.update(informantObj,id)
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


const deleteinformant= async (req, res) => {
    await informantService.deleted(req.params.id)
    .then(data => {
        res.send({
            data:data,
            msg:"success",
            status: 200,
            err: ''
        })
    })
    .catch(err =>{
        res.send({
            data: null,
            msg: "error",
            status: 500,
            err: err
        })
    })
}

module.exports = {
    informantList,
    findOneinformant,
    createinformant,
    updateinformant,
    deleteinformant
};

