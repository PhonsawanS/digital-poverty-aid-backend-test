const districtService = require("../services/district.service");

// ฟังก์ชันใน Controller สำหรับดึงข้อมูลจาก API
exports.fetchDistrictData = async (req, res) => {
    try {
        // เรียกใช้งานฟังก์ชันใน service
        await districtService.FetchData();

        // ตอบกลับเมื่อบันทึกข้อมูลสำเร็จ
        res.status(200).json({
            message: "Data fetched and saved successfully from API",
        });
    } catch (error) {
        // ส่ง error response หากมีปัญหา
        res.status(500).json({
            message: "Failed to fetch and save data from API",
            error: error.message,
        });
    }
};

exports.getDistrictData = async (req, res) => {
    try {
        // เรียกใช้งานฟังก์ชันใน service
        const data = await districtService.getData();

        // ตอบกลับเมื่อดึงข้อมูลสำเร็จ
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        // ส่ง error response หากมีปัญหา
        res.status(500).json({
            message: "Failed to fetch data",
            error: error.message,
        });
    }
}

exports.fetchDataFromApi = async (req, res) => {
    try {
        const { apiUrl } = req.body; // รับ URL API จาก req.body

        //ตรวจสอบว่ามีการส่ง `apiUrl` หรือไม่
        if (!apiUrl) {
            return res.status(400).json({ message: "API URL is required" });
        }

        // 3. เรียกใช้งานฟังก์ชัน fetchAndStoreData เพื่อดึงข้อมูลจาก API และบันทึกลงฐานข้อมูล
        const result = await districtService.fetchAndStoreData(apiUrl);

        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message, error: result.error });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch and save data",
            error: error.message,
        });
    }
};

exports.getDatalatest = async (req, res) => {
    try {
        // เรียกใช้งานฟังก์ชันใน service
        const data = await districtService.getDatalatest();

        // ตอบกลับเมื่อดึงข้อมูลสำเร็จ
        res.status(200).json({
            data: data,
        });
    } catch (error) {
        // ส่ง error response หากมีปัญหา
        res.status(500).json({
            message: "Failed to fetch data",
            error: error.message,
        });
    }
}