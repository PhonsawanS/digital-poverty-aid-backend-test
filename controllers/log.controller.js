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
// Controller: logController.js
const listLog = async (req, res) => {
    try {
        const userId = req.user.id;
        // อ่าน query parameters สำหรับ pagination
        let { page = 1, limit = "all" } = req.query;
        let options = {};

        // ถ้า limit ไม่ใช่ "all" ให้แปลงเป็นตัวเลขและคำนวณ offset
        if (limit !== "all") {
            limit = parseInt(limit);
            page = parseInt(page);
            options.limit = limit;
            options.offset = (page - 1) * limit;
        }

        const logsData = await log_service.listLog(userId, options);
        return res.status(200).send({
            message: "success",
            result: logsData // ส่งทั้ง total และ logs
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