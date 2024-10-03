const Joi = require('joi');


//Create Validators
const CreatehouseHoldProblemSchema = Joi.object({
    name_problem: Joi.string().required(),
    details_problem: Joi.string().required(),
    indicators: Joi.string().required(),
    type_household:Joi.string().required(),
    survey_data:Joi.date().required(),
    problem_solving:Joi.string().required(),
    details_solving:Joi.string().required(),
    type_problem:Joi.string().required(),
    details_household:Joi.string().required(),
    desire:Joi.string().required(),
    houseId:  Joi.number().integer().optional(),
    teamServeyId: Joi.number().integer().optional()
});


//Update Validators
const UpdatehouseHoldProblemSchema = Joi.object({
    name_problem: Joi.string().required().optional(),
    details_problem: Joi.string().required().optional(),
    indicators: Joi.string().required().optional(),
    type_household:Joi.string().required().optional(),
    survey_data:Joi.date().required().optional(),
    problem_solving:Joi.string().required().optional(),
    details_solving:Joi.string().required().optional(),
    type_problem:Joi.string().required().optional(),
    details_household:Joi.string().required().optional(),
    desire:Joi.string().required().optional(),
    houseId:  Joi.number().integer().optional(),
    teamServeyId: Joi.number().integer().optional()
});

module.exports = {
    CreatehouseHoldProblemSchema,
    UpdatehouseHoldProblemSchema,
};