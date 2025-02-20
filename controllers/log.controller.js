const log_service = require('../services/log.service')

const getLoglist = async (req, res) => {
    await log_service.getLog()
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}
const listLog = async (req, res) => {
    try {
        const userId = req.user.id;

        const logs = await log_service.listLog(userId);

        return res.status(200).send({
            message: "success",
            result: logs
        });
    } catch (err) {
        return res.status(500).send({
            message: "Server error",
            error: err.message
        });
    }
};
module.exports = {
    getLoglist,
    listLog,
}