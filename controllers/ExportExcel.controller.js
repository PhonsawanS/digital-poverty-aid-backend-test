const ExportService = require('../services/ExportExcel.service')


const householdList = async (req, res) => {
    await ExportService.householdList()
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

const gethousehold = async (req, res) => {
    try {
      const data = await ExportService.gethousehold();
      res.status(200).json({
        data: data,
        msg: "success",
        status: 200,
      });
    } catch (err) {
      res.status(500).json({
        data: null,
        msg: "error",
        status: 500,
        err: err.message,
      });
    }
  };
  

module.exports = {
    householdList,
    gethousehold,
};
