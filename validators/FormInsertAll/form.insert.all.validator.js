const Joi = require("joi");

//จัดการวันที่
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

// ติดตั้ง plugin
dayjs.extend(utc);
dayjs.extend(timezone);

const formSchema = Joi.object({
  time_rec: Joi.date().required(),
  recder_title: Joi.string().required(),
  recder_fname: Joi.string().required(),
  recder_lname: Joi.string().required(),
  recder_phone: Joi.string().required(),

  //Household table
  Household: Joi.object({
    house_code: Joi.string().required(),
    host_title: Joi.string().required(),
    host_fname: Joi.string().required(),
    host_lname: Joi.string().required(),
    host_national_id: Joi.string().length(13).required(), // 13 characters validation
    has_greenBook: Joi.boolean().required(),
    green_book_id: Joi.string().allow("").optional(),
    postcode: Joi.string().required(),
    subdistrict: Joi.string().required(),
    district: Joi.string().required(),
    province: Joi.string().required(),
    house_number: Joi.string().required(),
    village: Joi.string().allow("").optional(),
    alley: Joi.string().allow("").optional(),
    road: Joi.string().allow("").optional(),
    form_id: Joi.number().optional(),
  }),

  //Teamservey table
  TeamServey: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      agency: Joi.string().required(),
      phone: Joi.string().length(10).required(),
      form_id: Joi.number().integer().optional(),
    })
  ),

  //Informant
  Informant: Joi.object({
    title: Joi.string().required(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    national_id: Joi.string().allow("").optional(),
    phone: Joi.string()
      .pattern(/^\d{10}$/)
      .required(),
    fam_total_member: Joi.number().integer().required(),
    fam_total_live: Joi.number().integer().required(),
    total_has_name_not_live: Joi.number().integer().required(),
    live_but_has_no_name_in_fam: Joi.number().integer().required(),
    form_id: Joi.number().integer().optional(),
  }),

  //MemberHousehold
  MemberHousehold: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      fname: Joi.string().required(),
      lname: Joi.string().required(),
      sex: Joi.string().required(),
      national_id: Joi.alternatives().try(
        Joi.string().valid("-"),
        Joi.string()
          .length(13)
          .regex(/^\d{13}$/) //เอาเฉพาะตัวเลข
      ),
      phone: Joi.string().required(),
      age_yaer: Joi.number().integer().min(0).required(),
      age_month: Joi.number().integer().min(0).required(),
      birthdate: Joi.date().required(),
      status_in_house: Joi.string().required(),
      health: Joi.string().required(),

      SocialWelfare: Joi.array().items(
        Joi.object({
          welfare: Joi.string().optional(),
          amount: Joi.number().optional(),
          frequency: Joi.string().optional(),
          member_house_id: Joi.number().integer().optional(),
        })
      ),

      Career: Joi.array().items(
        Joi.object({
          career_type: Joi.string().required(),
        })
      ),

      MemberFinancial: Joi.object({
        agv_income: Joi.number().required(),
        avg_expenses: Joi.number().required(),
        inflation: Joi.number().required(),
        member_house_id: Joi.number().integer().optional(),
      }),

      work_can_made_income: Joi.array().items(Joi.string()).required(),
      max_education: Joi.string().required(),
      current_edu_level: Joi.string().optional(),
      edu_status: Joi.string().required(),
      edu_description: Joi.string().allow("").optional(),
      work_status: Joi.string().required(),
      can_write_TH: Joi.string().required(),
      can_read_TH: Joi.string().required(),
      can_speak_TH: Joi.string().required(),
      is_leader: Joi.boolean().optional(),
      still_poor: Joi.boolean().optional(),
      houseId: Joi.number().integer().optional(), //HouseHold
      form_id: Joi.number().integer().optional(), //Form
    })
  ),

  PhysicalCapital: Joi.object({
    lat: Joi.number().allow(null).optional(),
    lon: Joi.number().allow(null).optional(),
    is_has_house: Joi.string().required(),
    house_rent: Joi.number().optional(),
    house_status_law: Joi.string().allow("").optional(),
    house_status: Joi.string().required(),
    electricity_status: Joi.string().required(),
    alternative_energy: Joi.string().allow("").optional(),
    has_home_phone: Joi.boolean().required(),
    phone: Joi.string().allow("").optional(),
    water_for_agriculture: Joi.string().allow("").optional(),
    house_access_road: Joi.string().allow("").optional(),
    workplace_access_road: Joi.string().allow("").optional(),
    use_tech_get_benefit_gov: Joi.boolean().optional(),
    benefit_form_tech: Joi.boolean().optional(),
    news: Joi.array().required(),
    agricultural_land: Joi.array().required(),
    land_use_issuse: Joi.array().required(),
    form_id: Joi.number().integer().optional(),

    HouseHygiene: Joi.object({
      item_storage: Joi.string().required(),
      drainage_system: Joi.string().required(),
      toilet: Joi.string().required(),
      garbage: Joi.string().required(),
      phy_capital_id: Joi.number().optional(),
    }),

    UtilityWater: Joi.object({
      plumbing_water: Joi.string().required(),
      water_other_sources: Joi.string().required(),
      water_purchase: Joi.boolean().required(),
      phy_capital_id: Joi.number().optional(),
    }),

    UrbanArea: Joi.object({
      is_use_area_to_work: Joi.string().required(),
      has_prolem_in_area: Joi.string().required(),
      phy_capital_id: Joi.number().optional(),
    }),
  }),

  Financialcapital: Joi.object({
    formId: Joi.number().optional(),

    Agriculturalincome: Joi.array().items(
      Joi.object({
        plants: Joi.array().items(Joi.string()).required(),
        livestock: Joi.array().items(Joi.string()).required(),
        fishing: Joi.array().items(Joi.string()).required(),
        finan_capital_id: Joi.number().optional(),
      })
    ),
    Householdexpenses: Joi.array().items(
      Joi.object({
        expenses_type: Joi.string().required(),
        amount_per_month: Joi.number().required(),
        finan_capital_id: Joi.number().optional(),
      })
    ),
    NonAGIincome: Joi.array().items(
      Joi.object({
        income_type: Joi.string().required(),
        amount_per_year: Joi.number().optional(),
        cost_per_year: Joi.number().optional(),
        finan_capital_id: Joi.number().optional(),
      })
    ),
    Saving: Joi.array().items(
      Joi.object({
        is_has_saving: Joi.boolean().required(),
        saving_type: Joi.string().allow("").optional(),
        amount: Joi.number().optional(),
        finan_capital_id: Joi.number().optional(),
      })
    ),

    Debt: Joi.array().items(
      Joi.object({
        is_has_debt: Joi.boolean().required(),
        description: Joi.string().allow("").optional(),
        finan_capital_id: Joi.number().optional(),
      })
    ),

    Creditsources: Joi.array()
      .items(
        Joi.object({
          form: Joi.string().required(),
          outstanding_amount: Joi.number().required(),
          debt_id: Joi.number().optional(),
        })
      )
      .optional(),

    Occupationalproperty: Joi.array().items(
      Joi.object({
        is_has_property: Joi.boolean().required(),
        property_type: Joi.array().items(Joi.string()).optional(),
        finan_capital_id: Joi.number().optional(),
      })
    ),
  }),

  Naturalcapital: Joi.object({
    formId: Joi.number().optional(),

    PBresourceforincome: Joi.array().items(
      Joi.object({
        is_use_PB_resoc: Joi.boolean().required(),
        rescource: Joi.string().allow("").optional(),
        distanceKM: Joi.number().optional(),
        description: Joi.string().allow("").optional(),
        national_res_id: Joi.number().optional(),
      })
    ),

    PBresourceforlive: Joi.array().items(
      Joi.object({
        is_use_PB_resoc: Joi.boolean().required(),
        rescource: Joi.string().allow("").optional(),
        distanceKM: Joi.number().optional(),
        description: Joi.string().allow("").optional(),
        national_res_id: Joi.number().optional(),
      })
    ),

    Farmlandindisasterareas: Joi.array().items(
      Joi.object({
        is_in_disaster: Joi.boolean().required(),
        disaster_type: Joi.string().allow("").optional(),
        frequncy_disaster: Joi.string().allow("").optional(),
        disaster_response: Joi.string().allow("").optional(),
        national_res_id: Joi.number().optional(),
      })
    ),

    HouseInDisasterAreas: Joi.array().items(
      Joi.object({
        is_in_disaster: Joi.boolean().required(),
        disaster_type: Joi.string().allow("").optional(),
        frequncy_disaster: Joi.string().allow("").optional(),
        disaster_response: Joi.string().allow("").optional(),
        national_res_id: Joi.number().optional(),
      })
    ),
  }),

  Socialcapital: Joi.object({
    Activitygrouptype: Joi.array().items(
      Joi.object({
        activity_group: Joi.string().allow("").optional(),
        is_member: Joi.boolean().optional(),
        dependency: Joi.string().allow("").optional(),
        social_cap_id: Joi.number().optional(),
      })
    ),

    Activitytype: Joi.array().items(
      Joi.object({
        activity: Joi.string().allow("").optional(),
        participation_level: Joi.string().allow("").optional(),
        frequncy: Joi.string().allow("").optional(),
        social_cap_id: Joi.number().optional(),
      })
    ),
  }),

  UnrestIn3Southern: Joi.object({
    effect: Joi.string().required(),
    urgent_to_do: Joi.string().required(),
    effect_in_life: Joi.array().items(Joi.string().required()),
    effect_in_work: Joi.array().items(Joi.string().required()),
    form_id: Joi.number().optional(),
  }),

  Suggestion: Joi.object({
    suggest_informer: Joi.string().allow("").optional(),
    suggest_surway_team: Joi.string().allow("").optional(),
    resource: Joi.array().items(Joi.string().allow("").optional()).optional(),
    form_id: Joi.number().optional(),
  }),
});

module.exports = { formSchema };
