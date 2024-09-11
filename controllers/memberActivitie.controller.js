const memberactivityService = require('../services/memberActivitie.service')

const memberactivityList = async (req, res) => {
    await memberactivityService.getMemberActivity()
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

const findOneMemberactivity = async (req, res) => {
    await memberactivityService.findOneById(req.params.id)
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


const createMemberactivity = async (req, res) => {
    const memberactivityObj ={
        activity_name: req.body.activity_name,
        activity_type: req.body.activity_type,
        achievement: req.body.achievement,
        start_date: req.body.start_date,
        operator: req.body.operator,
        is_poor_households_TPMAP: req.body.is_poor_households_TPMAP
    };
    await memberactivityService.create(memberactivityObj)
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

const updateMemberactivity = async (req, res) => {
    const memberactivityObj ={
        activity_name: req.body.activity_name,
        activity_type: req.body.activity_type,
        achievement: req.body.achievement,
        start_date: req.body.start_date,
        operator: req.body.operator,
        is_poor_households_TPMAP: req.body.is_poor_households_TPMAP
    };
    await memberactivityService.update(memberactivityObj,req.params.id)
    .then(data => {
        res.send({
            data: data,
            msg: "Update success",
            status: 200,
            err: '',
            log:req.body.activity_name
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



const deleteMemberactivity = async (req, res) => {
    await memberactivityService.deleted(req.params.id)
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
    memberactivityList,
    findOneMemberactivity,
    createMemberactivity,
    deleteMemberactivity,
    updateMemberactivity
};


