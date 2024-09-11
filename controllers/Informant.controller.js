const informantService = require('../services/Informant.service')

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
    const informantObj ={
        fname: req.body.fname,
        lname: req.body.lname,
        title: req.body.title,
        national_id: req.body.national_id,
        phone: req.body.phone,
        address: req.body.address,
        number_total_fam: req.body.number_total_fam,
        total_live_fam: req.body.total_live_fam,
        total_not_live_fam: req.body.total_not_live_fam
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
    const informantObj ={
        fname: req.body.fname,
        lname: req.body.lname,
        title: req.body.title,
        national_id: req.body.national_id,
        phone: req.body.phone,
        address: req.body.address,
        number_total_fam: req.body.number_total_fam,
        total_live_fam: req.body.total_live_fam,
        total_not_live_fam: req.body.total_not_live_fam
    };
    await informantService.update(informantObj,req.params.id)
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

