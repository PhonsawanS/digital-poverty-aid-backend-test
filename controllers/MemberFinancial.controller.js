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

        const user_id = req.user.id

        const result = await member_finan_model.create({
            agv_income: value.agv_income,
            avg_expenses: value.avg_expenses,
            inflation: value.inflation,
            member_house_id: value.member_house_id,
            editBy:user_id
        })

        return res.status(200).send({message:'success',result:result})

    }catch(errors){
        return res.status(500).send({message:'Sever error',errors:errors.message})
    }
}

const getLastFinancial = async(req,res)=>{
    try{
        const { id } = req.params
        const result = await member_finan_model.findOne({
            where:{ member_house_id:id },
            order:[['createdAt','DESC']]
        })

        if(!result){
            return res.status(400).send({message:'ไม่พบข้อมูล'})
        }
        return res.status(200).send({message:'success',result:result})

    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}

module.exports = {
    create,
    list,
    getLastFinancial
}