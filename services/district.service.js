const db = require("../models");
const axios = require('axios');
const district_model = db.District;

// ฟังก์ชันดึงข้อมูลจาก API และบันทึกลงฐานข้อมูล
const FetchData = async () => {
  try {
    // URL ของ API ที่ต้องการดึงข้อมูล
    const url = 'http://sradss.ppaos.com/sradss/api/01poor.php?API-TOKEN=MzBiZDdhY2EyODY1YWNiZmU0Nzc0OW&&province_id=65&&yearget=all&mode=2';

    // ดึงข้อมูลจาก API
    const response = await axios.get(url); // ✅ รอผลลัพธ์ก่อนทำงานบรรทัดถัดไป
    const data = response.data.data; // ✅ เข้าถึง data ที่อยู่ใน JSON

    // บันทึกข้อมูลลงในฐานข้อมูล
    for (const item of data) {
      await district_model.create({
        // district_id: item.district_id,
        district_name_thai: item.district_name_thai,
        family: item.family,
        poor: item.poor,
      });
    }

    // แสดงข้อมูลที่บันทึกสำเร็จ
    console.log('Data saved successfully from API');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const getData = async () => {
  try {
    const data = await district_model.findAll();
    const totalFamily = data.reduce((sum, item) => sum + item.family, 0);
    const totalPoor = data.reduce((sum, item) => sum + item.poor, 0);
    return {
      data: data,
      totalFamily: totalFamily,
      totalPoor: totalPoor,
      message: "Data fetched successfully"
    }
  } catch (err) {
    return err;
  }
}

// ฟังก์ชันรับ URL จากผู้ใช้แล้วดึงข้อมูลจาก API และบันทึกลงฐานข้อมูล
const fetchAndStoreData = async (apiUrl) => {
  try {
    // ดึงข้อมูลจาก API
    const response = await axios.get(apiUrl);
    const data = response.data.data;

    // ตรวจสอบว่ามีข้อมูลหรือไม่
    if (!data || data.length === 0) {
      console.log("No data found from API.");
      return { success: false, message: "No data found from API" };
    }

    // วนลูปบันทึกข้อมูลลงฐานข้อมูล
    for (const item of data) {
      await district_model.create({
        // district_id: item.district_id,
        district_name_thai: item.district_name_thai,
        family: item.family,
        poor: item.poor,
      });
    }

    console.log("Data saved successfully from API");
    return { success: true, message: "Data saved successfully from API" };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { success: false, message: "Error fetching data", error: error.message };
  }
};

//ข้อมูลล่าสุด นาทีล่าสุด
const getDatalatest = async () => {
  try {
    // ดึงข้อมูลทั้งหมด
    const data = await district_model.findAll();

    if (!data.length) {
      return {
        data: [],
        totalFamily: 0,
        totalPoor: 0,
        message: "No data available"
      };
    }

    // แปลง createdAt ให้เป็นรูปแบบ `YYYY-MM-DD HH:mm` (ตัดวินาทีออก)
    const formatToMinute = (date) => {
      const d = new Date(date);
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    };

    // เรียงข้อมูลตาม createdAt (จากใหม่ไปเก่า)
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // หา `createdAt` ของชุดล่าสุด (แปลงเป็น `YYYY-MM-DD HH:mm`)
    const latestCreatedAt = formatToMinute(sortedData[0]?.createdAt);

    // กรองข้อมูลที่มี `createdAt` ในรูปแบบ `YYYY-MM-DD HH:mm` ตรงกับค่าล่าสุด
    const latestData = sortedData.filter(
      (item) => formatToMinute(item.createdAt) === latestCreatedAt
    );

    // คำนวณ totalFamily และ totalPoor จากข้อมูลชุดล่าสุด
    const totalFamily = latestData.reduce((sum, item) => sum + item.family, 0);
    const totalPoor = latestData.reduce((sum, item) => sum + item.poor, 0);

    return {
      data: latestData,
      totalFamily: totalFamily,
      totalPoor: totalPoor,
      message: "Latest dataset (minute-based) fetched successfully"
    };
  } catch (err) {
    return { message: "Error fetching latest dataset", error: err.message };
  }
};

// ข้อมูลใหม่ล่าสุด 2 วินาทีล่าสุด
const getLatestAddedData = async () => {
  try {
    // ดึงข้อมูลทั้งหมด
    const data = await district_model.findAll();

    if (!data.length) {
      return {
        data: [],
        totalFamily: 0,
        totalPoor: 0,
        message: "No data available"
      };
    }

    // เรียงข้อมูลตาม createdAt จากใหม่ไปเก่า
    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // หา createdAt ใหม่ล่าสุด
    const latestCreatedAt = new Date(sortedData[0]?.createdAt);

    // ตั้งค่า "ช่วงเวลา" ที่ยอมรับ (เช่น ข้อมูลที่เข้ามาในช่วง 2 วินาทีล่าสุด)
    const timeThreshold = 2000; // 2000 มิลลิวินาที = 2 วินาที

    // กรองข้อมูลที่มี createdAt อยู่ในช่วงเวลาที่ใกล้เคียงกัน
    const latestData = sortedData.filter(
      (item) => Math.abs(new Date(item.createdAt) - latestCreatedAt) <= timeThreshold
    );

    // คำนวณผลรวมจากข้อมูลที่เพิ่มเข้ามาล่าสุด
    const totalFamily = latestData.reduce((sum, item) => sum + item.family, 0);
    const totalPoor = latestData.reduce((sum, item) => sum + item.poor, 0);

    return {
      data: latestData,
      totalFamily: totalFamily,
      totalPoor: totalPoor,
      message: "Latest added dataset fetched successfully"
    };
  } catch (err) {
    return { message: "Error fetching latest added dataset", error: err.message };
  }
};

// Export ฟังก์ชัน
module.exports = { FetchData, getData, fetchAndStoreData ,getDatalatest};