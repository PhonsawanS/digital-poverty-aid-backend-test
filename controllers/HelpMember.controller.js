const db = require("../models");
const help_member_model = db.HelpMember
const member_model = db.MemberHousehold

const {createSchema,updateSchema} = require("../validators/HelpMember/HelpMember.validatoe")


const list = async(req,res)=>{
    try{
        const results = await help_member_model.findAll({
            include:{
                model:member_model
            }
        })
        return res.status(200).send({message:'success',results})
    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}

const findOne = async(req,res)=>{
    try{
        const {id} = req.params;

        const result = await help_member_model.findOne({
            where:{
                id
            }
        })

        return res.status(200).send({message:'success',result})

    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}

const create = async(req,res)=>{
    try{
        const {error,value} = createSchema.validate(req.body);

        if(error){
            return res.status(400).send({
                message:'Validation error',
                error: error.details,
            })
        }

        const result = await help_member_model.create(value)
        return res.status(200).send({message:'success',result})

    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}

const deleteHelp = async(req,res)=>{
    try{
        const { id } = req.params;
        
        const result = await help_member_model.destroy({
            where:{
                id:id
            }
        })

        return res.status(200).send({message:'success',result})
        
    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}



module.exports={
    list,
    create,
    deleteHelp,
    findOne
}