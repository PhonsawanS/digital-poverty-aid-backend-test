const db = require("../models");
const physicalCapital_model = db.PhysicalCapital;
const form_model = db.Form;

//combind create
const urbanArea_model = db.UrbanArea;
const utilityWater_model = db.UtilityWater;
const houseHygiene_model = db.HouseHygiene;





exports.getCapital = () => {
  try {
    return physicalCapital_model.findAll({include:form_model});
  } catch (err) {
    return err;
  }
};

exports.findOneById = async (id) => {
  return physicalCapital_model.findOne({
    where: { id: id },
    include:form_model
  });
};

exports.create = async (data) => {
  try {
    return await physicalCapital_model.create(data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (data, id) => {

  return await physicalCapital_model
    .update(data, {
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.deleted = async (id) => {
  await physicalCapital_model
    .destroy({
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.createCombined = async (data) => {
  try {
    // เริ่ม transaction
    const result = await db.sequelize.transaction(async (t) => {
      // สร้างข้อมูลใน PhysicalCapital
      const PhysicalCapital = await physicalCapital_model.create(
        {
          pin_latitude: data.pin_latitude,
          pin_longitude: data.pin_longitude,
          is_has_house: data.is_has_house,
          house_rent: data.house_rent,
          house_status_law: data.house_status_law,
          house_status: data.house_status,
          electricity_status: data.electricity_status,
          alternative_energy: data.alternative_energy,
          has_home_phone: data.has_home_phone,
          phone: data.phone,
          water_for_agriculture: data.water_for_agriculture,
          house_access_road: data.house_access_road,
          workplace_access_road: data.workplace_access_road,
          use_tech_get_benrfit_gov: data.use_tech_get_benrfit_gov,
          benefit_form_tech: data.benefit_form_tech,
          news: data.news,
          agricultural_land: data.agricultural_land,
          land_use_issuse: data.land_use_issuse,
          formId: data.formId,
        },
        { transaction: t }
      );

      // สร้างข้อมูลใน HouseHygiene
      const HouseHygiene = await houseHygiene_model.create(
        {
          item_storage: data.HouseHygiene.item_storage,
          drainage_system: data.HouseHygiene.drainage_system,
          toilet: data.HouseHygiene.toilet,
          garbage: data.HouseHygiene.garbage,
          phy_capital_id: PhysicalCapital.id, // เอา id มาจากด้านบนที่สร้างเสร็จแล้ว
        },
        { transaction: t }
      );

      // สร้างข้อมูลใน UtilityWater
      const UtilityWater = await utilityWater_model.create(
        {
          plumbing_water: data.UtilityWater.plumbing_water,
          sufficiency: data.UtilityWater.sufficiency,
          water_purchase: data.UtilityWater.water_purchase,
          phy_capital_id: PhysicalCapital.id,
        },
        { transaction: t }
      );

      const UrbanArea = await urbanArea_model.create(
        {
          is_use_area_to_work: data.UrbanArea.is_use_area_to_work,
          has_prolem_in_area: data.UrbanArea.has_prolem_in_area,
          phy_capital_id: PhysicalCapital.id,
        },
        { transaction: t }
      ); 

      return {
        PhysicalCapital,
        HouseHygiene,
        UtilityWater,
        UrbanArea,
      };
    });

    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

