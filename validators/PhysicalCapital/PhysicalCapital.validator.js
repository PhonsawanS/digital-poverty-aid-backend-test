const Joi = require("joi");

const createSchema = Joi.object({
  lat: Joi.number().allow(null).optional(),
  lon: Joi.number().allow(null).optional(),
  is_has_house: Joi.string().required(),
  house_rent: Joi.number().optional(),
  house_status_law: Joi.string().required(),
  house_status: Joi.string().required(),
  electricity_status: Joi.string().required(),
  alternative_energy: Joi.boolean().required(),
  has_home_phone: Joi.boolean().required(),
  phone: Joi.string().required(),
  water_for_agriculture: Joi.string().required(),
  house_access_road: Joi.string().required(),
  workplace_access_road: Joi.string().required(),
  use_tech_get_benrfit_gov: Joi.boolean().required(),
  benefit_form_tech: Joi.boolean().required(),
  news: Joi.array().items(Joi.string()).required(),
  agricultural_land: Joi.array().items(Joi.string()).required(),
  land_use_issuse: Joi.array().items(Joi.string()).required(),
  formId: Joi.number().integer().optional(),
  houseId: Joi.number().integer().optional(),
}).options({ stripUnknown: true }); // นอกเหนือจากที่กำหนดจะกรองออกหมด

const updateSchema = Joi.object({
  lat: Joi.number().allow(null).optional(),
  lon: Joi.number().allow(null).optional(),
  is_has_house: Joi.string().optional(),
  house_rent: Joi.number().optional(),
  house_status_law: Joi.string().optional(),
  house_status: Joi.string().optional(),
  electricity_status: Joi.string().optional(),
  alternative_energy: Joi.boolean().optional(),
  has_home_phone: Joi.boolean().optional(),
  phone: Joi.string().optional(),
  water_for_agriculture: Joi.string().optional(),
  house_access_road: Joi.string().optional(),
  workplace_access_road: Joi.string().optional(),
  use_tech_get_benrfit_gov: Joi.boolean().optional(),
  benefit_form_tech: Joi.boolean().optional(),
  news: Joi.array().items(Joi.string()).optional(),
  agricultural_land: Joi.array().items(Joi.string()).optional(),
  land_use_issuse: Joi.array().items(Joi.string()).optional(),
  formId: Joi.number().integer().optional(),
  houseId: Joi.number().integer().optional(),
}).options({ stripUnknown: true });

//สร้างข้อมูล3ตาราง

const combinedSchema = Joi.object({
  //Physical fields
  pin_latitude: Joi.string().optional(),
  pin_longitude: Joi.string().optional(),
  is_has_house: Joi.string().required(),
  house_rent: Joi.number().optional(),
  house_status_law: Joi.string().required(),
  house_status: Joi.string().required(),
  electricity_status: Joi.string().required(),
  alternative_energy: Joi.boolean().required(),
  has_home_phone: Joi.boolean().required(),
  phone: Joi.string().required(),
  water_for_agriculture: Joi.string().required(),
  house_access_road: Joi.string().required(),
  workplace_access_road: Joi.string().required(),
  use_tech_get_benrfit_gov: Joi.boolean().required(),
  benefit_form_tech: Joi.boolean().required(),
  news: Joi.array().items(Joi.string()).required(),
  agricultural_land: Joi.array().items(Joi.string()).required(),
  land_use_issuse: Joi.array().items(Joi.string()).required(),
  formId: Joi.number().integer().optional(),

  //HouseHygiene
  HouseHygiene: Joi.object({
    item_storage: Joi.string().required(),
    drainage_system: Joi.string().required(),
    toilet: Joi.string().required(),
    garbage: Joi.string().required(),
  }),

  //Utility water
  UtilityWater: Joi.object({
    plumbing_water: Joi.boolean().required(),
    sufficiency: Joi.string().required(),
    water_purchase: Joi.boolean().required(),
  }),

  //UrbanArea
  UrbanArea: Joi.object({
    is_use_area_to_work: Joi.string().required(),
    has_prolem_in_area: Joi.string().required(),
  }),
}).options({ stripUnknown: true });

module.exports = {
  createSchema,
  updateSchema,
  combinedSchema,
};
