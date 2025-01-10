const db = require('../models')
const career_model = db.Career
const Joi = require('joi')

//Validator input must be []
createSchema = Joi.array().items(
    Joi.object({
        career_type : Joi.string().required(),
        member_house_id: Joi.number().required()
    })
).min(1).required()


const list = async(req,res)=>{
    try{
        const results = await career_model.findAll()
        return res.status(200).send({message:'success',results:results})
    }catch(errors){
        return res.status(500).send({message:'Sever errors',errors:errors.message})
    }
}

const create = async(req,res)=>{
    try{
        const {error,value} = createSchema.validate(req.body)
        if(error){
            return res.status(400).send({
                message:'Validation error',
                error: error.details
            })
        }

        const result = await career_model.bulkCreate(value)

        return res.status(200).send({message:'success',result})

    }catch(erros){
        return res.status(500).send({message:'Sever errors',erros:erros.message})
    }
}


module.exports = {
    list,
    create
}