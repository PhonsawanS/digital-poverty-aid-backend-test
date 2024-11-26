const { where } = require("sequelize");
const db = require("../models");
const naturalresourcecapital_model = db.Naturalresourcecapital;
const form_model = db.Form;


exports.get = () => {
    try {
        return naturalresourcecapital_model.findAll({ include: form_model });
    } catch (err) {
        return err;
    }
};

exports.findOneById = async (id) => {
    return naturalresourcecapital_model.findOne({
        where: { id: id },
        include: form_model
    });
};

exports.create = async (NaturalresourcecapitalObj) => {
    try {
        return await naturalresourcecapital_model.create(NaturalresourcecapitalObj);
    } catch (err) {
        return err;
    }
}

exports.update = async (NaturalresourcecapitalObj, id) => {
    return await naturalresourcecapital_model
        .update(NaturalresourcecapitalObj, {
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
    await naturalresourcecapital_model
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