const { where } = require("sequelize");
const db = require("../models");
const houseindisasterareas_model = db.HouseInDisasterAreas;
const naturalresourcecapital_model = db.Naturalresourcecapital;


exports.get = () => {
    try {
        return houseindisasterareas_model.findAll({ include: naturalresourcecapital_model });
    } catch (err) {
        return err;
    }
};



exports.findOneById = async (id) => {
    return houseindisasterareas_model.findOne({
        where: { id: id },
        include: naturalresourcecapital_model
    });
};

exports.create = async (houseindisasterareasObj) => {
    try {
        return await houseindisasterareas_model.create(houseindisasterareasObj);
    } catch (err) {
        return err;
    }
}

exports.update = async (houseindisasterareasObj, id) => {
    return await houseindisasterareas_model
        .update(houseindisasterareasObj, {
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
    await houseindisasterareas_model
        .destroy({
            where: { id: id },
        })
        .then((data) => {
            return data;
        })
        .catch((err) => {
            return err;
        })
};