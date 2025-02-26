const capitalService = require('../services/capital.service');

const getCapital = async (req, res) => {
    try {
        const capitalData = await capitalService.getCaptial();
        res.status(200).json(capitalData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// ฟังก์ชันสำหรับดึงปี พ.ศ. จากทุก model

module.exports = {
    getCapital,
}