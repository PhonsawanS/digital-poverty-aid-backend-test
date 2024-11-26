const { where } = require("sequelize");
const db = require("../models");
const farmlandindisasterareas_model = db.Farmlandindisasterareas;
const naturalresourcecapital_model = db.Naturalresourcecapital;


exports.get = () => {
    try {
        return farmlandindisasterareas_model.findAll({ include: naturalresourcecapital_model });
    } catch (err) {
        return err;
    }
};



exports.findOneById = async (id) => {
    return farmlandindisasterareas_model.findOne({
        where: { id: id },
        include: naturalresourcecapital_model
    });
};

exports.create = async (farmlandindisasterareasObj) => {
    try {
        return await farmlandindisasterareas_model.create(farmlandindisasterareasObj);
    } catch (err) {
        return err;
    }
}

exports.update = async (farmlandindisasterareasObj, id) => {
    return await farmlandindisasterareas_model
        .update(farmlandindisasterareasObj, {
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
    await farmlandindisasterareas_model
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