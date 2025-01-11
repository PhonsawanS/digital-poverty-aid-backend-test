const db = require('../models')
const member_finan_model = db.MemberFinancial
const { createSchema,updateSchema } = require('../validators/MemberFinancial/member.financial.validator')


const list = async(req,res)=>{
    try{
        const results = await member_finan_model.findAll()
        return res.status(200).send({message:'success', results})

    }catch(errors){
        return res.status(500).send({message:'Sever errors', errors: errors.message})
    }
}

const create = async(req,res)=>{
    try{
        const {error , value} =  createSchema.validate(req.body)

        if(error){
            return res.status(400).send({message:'validation erro',error:error.details})
        }

        const result = await member_finan_model.create({
            agv_income: value.agv_income,
            inflation: value.inflation,
            member_house_id: value.member_house_id,
        })

        return res.status(200).send({message:'success',result:result})

    }catch(errors){
        return res.status(500).send({message:'Sever error',errors:errors.message})
    }
}

module.exports = {
    create,
    list
}